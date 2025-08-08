import React from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumb from 'root/components/Breadcrumb';

const AboutTheClinic = () => {
  const { t } = useTranslation();

  const advantages = [
    { title: t('about.advantages.0.title'), desc: t('about.advantages.0.desc') },
    { title: t('about.advantages.1.title'), desc: t('about.advantages.1.desc') },
    { title: t('about.advantages.2.title'), desc: t('about.advantages.2.desc') },
    { title: t('about.advantages.3.title'), desc: t('about.advantages.3.desc') },
    { title: t('about.advantages.4.title'), desc: t('about.advantages.4.desc') },
    { title: t('about.advantages.5.title'), desc: t('about.advantages.5.desc') },
  ];

  return (
    <div className='relative bg-cover bg-center py-40'>
      <div className='flex min-h-screen flex-col items-center justify-start px-4 text-center'>
        <div className='w-full max-w-7xl'>
          <div className='mb-4 text-left'>
            <Breadcrumb />
          </div>

          <h1 className='mb-6 text-3xl font-bold text-[var(--success-strong)]'>
            {t('about.weAreHappy')}
          </h1>
          <h2 className='mb-4 text-4xl font-semibold text-gray-700'>{t('about.title')}</h2>
          <div className='mx-auto mb-10 h-1 w-20 rounded bg-[var(--success-strong)]'></div>

          <div className='space-y-4 text-left text-gray-700'>
            <p>{t('about.paragraphs.0')}</p>
            <p>{t('about.paragraphs.1')}</p>
            <p>{t('about.paragraphs.2')}</p>
            <p>{t('about.paragraphs.3')}</p>
            <p>{t('about.paragraphs.4')}</p>

            <h3 className='mt-8 text-2xl font-semibold text-[var(--success-strong)]'>
              {t('about.advantagesTitle')}
            </h3>

            <ol className='list-none space-y-4'>
              {advantages.map((item, index) => (
                <li key={index} className='flex items-start gap-4'>
                  <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--success-strong)] font-bold text-white'>
                    {index + 1}
                  </div>
                  <div>
                    <strong>{item.title}</strong> {item.desc}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheClinic;
