import React from 'react';
import { useTranslation } from 'react-i18next';

const WhoAreWe = () => {
  const { t } = useTranslation();

  return (
    <section className='flex flex-col items-center justify-center space-y-6 bg-gray-100 px-4 py-16'>
      <h1 className='text-center text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl'>
        {t('whoAreWe.title')}
      </h1>
      <div className='h-1 w-16 rounded bg-[var(--success-strong)] mb-4' />

      <div className='w-full max-w-6xl rounded-xl border-4 border-[var(--success-strong)] shadow-lg overflow-hidden'>
        <div className='relative w-full aspect-video'>
          <iframe
            src='https://www.youtube.com/embed/6VFyftG_lB0'
            title='YouTube video player'
            className='absolute top-0 left-0 h-full w-full rounded-none'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
