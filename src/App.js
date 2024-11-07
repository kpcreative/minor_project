import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MainCards from './components/MainCards';
import ConsultationSection from './components/ConsultationSection';
import DoctorCarousel from './components/DoctorCarousel';
import HealthArticles from './components/HealthArticles';
import Testimonials from './components/Testimonials';
import AppBanner from './components/AppBanner';
import Footer from './components/Footer';
import LoginRegister from './components/LoginRegister';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Jumbo from './components/Jumbo';
function App() {
  return (
    <Router>
      <div>
       {/* <Navbar />*/}
       <Jumbo/>
        
        <Routes>
          {/* Home Route that renders all main components 
          <Route path="/" element={
            <>
              <SearchBar />
              <MainCards />
              <ConsultationSection />
              <DoctorCarousel />
              <HealthArticles />
              <Testimonials />
              <AppBanner />
              <Footer />
            </>
          } />
          
          {/* Route for the Login/Register page *
          <Route path="/login" element={<LoginRegister />} />
          */}
           
        </Routes>
      </div>
    </Router>
  );
}

export default App;
