import 'react';

import clinicData from '../../../doctorsData.json';

export default function DoctorsGrid() {
  const doctors = clinicData.doctors;

  return (
    <div className='bg-white pt-60 pb-60'>
      <div className='mx-auto max-w-7xl px-4'>
        <h1 className='mb-4 text-center text-5xl font-bold text-gray-800'>
          Bizning mutaxassislarimiz
        </h1>
        <div className='mx-auto mb-10 h-1 w-16 rounded bg-green-500'></div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className='flex flex-col items-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition-transform'
            >
              <div className='group h-[390px] w-[390px] overflow-hidden'>
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className='h-full w-full rounded-xl object-cover transition-[border-radius] duration-500 ease-linear group-hover:rounded-full'
                />
              </div>

              <div className='h-[130px] w-full bg-white p-5 text-center'>
                <h3 className='text-lg font-semibold text-gray-800 hover:text-green-500'>
                  {doctor.name}
                </h3>
                <p className='text-sm text-gray-600'>{doctor.specialty}</p>
                <a
                  href={doctor.path}
                  className='mt-3 inline-block text-sm font-medium text-green-600 hover:text-green-800 hover:underline'
                >
                  Подробнее →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
