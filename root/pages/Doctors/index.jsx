import React from 'react';
import Breadcrumb from 'root/components/Breadcrumb';

import sanjarImg from '../../assets/img/img_2-removebg-preview.png';
import malikaImg from '../../assets/img/img_2-removebg-preview.png';
import akmalImg from '../../assets/img/image.png';
import healerSanjarImg from '../../assets/img/neyxuriga.png';
import healerMalikaImg from '../../assets/img/img_2-removebg-preview.png';
import healerAkmalImg from '../../assets/img/image.png';
import previewImg from '../../assets/img/img_2-removebg-preview.png';

export default function DoctorsGrid() {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sanjar Xasanov',
      specialty: 'Kardiolog',
      image: previewImg,
      path: '/healer',
    },
    {
      id: 2,
      name: 'Dr. Malika Karimova',
      specialty: 'Nevropatolog',
      image: previewImg,
      path: '/healer',
    },
    {
      id: 3,
      name: 'Dr. Akmal Shukurov',
      specialty: 'Travmatolog',
      image: healerAkmalImg,
      path: '/healer',
    },
    {
      id: 4,
      name: 'Dr. Sanjar Xasanov',
      specialty: 'Kardiolog',
      image: healerSanjarImg,
      path: '/healer',
    },
    {
      id: 5,
      name: 'Dr. Sanjar Xasanov',
      specialty: 'Kardiolog',
      image: sanjarImg,
      path: '/healer',
    },
    {
      id: 6,
      name: 'Dr. Malika Karimova',
      specialty: 'Nevropatolog',
      image: malikaImg,
      path: '/healer',
    },
    {
      id: 7,
      name: 'Dr. Akmal Shukurov',
      specialty: 'Travmatolog',
      image: akmalImg,
      path: '/healer',
    },
    {
      id: 8,
      name: 'Dr. Sanjar Xasanov',
      specialty: 'Kardiolog',
      image: healerSanjarImg,
      path: '/healer',
    },
    {
      id: 9,
      name: 'Dr. Malika Karimova',
      specialty: 'Nevropatolog',
      image: healerMalikaImg,
      path: '/healer',
    },
  ];

  return (
    <div className='bg-white pt-40 pb-24'>
      <div className='mx-auto w-full max-w-7xl px-4'>
        {/* Breadcrumb */}
        <div className='mb-19'>
          <Breadcrumb />
        </div>

        {/* Title */}
        <div className='text-center'>
          <h1 className='mb-6 text-4xl font-bold text-gray-800'>Bizning mutaxassislarimiz</h1>
          <div className='mx-auto mb-25 h-1 w-24 rounded bg-[var(--success-strong)]'></div>
        </div>

        {/* Doctors grid */}
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className='flex flex-col items-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition-transform'
            >
              <div className='group h-[390px] w-[390px] overflow-hidden'>
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className='h-full w-full rounded-xl object-cover transition-[border-radius] duration-500 ease-linear group-hover:rounded-full'
                />
              </div>

              <div className='h-[130px] w-full bg-white p-5 text-center'>
                <h3 className='text-lg font-semibold text-gray-800 hover:text-[var(--success-strong)]'>
                  {doctor.name}
                </h3>
                <p className='text-sm text-gray-600'>{doctor.specialty}</p>
                <a
                  href={doctor.path}
                  className='mt-3 inline-block text-sm font-medium text-[var(--success-strong)] hover:text-green-800 hover:underline'
                >
                  Подробнее →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
