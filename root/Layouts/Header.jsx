import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaInstagram, FaTelegramPlane, FaPhoneAlt, FaFacebookF,
  FaBars, FaTimes, FaMapMarkerAlt, FaEnvelope
} from 'react-icons/fa';

import ru from '../assets/svg/russia.svg';
import en from '../assets/svg/us.svg';
import uz from '../assets/svg/uz.svg';
import logo from '../assets/images/logo.png';

const Header = () => {
  const { i18n, t } = useTranslation();
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

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about-clinic', label: t('nav.about') },
    {
      label: t('nav.departments'),
      children: [
        { path: '/cardiology', label: t('nav.cardio') },
        { path: '/neurosurgery', label: t('nav.neuro') },
        { path: '/physiotherapy', label: t('nav.uro') },
        { path: '/otolaryngology', label: t('nav.gyn') },
        { path: '/orthopedics', label: t('nav.derma') },
      ],
    },
    { path: '/Doctors', label: t('nav.doctors') },
    { path: '/news', label: t('nav.news') },
    { path: '/residency', label: t('nav.residency') },
    { path: '/contacts', label: t('nav.contact') },
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

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenu]);

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

  const renderNavLinks = () => (
    navLinks.map((item) => (
      item.children ? (
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="hover:text-green-800 transition cursor-pointer">
            {t(item.label)}
          </span>
          <div className={`absolute left-0 mt-2 w-56 bg-white border shadow-lg rounded-md z-50 transition-all duration-200 ease-in-out ${dropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}`}>
            {item.children.map((child) => (
              <Link key={child.path} to={child.path} className="block px-4 py-2 hover:bg-green-100">
                {t(child.label)}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Link key={item.path} to={item.path} className="hover:text-green-600 transition">
          {t(item.label)}
        </Link>
      )
    ))
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-medium text-[17px] bg-white shadow-sm">
      {/* Top bar for large screens */}
      {showTopBar && (
        <div className="bg-green-600 text-white py-2 px-6  hidden lg:flex justify-between  text-sm">
  <div className="flex items-center gap-6">
    <div className="flex ml-30 text-[18px] items-center gap-2">
              <FaMapMarkerAlt /> <span>{t('topbar.address')}</span>
            </div>
            <div className="flex items-center  text-[18px] gap-2">
              <FaPhoneAlt /> <span>+998 90 123 45 67</span>
            </div>
            <div className="flex items-center  text-[18px] gap-2">
              <FaEnvelope /> <span>info@humo.uz</span>
            </div>
          </div>
          <div className="flex gap-4 mr-30">
            {[FaFacebookF, FaTelegramPlane, FaInstagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="p-2 rounded-full bg-white  text-green-600 hover:bg-green-700 hover:text-white">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Top bar for mobile */}
      {showTopBar && (
        <div className="bg-green-600 text-white py-2 px- flex justify-center items-center lg:hidden">
          <div className="flex gap-4">
            {[FaFacebookF, FaTelegramPlane, FaInstagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="p-2 rounded-full bg-white text-green-600 hover:bg-green-700 hover:text-white">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Main nav */}
      <div className="shadow-md">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-gray-800 items-center">
            {renderNavLinks()}
          </div>

          {/* Language Switcher */}
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

          {/* Mobile burger */}
          <button
            className="md:hidden ml-4 text-2xl text-green-700"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white text-gray-800">
            {renderNavLinks()}
            <div className="mt-4 border-t pt-4">
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
