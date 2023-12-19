import React from 'react';
import p1 from './Assets/photos/pexels-jonathan-borba-19456424.jpg'

function Team() {

  return (
    <>
        <div className='w-full lg:flex-row flex-col flex justify-center lg:p-20 sm:p-10 p-6 sm:gap-20 gap-10'>
            <div className='lg:w-[50%] w-full flex flex-col gap-8'>
                <h1 className='text-5xl font-medium font-Kanit'>Meet Our Team</h1>
                <p className='font-Ubuntu lg:w-[90%] text-gray-600'>With over 10 years of experiance in the industry, We are dedicated to helping clients find thier dream homes.</p>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='flex gap-8 items-center'>
                    <div className='w-28'>
                        <img className='rounded-full' src={p1} alt='/' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-semibold'>John Doe</h1>
                        <p>Real Estate Agent</p>
                        <p>John's expertise lies in matching clients with the perfect properties that meet their unique needs.</p>
                        <div className='mt-4 flex gap-4'>
                            <i class="fa-solid fa-phone"></i>
                            <i class="fa-solid fa-envelope"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div className='flex gap-8 items-center'>
                    <div className='w-28'>
                        <img className='rounded-full' src={p1} alt='/' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-semibold'>John Doe</h1>
                        <p>Real Estate Agent</p>
                        <p>John's expertise lies in matching clients with the perfect properties that meet their unique needs.</p>
                        <div className='mt-4 flex gap-4'>
                            <i class="fa-solid fa-phone"></i>
                            <i class="fa-solid fa-envelope"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div className='flex gap-8 items-center'>
                    <div className='w-28'>
                        <img className='rounded-full' src={p1} alt='/' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-2xl font-semibold'>John Doe</h1>
                        <p>Real Estate Agent</p>
                        <p>John's expertise lies in matching clients with the perfect properties that meet their unique needs.</p>
                        <div className='mt-4 flex gap-4'>
                            <i class="fa-solid fa-phone"></i>
                            <i class="fa-solid fa-envelope"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Team;