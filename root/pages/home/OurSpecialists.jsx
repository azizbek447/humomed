import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { useRef, useState } from 'react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const clinicData = {
  doctors: [
    {
      id: 1,
      name: 'Dr. Nodira Karimova',
      specialty: 'Dermatolog',
      image: '/images/healer/karimova.jpg',
      path: '/healer',
    },
    {
      id: 2,
      name: 'Dr. Jamshid Ruziev',
      specialty: 'Kardiolog',
      image: '/images/healer/ruziew.jpg',
      path: '/healer',
    },
    {
      id: 3,
      name: 'Dr. Dilnoza Shamsiyeva',
      specialty: 'Nevropatolog',
      image: '/images/healer/shamsiyeva.jpg',
      path: '/healer',
    },
    {
      id: 4,
      name: 'Dr. Otabek Sobirov',
      specialty: 'Travmatolog',
      image: '/images/healer/sobirov.jpg',
      path: '/healer',
    },
    {
      id: 5,
      name: 'Dr. Farangiz Qodirova',
      specialty: 'Ginekolog',
      image: '/images/healer/qodirova.jpg',
      path: '/healer',
    },
    {
      id: 5,
      name: 'Dr. Farangiz Qodirova',
      specialty: 'Ginekolog',
      image: '/images/healer/qodirova.jpg',
      path: '/healer',
    },
    {
      id: 5,
      name: 'Dr. Farangiz Qodirova',
      specialty: 'Ginekolog',
      image: '/images/healer/qodirova.jpg',
      path: '/healer',
    },
    {
      id: 5,
      name: 'Dr. Farangiz Qodirova',
      specialty: 'Ginekolog',
      image: '/images/healer/qodirova.jpg',
      path: '/healer',
    },
    {
      id: 5,
      name: 'Dr. Farangiz Qodirova',
      specialty: 'Ginekolog',
      image: '/images/healer/qodirova.jpg',
      path: '/healer',
    },
  ],
};

export default function DoctorsCarousel() {
  const swiperRef = useRef(null);
  const [autoplayStarted, setAutoplayStarted] = useState(false);

  const doctors = clinicData.doctors;

  const handleMouseInteraction = () => {
    if (!autoplayStarted && swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
      setAutoplayStarted(true);
    }
  };

  return (
    <div className='bg-white py-12'>
      <div className='mx-auto max-w-7xl px-4'>
        <h1 className='mb-4 text-center text-5xl font-bold text-gray-800'>
          Bizning mutaxassislarimiz
        </h1>
        <div className='mx-auto mb-32 h-1 w-16 rounded bg-[var(--success-strong)]'></div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            swiper.autoplay.stop();
          }}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className='h-[540px]'
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {doctors.map((doctor) => (
            <SwiperSlide
              key={doctor.id}
              onMouseEnter={handleMouseInteraction}
              onClick={handleMouseInteraction}
            >
              <div className='flex h-[500px] w-[390px] flex-col items-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'>
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className='h-[340px] w-full object-cover transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-105'
                />
                <div className='w-full bg-gray-100 p-5 text-center'>
                  <h3 className='text-lg font-semibold text-gray-800'>{doctor.name}</h3>
                  <p className='text-sm text-gray-600'>{doctor.specialty}</p>
                </div>
                <div>
                  <a
                    href={doctor.path}
                    className='mt-4 inline-block text-sm font-medium text-[var(--success-strong)] hover:text-[var(--success-strong)] hover:underline'
                  >
                    Подробнее →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
