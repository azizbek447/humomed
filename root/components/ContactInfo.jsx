import { useTranslation } from 'react-i18next';
import { FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
import React from 'react';

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className='rounded-xl bg-[var(--success-strong)] text-white shadow-md'>
      <div className='border-b border-white/30 px-4 py-3'>
        <h3 className='mb-1 text-lg font-bold'>{t('form.schedule')}</h3>
        <div className='flex items-center space-x-2'>
          <FaClock />
          <span>{t('form.open_hours')}</span>
        </div>
      </div>
      <div className='px-4 py-3'>
        <h3 className='mb-1 text-lg font-bold'>{t('form.contacts')}</h3>
        <div className='space-y-1'>
          <div className='flex items-center gap-2'>
            <FaPhone />
            <span>
              <p>Телефон: +998 33 901 50 60</p>
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <FaPhone />
            <span>
              {' '}
              <p>Call center:+998 90 176 11 10</p>
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <FaEnvelope />
            <a
              href='mailto:pmstashkent@gmail.com'
              className='underline hover:text-[var(--success-strong)]'
            >
              pmstashkent@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
