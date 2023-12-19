import React, { useRef } from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';

function Blogs() {
  const sliderRef = useRef(null);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    speed: 500,
    arrows: false,
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  // Responsive settings for different breakpoints
  const responsiveSettings = [
    {
      breakpoint: 1600, // lg and above
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024, // md and above
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640, // sm and above
      settings: {
        slidesToShow: 1,
      },
    },
  ];

  return (
    <>
      <div className='pt-14 sm:pb-20 pb-14'>
        <div className='w-full flex items-center justify-around'>
          <h1 className='font-Kanit text-black lg:text-5xl md:text-4xl text-2xl sm:mt-2 mt-4 font-medium'>
            Our Recent Projects
          </h1>
          <div className='mt-5'>
            <i
              className='fa-solid fa-angle-left pr-10 text-black sm:text-4xl text-2xl left'
              onClick={handlePrev}
            ></i>
            <i
              className='fa-solid fa-angle-right text-black sm:text-4xl text-2xl right'
              onClick={handleNext}
            ></i>
          </div>
        </div>
        <div className='w-full m-auto'>
          <div className='mt-20'>
            <Slider {...settings} responsive={responsiveSettings} ref={sliderRef}>
              {data.map((d, index) => (
                <div
                  key={index}
                  className='bg-white border-solid border-2 border-#f8dabf h-[380px] text-black rounded-xl'
                >
                  <div className='h-48 rounded-t-xl bg-gradient-to-r from-[#c5e1e8] to-[#f8dabf] flex justify-center items-center'>
                    <img
                      src={d.img} // Replace '' with the actual image path or URL
                      alt='/'
                      className='h-36 w-44 rounded-full'
                    />
                  </div>
                  <div className='flex flex-col justify-center items-start gap-4 p-4'>
                    <p className='text-xl font-semibold'>{d.name}</p>
                    <p>{d.para}</p>
                    <button className='bg-black text-white text-lg px-6 py-1 rounded-xl'>
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    name: 'John Morgan',
    img: 'path-to-your-image-1.jpg', // Replace with the actual path or URL
    para: 'This is a quite good website I have seen so far.',
  },
  {
    name: 'John Morgan',
    img: 'path-to-your-image-2.jpg', // Replace with the actual path or URL
    para: 'This is a quite good website I have seen so far.',
  },
  {
    name: 'John Morgan',
    img: 'path-to-your-image-3.jpg', // Replace with the actual path or URL
    para: 'This is a quite good website I have seen so far.',
  },
  {
    name: 'John Morgan',
    img: 'path-to-your-image-4.jpg', // Replace with the actual path or URL
    para: 'This is a quite good website I have seen so far.',
  },
];

export default Blogs;
