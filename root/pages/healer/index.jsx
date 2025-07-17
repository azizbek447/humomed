import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

export default function DoctorsCarousel() {
  const swiperRef = useRef(null);
  const [autoplayStarted, setAutoplayStarted] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      id: 1,
      name: 'Др. Ахмедов Бекзод',
      specialty: 'Кардиолог',
      subSpecialty: 'Интервенционный кардиолог',
      image: '/images/doctors/doctor1.jpg',
    },
    {
      id: 2,
      name: 'Др. Саидова Нигина',
      specialty: 'Невролог',
      subSpecialty: '',
      image: '/images/doctors/doctor2.jpg',
    },
    {
      id: 3,
      name: 'Др. Рахимов Шухрат',
      specialty: 'Ортопед',
      subSpecialty: 'Хирург-ортопед',
      image: '/images/doctors/doctor3.jpg',
    },
    {
      id: 4,
      name: 'Др. Махмудова Зарина',
      specialty: 'Терапевт',
      subSpecialty: '',
      image: '/images/doctors/doctor4.jpg',
    },
  ];

  useEffect(() => {
    if (doctors.length > 0) {
      setSelectedDoctor(doctors[0]);
    }
  }, []);

  const handleMouseInteraction = () => {
    if (!autoplayStarted && swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
      setAutoplayStarted(true);
    }
  };

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    handleMouseInteraction();
  };

  if (!selectedDoctor) return null;

  return (
    <div className='bg-white py-60'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='mb-16 flex flex-col items-center gap-10 md:flex-row'>
          <div className='flex justify-center md:w-1/2'>
            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className='h-[350px] w-[350px] rounded-xl object-cover shadow-xl'
            />
          </div>
          <div className='text-center md:w-1/2 md:text-left'>
            <h2 className='mb-2 text-3xl font-bold text-gray-800'>{selectedDoctor.name}</h2>
            <p className='mb-1 text-xl font-medium text-green-700'>{selectedDoctor.specialty}</p>
            {selectedDoctor.subSpecialty && (
              <p className='mb-4 text-lg text-gray-600'>{selectedDoctor.subSpecialty}</p>
            )}
            <p className='leading-relaxed whitespace-pre-line text-gray-700'>
              Международный член Европейского Ринологического Общества (ERS), ...
            </p>
          </div>
        </div>

        <h1 className='mb-4 text-center text-5xl font-bold text-gray-800'>
          Bizning mutaxassislarimiz
        </h1>
        <div className='mx-auto mb-16 h-1 w-16 rounded bg-green-500'></div>

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
          {doctors
            .filter((doctor) => doctor.id !== selectedDoctor.id)
            .map((doctor) => (
              <SwiperSlide key={doctor.id} onClick={() => handleDoctorClick(doctor)}>
                <div className='flex h-[480px] w-[320px] cursor-pointer flex-col items-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'>
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
                    <span className='mt-4 inline-block text-sm font-medium text-green-600 hover:text-green-800 hover:underline'>
                      Подробнее →
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
