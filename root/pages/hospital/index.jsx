import React from 'react';
import { FaGem, FaShieldAlt, FaCrown } from 'react-icons/fa';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const plans = [
  {
    title: "SIMURG'",
    price: '400 000',
    features: [
      'Hamshira va shifokor nazorati 24/7',
      'Fizioterapiya',
      'Massaj',
      'Ignaterapiya',
      'Muolajalar',
      'Bitta UTT tekshiruvi',
      'Standart 6 ta laboratoriya tahlillari',
      'Dorilarsiz',
    ],
    note: 'Narx ikki kishilik joylashuvda bir kishi uchun amal qiladi',
    icon: <FaGem />,
  },
  {
    title: 'VELVET',
    price: '600 000',
    features: [
      'Hamshira va shifokor nazorati 24/7',
      'Fizioterapiya',
      'Massaj',
      'Ignaterapiya',
      'Kerakli barcha shifokorlar ko‘rigi',
      'Muolajalar',
      'Barcha UTT tekshiruvi',
      'Standart 6 ta laboratoriya tahlillari',
      'Barcha dori vositalar sizdan hech narsa talab qilinmaydi',
    ],
    note: 'Narx ikki kishilik joylashuvda bir kishi uchun amal qiladi',
    icon: <FaShieldAlt />,
  },
  {
    title: 'HUMO ROYAL',
    price: '1 100 000',
    features: [
      'Shaxsiy hamshira nazorati 24/7',
      'Barcha shifokorlar ko‘rigi',
      'To‘liq dori vositalari',
      'Standart 6 ta laboratoriya analiz tahlillari',
      'Barcha UTT tekshiruvlari',
      'Kengroq qulaylik ko‘proq xizmat ko‘rsatish',
      'To‘liroq qulaylik ma’lumotlari alohida posterdа',
      'Ikki kishilik joylashuvda alohida xona',
    ],
    note: '',
    icon: <FaCrown />,
  },
];

export default function Pricing() {
  return (
    <div className='mx-auto min-h-screen max-w-7xl bg-white px-4 py-35 sm:px-6 lg:px-8'>
      <div className='mb-14'>
        <Breadcrumb />
      </div>
      <h1 className='mb-10 text-center text-2xl font-bold text-[var(--success-strong)] sm:text-3xl lg:text-4xl'>
        HUMO HOSPITAL
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
                {plan.price} so'm
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
