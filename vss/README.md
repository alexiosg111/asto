# Vertical Service Solutions (VSS)

A modern, high-performance website for Vertical Service Solutions, featuring an Industrial High-Tech design aesthetic.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Industrial Design**: Dark theme with safety orange accents and mechanical animations
- **Performance Optimized**: GPU-accelerated animations, smooth 60fps transitions
- **Responsive Design**: Mobile-first approach, tested on 375px and 1440px viewports
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation support
- **Animation Library**: Framer Motion for smooth, performant animations
- **Icon System**: Lucide React for consistent, modern icons

## 📦 Installation

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

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🎨 Design System

### Color Palette
- **Primary**: Zinc-950 (#09090b) - Dark Charcoal
- **Accent**: Orange-500 (#f97316) - Safety Orange
- **Secondary**: Zinc-400 (#a1a1aa) - Metallic Gray
- **Text**: White (#ffffff) & Zinc-100 (#fafafa)

### Typography
- **Headers**: Manrope / Roboto Condensed
- **Body**: Inter
- **Monospace**: JetBrains Mono / Fira Code

### Styling Guidelines
- Uppercase headers with wide tracking (`tracking-widest`)
- Monospace fonts for technical specs and numbers
- Grid pattern overlay in backgrounds (subtle, low opacity)
- Glass effect for sticky navigation (`bg-black/40`, `backdrop-blur`)
- HUD-style cards with corner accents for services

## 🏗️ Project Structure

```
vss/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation component with glass effect
│   ├── Hero.tsx             # Hero section with scanning animation
│   ├── Services.tsx         # Services cards with HUD styling
│   ├── About.tsx            # About section with values
│   ├── Contact.tsx          # Contact form and information
│   └── Footer.tsx           # Footer with links and social media
├── public/                  # Static assets (images, fonts, etc.)
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎯 Components

### Header
- Sticky glass effect navigation
- Responsive mobile menu
- Smooth scroll to sections
- CTA button for quotes

### Hero Section
- Massive headline with gradient text
- Vertical scanning line animation
- Parallax effects on background elements
- Corner accents for industrial feel
- Stats section
- Scroll indicator

### Services Section
- HUD-style card design
- Corner bracket accents
- Hover effects (border glow + scale)
- Technical specs tags
- CTA for custom solutions

### About Section
- Company story and mission
- Value propositions with icons
- Responsive two-column layout

### Contact Section
- Comprehensive contact form
- Contact information cards
- Business hours display
- Emergency service notice

### Footer
- Company branding
- Navigation links
- Social media links
- Back to top button
- Copyright and certification

## 🚀 Deployment

This project is ready for deployment to Vercel:

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel
```

Or connect your repository to Vercel for automatic deployments.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (375px tested)
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px (1440px tested)

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states for interactive elements
- Alt text for images
- Color contrast compliance (WCAG AA)

## 🎬 Animations

All animations use `transform` and `opacity` for GPU acceleration:

- Hero entrance animations
- Parallax scrolling effects
- Vertical scanning line
- Service card hover effects
- Smooth scroll behavior

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  zinc: { /* your colors */ },
  orange: { /* your accent colors */ },
}
```

### Fonts
Update font families in `tailwind.config.ts` and `app/layout.tsx`.

### Animations
Add or modify animations in `tailwind.config.ts` under the `keyframes` section.

## 📄 License

Proprietary - Vertical Service Solutions

## 👥 Support

For support, contact the Vertical Service Solutions team.
