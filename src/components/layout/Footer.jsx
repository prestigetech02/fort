import { Globe, Mail } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { COMPANY, IMAGES, NAV } from '@/data/site';

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.3em] text-tertiary">
            <span className="h-px w-10 bg-tertiary" />
            Contact us
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-balance text-3xl font-black leading-[1.06] tracking-tight md:text-6xl">
            Let’s help you build, finance and grow the infrastructure and businesses that matter.
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center justify-center gap-3 bg-tertiary px-8 py-4 text-xs font-extrabold lowercase tracking-[0.16em] text-charcoal transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Mail className="h-4 w-4" strokeWidth={2.5} />
              {COMPANY.email}
            </a>
            <a
              href={COMPANY.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-white/30 px-8 py-4 text-xs font-extrabold lowercase tracking-[0.16em] text-white transition-colors hover:border-tertiary hover:text-tertiary active:scale-[0.98]"
            >
              <Globe className="h-4 w-4" strokeWidth={2.5} />
              {new URL(COMPANY.website).host}
            </a>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col gap-7 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/40">
            © {new Date().getFullYear()} {COMPANY.name}
          </p>
          <nav className="flex min-w-0 flex-nowrap gap-x-6 overflow-x-auto whitespace-nowrap pb-1 md:gap-x-7">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 text-[11px] font-bold uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-tertiary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#top" aria-label={`${COMPANY.name} homepage`} className="shrink-0">
            <img
              src={IMAGES.logo}
              alt={COMPANY.name}
              className="h-12 w-auto max-w-[210px] object-contain"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
