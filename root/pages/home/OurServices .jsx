import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaHeart, FaBrain, FaBaby, FaStethoscope, FaLungs,
  FaUserMd, FaNotesMedical, FaVial, FaUserNurse,
  FaUserInjured, FaProcedures, FaVenus
} from 'react-icons/fa';



const services = [
  { path: '/service/allergist', titleKey: 'services.allergist', icon: <FaVial /> },
  { path: '/service/urologist', titleKey: 'services.androlog', icon: <FaUserMd /> },
  { path: '/service/trauma-surgeon', titleKey: 'services.bariatr', icon: <FaProcedures /> },
  { path: '/service/gastroenterologist', titleKey: 'services.gastro', icon: <FaLungs /> },
  { path: '/service/gynecologist', titleKey: 'services.gynecologist', icon: <FaVenus /> },
  { path: '/service/dermatologist', titleKey: 'services.dermatologist', icon: <FaNotesMedical /> },
  { path: '/service/pediatrician', titleKey: 'services.pediatricDentist', icon: <FaBaby /> },
  { path: '/service/cardiology', titleKey: 'services.cardiology', icon: <FaHeart /> },
  { path: '/service/otolaryngology', titleKey: 'services.ent', icon: <FaStethoscope /> },
  { path: '/service/mammologist', titleKey: 'services.mammologist', icon: <FaUserNurse /> },
  { path: '/service/neurologist', titleKey: 'services.neurologist', icon: <FaBrain /> },
  { path: '/service/neurosurgery', titleKey: 'services.neurosurgery', icon: <FaUserInjured /> },
];
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

  const visibleServices = isMobile ? services.slice(0, 6) : services;

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          {t('ourServices.title')}
        </h2>
        <div className="mx-auto mb-10 h-1 w-20 rounded bg-[var(--success-strong)]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleServices.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm hover:shadow-md hover:bg-gray-100 transition"
            >
              <div className="p-2 bg-[var(--success-strong)]/10 rounded-full text-[var(--success-strong)] text-2xl">
                {item.icon}
              </div>
              <span className="text-lg font-medium text-gray-800">
                {t(item.titleKey)}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/allservices"
            className="px-6 py-3 bg-[var(--success-strong)] text-white font-medium rounded-lg hover:bg-[var(--success-strong)]/90 transition"
          >
            {t('ourServices.all')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
