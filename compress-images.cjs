// Script to compress project images
const fs = require('fs');
const path = require('path');

const projectsDir = './public/images/projects';

// Get all jpg files
const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.jpg'));

console.log(`Found ${files.length} images to compress`);

// We'll use sharp to compress
const sharp = require('sharp');

async function compressImages() {
    for (const file of files) {
        const filePath = path.join(projectsDir, file);
        const outputPath = path.join(projectsDir, file);
        const tempPath = path.join(projectsDir, `temp_${file}`);

        try {
            const stats = fs.statSync(filePath);
            const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

            // Only compress if larger than 1MB
            if (stats.size > 1024 * 1024) {
                // Determine target width based on file type
                const isCover = file.includes('cover');
                const targetWidth = isCover ? 2400 : 2000; // Cover: 2400px, Gallery: 2000px

                await sharp(filePath)
                    .resize(targetWidth, null, { withoutEnlargement: true })
                    .jpeg({ quality: 95 })
                    .toFile(tempPath);

                // Replace original with compressed
                fs.unlinkSync(filePath);
                fs.renameSync(tempPath, outputPath);

                const newStats = fs.statSync(outputPath);
                const newSizeMB = (newStats.size / 1024 / 1024).toFixed(2);
                console.log(`✓ ${file}: ${sizeMB}MB → ${newSizeMB}MB`);
            } else {
                console.log(`✓ ${file}: ${sizeMB}MB (already small)`);
            }
        } catch (err) {
            console.error(`✗ ${file}: ${err.message}`);
        }
    }
}

compressImages().then(() => console.log('Done!'));
