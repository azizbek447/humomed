import React from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';
import h1img from '../../assets/images/heder.webp';
import uploadIcon from '../../assets/svg/uz.svg';

const schema = yup.object().shape({
  name: yup.string().required('Ism majburiy'),
  surname: yup.string().required('Familiya majburiy'),
  patronymic: yup.string().required('Otasining ismi majburiy'),
  birthYear: yup.string().matches(/^\d{4}$/, 'To‘g‘ri yil kiriting').required('Tug‘ilgan yil majburiy'),
  phone: yup
    .string()
    .required('Telefon raqam majburiy')
    .test('is-valid-phone', 'To‘liq telefon raqamini kiriting', (val) => val && val.replace(/\D/g, '').length === 9),
  email: yup.string().email('Email noto‘g‘ri').required('Email majburiy'),
  specialty: yup.string().required('Bo‘limni tanlang'),
  directorRequest: yup.mixed().required('Fayl majburiy'),
  diplomaCertificate: yup.mixed().required('Fayl majburiy'),
  passport: yup.mixed().required('Fayl majburiy'),
  autobiography: yup.mixed().required('Fayl majburiy'),
  medicalForm: yup.mixed().required('Fayl majburiy'),
});

const ResidencyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (data[key] instanceof FileList) {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    });

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        alert('Ariza muvaffaqiyatli yuborildi!');
        reset();
      } else {
        alert('Yuborishda xatolik yuz berdi!');
      }
    } catch {
      alert('Tarmoqda muammo!');
    }
  };

  const renderInput = (label, name, placeholder, type = 'text') => (
    <div>
      <label className='mb-2 block text-sm font-medium text-gray-700'>
        {label} <span className='text-red-500'>*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full rounded-lg border ${
          errors[name] ? 'border-red-500' : 'border-gray-200'
        } bg-gray-50 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500`}
      />
      {errors[name] && <p className='mt-1 text-sm text-red-500'>{errors[name]?.message}</p>}
    </div>
  );

  const FileUpload = ({ label, name }) => {
    const file = watch(name);

    return (
      <div>
        <label className='mb-2 block text-sm font-medium text-gray-700'>
          {label} <span className='text-red-500'>*</span>
        </label>
        <label className='flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-600 transition hover:border-green-400 hover:bg-green-50'>
          <img
            src={uploadIcon}
            alt='upload'
            className='h-6 w-6 object-contain'
          />
          <span className='truncate text-sm'>
            {file && file.length > 0 ? file[0].name : 'Faylni tanlang (PDF, JPG, PNG, DOC)'}
          </span>
          <input
            type='file'
            accept='.pdf,.jpg,.jpeg,.png,.doc,.docx'
            className='hidden'
            {...register(name)}
            onChange={(e) =>
              setValue(name, e.target.files, { shouldValidate: true })
            }
          />
        </label>
        {errors[name] && <p className='mt-1 text-sm text-red-500'>{errors[name]?.message}</p>}
      </div>
    );
  };

  return (
    <div className='bg-white pb-12'>
      <div
        className='mt-20 flex h-[150px] w-full items-center justify-center bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${h1img})` }}
      >
        <h1 className='rounded-md px-4 py-2 text-center text-2xl font-bold text-white uppercase md:text-3xl'>
          Ariza yuborish
        </h1>
      </div>

      <div className='flex flex-wrap justify-center gap-4 px-4 py-6'>
        {['CALL-CENTER', 'Hujjatlar ro‘yxati', 'Qabul kvotasi'].map((label, idx) => (
          <button
            key={idx}
            className='rounded-lg border bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:bg-[var(--success-strong)] hover:text-white'
          >
            → {label}
          </button>
        ))}
      </div>

      <div className='mx-auto max-w-5xl px-4'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div className='grid gap-4 md:grid-cols-2'>
            {renderInput('Ism', 'name', 'Ismingiz')}
            {renderInput('Familiya', 'surname', 'Familiyangiz')}
            {renderInput('Otasining ismi', 'patronymic', 'Sharifingiz')}
            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                Tug‘ilgan yil <span className='text-red-500'>*</span>
              </label>
              <InputMask
                mask='9999'
                maskChar={null}
                placeholder='Masalan: 1990'
                {...register('birthYear')}
                className={`w-full rounded-lg border ${
                  errors.birthYear ? 'border-red-500' : 'border-gray-200'
                } bg-gray-50 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.birthYear && <p className='mt-1 text-sm text-red-500'>{errors.birthYear.message}</p>}
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                Telefon raqami <span className='text-red-500'>*</span>
              </label>
              <div className='flex'>
                <span className='inline-flex items-center rounded-l-lg border border-r-0 border-gray-200 bg-gray-50 px-3 text-sm text-gray-600'>
                  +998
                </span>
                <InputMask
                  mask='99 999-99-99'
                  maskChar={null}
                  placeholder='__ ___-__-__'
                  {...register('phone')}
                  className={`flex-1 rounded-r-lg border ${
                    errors.phone ? 'border-red-500' : 'border-gray-200'
                  } bg-gray-50 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500`}
                />
              </div>
              {errors.phone && <p className='mt-1 text-sm text-red-500'>{errors.phone.message}</p>}
            </div>

            {renderInput('Email', 'email', 'example@email.com', 'email')}
          </div>

          <div>
            <label className='mb-2 block text-sm font-medium text-gray-700'>
              Mutaxassislik bo‘limi <span className='text-red-500'>*</span>
            </label>
            <select
              {...register('specialty')}
              className='w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500'
            >
              <option value=''>-- Bo‘limni tanlang --</option>
              <option value='Otolarengologiya'>Otolarengologiya</option>
              <option value='Kardiologiya'>Kardiologiya</option>
              <option value='Nevrologiya'>Nevrologiya</option>
              <option value='Pediatriya'>Pediatriya</option>
            </select>
            {errors.specialty && <p className='mt-1 text-sm text-red-500'>{errors.specialty.message}</p>}
          </div>

          <div className='grid gap-4 md:grid-cols-2'>
            <FileUpload name='directorRequest' label='Direktor nomiga ariza' />
            <FileUpload name='diplomaCertificate' label='Diplom va ilova' />
            <FileUpload name='passport' label='Pasport' />
            <FileUpload name='autobiography' label='Avtobiografiya' />
            <FileUpload name='medicalForm' label='086-U tibbiy forma' />
          </div>

          <div className='pt-4 text-right'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='inline-flex items-center gap-2 rounded-lg bg-[var(--success-strong)] px-6 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-50'
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className='animate-spin' />
                  Yuborilmoqda...
                </>
              ) : (
                <>
                  Yuborish <FaPaperPlane className='rotate-[-45deg]' />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResidencyForm;