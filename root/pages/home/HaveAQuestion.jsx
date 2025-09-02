import React from 'react';
import doktorImage from '../../assets/img/img_2-removebg-preview.png';
import { useTranslation } from 'react-i18next';
import ContactForm from '../../components/ContactForm.jsx';

const HaveAQuestion = () => {
  const { t } = useTranslation();

  return (
    <div className='mx-auto max-w-7xl px-4 py-10'>
      <h2 className='mb-4 text-center text-3xl font-semibold text-gray-800'>
        {t('question.title')}
      </h2>
      <div className='mx-auto mb-10 h-1 w-20 rounded bg-[var(--success-strong)]'></div>
      <p className='mx-auto mb-12 max-w-2xl text-center text-gray-500'>
        {t('question.description')}
      </p>

      <div className='flex flex-col items-center gap-10 lg:flex-row lg:items-start'>
        <div className='flex w-full justify-center lg:w-1/2'>
          <img
            src={doktorImage}
            alt='doctor'
            className='hidden h-[300px] w-auto rounded-lg object-contain sm:block sm:h-[400px]'
          />
        </div>

        {/* Formni alohida component */}
        <div className='w-full lg:w-1/2'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default HaveAQuestion;
