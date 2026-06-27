import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import logo from "./assets/PAK.png";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <img src={logo} alt="Pak Pak Chicken logo" className="footer-logo" />
              <div>
                <p className="footer-headline">Follow us on Instagram and order through our link in bio.</p>
                <p className="footer-note">All rights reserved © Pak Pak Chicken. Website by Mat It Solution.</p>
              </div>
            </div>

            <div className="footer-links">
              <a href="https://www.ubereats.com/store/pak-pak-chicken/LekQ6XcyQB60DrjpVRc6sQ" target="_blank" rel="noreferrer">Uber Eats</a>
              <a href="https://tr.ee/PrrRh0YeDu" target="_blank" rel="noreferrer">Pick Me</a>
              <a href="https://www.instagram.com/pakpak.chicken" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://tr.ee/0cLOzLccB_" target="_blank" rel="noreferrer">WhatsApp</a>
              <a href="https://tr.ee/98kVAU_be3" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
