import React from 'react';
import img1 from './Assets/vecteezy_independent-house-apartment-ai-generated_23961943.png'
import './global.css'

function hero() {

  return (
    <>
    <div className='lg:pr-20 pr-6 lg:pl-20 pl-6'>
        <div className='pl-10 pt-10 pr-10 lg:pb-10 w-full md:h-[60vh] bg-gradient-to-r from-[#c5e1e8] to-[#f8dabf] rounded-3xl flex md:flex-row flex-col items-center justify-between'>
            <div className='flex flex-col text-left md:gap-3 sm:gap-5 gap-3'>
                <h1 className='font-Ubuntu sm:text-lg text-base'>Welcome to AllState</h1>
                <p className='font-Kanit lg:text-7xl sm:text-4xl text-3xl'>Manage Your Property</p>
                <h1 className='font-Ubuntu sm:text-lg text-base'>You will have everything nearby supermarket, buses, stations, cinemas, theaters and German neighbourhood, etc.</h1>
                <div className="search">
                  <input placeholder="Enter Your Email" type="text" />
                  <button type="submit">Get Qoute</button>
                </div>
            </div>
            <div className='sm:w-[80%]'>
              <img className="floating-image" src={img1} alt="/" />
            </div>
        </div>
    </div>
    </>
  );
}

export default hero;