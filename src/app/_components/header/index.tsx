import { ButtonLink } from "@/common/button";
import { siteContent } from "@/data/content";
// import { DarkLightImageAutoscale } from "@/common/dark-light-image"; 
// DarkLightImageAutoscale fails if file missing, let's use standard Image or text for now.
import Image from "next/image";

import { DesktopMenu, MobileMenu } from "./navigation-menu";

export function Header() {
  const settings = siteContent.branding;
  const headerLinks = siteContent.header.links;
  const cta = siteContent.header.cta;

  // Adapt to the structure expected by menus if needed, or pass simpler props
  // We will refactor NavigationMenu to accept simpler props
  
  return (
    <header className="sticky left-0 top-0 z-100 flex w-full flex-col border-b border-border bg-surface-primary dark:border-dark-border dark:bg-dark-surface-primary">
      <div className="flex h-(--header-height) bg-surface-primary dark:bg-dark-surface-primary">
        <div className="container mx-auto grid w-full grid-cols-header place-items-center content-center items-center px-6 *:first:justify-self-start">
          <ButtonLink unstyled className="flex items-center ring-offset-2" href="/">
            {/* Using text fallback for now, or Image if url exists */}
             <span className="text-xl font-bold">{settings.name}</span>
          </ButtonLink>
          <DesktopMenu links={headerLinks} cta={cta} />
          <MobileMenu links={headerLinks} cta={cta} />
        </div>
      </div>
    </header>
  );
}
