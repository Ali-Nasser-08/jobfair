# Ali Alghamdi - Portfolio Site

A beautiful, mobile-first portfolio featuring advanced mesh gradients and a light, cutesy design.

## Features

- **Advanced Mesh Gradient Engine**: Custom-built gradient system that continuously shifts through pastel colors
- **Mobile-First Design**: Optimized for mobile viewing (job fair QR codes)
- **Project Showcase**: 4 featured projects with descriptions
- **QR Code Integration**: Ready for CV, LinkedIn, and GitHub links

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

This site is configured for static export and can be deployed to:
- **Vercel** (recommended - just connect the GitHub repo)
- **GitHub Pages**
- **Netlify**

## Customization

1. Update project details in `app/page.js`
2. Replace QR code placeholders with actual QR codes
3. Update contact information
4. Adjust colors in `app/MeshGradient.js` if desired

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Custom Canvas-based Mesh Gradients
