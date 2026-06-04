import Nav from './components/Nav';
import AboutCV from './sections/AboutCV';
import ContactSection from './sections/ContactSection';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutCV />
        <Projects />
        <ContactSection />
      </main>
    </>
  );
}
