import { render } from 'jsonresume-theme-professional';
import resume from '../resume.json';
import fs from 'fs';

try {
    // Filter out empty sections before rendering
    const filteredResume = JSON.parse(JSON.stringify(resume));
    const sectionsToCheck = ['work', 'projects', 'volunteer', 'education', 'awards', 'publications', 'skills', 'languages', 'interests', 'references'];

    sectionsToCheck.forEach(section => {
        if (Array.isArray(filteredResume[section]) && filteredResume[section].length === 0) {
            delete filteredResume[section];
        } else if (filteredResume[section] === undefined || filteredResume[section] === null) {
            delete filteredResume[section];
        }
    });

    let html = render(filteredResume);
    const customStyle = `
    <style>
        /* Load EB Garamond from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        
        * {
            font-family: 'EB Garamond', serif !important;
        }
        
        /* Ensure specific elements override any user-agent styles */
        body, h1, h2, h3, h4, h5, h6, h1 div, p, div, span, li, a {
             font-family: 'EB Garamond', serif !important;
        }

        /* Better spacing between sections */
        .sc-bRKDuR.mINbg {
            margin-bottom: 30px !important; /* Constant spacing for each section */
        }

        /* Specific padding for sections with dividers */
        h2 {
            margin-top: 10px !important;
            margin-bottom: 8px !important;
        }

        /* Ensure enough space between EXPERIENCE and PROJECTS or other similar blocks */
        section {
            padding-bottom: 20px !important;
        }

        li {
            margin-bottom: 4px !important;
        }
    </style>`;

    // Inject styles before closing head tag
    html = html.replace('</head>', `${customStyle}</head>`);

    fs.writeFileSync('ahmad_ali_resume.html', html);
    console.log('Successfully generated ahmad_ali_resume.html');
} catch (error) {
    console.error('Error generating resume:', error);
    process.exit(1);
}
