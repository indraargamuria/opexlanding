#!/usr/bin/env node

/**
 * Fetch images from Pexels API and save them to public/images/
 * Usage: node scripts/fetch-pexels-images.js
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;
if (!PEXELS_API_KEY) {
  console.error('Error: PEXELS_API_KEY environment variable is not set');
  process.exit(1);
}

const IMAGES_DIR = path.join(__dirname, '../public/images');

// Ensure images directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

/**
 * Search Pexels for photos
 */
function searchPexels(query, perPage = 5) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.pexels.com',
      path: `/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}`,
      method: 'GET',
      headers: {
        'Authorization': PEXELS_API_KEY,
      },
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', reject);
  });
}

/**
 * Download an image from URL
 */
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(IMAGES_DIR, filename);

    const file = fs.createWriteStream(filepath);
    file.on('finish', () => {
      file.close();
      resolve(filepath);
    });
    file.on('error', reject);

    https.get(url, (response) => {
      response.pipe(file);
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete partial file
      reject(err);
    });
  });
}

/**
 * Main function to fetch and save images
 */
async function fetchImages() {
  console.log('Fetching images from Pexels...\n');

  const queries = [
    { name: 'hero', query: 'factory manager engineer discussion', perPage: 1 },
    { name: 'framework-assessment', query: 'factory floor walkthrough audit', perPage: 1 },
    { name: 'framework-improvement', query: 'workshop whiteboard team meeting', perPage: 1 },
    { name: 'framework-solutioning', query: 'engineers system design meeting', perPage: 1 },
    { name: 'framework-implementation', query: 'factory training floor', perPage: 1 },
    { name: 'tech-stack', query: 'technology integration abstract', perPage: 1 },
    { name: 'experience-automotive', query: 'automotive assembly line factory', perPage: 1 },
    { name: 'experience-fmcg', query: 'consumer goods factory production line', perPage: 1 },
    { name: 'experience-heavy', query: 'heavy industry factory workers', perPage: 1 },
    { name: 'experience-food', query: 'food beverage factory production', perPage: 1 },
    { name: 'founder-1', query: 'asian businessman portrait industrial', perPage: 1 },
    { name: 'founder-2', query: 'engineer manager portrait factory', perPage: 1 },
    { name: 'founder-3', query: 'consultant professional portrait industry', perPage: 1 },
    { name: 'dashboard-1', query: 'data dashboard analytics screen', perPage: 1 },
    { name: 'dashboard-2', query: 'manufacturing analytics dashboard', perPage: 1 },
    { name: 'dashboard-3', query: 'manufacturing analytics dashboard', perPage: 1 },
  ];

  const results = [];

  for (const { name, query, perPage } of queries) {
    try {
      console.log(`Searching for: "${query}"`);
      const data = await searchPexels(query, perPage);

      if (data.photos && data.photos.length > 0) {
        const photo = data.photos[0]; // Get first (best) result
        const url = photo.src.large; // Use large size for better quality
        const filename = `${name}.jpg`;

        console.log(`  Downloading: ${filename}`);
        await downloadImage(url, filename);

        results.push({
          name,
          filename,
          originalUrl: url,
          photographer: photo.photographer,
          photographerUrl: photo.photographer_url,
          success: true
        });

        console.log(`  ✓ Saved as: ${filename}\n`);
      } else {
        results.push({ name, success: false, error: 'No photos found' });
        console.log(`  ✗ No photos found\n`);
      }
    } catch (error) {
      results.push({ name, success: false, error: error.message });
      console.log(`  ✗ Error: ${error.message}\n`);
    }
  }

  console.log('\n=== Summary ===');
  console.log(`Successfully downloaded: ${results.filter(r => r.success).length}/${results.length}`);
  console.log('\nImages saved to:', IMAGES_DIR);

  // Save results to JSON for reference
  const resultsPath = path.join(__dirname, '../public/images/download-results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  console.log('Results saved to:', resultsPath);
}

fetchImages().catch(console.error);
