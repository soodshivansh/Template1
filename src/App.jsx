import React from 'react';
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar';
import Section3 from './Components/Section3';
import Blogs from './Components/Slider';

function App() {

  return (
    <div className='max-w-[1600px] mx-auto'>
        <Navbar />
        <Hero />
        <Section3 />
        <Blogs />  
    </div>
  );
}

export default App;