import React from "react";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Service from "../components/Service";
import About from "../components/About";
import Price from "../components/Price";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Nav />
      <Main />
      <About />
      <Service />
      <Price />
      <Contact/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default Home;
