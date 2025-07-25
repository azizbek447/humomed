import React from 'react';
import Breadcrumb from 'root/components/Breadcrumb';

const AboutTheClinic = () => {
  return (
    <div className='relative bg-cover bg-center py-10'>
      <div className='flex min-h-screen flex-col items-center justify-start px-4  text-center'>
        <div className='w-full max-w-7xl'>
          <div className='mb-19 text-left'>
            <Breadcrumb />
          </div>

          <h1 className='mb-6 text-3xl font-bold text-[var(--success-strong)]'>Мы всегда рады помочь</h1>
          <h2 className='mb-4 text-4xl font-semibold text-gray-700'>О нас</h2>
          <div className='mx-auto mb-10 h-1 w-20 rounded bg-[var(--success-strong)]'></div>

          <div className='text-left text-gray-700 space-y-4'>
            <p>
              Медицинский центр «ProfMedService» — это современное многопрофильное
              лечебно-профилактическое учреждение, которое оказывает медицинскую помощь взрослому и
              детскому населению Ташкента и гостям столицы.
            </p>
            <p>
              В центре трудятся более 20 врачей и 30 медицинских специалистов, из них более 10 имеют
              ученую степень и почетные звания, 90% являются специалистами высшей и первой
              квалификационных категорий.
            </p>
            <p>
              Медицинские работники «ProfMedService» систематически занимаются повышением своей
              профессиональной квалификации...
            </p>
            <p>
              Ежегодно в медицинском центре «ProfMedService» внедряются новые методики...
            </p>
            <p>
              Наш центр создан по принципу единой комплексной системы...
            </p>
            <p>
              Мы используем в лечебно-диагностической работе эксклюзивные медтехнологии...
            </p>

            <h3 className='mt-8 text-2xl font-semibold text-[var(--success-strong)]'>
              6 преимуществ лечения в клинике «ProfMedService»:
            </h3>

            <ol className='list-none space-y-4'>
              {[
                {
                  title: 'Профессионализм.',
                  desc: 'В центре трудятся более 20 врачей...',
                },
                {
                  title: 'Высокотехнологичное оснащение.',
                  desc: 'Клиника оснащена современными оборудованием...',
                },
                {
                  title: 'Удобство.',
                  desc: 'Клиника работает по системе «all in one»...',
                },
                {
                  title: 'Инновации.',
                  desc: 'Каждый год клиника внедряет инновации...',
                },
                {
                  title: 'Безопасность.',
                  desc: 'Клиника использует шестиступенчатую систему...',
                },
                {
                  title: 'Комфорт.',
                  desc: 'Клиника стремится к комфорту пациентов...',
                },
              ].map((item, index) => (
                <li key={index} className='flex items-start gap-4'>
                  <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--success-strong)] font-bold text-white'>
                    {index + 1}
                  </div>
                  <div>
                    <strong>{item.title}</strong> {item.desc}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheClinic;
