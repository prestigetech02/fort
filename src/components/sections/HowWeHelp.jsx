import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { HOW_WE_HELP } from '@/data/site';

export default function HowWeHelp() {
  return (
    <section id="how-we-help" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="How we help" title="One platform, from origination to operation." />
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-muted-foreground md:text-base">
              We develop projects, build assets, mobilise capital, operate businesses and supply
              the resources that keep them running.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-border">
          {HOW_WE_HELP.map((item, i) => (
            <Reveal key={item.num} delay={i * 0.05}>
              <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-b border-border py-7 transition-colors hover:bg-card md:grid-cols-[80px_1fr_1.2fr] md:gap-x-10 md:px-4">
                <span className="text-sm font-black tracking-widest text-secondary">{item.num}</span>
                <h3 className="text-xl font-extrabold tracking-tight text-charcoal md:text-2xl">{item.title}</h3>
                <p className="col-span-2 text-sm font-medium leading-relaxed text-muted-foreground md:col-span-1 md:text-base">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
