import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { appPaths } from '../../constants/paths';
import Breadcrumb from 'root/components/Breadcrumb'; // Agar kerak bo‘lsa shu yerga qo‘shildi

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
      id: 4,
      title: 'Yangi filial ochildi',
      description: 'Yangi filialimiz Toshkentda o‘z faoliyatini boshladi.',
      date: '01 IYUL',
      image: '/images/news/4.jpg',
    },
     {
      id: 5,
      title: 'Yangi filial ochildi',
      description: 'Yangi filialimiz Toshkentda o‘z faoliyatini boshladi.',
      date: '01 IYUL',
      image: '/images/news/4.jpg',
    },
     {
      id: 6,
      title: 'Yangi filial ochildi',
      description: 'Yangi filialimiz Toshkentda o‘z faoliyatini boshladi.',
      date: '01 IYUL',
      image: '/images/news/4.jpg',
    },
  ];

  return (
    <div className="bg-white pt-10 pb-24">
      <div className="mx-auto w-full max-w-7xl px-4">

        {/* Breadcrumb (ixtiyoriy) */}
        <div className="mb-19">
          <Breadcrumb />
        </div>

        {/* Title */}
        <div className="text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-800">
            {t('ClinicNews.title', 'Новости клиники')}
          </h2>
          <div className="h-1 w-24 bg-[var(--success-strong)] mx-auto rounded mb-20"></div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {newsItems.map((item) => {
            const [day, month] = item.date.split(' ');
            const newsPath = `${appPaths.SERVICE_NEWS}/${item.id}`;

            return (
              <div
                key={item.id}
                className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition-transform"
              >
                <div className="p-6">
                  <div className="relative mb-4 flex justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full cursor-pointer rounded-md object-cover transition-transform duration-300 ease-in-out hover:z-10 hover:scale-105"
                      onClick={() => navigate(newsPath)}
                    />
                  </div>

                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-[#000000]">
                      <div className="text-xl font-bold">{day}</div>
                      <div className="text-xs uppercase">{month}</div>
                    </div>

                    <h3
                      className="cursor-pointer text-lg font-bold text-gray-800 hover:text-[var(--success-strong)]"
                      onClick={() => navigate(newsPath)}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p className="mb-4 text-gray-500">{item.description}</p>

                  <button
                    onClick={() => navigate(newsPath)}
                    className="inline-flex items-center rounded-full border border-[var(--success-strong)] px-4 py-2 text-sm font-medium text-[var(--success-strong)] transition hover:bg-[var(--success-strong)] hover:text-white"
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
