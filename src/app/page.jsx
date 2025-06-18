import Navbar from "../components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Projects";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Awards from "./pages/Awards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Awards />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
