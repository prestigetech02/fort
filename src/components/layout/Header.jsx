import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { COMPANY, IMAGES, NAV } from '@/data/site';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 md:px-8">
        <a href="#top" aria-label={`${COMPANY.name} homepage`} className="flex min-h-14 items-center">
          <img
            src={IMAGES.logo}
            alt={COMPANY.name}
            className="h-12 w-auto max-w-[210px] object-contain sm:h-14 sm:max-w-[230px] md:h-[68px] md:max-w-[250px]"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal/80 transition-colors hover:text-secondary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-tertiary px-5 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-charcoal transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Start a Conversation
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center text-charcoal lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-black/10 bg-white px-5 pb-6 pt-2 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-black/5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-charcoal/85"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 bg-tertiary px-5 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-charcoal"
          >
            Start a Conversation
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </nav>
      )}
    </header>
  );
}
