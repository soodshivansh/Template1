import React from 'react';
import p1 from './Assets/photos/pexels-sora-shimazaki-5673488.jpg';

function Contact() {
  return (
    <>
      <div className='w-full flex flex-col gap-10 p-7 md:p-10 lg:p-20'>
        <div>
          <h1 className='text-4xl font-medium font-Kanit mb-2'>Contact Information</h1>
          <p className='text-xl text-gray-600 font-Ubuntu'>We're here to help. Reach out to us for any inquiries.</p>
        </div>
        <div className='w-full flex flex-col md:flex-row md:items-center items-start justify-between md:gap-0 gap-10'>
          <div className='flex flex-col gap-6 md:gap-10'>
            <div>
              <h1 className='text-2xl font-semibold font-Kanit'>Email</h1>
              <p className='text-gray-600 font-Ubuntu'>Send us an email</p>
              <p><i class="fa-solid fa-envelope"></i> email@gmail.com</p>
              <p><i class="fa-solid fa-envelope"></i> email@gmail.com</p>
            </div>
            <div>
              <h1 className='text-2xl font-semibold font-Kanit'>Phone</h1>
              <p className='text-gray-600 font-Ubuntu'>Give us a call</p>
              <p><i class="fa-solid fa-phone"></i> 9876543210</p>
              <p><i class="fa-solid fa-phone"></i> 9876543210</p>
            </div>
            <div>
              <h1 className='text-2xl font-semibold font-Kanit'>Office</h1>
              <p><i class="fa-solid fa-location-dot"></i> 123 Sample city, delhi IND 2000 AU</p>
            </div>
          </div>
          <div className='md:w-1/2 w-full'>
          <iframe className='w-full md:h-[400px] h-[300px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52630028536!2d76.76357748532372!3d28.643684633895166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1702976244568!5m2!1sen!2sin" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
