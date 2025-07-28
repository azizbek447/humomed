import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';

const ContactForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required('Обязательное поле'),
    email: yup.string().email('Неверный формат e-mail').required('Обязательное поле'),
    phone: yup.string().required('Обязательное поле').min(12, 'Введите полный номер'),
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

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log('Submitted data:', data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
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
    <div className='mx-auto max-w-6xl p-6 pt-30'>
      <div className='grid items-start gap-12 lg:grid-cols-2'>
        <div>
          <h2 className='mb-4 text-3xl font-semibold text-gray-800'>Возник вопрос?</h2>
          <div className='mx-auto mb-12 h-1 w-16 rounded bg-[var(--success-strong)]'></div>
          <p className='mb-12 text-gray-500'>
            Наши врачи обладают высокой квалификации, большим опытом работы, постоянно обучаются,
            участвуют в семинарах и конференциях.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={handleKeyDown}
          className='space-y-6 text-left'
        >
          {/* Name */}
          <div>
            <label className='mb-2 block text-sm font-medium text-gray-700'>
              Ваше имя <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              placeholder='Введите ваше имя'
              className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} bg-gray-50 px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-[var(--success-strong)] focus:outline-none`}
              {...register('name')}
            />
            {errors.name && <p className='mt-1 text-sm text-red-500'>{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className='mb-2 block text-sm font-medium text-gray-700'>
              Email <span className='text-red-500'>*</span>
            </label>
            <input
              type='email'
              placeholder='Введите ваш e-mail'
              className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} bg-gray-50 px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-[var(--success-strong)] focus:outline-none`}
              {...register('email')}
            />
            {errors.email && <p className='mt-1 text-sm text-red-500'>{errors.email.message}</p>}
          </div>

          {/* Phone */}
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
                  country='uz'
                  onlyCountries={['uz']}
                  countryCodeEditable={false}
                  masks={{ uz: '.. ...-..-..' }}
                  placeholder='Введите номер телефона'
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
                  specialLabel=''
                />
              )}
            />
            {errors.phone && <p className='mt-1 text-sm text-red-500'>{errors.phone.message}</p>}
          </div>

          {/* Message */}
          <div>
            <label className='mb-2 block text-sm font-medium text-gray-700'>Сообщение</label>
            <textarea
              placeholder='Введите ваше сообщение'
              className='w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 placeholder-gray-400 focus:ring-2 focus:ring-[var(--success-strong)] focus:outline-none'
              rows={5}
              {...register('message')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(onSubmit)();
                }
              }}
            />
          </div>

          {/* Submit */}
          <div className='flex justify-end'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='inline-flex items-center gap-2 rounded-lg bg-[var(--success-strong)] px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-[var(--success-strong)] disabled:opacity-60'
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

export default ContactForm;
