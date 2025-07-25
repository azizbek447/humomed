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
<<<<<<< HEAD
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
=======
  { path: '/hirurg-travmatolog', label: 'nav.hirurgTravmatolog' },
  { path: '/kardiolog', label: 'nav.kardiolog' },
  { path: '/terapevt', label: 'nav.terapevt' },
  { path: '/gastroenterolog', label: 'nav.gastroenterolog' },
  { path: '/endokrinolog', label: 'nav.endokrinolog' },
  { path: '/ginekolog', label: 'nav.ginekolog' },
  { path: '/revmatolog', label: 'nav.revmatolog' },
  { path: '/pulmonolog', label: 'nav.pulmonolog' },
  { path: '/infeksionist', label: 'nav.infeksionist' },
  { path: '/gepatolog', label: 'nav.gepatolog' },
  { path: '/allergolog', label: 'nav.allergolog' },
  { path: '/pragtolog', label: 'nav.pragtolog' },
  { path: '/lor', label: 'nav.lor' },
  { path: '/dermatolog', label: 'nav.dermatolog' },
  { path: '/nevropatolog', label: 'nav.nevropatolog' },
  { path: '/urolog', label: 'nav.urolog' },
  { path: '/detskiy-nevropatolog', label: 'nav.detskiyNevropatolog' },
  { path: '/detskiy-gastroenterolog', label: 'nav.detskiyGastroenterolog' },
  { path: '/pediator', label: 'nav.pediator' },
  { path: '/uzd', label: 'nav.uzd' },
  { path: '/rentgen', label: 'nav.rentgen' },
  { path: '/fizioterapiya', label: 'nav.fizioterapiya' },
  { path: '/massaj', label: 'nav.massaj' },
  { path: '/procedurniy', label: 'nav.procedurniy' },
  { path: '/laboratoriya', label: 'nav.laboratoriya' },
  { path: '/oper-block', label: 'nav.operBlock' },
  { path: '/statsionar', label: 'nav.statsionar' },
]

    },
    { path: '/Doctors', label: 'nav.doctors' },
    { path: '/news', label: 'nav.news' },
    { path: '/contacts', label: 'nav.contact' },
>>>>>>> ec83732 (Bo'lim yangilandi)
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
<<<<<<< HEAD
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
=======
        isMobile ? (
          <div key={item.label}>
            <button
              className="w-full text-left text-base sm:text-[17px] font-semibold text-black flex justify-between items-center"
              onClick={() =>
                setMobileDropdownOpen((prev) =>
                  prev === item.label ? null : item.label
                )
              }
            >
              {t(item.label)}
              <span>{mobileDropdownOpen === item.label ? '▲' : '▼'}</span>
            </button>
            {mobileDropdownOpen === item.label && (
              <div className="ml-3 mt-2 space-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    className={`block text-sm sm:text-[15px] font-medium px-2 py-1 rounded hover:bg-[var(--success-light)] ${
                      isActive(child.path)
                        ? 'text-[var(--success-strong)] bg-[var(--success-light)]'
                        : 'text-gray-800'
                    }`}
                    onClick={() => setMobileMenu(false)}
                  >
                    {t(child.label)}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div
            key={item.label}
            className="relative group"
            onMouseEnter={() => {
              clearTimeout(dropdownTimeout.current);
              setDropdown(true);
            }}
            onMouseLeave={() => {
              dropdownTimeout.current = setTimeout(() => setDropdown(false), 300);
            }}
          >
            <span className="cursor-pointer text-base lg:text-[18px] font-semibold hover:text-[var(--success-strong)] text-black">
              {t(item.label)}
            </span>
            <div
              className={`absolute left-0 mt-2 w-40 sm:w-52 bg-white border shadow-lg rounded-md z-50 transition-all duration-200 ${
                dropdown ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              {item.children.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  className={`block px-4 py-2 text-sm font-semibold hover:bg-[var(--success-light)] transition ${
                    isActive(child.path)
                      ? 'bg-[var(--success-light)] text-[var(--success-strong)]'
                      : 'text-gray-800'
                  }`}
                >
                  {t(child.label)}
                </Link>
              ))}
            </div>
          </div>
        )
      ) : (
        <Link
          key={item.path}
          to={item.path}
          className={`text-base lg:text-[18px] font-semibold transition hover:text-[var(--success-strong)] ${
            isActive(item.path) ? 'text-[var(--success-strong)]' : 'text-black'
          }`}
          onClick={() => isMobile && setMobileMenu(false)}
>>>>>>> ec83732 (Bo'lim yangilandi)
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
<<<<<<< HEAD
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
=======
    <nav
      className={`fixed left-0 right-0 bg-white z-40 transition-all duration-300 shadow-md ${
        isScrolled ? 'top-0' : 'top-[50px]'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-2 sm:px-4 py-3">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'h-12' : 'h-16 sm:h-20'
            }`}
          />
        </Link>

        <div className="hidden md:flex gap-3 lg:gap-6 items-center">
          {renderNavLinks()}
          <div className="relative ml-3">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
              <img
                src={currentLang.icon}
                alt={currentLang.label}
                className="h-4 w-6 object-cover"
              />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-36 sm:w-44 bg-white border shadow-md rounded-md z-50 text-black">
>>>>>>> ec83732 (Bo'lim yangilandi)
                {languages.map((langItem) => (
                  <button
                    key={langItem.code}
                    onClick={() => handleLanguageChange(langItem.code)}
<<<<<<< HEAD
                    className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100"
=======
                    className="flex w-full items-center gap-2 px-3 py-2 text-sm font-semibold hover:bg-gray-100"
>>>>>>> ec83732 (Bo'lim yangilandi)
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

<<<<<<< HEAD
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
=======
        <button
          className="md:hidden ml-4 text-2xl text-[var(--success-strong)]"
          onClick={() => {
            setMobileMenu((prev) => !prev);
            setMobileDropdownOpen(null);
          }}
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenu && (
        <div className="flex flex-col gap-3 px-3 pb-4 bg-white text-gray-800 md:hidden">
          {renderNavLinks(true)}
          <div className="mt-3">
            {languages.map((langItem) => (
              <button
                key={langItem.code}
                onClick={() => handleLanguageChange(langItem.code)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold hover:bg-gray-100"
              >
                <img
                  src={langItem.icon}
                  alt={langItem.label}
                  className="h-4 w-6 object-cover"
                />
                <span>{langItem.label}</span>
              </button>
            ))}
>>>>>>> ec83732 (Bo'lim yangilandi)
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
