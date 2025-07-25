<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> ec83732 (Bo'lim yangilandi)
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaHeart, FaBrain, FaBaby, FaStethoscope, FaLungs,
  FaUserMd, FaNotesMedical, FaVial, FaUserNurse,
  FaUserInjured, FaProcedures, FaVenus
} from 'react-icons/fa';

<<<<<<< HEAD
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
=======
const services = [
  { path: '/allergist', titleKey: 'services.allergology', icon: <FaVial /> },
  { path: '/androlog', titleKey: 'services.andrology', icon: <FaUserMd /> },
  { path: '/bariatr', titleKey: 'services.bariatrics', icon: <FaProcedures /> },
  { path: '/gastroenterologist', titleKey: 'services.gastroenterology', icon: <FaLungs /> },
  { path: '/gynecologist', titleKey: 'services.gynecology', icon: <FaVenus /> },
  { path: '/dermatologist', titleKey: 'services.dermatology', icon: <FaNotesMedical /> },
  { path: '/pediatric-dentist', titleKey: 'services.pediatric_dentistry', icon: <FaBaby /> },
  { path: '/cardiology', titleKey: 'services.cardiology', icon: <FaHeart /> },
  { path: '/otolaryngology', titleKey: 'services.ent', icon: <FaStethoscope /> },
  { path: '/mammologist', titleKey: 'services.mammology', icon: <FaUserNurse /> },
  { path: '/neurologist', titleKey: 'services.neurology', icon: <FaBrain /> },
  { path: '/neurosurgery', titleKey: 'services.neurosurgery', icon: <FaUserInjured /> },
];

const OurServices = () => {
  const { t } = useTranslation();
>>>>>>> ec83732 (Bo'lim yangilandi)

  const topServices = medicalServices.slice(0, 3);
  const bottomServices = medicalServices.slice(3);

  return (
<<<<<<< HEAD
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
=======
    <div className="bg-gray-50 py-10 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          {t('ourServices.title')}
        </h2>
        <div className="mx-auto mb-10 h-1 w-20 rounded bg-[var(--success-strong)]"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm hover:shadow-md hover:bg-gray-100 transition"
            >
              <div className="p-2 bg-[var(--success-strong)]/10 rounded-full text-[var(--success-strong)] text-2xl">
                {item.icon}
              </div>
              <span className="text-lg font-medium text-gray-800">
                {t(item.titleKey)}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/allservices"
            className="px-6 py-3 bg-[var(--success-strong)] text-white font-medium rounded-lg hover:bg-[var(--success-strong)]/90 transition"
          >
            {t('ourServices.all')}
          </Link>
>>>>>>> ec83732 (Bo'lim yangilandi)
        </div>
      </div>
    </div>
  );
};

export default OurServices;
