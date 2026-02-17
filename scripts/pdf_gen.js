const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    // Read the generated HTML
    const htmlPath = path.resolve('ahmad_ali_resume.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');

    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    // Create PDF
    await page.pdf({
        path: 'ahmad_ali_resume.pdf',
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0.4in',
            bottom: '0.4in',
            left: '0.4in',
            right: '0.4in'
        }
    });

    await browser.close();
    console.log('PDF generated with Puppeteer successfully.');
}

generatePDF().catch(err => {
    console.error('Error generating PDF:', err);
    process.exit(1);
});
