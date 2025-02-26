import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";
// import HowItWorks from "../works/HowItWorks";
import HowItWorks from "../works/HowItWorks";
import FlipCard from "../explore/FlipCard";
import PartnerSection from "../PartnerWithUs/PartnerSection";
import FloatingButton from "../floatingbutton/FloatingButton";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <PartnerSection />
      <FlipCard />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default Home;
