import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import doktorImage from '../../assets/img/img_2-removebg-preview.png';
import responsiveImage from '../../assets/img/image.png';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const HaveAQuestion = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required(t('question.errors.name')),
    phone: yup.string().required(t('question.errors.phone')).min(12, t('question.errors.phoneMin')),
    comment: yup.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log('Submitting:', data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    reset();
    setIsSubmitting(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className='mx-auto max-w-7xl px-4 py-10'>
      <h2 className='mb-4 text-center text-3xl font-semibold text-gray-800'>{t('question.title')}</h2>
      <div className='mx-auto mb-10 h-1 w-20 rounded bg-[var(--success-strong)]'></div>
      <p className='mx-auto mb-12 max-w-2xl text-center text-gray-500'>{t('question.description')}</p>

      <div className='flex flex-col items-center gap-10 lg:flex-row lg:items-start'>
        <div className='flex w-full justify-center lg:w-1/2'>
          <img
            src={doktorImage}
            alt='doctor'
            className='hidden sm:block h-[300px] w-auto rounded-lg object-contain sm:h-[400px]'
          />

          <img
            src={responsiveImage}
            alt='responsive doctor'
            className='block sm:hidden h-[300px] w-auto rounded-lg object-contain'
          />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={handleKeyDown}
          className='w-full max-w-2xl space-y-6'
        >
          <div className='grid gap-4 sm:grid-cols-2'>
            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                {t('question.name')} <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                placeholder={t('question.namePlaceholder')}
                className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'
                  } bg-gray-50 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--success-strong)]`}
                {...register('name')}
              />
              {errors.name && <p className='mt-1 text-sm text-red-500'>{errors.name.message}</p>}
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                {t('question.phone')} <span className='text-red-500'>*</span>
              </label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    inputRef={field.ref}
                    country="uz"
                    onlyCountries={['uz']}
                    countryCodeEditable={false}
                    placeholder={t('question.phonePlaceholder')}
                    masks={{ uz: '.. ...-..-..' }}
                    enableAreaCodes={true}
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
                    containerStyle={{
                      width: '100%',
                    }}
                    specialLabel=""
                  />
                )}
              />

              {errors.phone && (
                <p className='mt-1 text-sm text-red-500'>{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className='mb-2 block text-sm font-medium text-gray-700'>
              {t('question.comment')}
            </label>
            <textarea
              placeholder={t('question.commentPlaceholder')}
              className='w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--success-strong)]'
              rows={5}
              {...register('comment')}
            />
          </div>

          <div className='flex justify-end'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='inline-flex items-center gap-2 rounded-lg bg-[var(--success-strong)] px-6 py-3 font-medium text-white transition hover:bg-[var(--success-strong)] disabled:bg-[var(--success-strong)]'
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className='h-5 w-5 animate-spin text-white' />
                  {t('question.sending')}
                </>
              ) : (
                <>
                  {t('question.send')}
                  <FaPaperPlane className='h-4 w-4 rotate-[-45deg]' />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HaveAQuestion;
