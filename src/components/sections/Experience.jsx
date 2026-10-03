import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { EXPERIENCE } from '@/data/site';

export default function Experience() {
  return (
    <section id="experience" className="bg-primary py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading dark eyebrow="Selected experience" title="Work that speaks for itself." />
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-white/70 md:text-base">
              A selection of engagements across origination, development, construction,
              operation and capital mobilisation.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-white/20">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.num} delay={i * 0.05}>
              <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-b border-white/20 py-7 md:grid-cols-[80px_1.4fr_1fr_auto] md:gap-x-10">
                <span className="text-sm font-black tracking-widest text-tertiary">{item.num}</span>
                <h3 className="text-xl font-extrabold tracking-tight md:text-2xl">{item.title}</h3>
                <p className="col-span-2 text-sm font-medium leading-relaxed text-white/70 md:col-span-1 md:text-base">
                  {item.scope}
                </p>
                <span className="col-span-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-tertiary md:col-span-1 md:text-right">
                  {item.location}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
