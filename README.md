# Kanak Cattle Feed Private Limited 🌾🐄

[![GitHub Pages Deployment](https://github.com/sheevu/kanak-cattlefeed/actions/workflows/deploy.yml/badge.svg)](https://github.com/sheevu/kanak-cattlefeed/actions/workflows/deploy.yml)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Website](https://img.shields.io/badge/Website-Live-green.svg)](https://sheevu.github.io/kanak-cattlefeed/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> Official website for **Kanak Cattle Feed Private Limited**, a premier dairy cattle feed manufacturer based in Lucknow, Uttar Pradesh. Supplying quality nutrition for cows and buffaloes across Uttar Pradesh, Bihar, Uttarakhand, Madhya Pradesh, and Jharkhand.

---

## 🌟 Key Features

- 📱 **Mobile-First Responsive Layout**: Smooth layout adaptation across smartphones, tablets, laptops, and ultra-wide desktops.
- ⚡ **High Performance & Optimization**: Preloaded next-gen WebP imagery with high fetch priority and zero heavy runtime dependencies.
- 🔄 **Seamless Infinite Marquee**: Buttery-smooth dual-group CSS ticker with hover-pause functionality and zero visual jumping.
- 📝 **Interactive Quick Enquiry Form**: Direct lead capture with intelligent validation, WhatsApp deep-link generation, and instant feedback.
- 🎯 **Smart Product CTA Pre-selection**: Clicking any product card ("Ask about availability", "Request quote") automatically pre-selects the product in the enquiry form and smoothly scrolls to it.
- ♿ **Accessibility First (WCAG AA)**: Semantic HTML5 elements, Skip to Content link, keyboard-friendly navigation (Escape to close, outside-click listener), and focus-visible indicators.
- 🔍 **Comprehensive SEO & Rich Snippets**:
  - Schema.org `Organization` JSON-LD structured data.
  - Open Graph (OG) tags for rich previews on WhatsApp, Facebook, and LinkedIn.
  - Twitter / X summary card metadata.
  - Validated `sitemap.xml` and `robots.txt`.
- 📲 **Progressive Web App Ready**: Integrated `site.webmanifest` and inline vector SVG favicon.
- 🚀 **Automated CI/CD**: Automated deployment to **GitHub Pages** on every push to the `main` branch via GitHub Actions.

---

## 📂 Project Structure

```text
kanak-cattlefeed/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions automated deployment to GitHub Pages
├── assets/
│   └── kanak-hero.webp       # Optimized hero photograph (farmer with cow & buffalo)
├── index.html                # Semantic HTML5 single-page application
├── styles.css                # Polished responsive stylesheet with custom design tokens
├── script.js                 # Interactive logic: menu, smooth scroll, form validation, WhatsApp link
├── robots.txt                # Search engine crawler instructions
├── sitemap.xml               # Search engine indexation sitemap
├── site.webmanifest          # PWA / web application manifest
├── package.json              # NPM configuration, dependencies & dev server scripts
├── .gitignore                # Git exclusions (OS files, node_modules, temp files)
├── .gitattributes            # Line ending normalization (LF)
└── README.md                 # Project documentation
```

---

## 🚀 Quick Start & Local Development

You can run and preview the website locally using any of the following methods:

### Option 1: Using Node.js / NPM (Recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/sheevu/kanak-cattlefeed.git
   cd kanak-cattlefeed
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Using Python

If you have Python installed:
```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 3: VS Code Live Server

Open the folder in Visual Studio Code, right-click `index.html`, and select **"Open with Live Server"**.

---

## 🌐 GitHub Pages Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys the latest version to GitHub Pages whenever changes are merged into `main`.

To verify or enable GitHub Pages in your repository:
1. Navigate to your repository on GitHub: `https://github.com/sheevu/kanak-cattlefeed/settings/pages`
2. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Pushes to `main` will automatically build and publish the live site.

---

## 🏢 Company Profile

| Attribute | Details |
| :--- | :--- |
| **Company Name** | Kanak Cattle Feed Private Limited |
| **Corporate Identification Number (CIN)** | `U01111UP2009PTC037247` |
| **Date of Incorporation** | 28 April 2009 |
| **Industry** | Agriculture & Allied Activities (Dairy Cattle Feed) |
| **Registered Office** | G-2, Upper Ground Floor, 4/22, Smith Estate, Vishal Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010, India |
| **Operational Reach** | Uttar Pradesh, Bihar, Uttarakhand, Madhya Pradesh, Jharkhand |
| **Quality Management** | ISO 9001:2015 standard practices |

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).

Developed and maintained by **[Sheevum Goel](https://github.com/sheevu)**.
