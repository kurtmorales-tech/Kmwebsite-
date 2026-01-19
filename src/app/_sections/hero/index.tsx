import clsx from "clsx";
import { AvatarsGroup } from "@/common/avatars-group";
// import { Avatar } from "@/common/avatar"; // Assume Avatar needs refactoring if it depends on BaseHub image
import { ButtonLink } from "@/common/button";

// Simple Avatar replacement if needed, or I'll just skip avatars for now if data is empty.
function AvatarPlaceholder() {
  return <div className="h-8 w-8 rounded-full bg-gray-300" />;
}

interface HeroProps {
  title: string;
  subtitle: string;
  cta: Array<{ label: string; href: string; type: "primary" | "secondary" | string }>;
  satisfaction: {
    text: string;
    avatars: any[];
  };
}

export function Hero({ title, subtitle, cta, satisfaction }: HeroProps) {
  return (
    <section className="relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-10">
      <div className="border-border dark:border-dark-border absolute top-0 left-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b">
        {/* Decorations */}
        <div className="col-span-1 flex h-full items-center justify-center" />
        <div className="border-border dark:border-dark-border col-span-1 flex h-full items-center justify-center border-x" />
        <div className="col-span-1 flex h-full items-center justify-center" />
      </div>
      {/* --- */}
      <figure className="bg-accent-500/40 pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full blur-[200px]" />
      <figure className="bg-surface-primary dark:bg-dark-surface-primary pointer-events-none absolute top-[64px] left-[4vw] z-20 hidden aspect-square w-[32vw] rounded-full opacity-50 blur-[100px] md:block" />
      <figure className="bg-surface-primary dark:bg-dark-surface-primary pointer-events-none absolute right-[7vw] bottom-[-50px] z-20 hidden aspect-square w-[30vw] rounded-full opacity-50 blur-[100px] md:block" />
      {/* --- */}
      <div className="divide-border dark:divide-dark-border relative z-10 flex flex-col divide-y pt-[35px]">
        <div className="flex flex-col items-center justify-end">
          <div className="border-border dark:border-dark-border flex items-center gap-2 border! border-b-0! px-4 py-2">
            <AvatarsGroup>
              {satisfaction.avatars.map((avatar, i) => (
                <AvatarPlaceholder key={i} />
              ))}
              {/* Force some placeholders if empty? */}
              {satisfaction.avatars.length === 0 && (
                <>
                  <AvatarPlaceholder />
                  <AvatarPlaceholder />
                  <AvatarPlaceholder />
                </>
              )}
            </AvatarsGroup>
            <p className="text-text-tertiary dark:text-dark-text-tertiary text-sm tracking-tight">
              {satisfaction.text}
            </p>
          </div>
        </div>
        <div>
          <div className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24">
            <h1 className="text-text-primary dark:text-dark-text-primary max-w-(--breakpoint-lg) text-center text-[clamp(32px,7vw,64px)] leading-none font-medium tracking-[-1.44px] text-pretty md:tracking-[-2.16px]">
              {title}
            </h1>
            <h2 className="text-md text-text-tertiary dark:text-dark-text-tertiary max-w-2xl text-center text-pretty md:text-lg">
              {subtitle}
            </h2>
          </div>
        </div>
        <div className="flex items-start justify-center px-8 sm:px-24">
          <div className="flex w-full max-w-[80vw] flex-col items-center justify-start md:max-w-[392px]!">
            {cta.map(({ href, label, type }, i) => (
              <ButtonLink
                key={i}
                className={clsx(
                  "h-14! flex-col items-center justify-center rounded-none text-base!",
                  type === "primary"
                    ? "flex w-full"
                    : "max-w-sm:border-x-0! border-border dark:border-dark-border flex w-full border-x! border-y-0! bg-transparent! backdrop-blur-xl transition-colors duration-150 hover:bg-black/5! dark:hover:bg-white/5!",
                )}
                href={href}
                intent={type as any}
              >
                {label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
