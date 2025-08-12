import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DataSolutions from './components/DataSolutions';
import WhoWeServe from './components/WhoWeServe';
import DataInsights from './components/DataInsights';
import WhoWeAre from './components/WhoWeAre';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <DataSolutions />
              <WhoWeServe />
              <DataInsights />
              <WhoWeAre />
              <Contact />
            </>
          } />
          <Route path="/data-solutions" element={<DataSolutions />} />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="/data-insights" element={<DataInsights />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
