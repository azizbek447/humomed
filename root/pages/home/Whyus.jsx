import React from 'react';
import { FaCheckCircle, FaLaptopMedical, FaLightbulb, FaShieldAlt, FaStar } from 'react-icons/fa';
import { FaGem } from 'react-icons/fa6';

const WhyUs = () => {
  const sections = [
    {
      key: 'professionalism',
      icon: <FaStar />,
      title: 'Professionalizm',
      description:
        'Markazda 20 dan ortiq shifokor va 30 dan ortiq tibbiyot mutaxassisi mehnat qiladi...',
    },
    {
      key: 'equipment',
      icon: <FaLaptopMedical />,
      title: 'Yuqori texnologiyali uskunalar',
      description:
        'Klinika Germaniya, Italiya, Finlandiya kabi davlatlarning zamonaviy asboblari bilan jihozlangan...',
    },
    {
      key: 'convenience',
      icon: <FaCheckCircle />,
      title: 'Qulaylik',
      description:
        "MRI, KT, laboratoriya, operatsiya xonalari mavjud. 'Hamma birda' tizimi amal qiladi.",
    },
    {
      key: 'innovations',
      icon: <FaLightbulb />,
      title: 'Innovatsiyalar',
      description:
        'Har yili klinikaga zamonaviy innovatsiyalar joriy qilinadi. Masalan, lazer bilan herniya davolash.',
    },
    {
      key: 'safety',
      icon: <FaShieldAlt />,
      title: 'Xavfsizlik',
      description:
        'Sterilizatsiya uchun uch bosqichli tizim, xavfsizlik standartlari va toza asboblar mavjud.',
    },
    {
      key: 'comfort',
      icon: <FaGem />,
      title: 'Qulay muhit',
      description:
        'Qulay jadval, xodimlar sifati, individual yondashuv – bular barchasi bemor uchun.',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-100 py-8 sm:py-12 lg:py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-8 text-center sm:mb-12'>
          <h1 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl'>
            Nega biz?
          </h1>
          <div className='mx-auto h-1 w-16 rounded bg-[var(--success-strong)] sm:w-20'></div>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8'>
          {sections.map((section) => (
            <div
              key={section.key}
              className='group rounded-lg bg-gray-100 p-6 transition-all duration-300 hover:border hover:border-[var(--success-strong)] hover:bg-white hover:shadow-xl focus:border focus:border-[var(--success-strong)] focus:bg-white focus:shadow-xl active:border active:border-[var(--success-strong)] active:bg-white active:shadow-xl sm:p-8'
            >
              <div className='flex justify-center pt-6 sm:pt-8'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[var(--success-strong)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--success-strong)] group-hover:bg-white group-hover:shadow-md group-focus:-translate-y-1 group-focus:border-[var(--success-strong)] group-focus:bg-white group-focus:shadow-md group-active:-translate-y-1 group-active:border-[var(--success-strong)] group-active:bg-white group-active:shadow-md'>
                  <div className='text-3xl text-white transition-all duration-300 group-hover:text-[var(--success-strong)] group-focus:text-[var(--success-strong)] group-active:text-[var(--success-strong)]'>
                    {section.icon}
                  </div>
                </div>
              </div>
              <div className='px-4 pb-6 sm:pb-8'>
                <h3 className='mb-4 text-center text-lg font-semibold text-[var(--success-strong)] sm:text-xl'>
                  {section.title}
                </h3>
                <p className='text-center text-sm leading-relaxed text-gray-700 sm:text-base'>
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(WhyUs);
