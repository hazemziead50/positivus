
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Cta from "@/components/sections/Cta";
import CaseStudies from "@/components/sections/CaseStudies";
import Process from "@/components/sections/Process";
import Team from '@/components/sections/Team';
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Cta />
      <CaseStudies />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
};

