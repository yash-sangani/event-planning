import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Service from './components/Services.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx'

const App = () => {
  return (
   <Router>
    <Navbar />
    <HeroSection />
    <Service />
    <About />
    <Contact />
    <Footer />
    <Toaster /> 
   </Router>
  )
}

export default App
