import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

const ContactForm = ({ width = 'w-full', height = 'h-auto' }) => {
  const schema = yup.object().shape({
    name: yup.string().required('Ismingizni kiriting'),
    email: yup.string().email('Email noto‘g‘ri').required('Email kiriting'),
    phone: yup.string().required('Telefon raqam kiriting').min(12, 'To‘liq raqam kiriting'),
    message: yup.string(),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className={`${width} ${height} rounded-2xl bg-white p-6 shadow-lg`}>
      <h2 className='mb-4 text-lg font-semibold text-gray-800'>Savol berish</h2>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        {/* Ism */}
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>
            Ismingiz <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            placeholder='Ismingizni kiriting'
            className={`w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('name')}
          />
          {errors.name && <p className='text-sm text-red-500'>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>
            Email manzilingiz <span className='text-red-500'>*</span>
          </label>
          <input
            type='email'
            placeholder='Emailingizni kiriting'
            className={`w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('email')}
          />
          {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
        </div>

        {/* Telefon */}
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>
            Telefon <span className='text-red-500'>*</span>
          </label>
          <Controller
            name='phone'
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country='uz'
                onlyCountries={['uz']}
                countryCodeEditable={false}
                masks={{ uz: '.. ...-..-..' }}
                placeholder='Telefon raqamingizni kiriting'
                inputStyle={{
                  width: '100%',
                  padding: '10px 14px 10px 52px',
                  borderRadius: '0.5rem',
                  borderColor: errors.phone ? 'red' : '#d1d5db',
                  backgroundColor: '#f9fafb',
                }}
                buttonStyle={{
                  borderTopLeftRadius: '0.5rem',
                  borderBottomLeftRadius: '0.5rem',
                  borderColor: '#d1d5db',
                  backgroundColor: '#f9fafb',
                }}
                containerStyle={{
                  width: '100%',
                }}
                specialLabel=''
              />
            )}
          />
          {errors.phone && <p className='text-sm text-red-500'>{errors.phone.message}</p>}
        </div>

        {/* Izoh */}
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>Izoh</label>
          <textarea
            placeholder='Izohingizni kiriting'
            rows={4}
            className='w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
            {...register('message')}
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type='submit'
            disabled={isSubmitting}
            className='flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 disabled:opacity-60'
          >
            {isSubmitting ? (
              <>
                <FaSpinner className='h-5 w-5 animate-spin' />
                Yuborilmoqda...
              </>
            ) : (
              <>
                Yuborish
                <FaPaperPlane className='h-4 w-4 rotate-[-45deg]' />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
