import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaHeart, FaBrain, FaBaby, FaStethoscope, FaLungs,
  FaUserMd, FaNotesMedical, FaVial, FaUserNurse,
  FaUserInjured, FaProcedures, FaVenus, FaXRay,
  FaHospitalUser, FaHands, FaMicroscope, FaBed,
  FaUserPlus, FaSyringe, FaDiagnoses, FaTooth
} from 'react-icons/fa';

const services = [
  { path: '/trauma-surgeon', key: 'surgeon', icon: <FaUserInjured /> },
  { path: '/cardiology', key: 'cardiologist', icon: <FaHeart /> },
  { path: '/therapist', key: 'therapist', icon: <FaUserMd /> },
  { path: '/gastroenterologist', key: 'gastroenterologist', icon: <FaLungs /> },
  { path: '/endocrinologist', key: 'endocrinologist', icon: <FaDiagnoses /> },
  { path: '/gynecologist', key: 'gynecologist', icon: <FaVenus /> },
  { path: '/rheumatologist', key: 'rheumatologist', icon: <FaHands /> },
  { path: '/pulmonologist', key: 'pulmonologist', icon: <FaLungs /> },
  { path: '/infectiousdoc', key: 'infectious', icon: <FaUserMd /> },
  { path: '/hepatologist', key: 'hepatologist', icon: <FaUserNurse /> },
  { path: '/allergist', key: 'allergist', icon: <FaVial /> },
  { path: '/proctologist', key: 'proctologist', icon: <FaProcedures /> },
  { path: '/otolaryngology', key: 'ent', icon: <FaStethoscope /> },
  { path: '/dermatologist', key: 'dermatologist', icon: <FaNotesMedical /> },
  { path: '/neurologist', key: 'neurologist', icon: <FaBrain /> },
  { path: '/urologist', key: 'urologist', icon: <FaUserMd /> },
  { path: '/pediatric-neuro', key: 'child_neuro', icon: <FaBaby /> },
  { path: '/pediatric-gastro', key: 'child_gastro', icon: <FaBaby /> },
  { path: '/pediatrician', key: 'pediatrician', icon: <FaBaby /> },
  { path: '/ultrasound', key: 'usg', icon: <FaMicroscope /> },
  { path: '/xray', key: 'xray', icon: <FaXRay /> },
  { path: '/physiotherapy', key: 'physiotherapy', icon: <FaHands /> },
  { path: '/massage-therapy', key: 'massage', icon: <FaUserPlus /> },
  { path: '/procedure-room', key: 'procedure_room', icon: <FaSyringe /> },
  { path: '/laboratory', key: 'laboratory', icon: <FaMicroscope /> },
  { path: '/operating-room', key: 'operating_room', icon: <FaProcedures /> },
  { path: '/inpatient-ward', key: 'inpatient', icon: <FaBed /> },
];


const ClinicDirections = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 py-35 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          {t('clinic.title')}
        </h2>
        <div className="mx-auto mb-10 h-1 w-20 rounded bg-[var(--success-strong)]"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm hover:shadow-md hover:bg-gray-100 transition"
            >
              <div className="p-2 bg-[var(--success-strong)]/10 rounded-full text-[var(--success-strong)] text-2xl">
                {item.icon}
              </div>
              <span className="text-lg font-medium text-gray-800">{t(`clinic.${item.key}`)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicDirections;
