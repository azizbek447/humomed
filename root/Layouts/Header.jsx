import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaInstagram,
  FaTelegramPlane,
  FaPhoneAlt,
  FaFacebookF,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import ru from '../assets/svg/russia.svg';
import en from '../assets/svg/us.svg';
import uz from '../assets/svg/uz.svg';
import logo from '../assets/images/logo.png';

const Header = () => {
  const { i18n } = useTranslation();
  const [showTopBar, setShowTopBar] = useState(true);
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'uz');
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const langRef = useRef(null);
  const dropdownTimeout = useRef(null);

  const languages = [
    { code: 'uz', label: "O'zbekcha", icon: uz },
    { code: 'ru', label: 'Русский', icon: ru },
    { code: 'en', label: 'English', icon: en },
  ];

  const handleLanguageChange = (code) => {
    setLang(code);
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY < 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentLang = languages.find((l) => l.code === lang);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdown(false);
    }, 300);
  };

  const navLinks = (
    <>
      <Link to="/" className="hover:text-green-600 transition">Bosh sahifa</Link>
      <Link to="/about" className="hover:text-green-600 transition">Klinika haqida</Link>

      <div
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="hover:text-green-800 transition cursor-pointer">Bo‘limlar</span>
        <div className={`absolute left-0 mt-2 w-56 bg-white border shadow-lg rounded-md z-50 transition-all duration-200 ${dropdown ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <Link to="/departments/cardiology" className="block px-4 py-2 hover:bg-green-50">Kardiologiya</Link>
          <Link to="/departments/neurology" className="block px-4 py-2 hover:bg-green-50">Nevrologiya</Link>
          <Link to="/departments/urology" className="block px-4 py-2 hover:bg-green-50">Urologiya</Link>
          <Link to="/departments/gynecology" className="block px-4 py-2 hover:bg-green-50">Ginekologiya</Link>
          <Link to="/departments/dermatology" className="block px-4 py-2 hover:bg-green-50">Dermatologiya</Link>
        </div>
      </div>

      <Link to="/doctors" className="hover:text-green-600 transition">Shifokorlar</Link>
      <Link to="/news" className="hover:text-green-600 transition">Yangiliklar</Link>
      <Link to="/residency" className="hover:text-green-600 transition">Ordinatura</Link>
      <Link to="/contact" className="hover:text-green-600 transition">Kontakt</Link>
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 text-[18px] font-medium">
      {showTopBar && (
        <div className="bg-green-600 text-white py-2 px-4 flex justify-center items-center">
          <div className="flex gap-4">
            {[FaFacebookF, FaTelegramPlane, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white text-green-600 hover:bg-green-700 hover:text-white transition-colors duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white shadow-md">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center px-6 py-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex gap-8 text-gray-800">
            {navLinks}
          </div>

          <div className="relative hidden md:block ml-4" ref={langRef}>
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-1 hover:border-green-900">
              <img src={currentLang.icon} alt={currentLang.label} className="h-4 w-6 object-cover" />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-1 w-44 rounded-md border bg-white shadow-md z-50">
                {languages.map((langItem) => (
                  <button
                    key={langItem.code}
                    onClick={() => handleLanguageChange(langItem.code)}
                    className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    <img src={langItem.icon} alt={langItem.label} className="h-4 w-6 object-cover" />
                    <span>{langItem.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="md:hidden ml-4 text-2xl text-green-700"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white text-gray-800">
            {navLinks}
            <div className="mt-4">
              {languages.map((langItem) => (
                <button
                  key={langItem.code}
                  onClick={() => handleLanguageChange(langItem.code)}
                  className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100"
                >
                  <img src={langItem.icon} alt={langItem.label} className="h-4 w-6 object-cover" />
                  <span>{langItem.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
