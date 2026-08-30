- [Extensions download Website](https://pluginstream.pages.dev/)
<p align="center">
  <img src="https://pluginstream.pages.dev/assets/pluginstream.png" alt="PluginStream Logo" width="140">
</p>

<h1 align="center">PluginStream Website</h1>

<p align="center">The official website for <strong>PluginStream</strong> - a free, ad-free music streaming app for Android.</p>

---

## Overview

This repository contains the source code for the PluginStream official website. PluginStream is a free, open-source music streaming application for Android that provides an ad-free experience by streaming music directly from YouTube Music.

The website serves as the official landing page for the PluginStream application, providing:
- Feature documentation and app information
- Download links and installation guides
- FAQ and support resources
- Privacy policy and terms of service

---

## Project Structure

```
Pluginstream.github.io/
├── .github/                 # GitHub workflows & CI/CD automation
├── assets/                  # Static assets (CSS, JS, images, icons)
├── 404.html                 # Custom 404 Error page
├── ads.html                 # Advertisements policy or placement page
├── blog.html                # Blog updates & articles
├── contact.html             # Contact Us page
├── github.html              # GitHub project info / integration page
├── graph.png                # Open Graph / preview image
├── how-to-install.html      # Installation guide for users
├── index.html               # Main landing page (Home)
├── phone.html               # Mobile views / application page
├── plugins.html             # Plugins showcase page
├── plugins.json             # Core data file for available plugins
├── portfolio.html           # Project portfolio showcase
├── privacy.html             # Privacy Policy page
├── psredirect.html          # Deep-link redirection page for PluginStream App (Opens shared movies directly inside the app)
├── README.md                # Project documentation
├── robots.txt               # SEO Search Engine Crawler directives
├── rss.xml                  # RSS Feed for updates & blogs
├── sitemap.xml              # SEO Sitemap for search indexing
├── support.html             # Help & Support / FAQ page
├── sw.js                    # Service Worker (PWA implementation & website monetization configuration)
├── telegram.html            # Telegram channel / community landing page
├── terms.html               # Terms of Service page
├── todo.md                  # Development roadmap and pending tasks
└── tv.html                  # TV interface / large screen layout page
```

---

## Getting Started

### Prerequisites
- A modern web browser
- Local web server (optional, for development)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/am-abdulmueed/pluginstream.github.io.git
   cd pluginstream.github.io
   ```

2. Run locally:
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Using Node.js:
   ```bash
   npx serve .
   ```
   
   Using PHP:
   ```bash
   php -S localhost:8000
   ```

3. Open in browser:
   Navigate to `http://localhost:8000`

---

## Technology Stack

| Category | Technology |
|----------|------------|
| Markup | HTML5 (Semantic markup with accessibility features) |
| Styling | CSS3 (Flexbox, Grid, CSS Variables) |
| Scripting | Vanilla JavaScript (ES6+) |
| Typography | Google Fonts (Inter, Unbounded) |
| SEO | Schema.org structured data |

---

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome/Chromium | 80+ |
| Firefox | 75+ |
| Safari | 13+ |
| Edge | 80+ |
| Mobile browsers | Latest versions |

---

## Development

### Code Standards
- Use semantic HTML5 elements for structure
- Follow BEM methodology for CSS class naming
- Write clean, commented JavaScript code
- Maintain WCAG 2.1 AA accessibility standards
- Optimize images and assets for web delivery

### Contribution Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/description`
3. Make your changes and test thoroughly
4. Commit with clear messages: `git commit -m 'Add feature description'`
5. Push to your fork: `git push origin feature/description`
6. Open a Pull Request with detailed description

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## Customization

### Branding Changes
- Update app name and meta descriptions in `index.html`
- Replace images in `assets/` directory
- Modify color scheme in `<style>` tag within `index.html` CSS variables

### Content Updates
- Edit feature descriptions in the Features section
- Update FAQ items in the FAQ section
- Modify contact information and external links

---

## Privacy

This website is designed with privacy as a core principle:

- No third-party tracking scripts
- No analytics cookies
- No personal data collection
- No external advertising networks
- Fully open source and auditable

---

## License

This project is licensed under the [MIT License](LICENSE).

Copyright (c) 2026 PluginStream

---

## Support

- **Issues**: [GitHub Issues](https://github.com/am-abdulmueed/pluginstream/issues)
- **Discussions**: [GitHub Discussions](https://github.com/am-abdulmueed/pluginstream/discussions)
- **Telegram**: [PluginStream Telegram](https://t.me/pluginstreamofficial)

---

## Resources

- [PluginStream App Repository](https://github.com/am-abdulmueed/pluginstream)
- [Official Website](https://pluginstream.pages.dev)
- [Privacy Policy](https://pluginstream.pages.dev/privacy.html)
- [Terms of Service](https://pluginstream.pages.dev/terms.html)

---
<p align="center">
<strong>Built for the PluginStream community</strong> 
</p>
