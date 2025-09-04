import { spawn } from 'child_process';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function runPostBuild() {
  console.log('🚀 Starting post-build process...');
  
  let previewProcess;
  
  try {
    // Start preview server
    console.log('📡 Starting preview server...');
    previewProcess = spawn('npm', ['run', 'preview'], {
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: true
    });

    // Wait for server to start
    await new Promise((resolve, reject) => {
      let serverReady = false;
      const timeout = setTimeout(() => {
        if (!serverReady) {
          reject(new Error('Server startup timeout'));
        }
      }, 30000);

      previewProcess.stdout.on('data', (data) => {
        const output = data.toString();
        if (output.includes('Local:') && !serverReady) {
          serverReady = true;
          clearTimeout(timeout);
          console.log('✅ Preview server is ready');
          setTimeout(() => resolve(), 3000); // Wait 3 seconds for full startup
        }
      });

      previewProcess.on('error', reject);
    });

    // Run prerendering
    console.log('🎨 Running prerendering...');
    await execAsync('node scripts/prerender-simple.mjs');
    
    // Generate sitemaps
    console.log('🗺️ Generating sitemaps...');
    await execAsync('node scripts/generate-sitemaps.mjs');
    
    console.log('✅ Post-build process completed successfully!');
    
  } catch (error) {
    console.error('❌ Post-build failed:', error.message);
    process.exit(1);
  } finally {
    if (previewProcess) {
      console.log('🛑 Stopping preview server...');
      previewProcess.kill();
    }
  }
}

runPostBuild();