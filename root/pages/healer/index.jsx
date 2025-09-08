import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import Breadcrumb from '../../components/Breadcrumb.jsx';
import DoctorsCarousel from '../../components/Carousel.jsx';
import ScrollToTop from '../../components/ScrollToTop.jsx';
import { doctorDetails } from '../../constants/doctorDetails.jsx';
import { doctorsData } from '../../constants/doctorsData.jsx';

export default function Doctors() {
  const location = useLocation();
  const doctorIdFromState = location.state?.doctorId;

  const { i18n, t } = useTranslation();
  const lang = i18n.language || 'uz';

  const getText = (field) => {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[lang] ?? field.uz ?? field.en ?? '';
  };

  const [selectedDoctor, setSelectedDoctor] = useState(() => doctorDetails?.[0]);

  useEffect(() => {
    if (!doctorIdFromState) return;
    const found = doctorDetails.find((d) => d.id === doctorIdFromState);
    if (found) setSelectedDoctor(found);
  }, [doctorIdFromState]);

  const handleDoctorClick = (doctor) => {
    const found = doctorDetails.find((d) => d.id === doctor?.id);
    if (found) setSelectedDoctor(found);
  };

  if (!selectedDoctor) return null;

  return (
    <div className='bg-white py-30 sm:py-40 md:py-32 lg:py-40'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-8 sm:mb-10 lg:mb-12'>
          <Breadcrumb />
        </div>

        <div className='mb-12 flex flex-col gap-6 sm:mb-14 sm:gap-8 md:flex-row md:items-start lg:mb-16 lg:gap-10'>
          <div className='flex justify-center md:w-1/3 lg:w-1/4'>
            <img
              src={selectedDoctor.image}
              alt={getText(selectedDoctor.name)}
              className='max-h-[400px] w-full max-w-sm object-contain sm:max-h-[400px] sm:max-w-md md:max-w-none lg:max-h-[550px]'
            />
          </div>

          <div className='text-left md:w-2/3 lg:w-3/4'>
            <h2 className='mb-2 text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl'>
              {getText(selectedDoctor.name)}
            </h2>

            <p className='mb-1 text-lg font-medium text-[var(--success-strong)] sm:text-xl lg:text-2xl'>
              {getText(selectedDoctor.specialty)}
            </p>

            {selectedDoctor.subSpecialty && (
              <p className='mb-4 text-base text-gray-600 sm:text-lg'>
                {getText(selectedDoctor.subSpecialty)}
              </p>
            )}

            <div className='overflow-hidden'>
              <table className='w-full border-collapse text-left text-sm text-gray-700 sm:text-base'>
                <tbody>
                  {getText(selectedDoctor.birthDate) && (
                    <tr className='hover:bg-gray-50'>
                      <td className='w-32 px-3 py-3 font-medium text-gray-600 sm:w-40 sm:px-4 lg:w-48'>
                        {t('doctor.birthDate')}
                      </td>
                      <td className='px-3 py-3 font-semibold sm:px-4'>
                        {getText(selectedDoctor.birthDate)}
                      </td>
                    </tr>
                  )}
                  {getText(selectedDoctor.birthPlace) && (
                    <tr className='hover:bg-gray-50'>
                      <td className='w-32 px-3 py-3 font-medium text-gray-600 sm:w-40 sm:px-4 lg:w-48'>
                        {t('doctor.birthPlace')}
                      </td>
                      <td className='px-3 py-3 font-semibold sm:px-4'>
                        {getText(selectedDoctor.birthPlace)}
                      </td>
                    </tr>
                  )}
                  {getText(selectedDoctor.education) && (
                    <tr className='hover:bg-gray-50'>
                      <td className='w-32 px-3 py-3 align-top font-medium text-gray-600 sm:w-40 sm:px-4 lg:w-48'>
                        {t('doctor.education')}
                      </td>
                      <td className='px-3 py-3 font-semibold whitespace-pre-line sm:px-4'>
                        {getText(selectedDoctor.education)}
                      </td>
                    </tr>
                  )}
                  {getText(selectedDoctor.experience) && (
                    <tr className='hover:bg-gray-50'>
                      <td className='w-32 px-3 py-3 font-medium text-gray-600 sm:w-40 sm:px-4 lg:w-48'>
                        {t('doctor.experience')}
                      </td>
                      <td className='px-3 py-3 font-semibold sm:px-4'>
                        {getText(selectedDoctor.experience)}
                      </td>
                    </tr>
                  )}
                  {getText(selectedDoctor.workTime) && (
                    <tr className='hover:bg-gray-50'>
                      <td className='w-32 px-3 py-3 align-top font-medium text-gray-600 sm:w-40 sm:px-4 lg:w-48'>
                        {t('doctor.workTime')}
                      </td>
                      <td className='px-3 py-3 font-semibold whitespace-pre-line sm:px-4'>
                        {getText(selectedDoctor.workTime)}
                      </td>
                    </tr>
                  )}
                  {selectedDoctor.phone && (
                    <tr className='hover:bg-gray-50'>
                      <td className='w-32 px-3 py-3 font-medium text-gray-600 sm:w-40 sm:px-4 lg:w-48'>
                        {t('doctor.phone')}
                      </td>
                      <td className='px-3 py-3 font-semibold text-blue-600 sm:px-4'>
                        <a href={`tel:${selectedDoctor.phone}`} className='hover:underline'>
                          {selectedDoctor.phone}
                        </a>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {selectedDoctor.content &&
              selectedDoctor.content[lang] &&
              Array.isArray(selectedDoctor.content[lang]) && (
                <div className='mt-6 text-sm leading-relaxed whitespace-pre-line text-gray-700 sm:mt-8 sm:text-base'>
                  {selectedDoctor.content[lang].map((item, index) => (
                    <p key={index} className='mb-3 sm:mb-4'>
                      {item}
                    </p>
                  ))}
                </div>
              )}
          </div>
        </div>

        <DoctorsCarousel
          doctors={doctorsData}
          selectedDoctor={selectedDoctor}
          onDoctorClick={handleDoctorClick}
        />
      </div>
      <ScrollToTop />
    </div>
  );
}
