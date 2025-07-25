import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaHeart, FaBrain, FaBaby, FaStethoscope, FaLungs,
  FaUserMd, FaNotesMedical, FaVial, FaUserNurse,
  FaUserInjured, FaProcedures, FaVenus
} from 'react-icons/fa';

const services = [
  { path: '/allergist', titleKey: 'services.allergology', icon: <FaVial /> },
  { path: '/androlog', titleKey: 'services.andrology', icon: <FaUserMd /> },
  { path: '/bariatr', titleKey: 'services.bariatrics', icon: <FaProcedures /> },
  { path: '/gastroenterologist', titleKey: 'services.gastroenterology', icon: <FaLungs /> },
  { path: '/gynecologist', titleKey: 'services.gynecology', icon: <FaVenus /> },
  { path: '/dermatologist', titleKey: 'services.dermatology', icon: <FaNotesMedical /> },
  { path: '/pediatric-dentist', titleKey: 'services.pediatric_dentistry', icon: <FaBaby /> },
  { path: '/cardiology', titleKey: 'services.cardiology', icon: <FaHeart /> },
  { path: '/otolaryngology', titleKey: 'services.ent', icon: <FaStethoscope /> },
  { path: '/mammologist', titleKey: 'services.mammology', icon: <FaUserNurse /> },
  { path: '/neurologist', titleKey: 'services.neurology', icon: <FaBrain /> },
  { path: '/neurosurgery', titleKey: 'services.neurosurgery', icon: <FaUserInjured /> },
];

const OurServices = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          {t('ourServices.title')}
        </h2>
        <div className="mx-auto mb-10 h-1 w-20 rounded bg-[var(--success-strong)]"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((item, index) => (
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
