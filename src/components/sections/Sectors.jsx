import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { SECTORS } from '@/data/site';

export default function Sectors() {
  return (
    <section id="sectors" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Where we focus" title="Six sectors. One standard of execution." />
        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((sector, i) => (
            <Reveal key={sector.title} delay={i * 0.05}>
              <div className="group relative flex h-full flex-col overflow-hidden bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-tertiary/5 hover:ring-1 hover:ring-inset hover:ring-tertiary/50 md:p-10">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-tertiary transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background transition-all duration-300 group-hover:border-tertiary group-hover:bg-tertiary/15">
                  <sector.icon
                    className="h-7 w-7 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:text-primary"
                    strokeWidth={1.9}
                  />
                </div>
                <h3 className="mt-6 text-xl font-extrabold tracking-tight text-charcoal transition-colors group-hover:text-primary">
                  {sector.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{sector.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
