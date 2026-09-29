import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Marquee from '@/components/Marquee';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import EditorialStatement from '@/components/EditorialStatement';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <About />
        <Education />
        <Marquee />
        <Projects />
        <EditorialStatement lines={['CODE MEETS', 'CREATIVITY.']} />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
