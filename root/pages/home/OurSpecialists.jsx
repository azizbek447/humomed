import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { useRef, useState } from 'react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Statik ma'lumotlar
const clinicData = {
  doctors: [
    {
      id: 1,
      name: 'Dr. Nodira Karimova',
      specialty: 'Dermatolog',
      image: '/images/doctors/karimova.jpg',
      path: '/doctors/karimova',
    },
    {
      id: 2,
      name: 'Dr. Jamshid Ruziev',
      specialty: 'Kardiolog',
      image: '/images/doctors/ruziew.jpg',
      path: '/doctors/ruziew',
    },
    {
      id: 3,
      name: 'Dr. Dilnoza Shamsiyeva',
      specialty: 'Nevropatolog',
      image: '/images/doctors/shamsiyeva.jpg',
      path: '/doctors/shamsiyeva',
    },
    {
      id: 4,
      name: 'Dr. Otabek Sobirov',
      specialty: 'Travmatolog',
      image: '/images/doctors/sobirov.jpg',
      path: '/doctors/sobirov',
    },
    {
      id: 5,
      name: 'Dr. Farangiz Qodirova',
      specialty: 'Ginekolog',
      image: '/images/doctors/qodirova.jpg',
      path: '/doctors/qodirova',
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
        <div className='mx-auto mb-32 h-1 w-16 rounded bg-green-500'></div>

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
          className='h-[520px] w-[1000px]'
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
              <div className='flex h-[480px] w-[320px] flex-col items-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'>
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className='h-[320px] w-full object-cover transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-105'
                />
                <div className='w-full bg-gray-100 p-5 text-center'>
                  <h3 className='text-lg font-semibold text-gray-800'>{doctor.name}</h3>
                  <p className='text-sm text-gray-600'>{doctor.specialty}</p>
                </div>
                <div>
                  <a
                    href={doctor.path}
                    className='mt-4 inline-block text-sm font-medium text-green-600 hover:text-green-800 hover:underline'
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
