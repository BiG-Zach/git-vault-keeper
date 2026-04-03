import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = '/tmp/life-insurance-hero-original.jpg';
const outputDir = path.join(__dirname, '../public/assets/backgrounds');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const variants = [
  { name: 'life-insurance-hero-400w.webp', width: 400 },
  { name: 'life-insurance-hero-800w.webp', width: 800 },
  { name: 'life-insurance-hero-1200w.webp', width: 1200 },
  { name: 'life-insurance-hero-1600w.webp', width: 1600 },
  { name: 'life-insurance-hero-2000w.webp', width: 2000 },
  { name: 'life-insurance-hero.webp', width: 1600 }, // main image
];

async function optimizeImages() {
  console.log('Starting image optimization...\n');
  
  for (const variant of variants) {
    const outputPath = path.join(outputDir, variant.name);
    
    try {
      await sharp(inputFile)
        .resize(variant.width, null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({
          quality: 85,
          effort: 6,
        })
        .toFile(outputPath);
      
      const stats = fs.statSync(outputPath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`✓ Created ${variant.name} (${variant.width}px wide, ${sizeKB} KB)`);
    } catch (error) {
      console.error(`✗ Failed to create ${variant.name}:`, error.message);
    }
  }
  
  console.log('\nImage optimization complete!');
}

optimizeImages().catch(console.error);