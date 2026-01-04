# Vertical Service Solutions - Modern Landing

A modernized Industrial High-Tech landing page for Vertical Service Solutions, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Industrial High-Tech Design**: Dark charcoal theme with safety orange accents
- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Design**: Mobile-first approach, tested on 375px and 1440px
- **Performance Optimized**: GPU-accelerated animations using transform/opacity
- **Accessibility**: Semantic HTML and ARIA labels where needed

## 🎨 Design System

### Colors
- **Primary Background**: Dark Charcoal (#09090b)
- **Accent Color**: Safety Orange (#f97316)
- **Secondary**: Zinc-400 (#a1a1aa), Zinc-800 (#27272a)

### Typography
- **Headers**: Roboto Condensed (uppercase, wide tracking)
- **Body**: Inter
- **Technical Specs**: Roboto Mono

### Components
- Glass effect navigation with backdrop blur
- Technical panel service cards with corner accents
- Vertical scanning line animation
- Mechanical button effects with hover animations

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Roboto Condensed, Roboto Mono)

## 📁 Project Structure

```
/vss
├── app/
│   ├── layout.tsx          # Root layout with meta tags
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and custom CSS
├── components/
│   ├── Header.tsx          # Navigation with glass effect
│   ├── Hero.tsx            # Hero section with animations
│   ├── Services.tsx        # Service cards grid
│   └── Contact.tsx         # Contact section
├── public/                 # Static assets
├── package.json
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── postcss.config.js       # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to project directory:**
   ```bash
   cd /vss
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📱 Responsive Breakpoints

- **Mobile**: 375px and up
- **Tablet**: 768px and up  
- **Desktop**: 1024px and up
- **Large Desktop**: 1440px and up

## 🎯 Key Components

### Header
- Sticky glass effect navigation
- Responsive mobile menu
- Smooth scroll to sections
- Scroll-to-top functionality

### Hero Section
- Massive "REACHING NEW HEIGHTS" headline
- Animated infrastructure silhouette background
- Vertical scanning line effect
- Service indicator cards
- Parallax scrolling effects

### Services
- 4 core service modules with technical specs
- Hover effects with border glow and scale
- Corner accent mounting brackets
- Status indicators
- Modular card design

### Contact
- Two division cards (Aufzüge & Mobilfunk)
- Contact information grid
- Animated hover effects

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  'dark-charcoal': '#09090b',
  'safety-orange': '#f97316',
  'zinc-400': '#a1a1aa',
  'zinc-800': '#27272a',
  'zinc-950': '#09090b',
}
```

### Animations
Custom animations are defined in `tailwind.config.ts` and `globals.css`. The design uses smooth, mechanical feel animations with GPU acceleration.

## 🚀 Deployment

This project is ready for deployment on Vercel:

1. Push to GitHub repository
2. Connect to Vercel
3. Deploy automatically

The project includes all necessary configuration files for immediate deployment.

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Animations**: 60fps GPU-accelerated transforms
- **Bundle Size**: Optimized with Next.js automatic optimization
- **SEO**: Proper meta tags and semantic HTML structure

## 🔒 Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color ratios
- Screen reader friendly

## 📝 License

ISC

---

Built with ⚡ by Vertical Service Solutions Team