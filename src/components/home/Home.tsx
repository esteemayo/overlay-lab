import Features from '../sections/features/Features';
import CTA from '../sections/CTA/CTA';
import Documentation from '../sections/documentation/Documentation';
import Popup from '../popup';
import Overview from '../sections/overview/Overview';
import Hero from '../hero/Hero';
import UseCases from '../sections/useCases/UseCases';
import TransferFlow from '../TransferFlow';

import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <script
        type='application/json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'OverlayLab',
            applicateCategory: 'DeveloperApplication',
            operatingSystem: 'Web',
            description:
              'Headless popup system with stack-based state and accessibility built using React and Next.js.',
            url: 'https://overlaylab.vercel.com',
            author: {
              '@type': 'Person',
              name: 'Emmanuel Adebayo',
            },
          }),
        }}
      />

      <Popup>
        <Hero />
        <Overview />

        <Popup.Content>
          <TransferFlow />
        </Popup.Content>
      </Popup>

      <Features />
      <UseCases />
      <Documentation />
      <CTA />
    </div>
  );
};

export default Home;
