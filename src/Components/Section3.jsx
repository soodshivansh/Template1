import React from 'react';

function section3() {

  return (
    <>
    <div className='flex justify-center items-center flex-col pt-10 gap-4 mt-10 p-5'>
        <h1 className='font-ubuntu text-xl text-gray-600'>Three steps. Three minutes.</h1>
        <h1 className='font-Kanit lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center'>Everything should be this easy.</h1>
    </div>
    <div className='flex md:flex-row flex-col justify-around p-10'>
      <div className='p-10 flex flex-col text-center md:text-left'>
        <i class="fa-solid fa-id-card text-6xl pb-3" style={{"color": "#243a61"}}></i>      
        <h1 className='text-2xl font-bold pb-3 font-Kanit'>Contact Us</h1>
        <p className=' font-normal text-gray-600'>Reach out to us via our website, phone, or email with your property preferences. Our team will promptly connect with you to initiate a personalized property search.</p>
      </div>
      <div className='p-10 flex flex-col text-center md:text-left'>
        <i class="fa-solid fa-people-arrows text-6xl pb-3 text-[#48a446]"></i>
        <h1 className='text-2xl font-bold pb-3 font-Kanit'>Talk and Explore Options</h1>
        <p className=' font-normal text-gray-600'>In a meeting or call, we'll discuss suitable properties, provide market insights, and address your questions, ensuring you have the information needed to make informed decisions.</p>
      </div>
      <div className='p-10 flex flex-col text-center md:text-left'>
        <i class="fa-solid fa-building-shield text-6xl pb-3 text-[#a87549]"></i>
        <h1 className='text-2xl font-bold pb-3 font-Kanit'>Take Your Keys</h1>
        <p className=' font-normal text-gray-600'>After paperwork and the closing process, receive the keys to your new property, marking the exciting moment when you officially become a homeowner. </p>
      </div>
    </div>
    </>
  );
}

export default section3;