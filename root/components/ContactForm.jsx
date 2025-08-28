import 'react-phone-input-2/lib/style.css';

import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import Swal from 'sweetalert2';
import * as yup from 'yup';

const schema = (t) =>
  yup.object().shape({
    name: yup.string().required(t('form.name_required')),
    email: yup.string().email(t('form.email_invalid')).required(t('form.email_required')),
    phone: yup.string().min(11, t('form.phone_invalid')).required(t('form.phone_required')),
    comment: yup.string(),
  });

const TELEGRAM_CONFIG = {
  BOT_TOKEN: '8286465157:AAFQc39Q_msjA7B02HE2QnLl7oyF_soKKGs',
  CHAT_ID: '-1002940323142',
};

const sendToTelegram = async (formData) => {
  const message = `
🔔 *Yangi so'rov!*

👤 *Ism:* ${formData.name}
📧 *Email:* ${formData.email}  
📱 *Telefon:* +${formData.phone}
💬 *Izoh:* ${formData.comment || "Izoh yo'q"}

📅 *Vaqt:* ${new Date().toLocaleString('uz-UZ')}
`;

  const url = `https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const result = await response.json();

    if (!result.ok) {
      throw new Error(`Telegram API error: ${result.description}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Telegram yuborishda xatolik:', error);
    return { success: false, error: error.message };
  }
};

const ContactForm = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema(t)),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Telegram ga yuborish
      const telegramResult = await sendToTelegram(data);

      if (telegramResult.success) {
        Swal.fire({
          icon: 'success',
          title: t('form.success_title'),
          text: t('form.success_message'),
          confirmButtonColor: '#0084D1',
        });
        reset();
      } else {
        throw new Error(telegramResult.error);
      }
    } catch (error) {
      console.error('Form yuborishda xatolik:', error);
      Swal.fire({
        icon: 'error',
        title: 'Xatolik!',
        text: "Ma'lumotlar yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.",
        confirmButtonColor: '#d33',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=''>
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
  );
};

export default ContactForm;
