import 'react';

import { useTranslation } from 'react-i18next';

const FridaySale = () => {
  const { t } = useTranslation();

  return (
    <div className='mx-auto mt-10 w-full max-w-7xl rounded-2xl bg-white px-4 py-6 text-gray-800 sm:px-6 md:px-8 lg:px-12'>
      <h1 className='mb-4 text-center text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl'>
        {t('juma.title')}
      </h1>
      <div className='mx-auto mb-6 h-1 w-14 rounded bg-[var(--success-strong)] sm:w-20'></div>

      <p className='mb-8 text-center text-lg font-semibold text-red-500 sm:text-xl'>
        {t('juma.discount')}
      </p>

      <ul className='space-y-4 text-base'>
        <li className='flex flex-col sm:flex-row sm:justify-between'>
          <span className='font-medium'>1. {t('juma.services.gynecologist')}</span>
          <span className='text-gray-500'>(09:00 - 13:00)</span>
        </li>
        <li className='flex flex-col sm:flex-row sm:justify-between'>
          <span className='font-medium'>2. {t('juma.services.endocrinologist')}</span>
          <span className='text-gray-500'>(09:00 - 16:00)</span>
        </li>
        <li className='flex flex-col sm:flex-row sm:justify-between'>
          <span className='font-medium'>3. {t('juma.services.gastroenterologist')}</span>
          <span className='text-gray-500'>(09:00 - 17:00)</span>
        </li>
        <li className='flex flex-col sm:flex-row sm:justify-between'>
          <span className='font-medium'>4. {t('juma.services.cardiologist')}</span>
          <span className='text-gray-500'>(09:00 - 17:00)</span>
        </li>
        <li className='flex flex-col sm:flex-row sm:justify-between'>
          <span className='font-medium'>5. {t('juma.services.pediatrician')}</span>
          <span className='text-gray-500'>(09:00 - 17:00)</span>
        </li>
        <li className='flex flex-col sm:flex-row sm:justify-between'>
          <span className='font-medium'>6. {t('juma.services.lab')}</span>
          <span className='text-gray-500'>(08:00 - 11:00)</span>
        </li>
      </ul>

      <div className='mt-6 text-center'>
        <p className='text-sm font-semibold text-green-600 sm:text-base'>
          ({t('juma.lab_tests')}) <span className='text-red-600'>{t('juma.free')}</span>
        </p>
      </div>
    </div>
  );
};

export default FridaySale;
