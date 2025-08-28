import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

import { appPaths } from '../constants/paths.js';
import servicesData from '../constants/servicesData.jsx';

const ServicesList = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showAllServices, setShowAllServices] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const visibleServicesCount = 6;

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setShowAllServices(!mobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = useMemo(() => servicesData(t) ?? {}, [t]);

  return (
    <div className='rounded-xl border border-gray-200 bg-white shadow-md'>
      <h3 className='border-b p-4 text-lg font-semibold'>{t('form.all_departments')}</h3>
      <ul>
        {Object.entries(services).map(([key, details], index) => {
          const isHovered = hoveredIndex === index;
          const isActive = location.pathname === appPaths.SERVICE_DETAILS(key);
          const shouldShow = showAllServices || index < visibleServicesCount;
          if (!shouldShow) return null;

          return (
            <li
              key={key}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`border-t transition duration-200 ease-in-out ${
                isHovered || isActive
                  ? 'bg-[var(--success-strong)] text-white'
                  : 'text-gray-700 hover:bg-[var(--success-strong)] hover:text-white'
              }`}
            >
              <Link
                to={appPaths.SERVICE_DETAILS(key)}
                className='flex items-center gap-2 px-4 py-2 text-base'
              >
                {isHovered || isActive ? <FaArrowLeft /> : <FaArrowRight />}
                <span className='truncate'>{details.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {isMobile && Object.entries(services).length > visibleServicesCount && (
        <div className='border-t p-4 text-center'>
          <button
            onClick={() => setShowAllServices((prev) => !prev)}
            className='text-[var(--success-strong)] underline'
          >
            {showAllServices ? t('form.hide_services') : t('form.show_all_services')}
          </button>
        </div>
      )}
    </div>
  );
};

export default ServicesList;
