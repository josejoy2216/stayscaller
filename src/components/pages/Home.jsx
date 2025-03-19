import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
// import HowItWorks from "../works/HowItWorks";
import HowItWorks from "../works/HowItWorks";
import FlipCard from "../explore/FlipCard";
import PartnerSection from "../PartnerWithUs/PartnerSection";
import TestimonialCards from '../Testimonial/TestimonialCards';
import FloatingButton from "../floatingbutton/FloatingButton";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <br /> <br />
      <Hero id="about" />
      <HowItWorks id="what-we-do" />
      <PartnerSection />
      <FlipCard />
      <TestimonialCards />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default Home;
