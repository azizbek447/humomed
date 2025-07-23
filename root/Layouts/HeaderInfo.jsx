import {
  FaInstagram, FaTelegramPlane, FaPhoneAlt,
  FaFacebookF, FaMapMarkerAlt, FaEnvelope
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const HeaderInfo = ({ isScrolled }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`bg-[var(--success-strong)] text-white text-sm md:text-base lg:text-[18px] font-bold transition-all duration-300 w-full z-40 
      ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-2">
        
        <div className="hidden md:flex flex-col md:flex-row gap-2 md:gap-6 items-center">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>{t('topbar.address')}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+998 90 123 45 67</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>info@humo.uz</span>
          </div>
        </div>

        <div className="flex justify-center md:justify-end w-full md:w-auto items-center gap-3">
          {[FaFacebookF, FaTelegramPlane, FaInstagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-2 rounded-full bg-white text-[var(--success-strong)] hover:bg-[var(--success-strong)] hover:text-white transition"
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
