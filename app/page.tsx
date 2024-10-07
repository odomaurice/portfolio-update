import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import UnderHero from "@/components/UnderHero";


export default function Home() {
  return (
    <section className="z-40">
      <div className="p-6 md:p-12 text-white">
       <Hero/>
       <UnderHero/>
       <Skills/>
       <Projects/>
       <Contact/>
       <Footer/>
      

      </div>
      
    </section>
  );
}
