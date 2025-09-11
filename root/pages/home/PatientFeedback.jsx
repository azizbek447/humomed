import 'swiper/css';
import 'swiper/css/pagination';
// Autoplay uchun alohida css shart emas

import { useTranslation } from 'react-i18next';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import bosh from '../../assets/img/img.png';

const TestimonialsCarousel = () => {
  const { t } = useTranslation();

  const testimonials = [
    { name: 'Hurramova Hafiza', comment: t('testimonials.item1') },
    { name: 'Normo‘minuva Muslima', comment: t('testimonials.item2') },
    { name: 'Eshnazarova Gulchehra', comment: t('testimonials.item3') },
    { name: 'Azamqulov Abilqul', comment: t('testimonials.item4') },
    { name: 'Arslonova Bahor', comment: t('testimonials.item5') },
    { name: 'Eshmatova Manzura', comment: t('testimonials.item6') },
    { name: 'Jumanazarov Bunyod', comment: t('testimonials.item7') },
    { name: 'Boboyev Mansur', comment: t('testimonials.item8') },
  ];

  return (
    <div className='bg-white py-16'>
      <div className='mx-auto max-w-7xl px-4'>
        <h2 className='mb-2 text-center text-3xl font-bold text-gray-800 sm:text-4xl'>
          {t('testimonials.title')}
        </h2>
        <div className='mx-auto mb-10 h-1 w-16 rounded bg-[var(--success-strong)]' />

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000, // 3 soniyada bir marta almashadi
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // sichqon kirsa to‘xtab tursin
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className='flex justify-center'>
              {/* Umumiy balandlik: */}
              <div className='flex h-64 w-full max-w-sm flex-col rounded-2xl bg-[var(--success-strong)] p-6 text-white shadow-md'>
                <div className='mb-3 flex items-center'>
                  <div className='mr-4 h-14 w-14 rounded-full bg-white/30 p-1'>
                    <img
                      src={bosh}
                      alt={item.name}
                      className='h-full w-full rounded-full object-cover'
                    />
                  </div>
                  <h3 className='line-clamp-1 text-lg font-semibold'>{item.name}</h3>
                </div>

                {/* Matn qismi: skroll YO‘Q, balandlik flex bilan boshqariladi */}
                <div className='flex-1 overflow-hidden text-sm leading-relaxed'>{item.comment}</div>
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
