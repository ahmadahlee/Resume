# Professional Resume Generator

Automated system to generate high-quality resumes in HTML, PDF, and DOCX formats from a single JSON file. Features pixel-perfect PDF parity using Puppeteer and a minimalist professional theme.

## 🚀 Quick Start

### 1. Setup
Clone the repository and install dependencies:
```bash
git clone https://github.com/ahmadahlee/Resume.git
cd Resume
npm install
```

### 2. Edit Your Details
Modify the `resume.json` file with your information. This file follows the [JSON Resume](https://jsonresume.org/) standard.

### 3. Generate Everything
Run the following command to generate your resume in all formats (HTML, PDF, DOCX) and organize them into a folder:
```bash
npm run gen "Your_Folder_Name"
```
*Example: `npm run gen "Ahmad_Ali_2026"`*

## 🛠 Project Structure

- `resume.json`: The core data file containing your resume details.
- `scripts/`:
    - `automate.py`: Master automation script.
    - `pdf_gen.js`: Puppeteer-based high-quality PDF generator.
    - `word_gen.py`: MS Word (DOCX) generator.
    - `build_html.js`: HTML theme build system.
- `src/`: Source code for the resume theme and React components.
- `package.json`: Project configuration and shortcuts.

## 📝 Modification & Customization

### Update Font or Styles
To change the appearance (e.g., fonts or colors), edit the `src/resume_entry.js` file. The styles are injected into the HTML during the build process.

### Manual Build (HTML Only)
If you only want to refresh the HTML file without generating PDFs or Word docs:
```bash
npm run build
```

## 📋 Requirements
- **Node.js** (for HTML and PDF generation)
- **Python 3** (for the master script and Word generation)
- **Puppeteer** (included in npm install)
