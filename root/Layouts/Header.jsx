import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { appPaths } from 'root/constants/paths';

import logo from '../assets/images/logo.png';
import ru from '../assets/svg/russia.svg';
import en from '../assets/svg/us.svg';
import uz from '../assets/svg/uz.svg';
import servicesData from '../constants/servicesData.jsx';

const Header = ({ isScrolled }) => {
  const { i18n, t } = useTranslation();
  const location = useLocation();

  const [lang, setLang] = useState('uz');
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [hoveredPath, setHoveredPath] = useState(null);

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
      children: Object.entries(servicesData(t)).map(([key, details]) => ({
        path: appPaths.SERVICE_DETAILS(key),
        label: details.title,
      })),
    },
    { path: '/Doctors', label: 'nav.doctors' },
    { path: '/news', label: 'nav.news' },
    { path: '/hospital', label: 'nav.hospital' },
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
              className='flex w-full items-center justify-between text-left text-base font-semibold text-black sm:text-[17px]'
              onClick={() =>
                setMobileDropdownOpen((prev) => (prev === item.label ? null : item.label))
              }
            >
              {t(item.label)}
              <span>{mobileDropdownOpen === item.label ? '▲' : '▼'}</span>
            </button>
            {mobileDropdownOpen === item.label && (
              <div className='mt-2 ml-3 space-y-1'>
                {item.children.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    className={`block rounded px-2 py-1 text-sm font-medium hover:bg-white sm:text-[15px] ${
                      isActive(child.path)
                        ? 'bg-[var(--success-light)] text-white'
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
            className='group relative'
            onMouseEnter={() => {
              clearTimeout(dropdownTimeout.current);
              setDropdown(true);
            }}
            onMouseLeave={() => {
              dropdownTimeout.current = setTimeout(() => setDropdown(false), 300);
            }}
          >
            <span className='cursor-pointer text-base font-semibold text-black hover:text-[var(--success-strong)] lg:text-[18px]'>
              {t(item.label)}
            </span>
            <div
              className={`absolute left-0 z-50 mt-2 w-40 rounded-md border bg-white shadow-lg transition-all duration-200 sm:w-52 ${
                dropdown ? 'visible opacity-100' : 'invisible opacity-0'
              }`}
            >
              {item.children.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  onMouseEnter={() => setHoveredPath(child.path)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold transition hover:bg-[var(--success-light)] ${
                    isActive(child.path) || hoveredPath === child.path
                      ? 'bg-[var(--success-light)] text-white'
                      : 'text-gray-800'
                  }`}
                >
                  {isActive(child.path) || hoveredPath === child.path ? (
                    <FaArrowLeft />
                  ) : (
                    <FaArrowRight />
                  )}
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
          className={`text-base font-semibold transition hover:text-[var(--success-strong)] lg:text-[18px] ${
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
      className={`fixed right-0 left-0 z-40 bg-white shadow-md transition-all duration-300 ${
        isScrolled ? 'top-0' : 'top-[50px]'
      }`}
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between px-2 py-3 sm:px-4'>
        <Link to='/'>
          <img
            src={logo}
            alt='Logo'
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'h-12' : 'h-16 sm:h-20'
            }`}
          />
        </Link>

        <div className='hidden items-center gap-3 md:flex lg:gap-6'>
          {renderNavLinks()}
          <div className='relative ml-3'>
            <button onClick={() => setIsOpen(!isOpen)} className='flex items-center'>
              <img
                src={currentLang.icon}
                alt={currentLang.label}
                className='h-4 w-6 object-cover'
              />
            </button>
            {isOpen && (
              <div className='absolute right-0 z-50 mt-2 w-36 rounded-md border bg-white text-black shadow-md sm:w-44'>
                {languages.map((langItem) => (
                  <button
                    key={langItem.code}
                    onClick={() => handleLanguageChange(langItem.code)}
                    className='flex w-full items-center gap-2 px-3 py-2 text-sm font-semibold hover:bg-gray-100'
                  >
                    <img
                      src={langItem.icon}
                      alt={langItem.label}
                      className='h-4 w-6 object-cover'
                    />
                    <span>{langItem.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          className='ml-4 text-2xl text-[var(--success-strong)] md:hidden'
          onClick={() => {
            setMobileMenu((prev) => !prev);
            setMobileDropdownOpen(null);
          }}
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenu && (
        <div className='flex flex-col gap-3 bg-white px-3 pb-4 text-gray-800 md:hidden'>
          {renderNavLinks(true)}
          <div className='mt-3'>
            {languages.map((langItem) => (
              <button
                key={langItem.code}
                onClick={() => handleLanguageChange(langItem.code)}
                className='flex items-center gap-2 px-3 py-2 text-sm font-semibold hover:bg-gray-100'
              >
                <img src={langItem.icon} alt={langItem.label} className='h-4 w-6 object-cover' />
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
