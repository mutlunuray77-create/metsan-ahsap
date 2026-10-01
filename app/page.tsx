import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import History from "./components/History";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050811] min-h-screen text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      <Navbar />
      <Hero />
      <History />
      <Services />
      <Projects />
      <Catalog />
      <Footer />
    </main>
  );
}
