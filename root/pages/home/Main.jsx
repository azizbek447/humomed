import React from 'react';
import { useTranslation } from 'react-i18next';
import heder from '../../assets/images/heder.webp';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className='relative w-full pt-23'>
      <img src={heder} alt='header' className='h-screen w-full object-cover sm:h-[80vh]' />

      <div className='absolute inset-0 bg-black/60' />

      <div className='absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-8'>
        <div className='w-full max-w-4xl'>
          <div className='flex flex-col items-center text-center text-white sm:items-center md:items-start md:text-left'>
            <h2 className='mb-6 text-2xl leading-snug font-extrabold sm:text-3xl md:text-4xl lg:text-5xl'>
              {t('features.title')}
            </h2>

            <ul className='space-y-3 text-base font-medium sm:text-lg md:text-xl'>
              <li>• {t('features.since')}</li>
              <li>• {t('features.operations')}</li>
              <li>• {t('features.patients')}</li>
              <li>• {t('features.equipment')}</li>
              <li>• {t('features.specialists')}</li>
              <li>• {t('features.lab')}</li>
            </ul>

            <button className='mt-8 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow transition hover:bg-gray-200 sm:mt-10 sm:text-base'>
              {t('features.consult')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
