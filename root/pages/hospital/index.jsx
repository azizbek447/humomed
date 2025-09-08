import React from 'react';
import { FaGem, FaShieldAlt, FaCrown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '../../components/Breadcrumb.jsx';

export default function Pricing() {
  const { t } = useTranslation();

  const plans = [
    {
      title: "SIMURG'",
      price: '400 000',
      features: [
        t('plans.simurg.features.0'),
        t('plans.simurg.features.1'),
        t('plans.simurg.features.2'),
        t('plans.simurg.features.3'),
        t('plans.simurg.features.4'),
        t('plans.simurg.features.5'),
        t('plans.simurg.features.6'),
        t('plans.simurg.features.7'),
      ],
      note: t('plans.simurg.note'),
      icon: <FaGem />,
    },
    {
      title: 'VELVET',
      price: '600 000',
      features: [
        t('plans.velvet.features.0'),
        t('plans.velvet.features.1'),
        t('plans.velvet.features.2'),
        t('plans.velvet.features.3'),
        t('plans.velvet.features.4'),
        t('plans.velvet.features.5'),
        t('plans.velvet.features.6'),
        t('plans.velvet.features.7'),
        t('plans.velvet.features.8'),
      ],
      note: t('plans.velvet.note'),
      icon: <FaShieldAlt />,
    },
    {
      title: 'HUMO ROYAL',
      price: '1 100 000',
      features: [
        t('plans.royal.features.0'),
        t('plans.royal.features.1'),
        t('plans.royal.features.2'),
        t('plans.royal.features.3'),
        t('plans.royal.features.4'),
        t('plans.royal.features.5'),
        t('plans.royal.features.6'),
        t('plans.royal.features.7'),
      ],
      note: t('plans.royal.note'),
      icon: <FaCrown />,
    },
  ];

  return (
    <div className='mx-auto min-h-screen max-w-7xl bg-white px-4 py-35 sm:px-6 lg:px-8'>
      <div className='mb-14'>
        <Breadcrumb />
      </div>
      <h1 className='mb-10 text-center text-2xl font-bold text-[var(--success-strong)] sm:text-3xl lg:text-4xl'>
        {t('hospital_name')}
      </h1>
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3'>
        {plans.map((plan, index) => (
          <div
            key={index}
            className='group flex flex-col rounded-2xl border-2 border-[var(--success-strong)] bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'
          >
            <div className='mb-4 text-center'>
              <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--success-strong)] bg-[var(--success-strong)] text-2xl text-white shadow-md transition-all duration-300 group-hover:bg-white group-hover:text-[var(--success-strong)] sm:h-16 sm:w-16 sm:text-3xl'>
                {plan.icon}
              </div>
              <h2 className='mt-3 text-lg font-bold text-[var(--success-strong)] sm:text-xl'>
                {plan.title}
              </h2>
              <p className='mt-2 text-xl font-semibold text-[var(--success-strong)] sm:text-2xl'>
                {plan.price} {t('currency')}
              </p>
            </div>

            <ul className='flex-1 list-inside list-disc space-y-2 text-sm text-black sm:text-base'>
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            {plan.note && <p className='mt-4 text-xs text-black italic sm:text-sm'>{plan.note}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
