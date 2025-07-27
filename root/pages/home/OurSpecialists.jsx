import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { useRef } from 'react';
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
      id: 6,
      name: 'Dr. Farangiz Qodirova',
      specialty: 'Ginekolog',
      image: '/images/healer/qodirova.jpg',
      path: '/healer',
    },
    {
      id: 7,
      name: 'Dr. Farangiz Qodirova',
      specialty: 'Ginekolog',
      image: '/images/healer/qodirova.jpg',
      path: '/healer',
    },
  ],
};

export default function DoctorsCarousel() {
  const swiperRef = useRef(null);

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-4xl sm:text-5xl font-bold text-gray-800">
          Bizning mutaxassislarimiz
        </h2>
        <div className="mx-auto mb-12 h-1 w-16 rounded bg-[var(--success-strong)]"></div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          freeMode={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="h-[540px]"
        >
          {clinicData.doctors.map((doctor, index) => (
            <SwiperSlide key={`${doctor.id}-${index}`}>
              <div className="flex h-[500px] flex-col items-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-[340px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="w-full bg-gray-100 p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
                  <p className="text-sm text-gray-600">{doctor.specialty}</p>
                </div>
                <a
                  href={doctor.path}
                  className="mt-2 text-sm font-medium text-[var(--success-strong)] hover:underline"
                >
                  Batafsil →
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
