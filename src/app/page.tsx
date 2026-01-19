import { Hero } from "@/app/_sections/hero";
import { FeaturesGrid } from "@/app/_sections/features/features-grid";
import { siteContent } from "@/data/content";

export default function HomePage() {
  const { home } = siteContent;

  return (
    <>
      <Hero 
        title={home.hero.title}
        subtitle={home.hero.subtitle}
        cta={home.hero.cta}
        satisfaction={home.hero.satisfaction}
      />
      
      <FeaturesGrid 
        title="Our Services"
        subtitle="Comprehensive digital solutions tailored to your business needs."
        features={home.services}
        cta={[{ label: "View All Services", href: "/services" }]}
      />
      
      {/* Add more sections like Testimonials or Latest Projects here if available */}
    </>
  );
}
