import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom'; 
import Humomed from '../../assets/images/logo.png';

const Header = () => {
  const { t } = useTranslation(); 
  const [isTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('Home') },
    { path: '/residency', label: t('Clinical Residency') },
    { path: '/submission', label: t('Submission Form') },
    { path: '/contacts', label: t('Contact') },
  ];
  

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 bg-white transition-all duration-300 ${
        isTop ? 'bg-transparent shadow-none' : 'bg-white shadow-md'
      }`}
    >
      <div className='mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 md:px-6'>
        <div className='flex-shrink-0'>
          <Link to='/'>
            <img
              src={Humomed}
              alt='logo'
              className='h-12 w-auto object-contain transition-all duration-300'
            />
          </Link>
        </div>

        <div className='hidden items-center space-x-8 text-[16px] font-medium md:flex'>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition ${
                location.pathname === item.path
                  ? 'text-[var(--success-strong)]'
                  : 'text-gray-800 hover:text-[var(--success-strong)]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className='md:hidden'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-gray-800 focus:outline-none'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {menuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className='bg-white px-4 pt-2 pb-4 text-[16px] font-medium shadow-md md:hidden'>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block py-2 transition ${
                location.pathname === item.path
                  ? 'text-[var(--success-strong)]'
                  : 'text-gray-800 hover:text-[var(--success-strong)]'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
