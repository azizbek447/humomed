import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Fizoterapiya from '../../assets/img/Fizoterapiya.png';
import kardiologiya from '../../assets/img/kardiologiya.png';
import neyxuriga from '../../assets/img/neyxuriga.png';
import otgolagiya from '../../assets/img/otgolagiya.png';
import ortopediya from '../../assets/img/Ортопедия.png';

const ServiceCard = ({ img, title, path, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className='group relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.03]'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={img}
        alt={title}
        className={`h-[300px] w-full object-cover transition duration-300 ${
          isHovered ? 'brightness-75' : 'brightness-100'
        }`}
      />
      {isHovered && (
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
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const medicalServices = [
    { path: '/service/otolaryngology', img: otgolagiya, title: 'Otor-Koproq o‘ishiya' },
    { path: '/service/cardiology', img: kardiologiya, title: 'Kardiologiya' },
    { path: '/service/physiotherapy', img: Fizoterapiya, title: 'Fizioterapiya' },
    { path: '/service/orthopedics', img: ortopediya, title: 'Ortopedi' },
    { path: '/service/neurosurgery', img: neyxuriga, title: 'Neyroxirurgiya' },
  ];

  const topServices = medicalServices.slice(0, 3);
  const bottomServices = medicalServices.slice(3);

  return (
    <div className='min-h-screen bg-gray-100 px-6 py-16'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='mb-16 text-center'>
          <h1 className='text-5xl font-bold text-gray-800'>Bizning xizmatlarimiz</h1>
          <div className='mx-auto mt-10 h-1 w-20 rounded bg-green-500'></div>
        </div>

        <div className='mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {topServices.map((service, index) => (
            <ServiceCard
              key={index}
              img={service.img}
              title={service.title}
              path={service.path}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {bottomServices.map((service, index) => (
            <ServiceCard
              key={index + 3}
              img={service.img}
              title={service.title}
              path={service.path}
              isHovered={hoveredIndex === index + 3}
              onMouseEnter={() => setHoveredIndex(index + 3)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}

          <div className='invisible mx-auto w-full max-w-sm' />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
