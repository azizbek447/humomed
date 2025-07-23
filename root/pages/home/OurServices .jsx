import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Fizoterapiya from '../../assets/img/Fizoterapiya.png';
import kardiologiya from '../../assets/img/kardiologiya.png';
import neyxuriga from '../../assets/img/neyxuriga.png';
import otgolagiya from '../../assets/img/otgolagiya.png';
import ortopediya from '../../assets/img/Ортопедия.png';

const ServiceCard = ({ img, title, path, alwaysShow }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='group relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.03]'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={img}
        alt={title}
        className={`h-[300px] w-full object-cover transition duration-300 ${
          isHovered || alwaysShow ? 'brightness-75' : 'brightness-100'
        }`}
      />

      {(isHovered || alwaysShow) && (
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4 text-center backdrop-blur-sm'>
          <h3 className='mb-4 text-2xl font-semibold text-white'>{title}</h3>
          <Link
            to={path}
            className='rounded-lg bg-white px-6 py-2 font-medium text-gray-800 transition hover:bg-gray-200'
          >
            Batafsil
          </Link>
        </div>
      )}
    </div>
  );
};

const OurServices = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const medicalServices = [
    { path: '/otolaryngology', img: otgolagiya, title: 'Otolarengologiya' },
    { path: '/cardiology', img: kardiologiya, title: 'Kardiologiya' },
    { path: '/physiotherapy', img: Fizoterapiya, title: 'Fizioterapiya' },
    { path: '/orthopedics', img: ortopediya, title: 'Ortopediya' },
    { path: '/neurosurgery', img: neyxuriga, title: 'Neyroxirurgiya' },
  ];

  return (
    <div className='min-h-screen bg-gray-100 px-4 py-16'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='mb-16 text-center'>
          <h1 className='text-5xl font-bold text-gray-800'>Bizning xizmatlarimiz</h1>
          <div className='mx-auto mt-4 h-1 w-20 rounded bg-[var(--success-strong)]'></div>
        </div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {medicalServices.map((service, index) => (
            <ServiceCard
              key={index}
              img={service.img}
              title={service.title}
              path={service.path}
              alwaysShow={isMobile}
            />
          ))}

          {medicalServices.length % 3 === 2 && (
            <div className='invisible mx-auto w-full max-w-sm' />
          )}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
