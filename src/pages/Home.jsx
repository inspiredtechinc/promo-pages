
import { useRef } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Featured from "./Featured";
import Testimonial from "./Testimonial";
import CTA from "./CTA";
import Footer from "./Footer";


export default function Home() {

  const aboutRef = useRef(null);
  const featuredRef = useRef(null);
  const testimonialRef = useRef(null);

  const scrollToSection = (section) => {

    if(section === 'about' && aboutRef.current){
      aboutRef.current.scrollIntoView({behviour: "smooth"});
    }
    if(section === 'featured' && featuredRef.current) {
      featuredRef.current.scrollIntoView({behviour: "smooth"});
    }
    if(section === 'testimonial' && testimonialRef.current) {
      testimonialRef.current.scrollIntoView({behviour: "smooth"});
    }
  };


  return (
    
    <div className="min-h-screen bg-white overflow-hidden relative font-sans">
      {/* Background blur effects */}
      <div className="absolute -top-60 -left-52 w-[668px] h-[668px] rounded-full bg-brand-200 blur-[250px] pointer-events-none" />
      <div className="absolute top-68 right-[-200px] w-[668px] h-[668px] rounded-full bg-brand-100 blur-[250px] pointer-events-none" />
      
      {/* Header */}
      <Navigation onSectionClick={scrollToSection} />

      {/* Hero Section */}
      <Hero />

      {/* Listings Section */}  
      <div ref={aboutRef}> <About /> </div>
       {/* Features Section */}
      <div ref={featuredRef}> <Featured /> </div>
      {/* Customer Feedback Section */}
      <div ref={testimonialRef}> <Testimonial /> </div>

      {/* Call to Action Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
