import Reveal from '@/components/ui/Reveal';

export default function SectionHeading({ eyebrow, title, dark = false, className = '' }) {
  return (
    <div className={className}>
      <Reveal>
        <p
          className={`flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.3em] ${
            dark ? 'text-tertiary' : 'text-secondary'
          }`}
        >
          <span className={`h-px w-10 ${dark ? 'bg-tertiary' : 'bg-secondary'}`} />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-5 max-w-2xl text-balance text-3xl font-extrabold leading-[1.08] tracking-tight md:text-5xl ${
            dark ? 'text-white' : 'text-charcoal'
          }`}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
