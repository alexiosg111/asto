# VSS Website Redesign

## Overview
This is the redesigned website for Vertical Service Solutions (VSS) featuring authentic brand colors and images.

## Project Structure

```
vss/
├── index.html              # Main redesigned website
├── tailwind.config.js      # Tailwind CSS configuration with VSS colors
├── VSS_BRAND_GUIDE.md      # Brand documentation
├── package.json            # Project configuration
└── README.md               # This file
```

## Features

### Authentic VSS Branding
- Professional corporate color scheme
- VSS brand colors: Primary Blue, Secondary Blue, Cyan Accent
- Modern, industrial design language

### Split-Screen Design
- Interactive split-screen layout
- Separate sections for Elevators and Mobile Connectivity
- Shader animations for visual depth

### Responsive Design
- Mobile-friendly layout
- Adaptive grid systems
- Optimized for all screen sizes

### Interactive Elements
- Hover animations
- Call-to-action buttons
- Service cards with hover effects

## Brand Colors

The website uses the following VSS brand colors:

- **VSS Primary**: `#1e3a8a` (Deep blue for professionalism)
- **VSS Secondary**: `#3b82f6` (Vibrant blue for energy)
- **VSS Accent**: `#06b6d4` (Cyan for highlights)
- **VSS Dark**: `#0f172a` (Dark background)
- **VSS Light**: `#f8fafc` (Light content background)
- **VSS Gray**: `#64748b` (Secondary text)

## Usage

### Viewing the Website
Simply open the `index.html` file in any modern web browser:

```bash
# Open in browser
open vss/index.html

# Or use any web server
python3 -m http.server 8000
# Then visit: http://localhost:8000/vss/
```

### Development

To work with Tailwind CSS:

```bash
# Install dependencies
npm install

# Start development
npm run dev
```

## Image Sources

The website uses high-quality images from Unsplash:

- **Elevator Image**: Modern elevator interior
- **Mobile Connectivity Image**: Telecommunications equipment

All images are optimized for web performance and include appropriate fallbacks.

## Browser Support

The website is designed to work on modern browsers:

- Chrome (latest versions)
- Firefox (latest versions)
- Safari (latest versions)
- Edge (latest versions)

## Technical Details

### Technologies Used
- HTML5 semantic markup
- Tailwind CSS for styling
- CSS animations for interactive effects
- Responsive design principles

### Performance Optimizations
- Optimized images
- Minimal JavaScript
- Efficient CSS animations
- Lazy loading for images

## Documentation

For detailed brand guidelines and design decisions, see:
- `VSS_BRAND_GUIDE.md` - Complete brand documentation
- `tailwind.config.js` - Color definitions and Tailwind setup

## License

This project is licensed under the MIT License.