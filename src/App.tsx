import { useEffect } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import PhotographerProfiles from './components/PhotographerProfiles';
import BookingSection from './components/BookingSection';
import DeliveryDashboard from './components/DeliveryDashboard';
import PricingAndFeatures from './components/PricingAndFeatures';
import FinalCTA from './components/FinalCTA';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const updateTitle = () => {
      const defaultTitle = 'PhotoSnap - 48hr Guaranteed Photo Delivery';
      document.title = defaultTitle;
      const titleElement = document.querySelector('title[data-default]');
      if (titleElement) {
        titleElement.setAttribute('data-default', defaultTitle);
      }
    };

    updateTitle();
  }, []);

  return (
    <div className="bg-black overflow-x-hidden">
      <Hero />
      <HowItWorks />
      <PhotographerProfiles />
      <BookingSection />
      <DeliveryDashboard />
      <PricingAndFeatures />
      <FinalCTA />

      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                PhotoSnap
              </h3>
              <p className="text-gray-400 text-sm">
                Fast. Reliable. Guaranteed.
              </p>
            </div>

            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Support</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>

            <div className="text-gray-500 text-sm">
              © 2024 PhotoSnap. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
