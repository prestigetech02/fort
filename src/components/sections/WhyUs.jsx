import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { IMAGES, VALUES } from '@/data/site';

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="Why us" title="Built on values that deliver." />
          <Reveal delay={0.15}>
            <div className="relative mt-10 overflow-hidden">
              <img
                src={IMAGES.agro}
                alt="Agro-processing facility with silos surrounded by farmland"
                className="h-64 w-full object-cover md:h-80"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
        <div className="flex flex-col justify-center border-t border-border lg:my-auto lg:border-t-0">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.05}>
              <div className="border-b border-border py-6 md:py-7">
                <h3 className="flex items-center gap-4 text-lg font-extrabold tracking-tight text-charcoal md:text-xl">
                  <span className="h-2 w-2 shrink-0 bg-tertiary" />
                  {value.title}
                </h3>
                <p className="mt-2 pl-6 text-sm font-medium leading-relaxed text-muted-foreground md:text-base">
                  {value.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
