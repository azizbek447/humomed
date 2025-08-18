import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { appPaths } from '../../constants/paths';
import servicesData from '../../constants/servicesData'; // default import

const OurServices = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allServicesArray = Object.entries(servicesData(t));
  const visibleServices = isMobile ? allServicesArray.slice(0, 6) : allServicesArray.slice(0, 12);

  return (
    <div className='bg-gray-50 px-4 py-10'>
      <div className='mx-auto max-w-7xl'>
        <h2 className='mb-4 text-center text-3xl font-semibold text-gray-800'>
          {t('ourServices.title')}
        </h2>
        <div className='mx-auto mb-10 h-1 w-20 rounded bg-[var(--success-strong)]'></div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          {visibleServices.map(([key, item]) => (
            <Link
              to={appPaths.SERVICE_DETAILS(key)}
              key={key}
              className='flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition hover:bg-gray-100 hover:shadow-md'
            >
              <div className='rounded-full bg-[var(--success-strong)]/10 p-2 text-2xl text-[var(--success-strong)]'>
                {item.icon}
              </div>
              <span className='text-lg font-medium text-gray-800'>{t(item.title)}</span>
            </Link>
          ))}
        </div>

        <div className='mt-10 flex justify-center'>
          <Link
            to='/allservices'
            className='rounded-lg bg-[var(--success-strong)] px-6 py-3 font-medium text-white transition hover:bg-[var(--success-strong)]/90'
          >
            {t('ourServices.all')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
