import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { CLIENTS, IMAGES } from '@/data/site';

function ClientList({ className = '' }) {
  return (
    <div className={`flex flex-wrap ${className}`}>
      {CLIENTS.map((client) => (
        <span key={client} className="text-xs font-bold uppercase tracking-[0.14em] text-white/80">
          {client}
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-end overflow-hidden bg-charcoal">
      <img
        src={IMAGES.hero}
        alt="Composite of critical infrastructure — highways, solar energy, ports and healthcare facilities"
        className="absolute inset-0 h-full w-full object-cover brightness-[1.16]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/25" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 md:px-8 md:pb-24">
        <Reveal>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-extrabold uppercase tracking-[0.34em] text-tertiary md:text-xs">
            <span>Develop</span>
            <span className="h-1 w-1 rounded-full bg-tertiary" />
            <span>Operate</span>
            <span className="h-1 w-1 rounded-full bg-tertiary" />
            <span>Grow</span>
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl md:text-7xl">
            Developing Critical Infrastructure. Growing Essential Businesses.
          </h1>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-white/75 md:text-lg">
            A development, operating and investment platform focused on building and growing
            essential infrastructure and businesses.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#how-we-help"
              className="inline-flex items-center justify-center gap-3 bg-tertiary px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-charcoal transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              How We Help
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 border border-white/40 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-white transition-colors hover:border-tertiary hover:text-tertiary active:scale-[0.98]"
            >
              Contact Us
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.38} className="lg:hidden">
          <div className="mt-12 border-t border-white/15 pt-6">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-white/50">
              Who we work with
            </span>
            <ClientList className="mt-3 gap-x-5 gap-y-2" />
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 hidden border-t border-white/10 bg-charcoal/70 backdrop-blur-sm lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-8 py-4">
          <span className="shrink-0 text-[10px] font-extrabold uppercase tracking-[0.3em] text-white/50">
            Who we work with
          </span>
          <ClientList className="items-center gap-x-8 gap-y-1" />
        </div>
      </div>
    </section>
  );
}
