import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import bosh from '../../assets/img/img.png';

const testimonials = [
  {
    name: 'Бахром Юлдашев',
    comment:
      'Классная клиника, доктора профессионалы своего дела!лассная клиника, доктора профессионалы своего дела! Внимательный мед персонал. Очень хороший сервис. Обслуживание на высшем уровн Внимательный мед персонал. Очень хороший сервис. Обслуживание на высшем уровне.',
  },
  {
    name: 'Тамилка Бабаджан',
    comment:
      'Работают очень хорошо и качественно. Шикарные врачи, внимательный персонал. Обслуживание на высшем уровне. Работают очень хорошо и качественно. лассная клиника, доктора профессионалы своего дела! Внимательный мед персонал. Очень хороший сервис. Обслуживание на высшем уровнШикарные врачи, внимательный персоналРаботают очень хорошо и качественно. Шикарные врачи, внимательный персонал. Обслуживание на высшем уровне. Спасиб. Обслуживание на высшем уровне. СпасибСпасибо!',
  },
  {
    name: 'Анастасия Калашникова',
    comment:
      'Очень понравилось! Приду еще раз обязательно. Всё было на высшем уровне, начиная с консультации до самойлассная клиника, доктора профессионалы своего дела! Внимательный мед персонал. Очень хороший сервис. Обслуживание на высшем уровн процедуры!',
  },
  {
    name: 'Сергей Иванов',
    comment:
      'Клиника супер. Врачи профессионалы. Прекрасное отношение. лассная клиника, доктора профессионалы своего дела! Внимательный мед персонал. Очень хороший сервис. Обслуживание на высшем уровнОтдельное спасибо за внимание и терпение.',
  },
  {
    name: 'Ирина Самойлова',
    comment:
      'Спасибо большое за профессионализм и заботу. лассная клиника, доктора профессионалы своего дела! Внимательный мед персонал. Очень хороший сервис. Обслуживание на высшем уровнОчень довольна результатом! Всё понравилось.',
  },
];

const TestimonialsCarousel = () => {
  return (
    <div className='bg-white py-16'>
      <div className='mx-auto max-w-7xl px-4'>
        <h2 className='mb-2 text-center text-3xl font-bold text-gray-800 sm:text-4xl'>
          Отзывы наших пациентов
        </h2>
        <div className='mx-auto mb-10 h-1 w-16 rounded bg-[var(--success-strong)]' />

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className='flex justify-center'>
              <div className='flex w-full max-w-sm flex-col rounded-2xl bg-[var(--success-strong)] p-6 text-white shadow-md'>
                <div className='mb-4 flex items-center'>
                  <div className='mr-4 h-14 w-14 rounded-full bg-white/30 p-1'>
                    <img
                      src={bosh}
                      alt={item.name}
                      className='h-full w-full rounded-full object-cover'
                    />
                  </div>
                  <h3 className='text-lg font-semibold'>{item.name}</h3>
                </div>
                <div
                  className='scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-white/10 overflow-y-auto pr-2 text-sm leading-relaxed'
                  style={{ maxHeight: '130px' }}
                >
                  {item.comment}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='swiper-pagination !mt-6' />
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
