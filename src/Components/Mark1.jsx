import React from 'react';
import pic1 from './Assets/photos/pexels-sora-shimazaki-5673488.jpg'
import pic2 from './Assets/photos/pexels-fauxels-3184436.jpg'

function Mark1() {

  return (
    <>
        <div className='w-full flex lg:flex-row flex-col items-center justify-around md:p-20 p-10 gap-20'>
            <div className='flex flex-col gap-5 w-[100%]'>
                <h1 className='lg:text-5xl text-3xl font-medium font-Kanit'>Find Your Dream Home</h1>
                <p className='text-gray-600'>At our real estate company, we pride ourselves on providing personalized customer service and a cutting-edge property search platform. With our dedicated team of professionals and innovative technology, we make finding your dream home easier than ever. Whether you're a first-time buyer or a seasoned investor, we're here to guide you every step of the way.</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row gap-4 '>
                        <i class="fa-solid fa-cube mt-1"></i>
                        <p>Personalized customer service tailored to your needs</p>
                    </div>
                    <div className='flex flex-row gap-4 '>
                        <i class="fa-solid fa-cube mt-1"></i>
                        <p>Cutting-edge property search platform with advanced features</p>
                    </div>
                    <div className='flex flex-row gap-4 '>
                        <i class="fa-solid fa-cube mt-1"></i>
                        <p>Experienced team of real estate professionals</p>
                    </div>
                </div>
            </div>
            <div className='w-[100%]'>
                <img src={pic1} alt='/' />
            </div>
        </div>
        <div className='w-full flex lg:flex-row-reverse flex-col items-center justify-around md:p-20 p-10 gap-20'>
            <div className='flex flex-col gap-5 w-[100%]'>
                <h1 className='lg:text-5xl text-3xl font-medium font-Kanit'>Experience the Difference with Our Real Estate Services</h1>
                <p className='text-gray-600'>When it comes to your real estate needs, choose a company that offers local expertise and a wide network of agents. Our team is dedicated to providing you with exceptional service and helping you find the perfect property.</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row gap-4 '>
                        <i class="fa-solid fa-cube mt-1"></i>
                        <p>Local Expertise</p>
                    </div>
                    <div className='flex flex-row gap-4 '>
                        <i class="fa-solid fa-cube mt-1"></i>
                        <p>Wide Agent Network</p>
                    </div>
                    <div className='flex flex-row gap-4 '>
                        <i class="fa-solid fa-cube mt-1"></i>
                        <p>Personalized Service</p>
                    </div>
                </div>
            </div>
            <div className='w-[100%]'>
                <img src={pic2} alt='/' />
            </div>
        </div>
    </>
  );
}

export default Mark1;