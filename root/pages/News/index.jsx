import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { appPaths } from '../../constants/paths';

const ClinicNews = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const newsItems = [
    {
      id: 1,
      title: 'Yangi kardiologiya bo‘limi ochildi',
      description: 'Klinikamizda zamonaviy kardiologiya bo‘limi ishga tushdi.',
      date: '17 IYUL',
      image: '/images/news/1.jpg',
    },
    {
      id: 2,
      title: 'Yangi uskunalar keldi',
      description: 'MRI va UTT uchun yangi avlod tibbiy uskunalar o‘rnatildi.',
      date: '10 IYUL',
      image: '/images/news/2.jpg',
    },
    {
      id: 3,
      title: 'Tibbiy seminar o‘tkazildi',
      description: 'Xorijiy mutaxassislar ishtirokida malaka oshirish seminar bo‘lib o‘tdi.',
      date: '05 IYUL',
      image: '/images/news/3.jpg',
    },
     {
      id: 1,
      title: 'Yangi kardiologiya bo‘limi ochildi',
      description: 'Klinikamizda zamonaviy kardiologiya bo‘limi ishga tushdi.',
      date: '17 IYUL',
      image: '/images/news/1.jpg',
    },
    {
      id: 2,
      title: 'Yangi uskunalar keldi',
      description: 'MRI va UTT uchun yangi avlod tibbiy uskunalar o‘rnatildi.',
      date: '10 IYUL',
      image: '/images/news/2.jpg',
    },
    {
      id: 3,
      title: 'Tibbiy seminar o‘tkazildi',
      description: 'Xorijiy mutaxassislar ishtirokida malaka oshirish seminar bo‘lib o‘tdi.',
      date: '05 IYUL',
      image: '/images/news/3.jpg',
    },
  ];

  return (
    <div className='bg-white py-60'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-4 text-center text-3xl font-bold text-gray-800'>
          {t('ClinicNews.title', 'Новости клиники')}
        </h2>
        <div className='mx-auto mb-20 h-1 w-16 rounded bg-green-600'></div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {newsItems.map((item) => {
            const [day, month] = item.date.split(' ');
            const newsPath = `${appPaths.SERVICE_NEWS}/${item.id}`;

            return (
              <div key={item.id} className='group overflow-hidden bg-white transition-transform'>
                <div className='p-6'>
                  <div className='relative mb-4 flex justify-center overflow-hidden'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-in-out hover:z-10 hover:scale-105'
                      onClick={() => navigate(newsPath)}
                    />
                  </div>

                  <div className='mb-4 flex items-center gap-4'>
                    <div className='flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-[#000000]'>
                      <div className='text-xl font-bold'>{day}</div>
                      <div className='text-xs uppercase'>{month}</div>
                    </div>

                    <h3
                      className='cursor-pointer text-lg font-bold text-gray-800 hover:text-green-500'
                      onClick={() => navigate(newsPath)}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p className='mb-4 text-gray-500'>{item.description}</p>

                  <button
                    onClick={() => navigate(newsPath)}
                    className='inline-flex items-center rounded-[50px] border border-green-500 px-4 py-2 text-sm font-medium text-green-600 transition hover:bg-green-500 hover:text-white'
                  >
                    {t('ClinicNews.readMore', 'Подробнее')} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ClinicNews);
