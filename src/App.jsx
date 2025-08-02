import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Navbar/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Contact from "./Components/Contact/Contact.jsx";

import '@fortawesome/fontawesome-free/css/all.min.css';


import"./App.css";



function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4 p-1 ">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
           <Route path="/portfolio" element={<Portfolio />} />
           <Route path="/contact" element={<Contact />} />
        
    
      </Routes>

      </div>
      <Footer />

   
    </Router>
  );
}

export default App;

