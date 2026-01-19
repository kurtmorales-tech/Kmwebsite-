import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "../theme-switcher";
import { ButtonLink } from "@/common/button";
import { siteContent } from "@/data/content";

function isExternalLink(url: string | null | undefined) {
  return url && /^https?:\/\//.test(url);
}

export function Footer() {
  const { branding, footer } = siteContent;

  return (
    <footer className="border-t border-border py-16 dark:border-dark-border">
      <div className="container mx-auto grid grid-cols-2 grid-rows-[auto_auto_auto] place-items-start items-center gap-y-7 px-6 sm:grid-cols-[1fr_auto_1fr] sm:grid-rows-2 sm:gap-x-3 sm:gap-y-16">
        <Link aria-label="Homepage" href="/">
           <span className="text-xl font-bold">{branding.name}</span>
        </Link>
        <nav className="col-start-1 row-start-2 flex flex-col gap-x-2 gap-y-3 self-center sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:flex-row sm:items-center sm:place-self-center md:gap-x-4 lg:gap-x-8">
          {footer.links.map(({ title, href }) => (
            <ButtonLink
              key={title}
              unstyled
              className="px-2 font-light tracking-tight text-text-tertiary hover:text-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary"
              href={href}
              target={isExternalLink(href) ? "_blank" : "_self"}
            >
              {title}
            </ButtonLink>
          ))}
        </nav>
        <div className="col-start-2 row-start-1 flex items-center gap-3 self-center justify-self-end sm:col-span-1 sm:col-start-3 sm:row-start-1">
          <p className="hidden text-text-tertiary dark:text-dark-text-tertiary sm:block">
            Appearance
          </p>
          <ThemeSwitcher />
        </div>

        <p className="col-span-2 text-pretty text-sm text-text-tertiary dark:text-dark-text-tertiary sm:col-span-1 ">
          {footer.copyright}
        </p>

        <ul className="col-span-2 col-start-1 row-start-3 flex w-full items-center gap-x-3.5 gap-y-4 sm:col-span-1 sm:col-start-3 sm:row-start-2 sm:w-auto sm:flex-wrap sm:justify-self-end">
          {footer.socials.map((link) => {
            return (
              <li key={link.title} className="shrink-0 sm:first:ml-auto">
                <ButtonLink
                  unstyled
                  className="block p-0.5 hover:brightness-75 dark:brightness-50 dark:hover:brightness-75"
                  href={link.href}
                  target="_blank"
                >
                   {/* Placeholder for icons */}
                   <span className="text-xs">{link.title}</span>
                </ButtonLink>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
