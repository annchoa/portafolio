import { LanguageProvider } from '@/context/LanguageProvider';
import { Page } from '@/components/layout/Page';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Community } from '@/components/sections/Community';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export function App() {
  return (
    <LanguageProvider defaultLanguage="ES">
      <Page>
        <Hero />
        <Projects />
        <Experience />
        <Community />
        <Contact />
        <Footer />
      </Page>
    </LanguageProvider>
  );
}
