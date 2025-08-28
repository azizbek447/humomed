import 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { appPaths } from 'root/constants/paths';

import servicesData from '../../constants/servicesData';
import Breadcrumb from '../../components/Breadcrumb.jsx';

const ClinicDirections = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-gray-50 px-4 py-40'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-4 text-left'>
          <Breadcrumb />
        </div>
        <h2 className='mb-4 text-center text-3xl font-semibold text-gray-800'>
          {t('clinic.title')}
        </h2>
        <div className='mx-auto mb-10 h-1 w-20 rounded bg-[var(--success-strong)]'></div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {Object.entries(servicesData(t)).map(([key, data]) => (
            <Link
              to={appPaths.SERVICE_DETAILS(key)}
              key={key}
              className='flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition hover:bg-gray-100 hover:shadow-md'
            >
              <div className='rounded-full bg-[var(--success-strong)]/10 p-2 text-2xl text-[var(--success-strong)]'>
                {data.icon}
              </div>
              <span className='text-lg font-medium text-gray-800'>{t(data.title)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicDirections;
