import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from 'root/components/Breadcrumb';

import newsImage from '../../assets/img/img_1.png';
import { appPaths } from '../../constants/paths';

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
    },
    {
      id: 3,
      title: t('ClinicNews.item3.title'),
      description: [
        t('ClinicNews.item3.description1'),
        t('ClinicNews.item3.description2'),
        t('ClinicNews.item3.description3'),
      ],
      date: '05 IYUL',
    },
    {
      id: 4,
      title: t('ClinicNews.item4.title'),
      description: [
        t('ClinicNews.item4.description1'),
        t('ClinicNews.item4.description2'),
        t('ClinicNews.item4.description3'),
      ],
      date: '01 IYUL',
    },
    {
      id: 5,
      title: t('ClinicNews.item5.title'),
      description: [
        t('ClinicNews.item5.description1'),
        t('ClinicNews.item5.description2'),
        t('ClinicNews.item5.description3'),
      ],
      date: '25 IYUN',
    },
    {
      id: 6,
      title: t('ClinicNews.item6.title'),
      description: [
        t('ClinicNews.item6.description1'),
        t('ClinicNews.item6.description2'),
        t('ClinicNews.item6.description3'),
      ],
      date: '15 IYUN',
    },
  ];

  const handleNewsClick = (id) => {
    const newsPath = appPaths.NEWS_SERVICE_DETAILS(id);
    navigate(newsPath);
  };

  return (
    <div className='bg-white pt-40 pb-24'>
      <div className='mx-auto w-full max-w-7xl px-4'>
        <div className='mb-19'>
          <Breadcrumb />
        </div>

        <div className='text-center'>
          <h2 className='mb-6 text-4xl font-bold text-gray-800'>{t('ClinicNews.title')}</h2>
          <div className='mx-auto mb-20 h-1 w-24 rounded bg-[var(--success-strong)]'></div>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {newsItems.map((item) => {
            const [day, month] = item.date.split(' ');

            return (
              <div key={item.id} className='group overflow-hidden transition-transform'>
                <div className='relative mb-4 flex justify-center overflow-hidden'>
                  <img
                    src={newsImage}
                    alt={item.title}
                    className='w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-105'
                    onClick={() => handleNewsClick(item.id)}
                  />
                </div>

                <div className='mb-4 flex items-center gap-4'>
                  <div className='flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-black'>
                    <div className='text-xl font-bold'>{day}</div>
                    <div className='text-xs uppercase'>{month}</div>
                  </div>
                  <h3
                    className='cursor-pointer text-lg font-bold text-gray-800 hover:text-[var(--success-strong)]'
                    onClick={() => handleNewsClick(item.id)}
                  >
                    {item.title}
                  </h3>
                </div>

                <p className='mb-4 text-gray-500'>{item.description}</p>

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
      </div>
    </div>
  );
};

export default React.memo(ClinicNews);
