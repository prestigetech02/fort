import { Helmet } from 'react-helmet';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import HowWeHelp from '@/components/sections/HowWeHelp';
import Sectors from '@/components/sections/Sectors';
import WhoWeAre from '@/components/sections/WhoWeAre';
import WhyUs from '@/components/sections/WhyUs';

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen">
      {/* scripts/generate-llms.js reads these two tags as literal text, so keep them inline. */}
      <Helmet>
        <title>Fort Infrastructure Group | Develop. Operate. Grow.</title>
        <meta
          name="description"
          content="Fort Infrastructure Group is a development, operating and investment platform building and growing essential infrastructure and businesses across transportation, energy, manufacturing, logistics, agro-processing and healthcare."
        />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <HowWeHelp />
        <WhoWeAre />
        <Sectors />
        <Experience />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}
