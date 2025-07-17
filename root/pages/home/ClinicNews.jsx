import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const data = {
  news: [
    {
      id: 1,
      title: 'Yangi diagnostika uskunasi ishga tushirildi',
      description: 'Bizning klinikamizga zamonaviy MRT uskunasi olib kelindi.',
      date: '15 июль',
      image: '/images/news/mrt-launch.jpg',
    },
    {
      id: 2,
      title: 'Pediatriya bo‘yicha bepul maslahatlar',
      description: 'Juma kunlari pediatrlarimizdan bepul maslahat olishingiz mumkin.',
      date: '10 июль',
      image: '/images/news/pediatrics-free.jpg',
    },
    {
      id: 3,
      title: 'Yozgi sog‘lomlashtirish dasturi boshlandi',
      description: 'Yoz oylariga mo‘ljallangan maxsus sog‘lomlashtirish dasturimiz haqida batafsil.',
      date: '05 июль',
      image: '/images/news/summer-program.jpg',
    },
  ],
};

const ClinicNews = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const newsItems = data.news.slice(0, 3);

  return (
    <div className='bg-white py-10'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl'>
          {t('ClinicNews.title', 'Новости клиники')}
        </h2>
        <div className='mx-auto mb-12 h-1 w-16 rounded bg-green-600' />

        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {newsItems.map((item) => {
            const [day, month] = item.date.split(' ');
            const path = `/news/${item.id}`;

            return (
              <div
                key={item.id}
                className='group mx-auto w-full max-w-sm overflow-hidden bg-white shadow-md transition hover:shadow-lg'
              >
                <div className='p-4 sm:p-6'>
                  <div className='relative mb-4 overflow-hidden rounded-md'>
                    <img
                      src={item.image}
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
                      className='cursor-pointer text-base font-bold text-gray-800 hover:text-green-500 sm:text-lg'
                      onClick={() => navigate(path)}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p className='mb-4 text-sm text-gray-500'>{item.description}</p>

                  <button
                    onClick={() => navigate(path)}
                    className='inline-flex items-center rounded-full border border-green-500 px-4 py-2 text-sm font-medium text-green-600 transition hover:bg-green-500 hover:text-white'
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
            className='rounded-full border border-green-500 px-6 py-2 text-green-600 transition hover:bg-green-500 hover:text-white'
          >
            {t('ClinicNews.allArticles', 'Все статьи')} →
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ClinicNews);
