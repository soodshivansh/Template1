import React from 'react';
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar';
import Section3 from './Components/Section3';
import Blogs from './Components/Slider';
import Mark1 from './Components/Mark1';
import Team from './Components/Team';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {

  return (
    <div className='max-w-[1600px] mx-auto'>
        <Navbar />
        <Hero />
        <Section3 />
        <Blogs />  
        <Mark1 />
        <Team />
        <Reviews />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;