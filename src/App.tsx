import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhatYouLearn from './components/WhatYouLearn';
import Campuses from './components/Campuses';
import WithVsWithout from './components/WithVsWithout';
import Community from './components/Community';
import StudentsWins from './components/StudentsWins';
import FAQ from './components/FAQ';
import AboutMrAlpha from './components/AboutMrAlpha';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navigation />
      <Hero />
      <WhatYouLearn />
      <Campuses />
      <WithVsWithout />
      <Community />
      <StudentsWins />
      <FAQ />
      <AboutMrAlpha />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
