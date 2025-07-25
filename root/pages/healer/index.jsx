import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import Breadcrumb from 'root/components/Breadcrumb';

const doctors = [
  {
    id: 1,
    name: 'Dr. Nodira Alimova',
    specialty: 'Kardiolog',
    subSpecialty: 'Yurak qon-tomir kasalliklari',
    image: '/images/doctors/doc1.jpg',
  },
  {
    id: 2,
    name: 'Dr. Jamshid Bekmurodov',
    specialty: 'Nevrolog',
    subSpecialty: 'Markaziy asab tizimi',
    image: '/images/doctors/doc2.jpg',
  },
  {
    id: 3,
    name: 'Dr. Laylo Karimova',
    specialty: 'LOR (otolaringolog)',
    subSpecialty: 'Burun va quloq jarrohligi',
    image: '/images/doctors/doc3.jpg',
  },
  {
    id: 4,
    name: 'Dr. Aziz Xolmurodov',
    specialty: 'Ortoped',
    subSpecialty: 'Suyak va bo‘g‘imlar',
    image: '/images/doctors/doc4.jpg',
  },
  {
    id: 5,
    name: 'Dr. Shahzod Umarov',
    specialty: 'Endokrinolog',
    subSpecialty: 'Ichki sekretsiya bezlari',
    image: '/images/doctors/doc5.jpg',
  },
  {
    id: 6,
    name: 'Dr. Dilnoza Madaminova',
    specialty: 'Ginekolog',
    subSpecialty: 'Ayollar salomatligi',
    image: '/images/doctors/doc6.jpg',
  },
];

export default function DoctorsCarousel() {
  const swiperRef = useRef(null);
  const [autoplayStarted, setAutoplayStarted] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);

  const handleMouseInteraction = () => {
    if (!autoplayStarted && swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
      setAutoplayStarted(true);
    }
  };

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    handleMouseInteraction();
  };

  return (
    <div className='bg-white py-10'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='mb-20'>
          <Breadcrumb />
        </div>

        <div className='mb-16 flex flex-col items-center gap-10 md:flex-row'>
          <div className='flex justify-center md:w-1/2'>
            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className='h-[350px] rounded-xl object-cover shadow-xl'
            />
          </div>
          <div className='text-center md:w-1/2 md:text-left'>
            <h2 className='mb-2 text-3xl font-bold text-gray-800'>{selectedDoctor.name}</h2>
            <p className='mb-1 text-xl font-medium text-[var(--success-strong)]'>
              {selectedDoctor.specialty}
            </p>
            {selectedDoctor.subSpecialty && (
              <p className='mb-4 text-lg text-gray-600'>{selectedDoctor.subSpecialty}</p>
            )}
            <p className='leading-relaxed text-gray-700'>
              Международный член Европейского Ринологического Общества (ERS), ...
            </p>
          </div>
        </div>

        {/* Title */}
        <h1 className='mb-4 text-center text-4xl font-bold text-gray-800'>
          Bizning mutaxassislarimiz
        </h1>
        <div className='mx-auto mb-10 h-1 w-16 rounded bg-[var(--success-strong)]'></div>

        {/* Carousel */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className='h-[540px]'
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {doctors
            .filter((doc) => doc.id !== selectedDoctor.id)
            .map((doctor) => (
              <SwiperSlide key={doctor.id} onClick={() => handleDoctorClick(doctor)}>
                <div className='flex h-[500px]  cursor-pointer flex-col items-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'>
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
                    <span className='text-[var(--success-strong)]hover:text-green-800 mt-4 inline-block text-sm font-medium hover:underline'>
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
