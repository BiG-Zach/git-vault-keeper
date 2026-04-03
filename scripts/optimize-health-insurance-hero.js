#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_IMAGE = '/tmp/health-insurance-hero-source.jpg';
const OUTPUT_DIR = path.join(__dirname, '../public/assets/backgrounds');
const BASE_NAME = 'health-insurance-hero';

// Sizes to generate (widths in pixels)
const SIZES = [
  { width: 400, suffix: '-400w' },
  { width: 800, suffix: '-800w' },
  { width: 1200, suffix: '-1200w' },
  { width: 1600, suffix: '-1600w' },
  { width: 2000, suffix: '-2000w' },
  { width: 1600, suffix: '' } // Main image
];

// WebP quality setting (85-90 for good balance)
const WEBP_QUALITY = 87;

async function optimizeImage() {
  console.log('Starting health insurance hero image optimization...\n');
  
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}\n`);
  }

  // Get source image metadata
  const metadata = await sharp(SOURCE_IMAGE).metadata();
  console.log(`Source image: ${metadata.width}x${metadata.height}px (${metadata.format})\n`);

  const results = [];

  for (const size of SIZES) {
    const outputFilename = `${BASE_NAME}${size.suffix}.webp`;
    const outputPath = path.join(OUTPUT_DIR, outputFilename);

    try {
      // Calculate height maintaining aspect ratio
      const aspectRatio = metadata.height / metadata.width;
      const targetHeight = Math.round(size.width * aspectRatio);

      // Process image
      const info = await sharp(SOURCE_IMAGE)
        .resize(size.width, targetHeight, {
          fit: 'cover',
          position: 'center',
          // Use lanczos3 for better quality when upscaling
          kernel: sharp.kernel.lanczos3
        })
        .webp({
          quality: WEBP_QUALITY,
          effort: 6 // Higher effort for better compression
        })
        .toFile(outputPath);

      const fileSizeKB = (info.size / 1024).toFixed(2);
      console.log(`✓ Created: ${outputFilename}`);
      console.log(`  Dimensions: ${info.width}x${info.height}px`);
      console.log(`  File size: ${fileSizeKB} KB\n`);

      results.push({
        filename: outputFilename,
        width: info.width,
        height: info.height,
        size: fileSizeKB
      });
    } catch (error) {
      console.error(`✗ Error creating ${outputFilename}:`, error.message);
    }
  }

  console.log('\n=== Optimization Complete ===');
  console.log(`Total images created: ${results.length}`);
  console.log(`Output directory: ${OUTPUT_DIR}\n`);

  // Summary table
  console.log('Summary:');
  results.forEach(result => {
    console.log(`  ${result.filename.padEnd(40)} ${result.width}x${result.height}px  ${result.size} KB`);
  });
}

// Run the optimization
optimizeImage().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});