# PayBin - Modern Payment Gateway Website

A modern, responsive website for PayBin - a leading cryptocurrency payment gateway. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Dark theme and sleek animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Scroll Animations**: Advanced scroll-triggered animations using Intersection Observer
- **Interactive Components**: Tabbed sections, FAQ accordions, and hover effects
- **Marquee Effects**: Smooth horizontal scrolling testimonials and stats
- **Full Pages**: Home, Blog, and Company pages with consistent navigation

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (Google Fonts)
- **Animations**: Custom CSS animations with Intersection Observer
- **Icons**: Lucide React icons and custom SVGs

## Project Structure

```
paybin-redesign/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page with all sections
│   │   ├── blog/page.tsx     # Blog page with grid layout
│   │   ├── company/page.tsx  # Company/about page
│   │   ├── layout.tsx        # Root layout with metadata
│   │   └── globals.css       # Global styles and animations
├── public/
│   ├── paybin-logo.svg       # PayBin logo
│   ├── paybin-logo-white.svg # White version for dark theme
│   └── images/               # Background images
└── package.json
```

## Design Features

### Home Page Sections
- **Hero**: Animated call-to-action with trust badges
- **Features**: 2x3 grid with hover effects and background images
- **Pricing**: Three-tier pricing with highlighted middle option
- **Stats**: Horizontal marquee with key metrics
- **Crypto Support**: Scrolling cryptocurrency logos
- **Integration**: Tabbed API documentation section
- **Testimonials**: Two-row marquee with customer quotes
- **FAQ**: Interactive accordion with dynamic content

### Animations
- **Scroll Triggers**: Elements animate when entering viewport
- **Marquee Effects**: Horizontal scrolling for stats and crypto
- **Hover Effects**: Smooth transitions on interactive elements
- **Stagger Animations**: Sequential timing for multiple elements

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd paybin-redesign
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Components

### Scroll Animations
Custom hook `useScrollAnimation()` provides scroll-triggered animations:
- Fade in from left/right/up
- Zoom in with scale effects
- Flip animations with 3D perspective
- Bounce and rotate effects

### Interactive Sections
- **Tabbed Integration**: API documentation with code examples
- **FAQ Accordion**: Dynamic content switching
- **Pricing Cards**: Hover effects and highlighted plans
- **Navigation**: Smooth scrolling and external links

### Marquee Effects
- **Stats Bar**: Horizontal scrolling metrics
- **Crypto Logos**: Scrolling cryptocurrency symbols
- **Testimonials**: Two-row customer feedback

## Pages

### Home (`/`)
Complete landing page with all sections and interactive elements.

### Blog (`/blog`)
Grid layout with colorful background cards.

### Company (`/company`)
About page with company information, principles, and team section.

## Styling

- **Dark Theme**: Consistent black/gray color scheme
- **Green Accents**: Highlight colors for CTAs and important elements
- **Typography**: Inter font with proper hierarchy
- **Spacing**: Consistent padding and margins throughout
- **Responsive**: Mobile-first design with breakpoint considerations

## Customization

### Colors
Update CSS variables in `globals.css`:
```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

### Animations
Modify animation classes in `globals.css`:
```css
.scroll-fade-in-up { /* Custom animation */ }
.animate-marquee { /* Marquee timing */ }
```

### Content
Update content in respective page files:
- `src/app/page.tsx` - Home page content
- `src/app/blog/page.tsx` - Blog posts
- `src/app/company/page.tsx` - Company information

## Responsive Design

- **Mobile**: Single column layouts, stacked sections
- **Tablet**: Two-column grids, adjusted spacing
- **Desktop**: Full multi-column layouts, hover effects

## Deployment

Built for deployment on Vercel, Netlify, or any static hosting platform.

## License

This project is for PayBin's official website redesign.

---

Built with ❤️ for the crypto community
