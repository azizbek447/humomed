import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
  FaArrowLeft,
  FaArrowRight,
  FaClock,
  FaEnvelope,
  FaPaperPlane,
  FaPhone,
  FaSpinner,
} from 'react-icons/fa';

const schema = yup.object().shape({
  name: yup.string().required('Имя обязательно'),
  email: yup.string().email('Неверный email').required('Email обязателен'),
  phone: yup.string().min(11, 'Введите корректный номер').required('Телефон обязателен'),
  comment: yup.string(),
});

const branchList = [
  { name: 'Отоларингология', path: '/otolaryngology' },
  { name: 'Кардиология', path: '/cardiology' },
  { name: 'Физиотерапия', path: '/physiotherapy' },
  { name: 'Ортопедия-вертебрология', path: '/orthopedics' },
  { name: 'Нейрохирургия', path: '/neurosurgery' },
];

const ThreePartMedicalForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log({ ...data, phone: '+' + data.phone });

    Swal.fire({
      icon: 'success',
      title: t('success.title'),
      text: t('success.text'),
      confirmButtonColor: '#0084D1',
    });

    setIsSubmitting(false);
    reset();
  };

  return (
    <div className='mx-auto w-full max-w-md space-y-6 px-4 pt-20 text-sm text-gray-700 md:max-w-lg md:pt-40 lg:max-w-3xl'>
      <div className='rounded-xl border border-gray-200 bg-white shadow-md'>
        <h3 className='border-b p-4 text-lg font-semibold'>Все отделения</h3>
        <ul>
          {branchList.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isActive = location.pathname === item.path;
            return (
              <li
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`border-t transition duration-200 ease-in-out ${
                  isHovered
                    ? 'bg-[var(--success-strong)] text-white'
                    : 'text-gray-700 hover:bg-[var(--success-strong)] hover:text-white'
                }`}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 text-base ${
                    isActive || isHovered
                      ? 'bg-[var(--success-strong)] text-white'
                      : 'text-gray-700'
                  }`}
                >
                  {isActive || isHovered ? <FaArrowLeft /> : <FaArrowRight />}
                  <span className='truncate'>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className='rounded-xl bg-[var(--success-strong)] text-white shadow-md'>
        <div className='border-b border-white/30 px-4 py-3'>
          <h3 className='mb-1 text-lg font-bold'>График</h3>
          <div className='flex items-center space-x-2'>
            <FaClock />
            <span>Пн-Вс 24/7</span>
          </div>
        </div>
        <div className='px-4 py-3'>
          <h3 className='mb-1 text-lg font-bold'>Контакты</h3>
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

      <div className='rounded-xl bg-white p-4 shadow-md'>
        <h3 className='mb-4 text-lg font-bold'>Задать вопрос</h3>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4' noValidate>
          <div>
            <label className='mb-2 block font-medium'>
              Ваше имя <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              placeholder='Введите ваше имя'
              {...register('name')}
              className={`w-full rounded-lg border px-4 py-3 ${
                errors.name ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.name && <p className='mt-1 text-sm text-red-500'>{errors.name.message}</p>}
          </div>

          <div>
            <label className='mb-2 block font-medium'>
              Ваш e-mail <span className='text-red-500'>*</span>
            </label>
            <input
              type='email'
              placeholder='Введите e-mail'
              {...register('email')}
              className={`w-full rounded-lg border px-4 py-3 ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.email && <p className='mt-1 text-sm text-red-500'>{errors.email.message}</p>}
          </div>

          <div>
            <label className='mb-2 block font-medium'>
              Телефон <span className='text-red-500'>*</span>
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
                  placeholder='90 123-45-67'
                  enableAreaCodes={true}
                  specialLabel=''
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
            <label className='mb-2 block font-medium'>Комментарий</label>
            <textarea
              rows={4}
              placeholder='Введите ваш комментарий'
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
                <FaSpinner className='animate-spin' /> Отправка...
              </>
            ) : (
              <>
                Отправить <FaPaperPlane />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ThreePartMedicalForm;
