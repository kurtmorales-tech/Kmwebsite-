import { Section } from "@/common/layout";
import { siteContent } from "@/data/content";
// import Image from "next/image";

export const metadata = {
  title: "About Us - Kmwebdesign",
  description: "Learn more about the team behind Kmwebdesign."
};

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <Section>
      <div className="flex flex-col gap-10 py-10 max-w-3xl mx-auto">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">{about.title}</h1>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                {about.content}
            </p>
        </div>

        <div className="mt-10 border-t border-border dark:border-dark-border pt-10">
             <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full bg-gray-300 shrink-0 overflow-hidden flex items-center justify-center">
                    {/* Placeholder for Founder Image */}
                    <span className="text-xs text-gray-500">Kurt Morales</span>
                </div>
                <div>
                    <h3 className="text-2xl font-bold">{about.founder}</h3>
                    <p className="text-accent-500 font-medium mb-2">{about.role}</p>
                    <p className="text-text-secondary dark:text-dark-text-secondary">
                        With a passion for clean code and user-centric design, Kurt leads the agency with a vision 
                        to bridge the gap between aesthetic appeal and technical performance.
                    </p>
                </div>
             </div>
        </div>
      </div>
    </Section>
  );
}
