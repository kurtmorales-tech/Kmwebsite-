# Kmwebdesign - Premium Digital Agency Website

Kmwebdesign is a modern, high-performance website for a digital agency. Built with a focus on speed, SEO, and user experience, it serves as a professional portfolio and service showcase for the Kmwebdesign brand.

## 🚀 Key Features

- **Fully Responsive**: Optimized for all devices, from mobile to ultra-wide desktops.
- **Modern Tech Stack**: Built with Next.js 16 (Turbopack), React 19, and Tailwind CSS.
- **Zero CMS Dependency**: Content is managed statically for maximum performance and easy hosting.
- **High Performance**: Pre-rendered pages (SSG) for lightning-fast load times.
- **SEO Optimized**:
  - Automated meta titles and descriptions.
  - Semantic HTML structure (H1-H3).
  - Multi-page support (Home, Services, Portfolio, About, Contact).
  - Dynamic `sitemap.xml` and `robots.txt`.
- **Theming**: Full support for system-standard Light and Dark modes.
- **Accessible**: ARIA-compliant components using Radix UI primitives.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Radix Icons](https://icons.radix-ui.com/)
- **Typography**: Geist Sans & Mono (Google Fonts)

## 📁 Project Structure

```text
src/
├── app/            # App Router pages and layouts
│   ├── about/      # About Us Page
│   ├── contact/    # Contact Page
│   ├── portfolio/  # Portfolio & Case Studies
│   ├── services/   # Services Overview
│   └── globals.css # Global styles and theme variables
├── common/         # Atomic UI components (Buttons, Inputs, etc.)
├── data/           # Site content and configuration
└── lib/            # Utility functions and constants
```

## ⚙️ Setup and Installation

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Open [http://localhost:3000](http://localhost:3000)** to see the result.

## 📝 Customization

The entire website content is centralized in one file for easy management:
**`src/data/content.ts`**

Update this file to modify:

- Brand name and logo text.
- Navigation links.
- Hero headlines and subtitles.
- Services list and icons.
- Contact information.

## 📦 Production & Deployment

To build the project for production:

```bash
npm run build
```

This generates a `.next` folder with optimized static assets. The site is ready for deployment on **Vercel**, **Netlify**, or any static hosting provider.

## ⚖️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed by **Kurt Morales** (Founded Sep 2024).
