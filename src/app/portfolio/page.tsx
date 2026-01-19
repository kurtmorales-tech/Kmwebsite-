import { Section } from "@/common/layout";
import { ButtonLink } from "@/common/button";
import Image from "next/image";

const projects = [
  {
    title: "EcoFriendly Store",
    category: "E-Commerce",
    description: "A sustainable product marketplace built with Next.js and Shopify.",
    image: null, // Placeholder
    href: "#"
  },
  {
    title: "TechStart Landing",
    category: "Web Design",
    description: "High-conversion landing page for a SaaS startup.",
    image: null,
    href: "#"
  },
  {
    title: "Local Coffee Shop",
    category: "Branding",
    description: "Complete brand identity and website for a local business.",
    image: null,
    href: "#"
  },
   {
    title: "Law Firm SEO",
    category: "SEO",
    description: "300% increase in organic traffic within 6 months.",
    image: null,
    href: "#"
  }
];

export const metadata = {
  title: "Portfolio - Kmwebdesign",
  description: "Check out our latest work and case studies."
};

export default function PortfolioPage() {
  return (
    <Section>
      <div className="flex flex-col gap-10 py-10">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                Explore a selection of our recent projects. We take pride in delivering high-quality digital solutions.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <div key={index} className="group relative border border-border dark:border-dark-border rounded-lg overflow-hidden bg-surface-secondary dark:bg-dark-surface-secondary">
                    <div className="aspect-video w-full bg-gray-200 dark:bg-gray-800 relative flex items-center justify-center">
                         {/* Placeholder for project image */}
                         <span className="text-gray-400 font-medium">{project.title} Preview</span>
                    </div>
                    <div className="p-6">
                        <div className="text-sm font-semibold text-accent-500 mb-2">{project.category}</div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-text-secondary dark:text-dark-text-secondary mb-4">{project.description}</p>
                        <ButtonLink href={project.href} intent="secondary">View Case Study</ButtonLink>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
}
