import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import CTA from "./components/sections/Cta";
import CaseStudies from "./components/sections/CaseStudies";
import Process from "./components/sections/Process";
import Team from './components/sections/Team';
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {

  
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <CTA />
      <CaseStudies/>
      <Process/>
      <Team/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
