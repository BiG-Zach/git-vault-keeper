#!/usr/bin/env node

/**
 * H1 Debug Script - Find ALL H1 tags and their sources
 */

import puppeteer from 'puppeteer';

const LOCAL_URL = 'http://localhost:8081';

class H1Debugger {
  constructor() {
    this.browser = null;
  }

  async init() {
    console.log('🔍 Debugging All H1 Tags on Homepage...\n');
    this.browser = await puppeteer.launch({ 
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  async debugAllH1Tags() {
    const page = await this.browser.newPage();
    try {
      // Set desktop viewport
      await page.setViewport({ width: 1920, height: 1080 });
      
      await page.goto(`${LOCAL_URL}/`, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Wait for React to render
      await page.waitForTimeout(3000);

      const h1Details = await page.evaluate(() => {
        const h1s = Array.from(document.querySelectorAll('h1'));
        
        return h1s.map((h1, index) => {
          // Get parent elements to trace where this H1 comes from
          let parent = h1.parentElement;
          const parentChain = [];
          let depth = 0;
          
          while (parent && depth < 10) {
            const parentInfo = {
              tagName: parent.tagName,
              className: parent.className,
              id: parent.id
            };
            parentChain.push(parentInfo);
            parent = parent.parentElement;
            depth++;
          }
          
          return {
            index: index + 1,
            text: h1.textContent.trim(),
            className: h1.className,
            id: h1.id,
            outerHTML: h1.outerHTML,
            parentChain: parentChain.slice(0, 5), // First 5 parents
            position: {
              offsetTop: h1.offsetTop,
              offsetLeft: h1.offsetLeft,
              clientHeight: h1.clientHeight,
              clientWidth: h1.clientWidth
            },
            computedStyle: {
              display: window.getComputedStyle(h1).display,
              visibility: window.getComputedStyle(h1).visibility,
              opacity: window.getComputedStyle(h1).opacity
            }
          };
        });
      });

      return h1Details;
      
    } catch (error) {
      return { error: error.message };
    } finally {
      await page.close();
    }
  }

  async run() {
    try {
      await this.init();

      console.log('📱 Analyzing ALL H1 tags on Desktop (1920x1080)');
      const h1Details = await this.debugAllH1Tags();
      
      console.log(`\n🔍 Found ${h1Details.length} H1 tags:\n`);
      
      h1Details.forEach((h1, index) => {
        console.log(`--- H1 #${h1.index} ---`);
        console.log(`Text: "${h1.text}"`);
        console.log(`Class: "${h1.className}"`);
        console.log(`ID: "${h1.id || 'none'}"`);
        console.log(`Display: ${h1.computedStyle.display}`);
        console.log(`Visibility: ${h1.computedStyle.visibility}`);
        console.log(`Opacity: ${h1.computedStyle.opacity}`);
        console.log(`Position: top=${h1.position.offsetTop}, left=${h1.position.offsetLeft}`);
        console.log(`Size: ${h1.position.clientWidth}x${h1.position.clientHeight}`);
        
        console.log('Parent Chain:');
        h1.parentChain.forEach((parent, pIndex) => {
          const classInfo = parent.className ? ` class="${parent.className}"` : '';
          const idInfo = parent.id ? ` id="${parent.id}"` : '';
          console.log(`  ${pIndex + 1}. <${parent.tagName.toLowerCase()}${classInfo}${idInfo}>`);
        });
        
        console.log(`HTML: ${h1.outerHTML.substring(0, 200)}${h1.outerHTML.length > 200 ? '...' : ''}`);
        console.log('');
      });

      return h1Details.length === 1;

    } catch (error) {
      console.error('💥 Debug failed:', error.message);
      return false;
    } finally {
      await this.cleanup();
    }
  }
}

// Run the debug
const h1Debugger = new H1Debugger();
h1Debugger.run().then(success => {
  if (success) {
    console.log('\n✅ Perfect! Only 1 H1 tag found.');
    process.exit(0);
  } else {
    console.log('\n❌ Multiple H1 tags still exist.');
    process.exit(1);
  }
}).catch(error => {
  console.error('💥 Script failed:', error);
  process.exit(1);
});