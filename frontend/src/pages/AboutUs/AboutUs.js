import React from 'react'
import Header from './Header'
import Hero from "./Hero";
import Inspiration from "./Inspiration";
import Vision from "./Vision";
import Mission from "./Mission";
import Values from "./Values";
import Team from "./Team";
import WorkEnvironment from "./WorkEnvironment";
import Benefits from "./Benefits";
import CTA from "./CTA";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <section className="font-[Lexend]">
      <Header />
      <main>
        <Hero />
        <Inspiration />
        <Vision />
        <Mission />
        <Values />
        <Team />
        <WorkEnvironment />
        <Benefits />
        <CTA />
        <Footer />
      </main>
    </section>
  );
}

export default AboutUs