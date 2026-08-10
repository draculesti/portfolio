import { Menubar } from './components/custom/Menubar';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';
import { HeroSection } from './sections/HeroSection';
import { WorksSections } from './sections/WorksSections';


export const App = () => {

  return (
    <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
      <Menubar/>
      <HeroSection/>
      <WorksSections/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};
