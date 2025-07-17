import React from 'react';

const WhoAreWe = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center space-y-6 bg-gray-100 px-4 py-16'>
      <h1 className='text-center text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl'>
        Biz kimmiz?
      </h1>
      <div className='mb-4 h-1 w-16 rounded bg-green-500' />

      <div className='w-full max-w-4xl overflow-hidden rounded-xl border-4 border-green-500 shadow-lg'>
        {/* Responsive video wrapper */}
        <div className='relative h-0 w-full pb-[56.25%]'>
          <iframe
            src='https://www.youtube.com/embed/6VFyftG_lB0'
            title='YouTube video player'
            className='absolute top-0 left-0 h-full w-full rounded-xl'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
