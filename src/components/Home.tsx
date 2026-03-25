import Docs from './sections/docs/Docs';
import Popup from './popup';
import TransferFlow from './TransferFlow';
import Hero from './hero/Hero';
import Overview from './overview/Overview';
import Features from './features/Features';
import UseCases from './useCases/UseCases';
import CTA from './CTA/CTA';

const Home = () => {
  return (
    <div>
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
      <Docs />
      <CTA />
    </div>
  );
};

export default Home;
