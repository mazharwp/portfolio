import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './assets/css/color-1.css';
import './assets/css/color-2.css';
import './assets/css/color-3.css';
import './assets/css/color-4.css';
import './assets/css/color-5.css';
import './assets/css/style.css';
import './assets/css/styleswitcher.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Styleswitcher from './components/Styleswitcher';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from "./pages/Resume";
import Services from './pages/Services';
// Main App component with routing
function App() {
  return (
    <Router>
      {/* Header component at the top */}
      <Header />

      {/* Styleswitcher component (if separate) */}
      <Styleswitcher />

      {/* Main content area with minimum height and padding */}
      <main style={{ minHeight: '50vh', padding: '20px' }}>
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer component at the bottom */}
      <Footer />
    </Router>
  );
}

export default App;