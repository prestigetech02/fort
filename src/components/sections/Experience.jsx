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
              {/* Fixed column widths so every row's columns line up (each row is its own grid). */}
              <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-b border-white/20 py-7 lg:grid-cols-[80px_minmax(0,1fr)_minmax(0,1fr)_160px] lg:gap-x-10 xl:grid-cols-[80px_minmax(0,1fr)_440px_160px]">
                <span className="text-sm font-black tracking-widest text-tertiary">{item.num}</span>
                <h3 className="text-xl font-extrabold tracking-tight md:text-2xl">{item.title}</h3>
                <p className="col-span-2 text-sm font-medium leading-relaxed text-white/70 md:text-base lg:col-span-1 xl:whitespace-nowrap">
                  {item.scope}
                </p>
                <span className="col-span-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-tertiary lg:col-span-1 lg:text-right">
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
