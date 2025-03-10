import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import WhyChooseUsDetail from "./components/pages/WhyChooseUs";
import HotelGapAnalysisForm from "./components/pages/hotelGapAnalysis";
import Revenuechallenge from "./components/pages/Revenuechallenge";

function App() {
  return (
    <Router basename="/stayscaller/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<WhyChooseUsDetail />} />
        <Route path="/hotel-gap-analysis" element={<HotelGapAnalysisForm />} />
        <Route path="/revenue-challenge" element={<Revenuechallenge />} />
      </Routes>
    </Router>
  );
}

export default App;
