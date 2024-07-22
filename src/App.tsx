import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Workflow from "./components/Workflow/Workflow";
import Price from "./components/Price/Price";
import Testimonial from "./components/Testimonial/Testimonial";


function App() {
  return (
    <>
      <section id="home">
        <Navbar />
        <Hero />
      </section>

      <section id="about">
        <Parallax />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="workflow">
        <Workflow />
      </section>

      <section id="pricing">
        <Price />
      </section>

      <section id="testimonials">
        <Testimonial />
      </section>

      <section id="features">
        <Portfolio />
      </section>
    </>
  );
}

export default App;
