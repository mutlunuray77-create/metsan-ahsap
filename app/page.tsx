import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import History from "./components/History";
import BeforeAfter from "./components/BeforeAfter";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Consultation from "./components/Consultation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingChat from "./components/FloatingChat";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F1E8]">
      <FloatingChat />
      <Navbar />
      <Hero />
      <History />
      <BeforeAfter />
      <About />
      <Services />
      <Projects />
      <Consultation />
      <Contact />
      <Footer />
    </main>
  );
}