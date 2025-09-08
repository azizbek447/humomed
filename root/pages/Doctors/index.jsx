import 'react';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from 'root/components/Breadcrumb';

import { doctorsData } from '../../constants/doctorsData.jsx';

export default function DoctorsGrid() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const lang = (i18n.language || 'uz').split('-')[0];

  const localizedDoctors = useMemo(
    () =>
      doctorsData.map((d) => ({
        ...d,
        _name: d?.name?.[lang] ?? d?.name?.uz ?? '',
        _specialty: d?.specialty?.[lang] ?? d?.specialty?.uz ?? '',
        _subSpecialty: d?.subSpecialty?.[lang] ?? d?.subSpecialty?.uz ?? '',
      })),
    [lang]
  );

  return (
    <div className='bg-white pt-40 pb-24'>
      <div className='mx-auto w-full max-w-7xl px-4'>
        <div className='mb-19'>
          <Breadcrumb />
        </div>

        <div className='text-center'>
          <h1 className='mb-6 text-4xl font-bold text-gray-800'>{t('ourSpecialists')}</h1>
          <div className='mx-auto mb-25 h-1 w-24 rounded bg-[var(--success-strong)]'></div>
        </div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {localizedDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className='flex flex-col items-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition-transform'
            >
              <div className='group overflow-hidden'>
                <img
                  src={doctor.image}
                  alt={doctor._name || 'Doctor'}
                  className='h-[400px] w-[400px] rounded-xl object-cover transition-[border-radius] duration-500 ease-linear group-hover:rounded-full'
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.png';
                  }}
                />
              </div>

              <div className='w-full bg-white p-5 text-center'>
                <h3 className='text-lg font-semibold text-gray-800 hover:text-[var(--success-strong)]'>
                  {doctor._name}
                </h3>

                <p className='text-sm text-gray-600'>{doctor._specialty}</p>

                <button
                  onClick={() => navigate('/healer', { state: { doctorId: doctor.id } })}
                  className='mt-3 inline-block text-sm font-medium text-[var(--success-strong)] hover:underline'
                >
                  {t('moreDetails')} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
