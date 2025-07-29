import 'react-phone-input-2/lib/style.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  FaArrowLeft,
  FaArrowRight,
  FaClock,
  FaEnvelope,
  FaPaperPlane,
  FaPhone,
  FaSpinner,
} from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import { Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { appPaths } from '../../constants/paths.js';
import { SERVICE_LIST } from '../../constants/servicesData.jsx';

const ThreePartMedicalForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required(t('form.name_required')),
        email: yup.string().email(t('form.email_invalid')).required(t('form.email_required')),
        phone: yup.string().min(11, t('form.phone_invalid')).required(t('form.phone_required')),
        comment: yup.string(),
      })
    ),
  });

  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showAllServices, setShowAllServices] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const visibleServicesCount = 6;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowAllServices(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    Swal.fire({
      icon: 'success',
      title: t('form.success_title'),
      text: t('form.success_message'),
      confirmButtonColor: '#0084D1',
    });

    setIsSubmitting(false);
    reset();
  };

  return (
    <div className='mx-auto w-full max-w-md space-y-6 px-4 pt-32 text-sm text-gray-700 md:max-w-lg lg:max-w-3xl'>
      {/* Services List */}
      <div className='rounded-xl border border-gray-200 bg-white shadow-md'>
        <h3 className='border-b p-4 text-lg font-semibold'>{t('form.all_departments')}</h3>
        <ul>
          {SERVICE_LIST.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isActive = location.pathname === appPaths.SERVICE_DETAILS(item.key);
            const shouldShow = showAllServices || index < visibleServicesCount;
            if (!shouldShow) return null;

            return (
              <li
                key={item.path}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`border-t transition duration-200 ease-in-out ${
                  isHovered || isActive
                    ? 'bg-[var(--success-strong)] text-white'
                    : 'text-gray-700 hover:bg-[var(--success-strong)] hover:text-white'
                }`}
              >
                <Link
                  to={appPaths.SERVICE_DETAILS(item.key)}
                  className='flex items-center gap-2 px-4 py-2 text-base'
                >
                  {isHovered || isActive ? <FaArrowLeft /> : <FaArrowRight />}
                  <span className='truncate'>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {isMobile && SERVICE_LIST.length > visibleServicesCount && (
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

      {/* Schedule and Contact */}
      <div className='rounded-xl bg-[var(--success-strong)] text-white shadow-md'>
        <div className='border-b border-white/30 px-4 py-3'>
          <h3 className='mb-1 text-lg font-bold'>{t('form.schedule')}</h3>
          <div className='flex items-center space-x-2'>
            <FaClock />
            <span>{t('form.open_hours')}</span>
          </div>
        </div>
        <div className='px-4 py-3'>
          <h3 className='mb-1 text-lg font-bold'>{t('form.contacts')}</h3>
          <div className='space-y-1'>
            <div className='flex items-center gap-2'>
              <FaPhone />
              <span>+998 55 5010303</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaPhone />
              <span>1210</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaEnvelope />
              <a
                href='mailto:pmstashkent@gmail.com'
                className='underline hover:text-[var(--success-strong)]'
              >
                pmstashkent@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ask Question Form */}
      <div className='rounded-xl bg-white p-4 shadow-md'>
        <h3 className='mb-4 text-lg font-bold'>{t('form.ask_question')}</h3>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4' noValidate>
          <div>
            <label className='mb-2 block font-medium'>
              {t('form.name')} <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              placeholder={t('form.enter_name')}
              {...register('name')}
              className={`w-full rounded-lg border px-4 py-3 ${
                errors.name ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.name && <p className='mt-1 text-sm text-red-500'>{errors.name.message}</p>}
          </div>

          <div>
            <label className='mb-2 block font-medium'>
              {t('form.email')} <span className='text-red-500'>*</span>
            </label>
            <input
              type='email'
              placeholder={t('form.enter_email')}
              {...register('email')}
              className={`w-full rounded-lg border px-4 py-3 ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.email && <p className='mt-1 text-sm text-red-500'>{errors.email.message}</p>}
          </div>

          <div>
            <label className='mb-2 block font-medium'>
              {t('form.phone')} <span className='text-red-500'>*</span>
            </label>
            <Controller
              name='phone'
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  inputRef={field.ref}
                  country='uz'
                  onlyCountries={['uz']}
                  countryCodeEditable={false}
                  masks={{ uz: '.. ...-..-..' }}
                  placeholder={t('form.phone_placeholder')}
                  inputStyle={{
                    width: '100%',
                    padding: '24px',
                    paddingLeft: '50px',
                    borderRadius: '0.5rem',
                    borderColor: errors.phone ? 'red' : '#e5e7eb',
                    backgroundColor: '#f9fafb',
                  }}
                  buttonStyle={{
                    borderTopLeftRadius: '0.5rem',
                    borderBottomLeftRadius: '0.5rem',
                    borderColor: '#e5e7eb',
                    backgroundColor: '#f9fafb',
                  }}
                  containerStyle={{ width: '100%' }}
                />
              )}
            />
            {errors.phone && <p className='mt-1 text-sm text-red-500'>{errors.phone.message}</p>}
          </div>

          <div>
            <label className='mb-2 block font-medium'>{t('form.comment')}</label>
            <textarea
              rows={4}
              placeholder={t('form.enter_comment')}
              {...register('comment')}
              className='w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 placeholder-gray-400'
            />
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--success-strong)] px-4 py-3 text-white transition hover:opacity-90 disabled:opacity-50'
          >
            {isSubmitting ? (
              <>
                <FaSpinner className='animate-spin' /> {t('form.sending')}
              </>
            ) : (
              <>
                {t('form.send')} <FaPaperPlane />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ThreePartMedicalForm;
