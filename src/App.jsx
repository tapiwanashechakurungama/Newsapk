import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "./components/Body";
import Footer from "./components/Footer.jsx";
import Politics from "./components/Politics.jsx";

import Soccer from "./components/Soccer.jsx";
import Business from "./components/Business.jsx";
import Shopping from "./components/Shopping.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Politics" element={<Politics />} />
        <Route path="/Soccer" element={<Soccer />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Shopping" element={<Shopping />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
