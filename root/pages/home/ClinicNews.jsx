import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import ULT from '../../assets/images/ULT.png';
import yangifilyal from '../../assets/img/2филиал.png';
import cardiologiya from '../../assets/img/yangi_kardiologiya.png';
import { appPaths } from '../../constants/paths.js';

const ClinicNews = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const newsItems = [
    {
      id: 1,
      title: t('ClinicNews.item1.title'),
      description: [
        t('ClinicNews.item1.description1'),
        t('ClinicNews.item1.description2'),
        t('ClinicNews.item1.description3'),
      ],
      date: '17 IYUL',
      image: cardiologiya,
    },
    {
      id: 2,
      title: t('ClinicNews.item2.title'),
      description: [
        t('ClinicNews.item2.description1'),
        t('ClinicNews.item2.description2'),
        t('ClinicNews.item2.description3'),
      ],
      date: '10 IYUL',
      image: ULT,
    },
    {
      id: 3,
      title: t('ClinicNews.item4.title'),
      description: [
        t('ClinicNews.item4.description1'),
        t('ClinicNews.item4.description2'),
        t('ClinicNews.item4.description3'),
      ],
      date: '01 IYUL',
      image: yangifilyal,
    },
  ];

  const handleNewsClick = (id) => {
    const newsPath = appPaths.NEWS_SERVICE_DETAILS(id);
    navigate(newsPath);
  };

  return (
    <div className='mx-auto max-w-7xl bg-white py-10'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl'>
          {t('ClinicNews.title', 'Новости клиники')}
        </h2>
        <div className='mx-auto mb-12 h-1 w-16 rounded bg-[var(--success-strong)]' />

        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {newsItems.map((item) => {
            const [day, month] = item.date.split(' ');
            return (
              <div
                key={item.id}
                className='group mx-auto w-full max-w-sm overflow-hidden transition'
              >
                <div className='relative mb-4 overflow-hidden rounded-md'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='h-[300px] w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-105'
                    onClick={() => handleNewsClick(item.id)}
                  />
                </div>

                <div className='mb-4 flex items-center gap-4'>
                  <div className='flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-black'>
                    <div className='text-lg font-bold'>{day}</div>
                    <div className='text-xs uppercase'>{month}</div>
                  </div>

                  <h3
                    className='cursor-pointer text-base font-bold text-gray-800 hover:text-[var(--success-strong)] sm:text-lg'
                    onClick={() => handleNewsClick(item.id)}
                  >
                    {item.title}
                  </h3>
                </div>

                <div className='mb-4 space-y-1 text-sm text-gray-500'>
                  {item.description.map((desc, idx) => (
                    <p key={idx}>{desc}</p>
                  ))}
                </div>

                <button
                  onClick={() => handleNewsClick(item.id)}
                  className='inline-flex items-center rounded-full border border-[var(--success-strong)] px-4 py-2 text-sm font-medium text-[var(--success-strong)] transition hover:bg-[var(--success-strong)] hover:text-white'
                >
                  {t('ClinicNews.readMore')} →
                </button>
              </div>
            );
          })}
        </div>

        <div className='mt-10 text-center'>
          <button
            onClick={() => navigate('/news')}
            className='rounded-full border border-[var(--success-strong)] px-6 py-2 text-[var(--success-strong)] transition hover:bg-[var(--success-strong)] hover:text-white'
          >
            {t('ClinicNews.allArticles', 'Все статьи')} →
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ClinicNews);
