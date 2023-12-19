import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function StarRating({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
    />
  ));

  return <div className="flex w-full items-center justify-center mt-10 text-2xl">{stars}</div>;
}

function Reviews() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <div className='mt-24 mb-24'>
      <Slider {...settings} className='autoplay'>
        <div className='text-black text-center font-semibold sm:text-3xl text-xl'>
          This is a quite good website<br /> <span className='text-xl font-normal'>abc</span>
          <StarRating rating={4} />
        </div>
        <div className='text-black text-center font-semibold sm:text-3xl text-xl'>
          This company is trustworthy<br /> <span className='text-xl font-normal'>abc</span>
          <StarRating rating={2} />
        </div>
        <div className='text-black text-center font-semibold sm:text-3xl text-xl'>
          They give the best property out there<br /> <span className='text-xl font-normal'>abc</span>
          <StarRating rating={5} />
        </div>
      </Slider>
    </div>
  );
}

export default Reviews;
