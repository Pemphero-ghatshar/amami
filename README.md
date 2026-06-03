# AMAMI Website - Association of Malawian Midwives

A modern, responsive website for the Association of Malawian Midwives built with React, Vite, and Tailwind CSS. The site promotes midwifery services, shares advocacy initiatives, and connects with the community.

## ✨ Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: React 18, Vite, and ES modules
- **Fast Development**: Hot Module Replacement (HMR) for instant feedback
- **Code Quality**: ESLint and Prettier for consistency
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized builds and lazy loading ready
- **CI/CD**: GitHub Actions workflow included

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Pemphero-ghatshar/amami.git
cd amami

# Install dependencies
npm install
```

### Development

```bash
# Start development server (opens at http://localhost:5173)
npm run dev
```

The app will automatically reload when you make changes.

### Building for Production

```bash
# Build the optimized production bundle
npm run build

# Preview the production build locally
npm run preview
```

## 📁 Project Structure

```
amami/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with mobile menu
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Programs.jsx        # Programs showcase
│   │   ├── Advocacy.jsx        # Advocacy initiatives
│   │   ├── Team.jsx            # Team members
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Footer.jsx          # Footer with links
│   │   └── AMAMIWebsite.jsx    # Main layout component
│   ├── App.jsx                 # Root app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles with Tailwind
├── public/
│   ├── favicon.svg
│   ├── amami-logo.svg
│   └── team/                   # Team member images
├── .github/workflows/
│   └── deploy.yml              # CI/CD pipeline
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── .eslintrc.json              # ESLint configuration
├── .prettierrc.json            # Prettier configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code with ESLint
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code with Prettier
npm run format
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the brand colors:

```javascript
colors: {
  primary: '#1f5c24',    // Main green
  accent: '#c58a18',     // Gold accent
  amamiBg: '#f5f2e9',    // Background
  amamiDark: '#0f3b18'   // Dark variant
}
```

### Typography

Modify font families and sizes in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Inter', 'ui-sans-serif', 'system-ui'],
}
```

### Assets

Replace these placeholder files in the `public/` directory:

- `favicon.svg` - Browser tab icon
- `amami-logo.svg` - Main logo
- `team/*.jpg` - Team member photos (high resolution recommended)

## 📝 Content Updates

### Programs Section

Edit `src/components/Programs.jsx`:

```javascript
const programs = [
  {
    id: 1,
    title: 'Your Program',
    description: 'Description here',
    icon: '📦', // Use emoji or SVG
  },
  // ...
]
```

### Team Section

Edit `src/components/Team.jsx`:

```javascript
const teamMembers = [
  {
    id: 1,
    name: 'Person Name',
    role: 'Position Title',
    image: '/team/image.jpg',
  },
  // ...
]
```

### Contact Information

Edit `src/components/Contact.jsx` and `src/components/Footer.jsx` with:
- Phone numbers
- Email addresses
- Office location
- Social media links

## 🔐 Environment Variables

Create a `.env.local` file for sensitive data:

```env
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=info@amami.org.mw
```

Access in components:

```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 🚀 Deployment

### Option 1: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

Or connect your GitHub repo to Netlify for automatic deployments on push.

### Option 2: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Option 3: GitHub Pages

```bash
# Build the site
npm run build

# Push dist/ to gh-pages branch
npm install -g gh-pages
gh-pages -d dist
```

Then enable GitHub Pages in repository settings.

## ✅ Code Quality

### ESLint

```bash
# Check for issues
npm run lint

# Fix issues automatically
npm run lint:fix
```

### Prettier

```bash
# Format all files
npm run format
```

### CI/CD

GitHub Actions automatically:
- Installs dependencies
- Runs linter
- Builds the project
- Uploads artifacts
- Deploys on merge to main

## 🔗 Useful Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [ESLint Rules](https://eslint.org/docs/rules)

## 📧 Support

For issues or questions, please:
1. Check existing GitHub issues
2. Create a new issue with details
3. Contact: info@amami.org.mw

## 📄 License

This project is part of the Association of Malawian Midwives. All rights reserved.

## 🙏 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Last Updated:** June 2026
**Maintained by:** AMAMI Development Team
