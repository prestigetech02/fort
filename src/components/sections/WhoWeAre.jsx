import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { IMAGES } from '@/data/site';

const TILES = [
  { img: IMAGES.solar, label: 'Energy' },
  { img: IMAGES.logistics, label: 'Logistics' },
];

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-charcoal py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center">
          <SectionHeading dark eyebrow="Who we are" title="A development, operating and investment platform." />
          <Reveal delay={0.15}>
            <p className="mt-7 text-base font-medium leading-relaxed text-white/70 md:text-lg">
              Fort Infrastructure Group originates, develops, finances, delivers, operates and grows essential
              infrastructure and businesses – working with governments, MDAs, developers, corporates, investors
              and DFIs.
            </p>
            <p className="mt-5 text-base font-medium leading-relaxed text-white/70 md:text-lg">
              We take opportunities from concept to execution, structure capital, build and operate assets, invest
              and own where appropriate, and provide the talent, equipment, technology and advisory support
              required to perform and grow.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-10 grid grid-cols-2 gap-px bg-white/10">
              {TILES.map((tile) => (
                <figure key={tile.label} className="relative overflow-hidden bg-charcoal">
                  <img src={tile.img} alt={tile.label} className="h-40 w-full object-cover md:h-52" loading="lazy" />
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:pl-6">
          <div className="relative h-full min-h-[320px] overflow-hidden">
            <img
              src={IMAGES.about}
              alt="Engineers reviewing plans on a construction site"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
