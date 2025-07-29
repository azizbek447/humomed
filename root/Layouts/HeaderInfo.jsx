import { useTranslation } from 'react-i18next';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTelegramPlane,
} from 'react-icons/fa';

const HeaderInfo = ({ isScrolled }) => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: FaFacebookF, link: 'https://facebook.com' },
    { icon: FaTelegramPlane, link: 'https://t.me/humo_med' },
    { icon: FaInstagram, link: 'https://instagram.com/humo_med_center' },
  ];

  return (
    <div
      className={`z-40 w-full bg-[var(--success-strong)] text-sm font-bold text-white transition-all duration-300 md:text-base lg:text-[18px] ${
        isScrolled ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-3 md:flex-row md:px-6'>
        <div className='hidden flex-col items-center gap-2 md:flex md:flex-row md:gap-6'>
          <div className='flex items-center gap-2'>
            <FaMapMarkerAlt />
            <span>{t('topbar.address')}</span>

          </div>
          <div className='flex items-center gap-2'>
            <FaPhoneAlt />
            <span>+998-78-777-03-03</span>
          </div>
          <div className='flex items-center gap-2'>
            <FaEnvelope />
            <span>humo@gmail.com</span>
          </div>
        </div>

        <div className='flex w-full items-center justify-center gap-3 md:w-auto md:justify-end'>
          {socialLinks.map(({ icon: Icon, link }, i) => (
            <a
              key={i}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full bg-white p-2 text-[var(--success-strong)] transition hover:bg-[var(--success-strong)] hover:text-white'
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
