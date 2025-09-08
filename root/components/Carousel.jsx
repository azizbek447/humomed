import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { doctorsData } from '../constants/doctorsData.jsx';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './ScrollToTop.jsx';

export default function DoctorsCarousel({ doctors = doctorsData, selectedDoctor, onDoctorClick }) {
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // 'ru-RU' -> 'ru'
  const lang = (i18n.language || 'uz').split('-')[0];

  // UI uchun til bo‘yicha flatten
  const localizedDoctors = useMemo(() => {
    const list = Array.isArray(doctors) ? doctors : [];
    const filtered = selectedDoctor?.id ? list.filter((d) => d.id !== selectedDoctor.id) : list;

    return filtered.map((d) => ({
      ...d,
      _name: d?.name?.[lang] ?? d?.name?.uz ?? '',
      _specialty: d?.specialty?.[lang] ?? d?.specialty?.uz ?? '',
      _subSpecialty: d?.subSpecialty?.[lang] ?? d?.subSpecialty?.uz ?? '',
    }));
  }, [doctors, selectedDoctor?.id, lang]);

  return (
    <div className='w-full bg-white py-16'>
      <div className='mx-auto max-w-7xl px-4'>
        <h2 className='mb-4 text-center text-4xl font-bold text-gray-800 sm:text-5xl'>
          {t('ourSpecialists')}
        </h2>
        <div className='mx-auto mb-12 h-1 w-16 rounded bg-[var(--success-strong)]'></div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={20}
          loop
          freeMode
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
          className='h-[540px]'
        >
          {localizedDoctors.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <div className='flex h-[500px] flex-col items-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'>
                <img
                  src={doctor.image}
                  alt={doctor._name || 'Doctor'}
                  className='h-[350px] w-full object-cover transition-transform duration-500 hover:scale-105'
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.png'; // fallback rasm
                  }}
                />
                <div className='w-full bg-gray-100 p-5 text-center'>
                  <h3 className='text-lg font-semibold text-gray-800'>{doctor._name}</h3>
                  <p className='text-sm text-gray-600'>{doctor._specialty}</p>
                </div>

                <ScrollToTop />
                <button
                  onClick={() => {
                    onDoctorClick?.(doctor);
                    navigate('/healer', { state: { doctorId: doctor.id } });
                  }}
                  className='mt-5 text-sm font-medium text-[var(--success-strong)] hover:underline'
                >
                  {t('moreDetails')} →
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
