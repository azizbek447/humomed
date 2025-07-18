import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import doktorImage from '../../assets/img/img_2-removebg-preview.png';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

const schema = yup.object().shape({
  name: yup.string().required('Обязательное поле'),
  phone: yup.string().required('Обязательное поле').min(12, 'Неполный номер телефона'),
  comment: yup.string(),
});

const HaveAQuestion = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div className='mx-auto max-w-6xl px-4 py-10'>
      <h2 className='mb-4 text-center text-3xl font-semibold text-gray-800'>Возник вопрос?</h2>
      <p className='mx-auto mb-12 max-w-2xl text-center text-gray-500'>
        Наши врачи обладают высокой квалификацией, большим опытом работы, постоянно обучаются,
        участвуют в семинарах и конференциях.
      </p>

      <div className='flex flex-col items-center gap-10 lg:flex-row lg:items-start'>
        <div className='flex w-full justify-center lg:w-1/2'>
          <img
            src={doktorImage}
            alt='Доктор'
            className='h-[300px] w-auto rounded-lg object-contain sm:h-[400px]'
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
                Ваше имя <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                placeholder='Введите ваше имя'
                className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'
                  } bg-gray-50 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500`}
                {...register('name')}
              />
              {errors.name && <p className='mt-1 text-sm text-red-500'>{errors.name.message}</p>}
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                Телефон <span className='text-red-500'>*</span>
              </label>
              <Controller
                name='phone'
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    country={'uz'}
                    placeholder='Введите номер телефона'
                    inputStyle={{
                      width: '100%',
                      padding: '14px',
                      borderRadius: '0.5rem',
                      borderColor: errors.phone ? 'red' : '#e5e7eb',
                      backgroundColor: '#f9fafb',
                    }}
                    buttonStyle={{
                      borderTopLeftRadius: '0.5rem',
                      borderBottomLeftRadius: '0.5rem',
                      borderColor: '#e5e7eb',
                    }}
                    specialLabel=''
                    masks={{ uz: '.. ...-..-..' }}
                  />
                )}
              />
              {errors.phone && (
                <p className='mt-1 text-sm text-red-500'>{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className='mb-2 block text-sm font-medium text-gray-700'>Комментарий</label>
            <textarea
              placeholder='Введите ваш комментарий'
              className='w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500'
              rows={5}
              {...register('comment')}
            />
          </div>

          <div className='flex justify-end'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-medium text-white transition hover:bg-green-600 disabled:bg-green-400'
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className='h-5 w-5 animate-spin text-white' />
                  Отправка...
                </>
              ) : (
                <>
                  Отправить
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
