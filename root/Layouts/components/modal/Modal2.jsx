'use client';

import { Info, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Modal2 = ({ onClose }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    employeeCount: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'employeeCount' && value && !/^\d*$/.test(value)) return;
    if (name === 'phoneNumber' && value && !/^\d*$/.test(value.replace(/\s/g, ''))) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: null,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = t('error.required');
    if (!formData.companyName.trim()) newErrors.companyName = t('error.required');
    if (!formData.employeeCount.trim()) newErrors.employeeCount = t('error.required');
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = t('error.required');

    if (formData.employeeCount && !/^\d+$/.test(formData.employeeCount)) {
      newErrors.employeeCount = t('error.onlyNumbers');
    }

    if (formData.phoneNumber && !/^\d+$/.test(formData.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = t('error.onlyNumbers');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log('Modal2 form submitted:', formData);

    onClose();
  };

  return (
    <div
      className='fixed inset-0 z-[1050] flex items-center justify-center bg-black/30 p-4'
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className='w-full max-w-md overflow-hidden rounded-lg bg-white shadow-xl'>
        {/* Header */}
        <div className='flex items-center justify-between bg-indigo-500 px-6 py-4 text-white'>
          <h2 className='text-lg font-semibold'>{t('modal2.title')}</h2>
          <button
            onClick={onClose}
            className='rounded text-white transition-colors hover:text-indigo-200'
            aria-label={t('modal2.close')}
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className='px-6 py-6'>
          <p className='mb-6 text-center font-medium text-gray-700'>{t('modal2.description')}</p>

          <form onSubmit={handleSubmit} className='space-y-5' noValidate>
            {/* Full Name */}
            <div>
              <label htmlFor='fullName' className='mb-2 block text-sm font-medium text-gray-700'>
                {t('modal2.fullName')} <span className='text-red-500'>*</span>
              </label>
              <input
                id='fullName'
                name='fullName'
                type='text'
                placeholder={t('modal2.fullNamePlaceholder')}
                value={formData.fullName}
                onChange={handleChange}
                required
                aria-invalid={errors.fullName ? 'true' : 'false'}
                aria-describedby='fullName-error'
                className={`w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.fullName && (
                <p id='fullName-error' className='mt-1 text-xs text-red-500'>
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor='companyName' className='mb-2 block text-sm font-medium text-gray-700'>
                {t('modal2.companyName')} <span className='text-red-500'>*</span>
              </label>
              <input
                id='companyName'
                name='companyName'
                type='text'
                placeholder={t('modal2.companyNamePlaceholder')}
                value={formData.companyName}
                onChange={handleChange}
                required
                aria-invalid={errors.companyName ? 'true' : 'false'}
                aria-describedby='companyName-error'
                className={`w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
                  errors.companyName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.companyName && (
                <p id='companyName-error' className='mt-1 text-xs text-red-500'>
                  {errors.companyName}
                </p>
              )}
            </div>

            {/* Employee Count */}
            <div>
              <label
                htmlFor='employeeCount'
                className='mb-2 block text-sm font-medium text-gray-700'
              >
                {t('modal2.employeeCount')} <span className='text-red-500'>*</span>
              </label>
              <input
                id='employeeCount'
                name='employeeCount'
                type='text'
                placeholder={t('modal2.employeeCountPlaceholder')}
                value={formData.employeeCount}
                onChange={handleChange}
                required
                aria-invalid={errors.employeeCount ? 'true' : 'false'}
                aria-describedby='employeeCount-error'
                className={`w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
                  errors.employeeCount ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.employeeCount && (
                <p id='employeeCount-error' className='mt-1 text-xs text-red-500'>
                  {errors.employeeCount}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor='phoneNumber' className='mb-2 block text-sm font-medium text-gray-700'>
                {t('modal2.phoneNumber')} <span className='text-red-500'>*</span>
              </label>
              <div className='flex'>
                <div className='flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-700 select-none'>
                  +998
                </div>
                <input
                  id='phoneNumber'
                  name='phoneNumber'
                  type='tel'
                  placeholder={t('modal2.phoneNumberPlaceholder')}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  aria-invalid={errors.phoneNumber ? 'true' : 'false'}
                  aria-describedby='phoneNumber-error'
                  className={`flex-1 rounded-r-md border px-3 py-2 text-sm placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
                    errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              <div className='mt-2 flex items-center text-sm text-indigo-600'>
                <Info size={16} className='mr-2 flex-shrink-0' />
                <span>{t('modal2.smsInfo')}</span>
              </div>
              {errors.phoneNumber && (
                <p id='phoneNumber-error' className='mt-1 text-xs text-red-500'>
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Submit button */}
            <button
              type='submit'
              className='mt-6 w-full rounded-lg bg-indigo-600 py-3 font-medium text-white transition-colors hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none'
            >
              {t('modal2.register')}
            </button>
          </form>

          {/* Login link */}
          <div className='mt-6 text-center text-sm text-gray-600'>
            {t('modal2.alreadyRegistered')}{' '}
            <button
              type='button'
              onClick={() => console.log('Navigate to login')}
              className='font-medium text-indigo-600 hover:text-indigo-700 hover:underline'
            >
              {t('modal2.login')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
