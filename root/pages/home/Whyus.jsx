import React from 'react';
import { FaCheckCircle, FaLaptopMedical, FaLightbulb, FaShieldAlt, FaStar } from 'react-icons/fa';
import { FaGem } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const WhyUs = () => {
  const { t } = useTranslation();

  const sections = [
    { key: 'professionalism', icon: <FaStar /> },
    { key: 'equipment', icon: <FaLaptopMedical /> },
    { key: 'convenience', icon: <FaCheckCircle /> },
    { key: 'innovations', icon: <FaLightbulb /> },
    { key: 'safety', icon: <FaShieldAlt /> },
    { key: 'comfort', icon: <FaGem /> },
  ];

  return (
    <div className='min-h-screen bg-gray-100 py-8 sm:py-12 lg:py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-8 text-center sm:mb-12'>
          <h1 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl'>
            {t('whyUs.title')}
          </h1>
          <div className='mx-auto h-1 w-16 rounded bg-[var(--success-strong)] sm:w-20'></div>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8'>
          {sections.map(({ key, icon }) => (
            <div
              key={key}
              className='group rounded-lg bg-gray-100 p-6 transition-all duration-300 hover:border hover:border-[var(--success-strong)] hover:bg-white hover:shadow-xl'
            >
              <div className='flex justify-center pt-6 sm:pt-8'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[var(--success-strong)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--success-strong)] group-hover:bg-white group-hover:shadow-md group-focus:-translate-y-1 group-focus:border-[var(--success-strong)] group-focus:bg-white group-focus:shadow-md group-active:-translate-y-1 group-active:border-[var(--success-strong)] group-active:bg-white group-active:shadow-md'>
                  <div className='text-3xl text-white transition-all duration-300 group-hover:text-[var(--success-strong)] group-focus:text-[var(--success-strong)] group-active:text-[var(--success-strong)]'>
                    {icon}
                  </div>
                </div>
              </div>
              <div className='px-4 pb-6 sm:pb-8'>
                <h3 className='mb-4 text-center text-lg font-semibold text-[var(--success-strong)] sm:text-xl'>
                  {t(`whyUs.${key}.title`)}
                </h3>
                <p className='text-center text-sm leading-relaxed text-gray-700 sm:text-base'>
                  {t(`whyUs.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(WhyUs);
