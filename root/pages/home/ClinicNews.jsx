import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import newsImage from '../../assets/img/img_1.png';

const data = {
  news: [
    {
      id: 1,
      title: 'Yangi diagnostika uskunasi ishga tushirildi',
      description: 'Bizning klinikamizga zamonaviy MRT uskunasi olib kelindi.',
      date: '15 июль',
      path: '/news/1',
    },
    {
      id: 2,
      title: 'Pediatriya bo‘yicha bepul maslahatlar',
      description: 'Juma kunlari pediatrlarimizdan bepul maslahat olishingiz mumkin.',
      date: '10 июль',
      path: '/news/2',
    },
    {
      id: 3,
      title: 'Yozgi sog‘lomlashtirish dasturi boshlandi',
      description: 'Yoz oylariga mo‘ljallangan maxsus sog‘lomlashtirish dasturimiz haqida batafsil.',
      date: '05 июль',
      path: '/news/3',
    },
  ],
};

const ClinicNews = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const newsItems = data.news.slice(0, 3);

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
                <div className=''>
                  <div className='relative mb-4 overflow-hidden rounded-md'>
                    <img
                      src={newsImage}
                      alt={item.title}
                      className='h-56 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                    />
                  </div>

                  <div className='mb-4 flex items-center gap-4'>
                    <div className='flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-black'>
                      <div className='text-lg font-bold'>{day}</div>
                      <div className='text-xs uppercase'>{month}</div>
                    </div>

                    <h3
                      className='cursor-pointer text-base font-bold text-gray-800 hover:text-[var(--success-strong)] sm:text-lg'
                      onClick={() => navigate(item.path)}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p className='mb-4 text-sm text-gray-500'>{item.description}</p>

                  <button
                    onClick={() => navigate(item.path)}
                    className='inline-flex items-center rounded-full border border-[var(--success-strong)] px-4 py-2 text-sm font-medium text-[var(--success-strong)] transition hover:bg-[var(--success-strong)] hover:text-white'
                  >
                    {t('ClinicNews.readMore', 'Подробнее')} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className='mt-10 text-center'>
          <button
            onClick={() => navigate('/service/news')}
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
