import { render } from 'jsonresume-theme-professional';
import resume from '../resume.json';
import fs from 'fs';

try {
    let html = render(resume);
    const fontStyle = `
    <style>
        /* Load EB Garamond from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        
        * {
            font-family: 'EB Garamond', serif !important;
        }
        
        /* Ensure specific elements override any user-agent styles */
        body, h1, h2, h3, h4, h5, h6, p, div, span, li, a {
             font-family: 'EB Garamond', serif !important;
        }
    </style>`;

    // Inject styles before closing head tag
    html = html.replace('</head>', `${fontStyle}</head>`);

    fs.writeFileSync('ahmad_ali_resume.html', html);
    console.log('Successfully generated ahmad_ali_resume.html');
} catch (error) {
    console.error('Error generating resume:', error);
    process.exit(1);
}
