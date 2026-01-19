import { FeaturesGrid } from "@/app/_sections/features/features-grid";
import { Section } from "@/common/layout";

const servicesList = [
  {
    title: "Web Design & Development",
    description: "We build high-performance, responsive websites using the latest technologies. From simple landing pages to complex web applications.",
    icon: "Code"
  },
  {
    title: "SEO Optimization",
    description: "Our data-driven SEO strategies ensure your website ranks high on search engines, driving organic traffic and increasing visibility.",
    icon: "Search"
  },
  {
    title: "UI/UX Design",
    description: "We design user-centric interfaces that are not only properly structured but also visually stunning and easy to navigate.",
    icon: "PenTool"
  },
  {
    title: "Branding & Identity",
    description: "Create a lasting impression with our comprehensive branding services, including logo design, color palettes, and typography.",
    icon: "Flag"
  },
  {
    title: "E-Commerce Solutions",
    description: "Scale your business with our robust e-commerce development services. We build secure and scalable online stores.",
    icon: "Code"
  },
  {
    title: "Content Strategy",
    description: "Engage your audience with compelling content. We help you define your voice and create content that converts.",
    icon: "Pencil2"
  }
];

export const metadata = {
  title: "Services - Kmwebdesign",
  description: "Explore our comprehensive range of digital services including Web Design, SEO, and Branding."
};

export default function ServicesPage() {
  return (
    <Section>
        <div className="py-10">
            <FeaturesGrid 
                title="Our Services" 
                subtitle="We offer a full suite of digital services to help your business grow."
                features={servicesList}
                cta={[{ label: "Start a Project", href: "/contact" }]}
            />
        </div>
    </Section>
  );
}
