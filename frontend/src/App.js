import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Inspiration from "./components/Inspiration";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import Values from "./components/Values";
import Team from "./components/Team";
import WorkEnvironment from "./components/WorkEnvironment";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
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
        <Footer/>
      </main>
    </div>
  );
};

export default App;
