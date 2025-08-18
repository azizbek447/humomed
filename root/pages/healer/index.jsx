import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Breadcrumb from '../../components/Breadcrumb.jsx';
import DoctorsCarousel from '../../components/Carousel.jsx';
import ScrollToTop from '../../components/ScrollToTop.jsx';
import { doctorDetails } from '../../constants/doctorDetails.jsx';
import { doctorsData } from '../../constants/doctorsData.jsx';

export default function Doctors() {
  const location = useLocation();
  const doctorIdFromState = location.state?.doctorId;

  const [selectedDoctor, setSelectedDoctor] = useState(doctorDetails[1]);

  useEffect(() => {
    if (doctorIdFromState && doctorDetails[doctorIdFromState]) {
      setSelectedDoctor(doctorDetails[doctorIdFromState]);
    }
  }, [doctorIdFromState]);

  const handleDoctorClick = (doctor) => {
    if (doctorDetails[doctor.id]) {
      setSelectedDoctor(doctorDetails[doctor.id]);
    }
  };

  return (
    <div className='bg-white py-40'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='mb-12'>
          <Breadcrumb />
        </div>

        <div className='mb-16 flex flex-col gap-10 md:flex-row md:items-start'>
          {/* Rasm chap tomonda */}
          <div className='flex justify-center'>
            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className='h-auto max-h-[500px] w-auto max-w-[450px] rounded-xl object-contain shadow-xl'
            />
          </div>

          {/* Matn o‘ng tomonda */}
          <div className='text-left md:w-2/3'>
            <h2 className='mb-2 text-3xl font-bold text-gray-800'>{selectedDoctor.name}</h2>
            <p className='mb-1 text-xl font-medium text-[var(--success-strong)]'>
              {selectedDoctor.specialty}
            </p>

            {selectedDoctor.subSpecialty && (
              <p className='mb-4 text-lg text-gray-600'>{selectedDoctor.subSpecialty}</p>
            )}

            {selectedDoctor.content && (
              <p className='leading-relaxed whitespace-pre-line text-gray-700'>
                {selectedDoctor.content}
              </p>
            )}
          </div>
        </div>

        {/* Carousel qisqa malumot uchun */}
        <DoctorsCarousel
          doctors={doctorsData}
          selectedDoctor={selectedDoctor}
          onDoctorClick={handleDoctorClick}
        />
      </div>

      {/* Scroll to top */}
      <ScrollToTop />
    </div>
  );
}
