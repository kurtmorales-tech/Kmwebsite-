import * as React from "react";
import { Section } from "@/common/layout";
import { ButtonLink } from "@/common/button";
import { RocketIcon, CodeIcon, MagnifyingGlassIcon, Pencil2Icon } from "@radix-ui/react-icons";

// Map string icon names to components
const iconMap: Record<string, any> = {
  Code: CodeIcon,
  Search: MagnifyingGlassIcon,
  PenTool: Pencil2Icon,
  Flag: RocketIcon,
  Pencil2: Pencil2Icon,
  default: RocketIcon,
};

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesGridProps {
  title: string;
  subtitle?: string;
  features: FeatureItem[];
  cta?: { label: string; href: string }[];
}

export function FeaturesGrid({ title, subtitle, features, cta }: FeaturesGridProps) {
  return (
    <Section>
      <div className="mb-8 flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
        {subtitle && (
          <p className="text-text-secondary dark:text-dark-text-secondary max-w-[700px] text-lg">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
        {features.map((feature, i) => {
          const Icon = iconMap[feature.icon] || iconMap.default;
          return (
            <article
              key={i}
              className="border-border dark:border-dark-border flex flex-col gap-4 rounded-lg border p-4 [box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset] dark:[box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset]"
            >
              <figure className="border-border bg-surface-secondary dark:border-dark-border dark:bg-dark-surface-secondary flex size-9 items-center justify-center rounded-full border p-2">
                <Icon className="text-text-primary dark:text-dark-text-primary h-5 w-5" />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium">{feature.title}</h5>
                <p className="text-text-secondary dark:text-dark-text-secondary text-pretty">
                  {feature.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
      {cta && (
        <div className="mt-8 flex items-center justify-center gap-3 md:order-3">
          {cta.map((action, i) => (
            <ButtonLink key={i} href={action.href} intent="primary" size="lg">
              {action.label}
            </ButtonLink>
          ))}
        </div>
      )}
    </Section>
  );
}
