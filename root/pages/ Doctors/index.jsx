import React from 'react';

export default function DoctorsGrid() {
  const doctors = [
    {
      id: 1,
      name: 'Др. Ахмедов Бекзод',
      specialty: 'Кардиолог',
      image: '/images/doctors/doctor1.jpg',
      path: '/doctors/1',
    },
    {
      id: 2,
      name: 'Др. Саидова Нигина',
      specialty: 'Невролог',
      image: '/images/doctors/doctor2.jpg',
      path: '/doctors/2',
    },
    {
      id: 3,
      name: 'Др. Рахимов Шухрат',
      specialty: 'Ортопед',
      image: '/images/doctors/doctor3.jpg',
      path: '/doctors/3',
    },
    {
      id: 4,
      name: 'Др. Махмудова Зарина',
      specialty: 'Терапевт',
      image: '/images/doctors/doctor4.jpg',
      path: '/doctors/4',
    },
    {
      id: 5,
      name: 'Др. Абдурахманов Илҳом',
      specialty: 'ЛОР (отоларинголог)',
      image: '/images/doctors/doctor5.jpg',
      path: '/doctors/5',
    },
    {
      id: 6,
      name: 'Др. Хасанова Севинч',
      specialty: 'Педиатр',
      image: '/images/doctors/doctor6.jpg',
      path: '/doctors/6',
    },
  ];

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
