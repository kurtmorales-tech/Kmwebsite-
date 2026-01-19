"use client";
import * as React from "react";
import clsx from "clsx";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ButtonLink } from "@/common/button";
import { useToggleState } from "@/hooks/use-toggle-state";

interface LinkItem {
  title: string;
  href: string;
}

interface MenuProps {
  links: LinkItem[];
  cta: { title: string; href: string };
}

// #region desktop 💻
export function DesktopMenu({ links, cta }: MenuProps) {
  return (
    <>
      <nav className="hidden lg:flex items-center gap-6">
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary dark:text-dark-text-secondary dark:hover:text-dark-text-primary transition-colors"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden items-center gap-2 justify-self-end lg:flex">
         <ButtonLink href={cta.href} intent="primary">
            {cta.title}
         </ButtonLink>
      </div>
    </>
  );
}

// #region mobile 📱
export function MobileMenu({ links, cta }: MenuProps) {
  const { handleToggle, isOn, handleOff } = useToggleState();

  return (
    <>
      <button
        aria-label="Toggle Menu"
        className="border-border bg-surface-secondary dark:border-dark-border dark:bg-dark-surface-secondary col-start-3 flex items-center justify-center gap-2 justify-self-end rounded-sm border p-2 lg:hidden lg:h-7"
        onPointerDown={handleToggle}
      >
        <HamburgerMenuIcon className="size-4" />
      </button>
      <div className="block lg:hidden">
        {isOn ? (
          <div className="bg-surface-primary dark:bg-dark-surface-primary fixed top-[calc(var(--header-height)+1px)] left-0 z-10 h-screen w-full p-6">
            <nav className="flex flex-col gap-6">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-text-primary dark:text-dark-text-primary"
                    onClick={handleOff}
                  >
                    {link.title}
                  </Link>
                ))}
              <ButtonLink href={cta.href} intent="primary" size="lg" className="w-full justify-center">
                {cta.title}
              </ButtonLink>
            </nav>
          </div>
        ) : null}
      </div>
    </>
  );
}
