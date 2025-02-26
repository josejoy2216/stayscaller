import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import WhyChooseUsDetail from "./components/pages/WhyChooseUs";
import HotelGapAnalysisForm from "./components/pages/hotelGapAnalysis";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-choose-us-detail" element={<WhyChooseUsDetail />} />
        <Route path="/hotel-gap-analysis" element={<HotelGapAnalysisForm />} />
      </Routes>
    </Router>
  );
}

export default App;
