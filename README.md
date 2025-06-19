# WhiteCoatAs - Your Gateway to Global Medical Education

A modern, responsive website for MBBS abroad admission consultancy, built with Next.js 15, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Clean, professional design inspired by leading medical education consultancy websites
- **Responsive Layout**: Fully responsive design that works perfectly on all devices
- **Smooth Animations**: Beautiful animations using Framer Motion for enhanced user experience
- **Interactive Components**: Dynamic sections including testimonials carousel, FAQ accordion, and more
- **SEO Optimized**: Comprehensive meta tags, structured data, and optimal performance
- **Contact Forms**: Multiple contact points with WhatsApp integration
- **Country Showcases**: Detailed information about study destinations
- **University Listings**: Comprehensive university database with filtering options

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins from Google Fonts
- **Build Tool**: Turbopack (Next.js Turbopack)

## 📋 Sections

1. **Header** - Navigation with contact info and mobile-responsive menu
2. **Hero Section** - Compelling headline with statistics and CTAs
3. **About Section** - Company mission, vision, and key features
4. **Countries Section** - Study destinations with cost breakdowns
5. **Universities Section** - Partner universities with filtering options
6. **Services Section** - Complete service offerings and process flow
7. **Testimonials** - Student success stories with carousel
8. **FAQ Section** - Common questions with expandable answers
9. **Contact Section** - Multiple contact forms and information
10. **Footer** - Comprehensive links and social media integration

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd whitecoatas
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
whitecoatas/
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   ├── not-found.js
│   └── manifest.js
├── components/
│   ├── ui/
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   ├── textarea.jsx
│   │   └── badge.jsx
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── CountriesSection.jsx
│   ├── UniversitiesSection.jsx
│   ├── ServicesSection.jsx
│   ├── TestimonialsSection.jsx
│   ├── FAQSection.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   └── WhatsAppButton.jsx
├── lib/
│   └── utils.js
└── public/
    └── robots.txt
```

## 🎯 Key Components

### Header

- Sticky navigation with contact information
- Mobile-responsive hamburger menu
- Smooth scrolling navigation links

### Hero Section

- Animated headline and statistics
- Call-to-action buttons
- Background animations

### Countries Section

- Interactive country cards
- Cost breakdown information
- University count per country

### Universities Section

- Filterable university listings
- Detailed university information
- Rating and accreditation badges

### Contact Features

- Multi-step contact forms
- WhatsApp floating button
- Phone and email integration

## 🔧 Customization

### Colors

The website uses a blue-purple color scheme. To customize:

1. Update Tailwind config in `tailwind.config.js`
2. Modify CSS custom properties in `globals.css`
3. Update component color classes

### Content

All content is easily customizable by editing the respective component files:

- University data in `UniversitiesSection.jsx`
- Country information in `CountriesSection.jsx`
- FAQ content in `FAQSection.jsx`
- Testimonials in `TestimonialsSection.jsx`

### Contact Information

Update contact details in:

- `Header.jsx`
- `ContactSection.jsx`
- `Footer.jsx`
- `WhatsAppButton.jsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: 0-640px
- Tablet: 641-768px
- Desktop: 769px+

## 🚀 Performance

- **Next.js 15** with App Router for optimal performance
- **Turbopack** for faster builds
- **Optimized images** and lazy loading
- **Code splitting** for faster page loads
- **SEO optimized** with proper meta tags

## 📈 SEO Features

- Comprehensive meta tags
- Open Graph integration
- Twitter Card support
- Structured data markup
- Sitemap generation
- Robots.txt configuration

## 🔮 Future Enhancements

- Blog section for SEO content
- Student portal integration
- Online application system
- Live chat functionality
- Multilingual support
- Admin dashboard

---

**WhiteCoatAs** - Making medical education dreams come true worldwide! 🩺🌍
