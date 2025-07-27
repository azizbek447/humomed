import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';

import ru from '../assets/svg/russia.svg';
import en from '../assets/svg/us.svg';
import uz from '../assets/svg/uz.svg';
import logo from '../assets/images/logo.png';

const Header = ({ isScrolled }) => {
  const { i18n, t } = useTranslation();
  const location = useLocation();

  const [lang, setLang] = useState('uz');
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'uz';
    setLang(savedLang);
    i18n.changeLanguage(savedLang);
  }, [i18n]);

  const languages = [
    { code: 'uz', label: "O'zbekcha", icon: uz },
    { code: 'ru', label: 'Русский', icon: ru },
    { code: 'en', label: 'English', icon: en },
  ];

  const navLinks = [
    { path: '/', label: 'nav.home' },
    { path: '/about-clinic', label: 'nav.about' },
    {
      label: 'nav.departments',
     children: [
  { path: '/allservices/trauma-surgeon', label: 'nav.surgeon' },
  { path: '/allservices/cardiology', label: 'nav.cardiologist' },
  { path: '/allservices/therapist', label: 'nav.therapist' },
  { path: '/allservices/gastroenterologist', label: 'nav.gastroenterologist' },
  { path: '/allservices/endocrinologist', label: 'nav.endocrinologist' },
  { path: '/allservices/gynecologist', label: 'nav.gynecologist' },
  { path: '/allservices/rheumatologist', label: 'nav.rheumatologist' },
  { path: '/allservices/pulmonologist', label: 'nav.pulmonologist' },
  { path: '/allservices/infectiousdoc', label: 'nav.infectious' },
  { path: '/allservices/hepatologist', label: 'nav.hepatologist' },
  { path: '/allservices/allergist', label: 'nav.allergist' },
  { path: '/allservices/proctologist', label: 'nav.proctologist' },
  { path: '/allservices/otolaryngology', label: 'nav.ent' },
  { path: '/allservices/dermatologist', label: 'nav.dermatologist' },
  { path: '/allservices/neurologist', label: 'nav.neurologist' },
  { path: '/allservices/urologist', label: 'nav.urologist' },
  { path: '/allservices/pediatric-neuro', label: 'nav.child_neuro' },
  { path: '/allservices/pediatric-gastro', label: 'nav.child_gastro' },
  { path: '/allservices/pediatrician', label: 'nav.pediatrician' },
  { path: '/allservices/ultrasound', label: 'nav.usg' },
  { path: '/allservices/xray', label: 'nav.xray' },
  { path: '/allservices/physiotherapy', label: 'nav.physiotherapy' },
  { path: '/allservices/massage-therapy', label: 'nav.massage' },
  { path: '/allservices/procedure-room', label: 'nav.procedure_room' },
  { path: '/allservices/laboratory', label: 'nav.laboratory' },
  { path: '/allservices/operating-room', label: 'nav.operating_room' },
  { path: '/allservices/inpatient-ward', label: 'nav.inpatient' },
]


    },
    { path: '/Doctors', label: 'nav.doctors' },
    { path: '/news', label: 'nav.news' },
    { path: '/contacts', label: 'nav.contact' },
  ];

  const currentLang = languages.find((l) => l.code === lang);

  const handleLanguageChange = (code) => {
    setLang(code);
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
    setIsOpen(false);
    setMobileMenu(false);
  };

  const isActive = (path) => location.pathname === path;

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((item) =>
      item.children ? (
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
        >
          {t(item.label)}
        </Link>
      )
    );

  return (
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
                {languages.map((langItem) => (
                  <button
                    key={langItem.code}
                    onClick={() => handleLanguageChange(langItem.code)}
                    className="flex w-full items-center gap-2 px-3 py-2 text-sm font-semibold hover:bg-gray-100"
                  >
                    <img
                      src={langItem.icon}
                      alt={langItem.label}
                      className="h-4 w-6 object-cover"
                    />
                    <span>{langItem.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
