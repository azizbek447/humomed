import 'react';

import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTelegramPlane,
} from 'react-icons/fa';

import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className='bg-gray-100 text-gray-800'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='flex flex-col items-start text-left sm:items-start'>
          <img src={logo} alt='Humo Med' className='mb-4 h-24 w-24 object-contain' />
          <div className='flex gap-4'>
            {[
              { icon: <FaFacebookF />, link: 'https://facebook.com' },
              { icon: <FaTelegramPlane />, link: 'https://t.me/humo_med' },
              { icon: <FaInstagram />, link: 'https://instagram.com/humo_med_center' },
            ].map(({ icon, link }, i) => (
              <a
                key={i}
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-full bg-white p-3 text-[var(--success-strong)] transition-colors duration-300 hover:bg-[var(--success-strong)] hover:text-white'
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className='text-left'>
          <h3 className='mb-4 text-lg font-semibold'>Yangiliklar</h3>
          <ul className='space-y-3 text-sm'>
            {[
              { title: 'Innovatsion uskunalar', date: '30 Iyul 2021' },
              { title: 'Yangi filial ochildi', date: '30 Iyul 2021' },
              { title: 'Bepul maslahat kunlari', date: '30 Iyul 2021' },
            ].map(({ title, date }, idx) => (
              <li key={idx}>
                <strong>{title}</strong>
                <br />
                <span className='text-gray-500'>{date}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='text-left'>
          <h3 className='mb-4 text-lg font-semibold'>Bog‘lanish</h3>
          <ul className='space-y-3 text-sm'>
            {[
              'Yunusobod t., A. Timura, 119A',
              'Buxoro, K. Muxtorov, "Prof Med Service"',
              'Qarshi, Xodjayev MFY, Bunyodkor',
              'Andijon, Luchka 26',
              'Kurgan-Tepa, Mustaqillik 120',
            ].map((addr, idx) => (
              <li key={idx} className='flex items-start gap-2'>
                <FaMapMarkerAlt className='mt-1 text-[var(--success-strong)]' />
                <span>{addr}</span>
              </li>
            ))}
            <li className='flex items-center gap-2'>
              <FaPhoneAlt className='text-[var(--success-strong)]' />
              <span>+998-78-777-03-03</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaEnvelope className='text-[var(--success-strong)]' />
              <span>humo@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='bg-[var(--success-strong)] py-3 text-center text-sm text-white'>
        Copyright © 2019 HumoService
      </div>
    </footer>
  );
};

export default Footer;
