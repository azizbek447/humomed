import React from 'react';
import Breadcrumb from 'root/components/Breadcrumb';

export default function DoctorsGrid() {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sanjar Xasanov',
      specialty: 'Kardiolog',
      image: '/images/doctors/sanjar.jpg',
      path: '/healer',
    },
    {
      id: 2,
      name: 'Dr. Malika Karimova',
      specialty: 'Nevropatolog',
      image: '/images/healer/malika.jpg',
      path: '/healer',
    },
    {
      id: 3,
      name: 'Dr. Akmal Shukurov',
      specialty: 'Travmatolog',
      image: '/images/healer/akmal.jpg',
      path: '/healer',
    },
    {
      id: 7,
      name: 'Dr. Sanjar Xasanov',
      specialty: 'Kardiolog',
      image: '/images/healer/sanjar.jpg',
      path: '/healer',
    },
    {
      id: 8,
      name: 'Dr. Malika Karimova',
      specialty: 'Nevropatolog',
      image: '/images/healer/malika.jpg',
      path: '/healer',
    },
    {
      id: 9,
      name: 'Dr. Akmal Shukurov',
      specialty: 'Travmatolog',
      image: '/images/healer/akmal.jpg',
      path: '/healer',
    },
  ];

  return (
    <div className="bg-white pt-10 pb-24">
      <div className="mx-auto w-full max-w-7xl px-4">

        {/* Breadcrumb */}
        <div className="mb-19 ">
          <Breadcrumb />
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Bizning mutaxassislarimiz
          </h1>
          <div className="h-1 w-24 bg-[var(--success-strong)] mx-auto rounded mb-25"></div>
        </div>

        {/* Doctors grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="flex flex-col items-center overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition-transform"
            >
              <div className="group h-[390px] w-[390px] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full rounded-xl object-cover transition-[border-radius] duration-500 ease-linear group-hover:rounded-full"
                />
              </div>

              <div className="h-[130px] w-full bg-white p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 hover:text-[var(--success-strong)]">
                  {doctor.name}
                </h3>
                <p className="text-sm text-gray-600">{doctor.specialty}</p>
                <a
                  href={doctor.path}
                  className="mt-3 inline-block text-sm font-medium text-[var(--success-strong)] hover:text-green-800 hover:underline"
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
