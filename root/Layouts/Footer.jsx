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
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='bg-gray-100 text-gray-800'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3'>
        {/* Logo & Social */}
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

        {/* News */}
        <div className='text-left'>
          <h3 className='mb-4 text-lg font-semibold'>{t('footer.news')}</h3>
          <ul className='space-y-3 text-sm'>
            {t('footer.newsList', { returnObjects: true }).map(({ title, date }, idx) => (
              <li key={idx}>
                <strong>{title}</strong>
                <br />
                <span className='text-gray-500'>{date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className='text-left'>
          <h3 className='mb-4 text-lg font-semibold'>{t('footer.contact')}</h3>
          <ul className='space-y-3 text-sm'>
            <li className='flex items-start gap-2'>
              <FaMapMarkerAlt className='mt-1 text-[var(--success-strong)]' />
              <span>{t('footer.address')}</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaPhoneAlt className='text-[var(--success-strong)]' />
              <span>{t('footer.phoneMain')}</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaPhoneAlt className='text-[var(--success-strong)]' />
              <span>{t('footer.phoneCallCenter')}</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaPhoneAlt className='text-[var(--success-strong)]' />
              <span>{t('footer.phoneTrust')}</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaEnvelope className='text-[var(--success-strong)]' />
              <span>{t('footer.email')}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className='bg-[var(--success-strong)] py-3 text-center text-sm text-white'>
        {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer;
