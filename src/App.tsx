import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SubmitSection from './components/SubmitSection';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SubmitSection />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;