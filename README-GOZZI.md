# Tien Duy NGUYEN - CV

Modern, responsive CV website built with [Gozzi](https://github.com/tduyng/gozzi) static site generator.

## 🌐 Live Site

- **English**: https://cv.adev42.com/en/
- **Français**: https://cv.adev42.com/fr/

## ✨ Features

- 🌍 **Multi-language support** (English/French)
- 📱 **Fully responsive** - Perfect on all devices
- 🎨 **Modern design** - Clean, professional turquoise theme
- 📄 **Print-friendly** - Browser print → beautiful PDF
- ⚡ **Lightning fast** - Built with Gozzi static site generator
- 🚀 **No build tools** - No Ruby, no SCSS, just pure CSS
- ♿ **Accessible** - Semantic HTML, proper ARIA labels

## 📁 Project Structure

```
cv/
├── config.toml                 # Site configuration
├── content/
│   ├── _index.md              # Language selector
│   ├── en/_index.md           # English CV data
│   └── fr/_index.md           # French CV data
├── templates/
│   ├── index.html             # Language selector template
│   ├── cv.html                # Main CV template
│   └── partials/              # Template components
│       ├── _sidebar.html
│       ├── _career.html
│       ├── _experiences.html
│       ├── _projects.html
│       ├── _skills.html
│       └── _footer.html
├── static/
│   ├── css/cv.css             # Pure CSS stylesheet
│   ├── images/profile.png
│   └── favicon.ico
└── public/                     # Generated site (gitignored)
```

## 🚀 Local Development

### Prerequisites

- [Go](https://golang.org/) 1.23 or higher
- [Gozzi](https://github.com/tduyng/gozzi) static site generator

### Install Gozzi

```bash
go install github.com/tduyng/gozzi@latest
```

### Build and Serve

```bash
# Build the site
gozzi build

# Serve locally with live reload
gozzi serve

# Visit http://localhost:3000
```

## 📝 Updating Your CV

### Update Profile Information

Edit `content/en/_index.md` (English) or `content/fr/_index.md` (French):

```toml
[extra.profile]
name = "Your Name"
email = "your.email@example.com"
phone = "+33 X XX XX XX XX"
website = "yourwebsite.com"
# ... other contact info
```

### Add/Update Experience

```toml
[[extra.experiences]]
role = "Your Job Title"
time = "Start - End Date"
company = "Company Name"
details = """
- Your responsibility 1
- Your responsibility 2
"""
```

### Add/Update Skills

```toml
[[extra.skills.items]]
name = "Skill Category"
details = "Technology 1, Technology 2, Technology 3"
```

### Update Languages

```toml
[[extra.languages]]
name = "Language Name"
level = "Proficiency Level"
```

## 🎨 Customizing the Design

### Colors

Edit CSS variables in `static/css/cv.css`:

```css
:root {
  --primary-color: #4CAC9D;      /* Main theme color */
  --primary-dark: #3a8d81;        /* Darker shade */
  --primary-light: #5fcfb9;       /* Lighter shade */
  /* ... other variables */
}
```

### Layout

Adjust spacing, typography, or layout in `static/css/cv.css`:

```css
:root {
  --sidebar-width: 280px;         /* Sidebar width */
  --max-width: 1000px;            /* Maximum content width */
  --spacing-md: 1.5rem;           /* Medium spacing */
  /* ... other variables */
}
```

## 📤 Deployment

### GitHub Pages

The site auto-deploys to GitHub Pages via GitHub Actions on every push to `main`/`master`.

**Setup:**

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to main branch - deployment happens automatically!

### Custom Domain

1. Add your domain in repository Settings → Pages → Custom domain
2. Update `base_url` in `config.toml`:

```toml
base_url = "https://cv.yourdomain.com"
```

### Other Platforms

The `public/` directory contains the complete static site. Upload it to:

- **Netlify**: Drag & drop the `public/` folder
- **Vercel**: Connect repository or upload folder
- **CloudFlare Pages**: Connect repository
- **AWS S3 + CloudFront**: Sync `public/` to S3 bucket

## 🖨️ Generating PDF

1. Open your CV in browser (English or French version)
2. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
3. Select "Save as PDF"
4. Adjust margins if needed
5. Save!

The CSS includes print-specific styles for a professional PDF output.

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to open an issue or submit a pull request!

## 📄 License

This project is open source and available under the [MIT License](LICENSE.txt).

## 👤 Author

**Tien Duy NGUYEN**

- Website: [adev42.com](https://adev42.com)
- GitHub: [@tienduy-nguyen](https://github.com/tienduy-nguyen)
- LinkedIn: [@tienduy-nguyen](https://linkedin.com/in/tienduy-nguyen)
- Twitter: [@tienduy_nguyen](https://twitter.com/tienduy_nguyen)

## 🙏 Acknowledgments

- Built with [Gozzi](https://github.com/tduyng/gozzi) - A fast Go static site generator
- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Design inspired by professional CV templates

---

**Made with ❤️ using Gozzi**
