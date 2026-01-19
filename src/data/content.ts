
export const siteContent = {
  branding: {
    name: "Kmwebdesign",
    tagline: "Elevating Brands through Digital Excellence",
    logo: {
      text: "Kmwebdesign", // Fallback or primary if no image
      // using placeholders for now
      dark: { url: "/images/logo-dark.png", alt: "Kmwebdesign Logo", width: 150, height: 40 },
      light: { url: "/images/logo-light.png", alt: "Kmwebdesign Logo", width: 150, height: 40 },
    },
  },
  header: {
    links: [
      { title: "Home", href: "/" },
      { title: "Services", href: "/services" },
      { title: "Portfolio", href: "/portfolio" },
      { title: "About Us", href: "/about" },
      { title: "Contact", href: "/contact" },
    ],
    cta: { title: "Get a Quote", href: "/contact" }
  },
  footer: {
    copyright: "© 2026 Kmwebdesign. All rights reserved.",
    links: [
      { title: "Home", href: "/" },
      { title: "Services", href: "/services" },
      { title: "Portfolio", href: "/portfolio" },
      { title: "About Us", href: "/about" },
      { title: "Contact", href: "/contact" },
    ],
    socials: [
      { title: "Twitter", href: "https://twitter.com", icon: "" },
      { title: "LinkedIn", href: "https://linkedin.com", icon: "" },
    ]
  },
  home: {
    hero: {
      title: "Transforming Ideas into Digital Reality",
      subtitle: "Kmwebdesign is a premium digital agency specialized in high-performance web development, SEO, and branding.",
      cta: [
        { label: "Get a Quote", href: "/contact", type: "primary" },
        { label: "View Portfolio", href: "/portfolio", type: "secondary" }
      ],
      satisfaction: {
        text: "Trusted by innovative businesses",
        avatars: [] // Placeholder
      }
    },
    services: [
        {
            title: "Web Design & Development",
            description: "Custom, responsive websites built with modern technologies like Next.js and Tailwind CSS. We prioritize speed, accessibility, and user experience.",
            icon: "Code"
        },
        {
            title: "SEO Optimization",
            description: "Data-driven SEO strategies to improve your visibility and ranking. structured data, semantic HTML, and performance optimization.",
            icon: "Search"
        },
        {
            title: "UI/UX Design",
            description: "User-centric design that converts. We create intuitive interfaces with beautiful aesthetics.",
            icon: "PenTool"
        },
        {
            title: "Branding",
            description: "Complete brand identity packages including logos, typography, and color palettes.",
            icon: "Flag"
        }
    ]
  },
  about: {
    title: "About Kmwebdesign",
    content: "Founded in September 2024 by Kurt Morales, Kmwebdesign is a forward-thinking digital agency committed to delivering exceptional web experiences. Our mission is to empower businesses with digital tools that drive growth and engagement.",
    founder: "Kurt Morales",
    role: "Founder & Lead Developer"
  },
  contact: {
    email: "contact@kmwebdesign.com",
    phone: "(555) 123-4567",
    address: "San Francisco, CA",
    hours: "Mon-Fri: 9am - 6pm PST"
  }
};
