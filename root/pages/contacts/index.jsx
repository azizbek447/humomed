import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useTranslation } from 'react-i18next';
import ContactForm from '../../components/ContactForm.jsx';

const MapLocation = () => {
  const { i18n } = useTranslation();

  const coords = [41.2156, 69.1845];
  const zoom = 16;

  return (
    <div className='bg-white pt-20'>
      {/* Map */}
      <div className='h-[400px] w-full'>
        <YMaps
          query={{
            lang: i18n.language === 'en' ? 'en_US' : 'ru_RU',
            mode: 'release',
          }}
        >
          <div className='h-full w-full'>
            <Map
              defaultState={{
                center: coords,
                zoom: zoom,
                type: 'yandex#map',
              }}
              width='100%'
              height='100%'
              options={{
                mapAutoFocus: true,
                nativeFullscreen: true,
              }}
            >
              <Placemark geometry={coords} />
            </Map>
          </div>
        </YMaps>
      </div>

      {/* Contact Info + Form */}
      <div className='w-full rounded-t-3xl bg-[#f8f9fa] px-6 py-20'>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2'>
          {/* Info */}
          <div className='grid grid-cols-1 gap-8 text-left sm:grid-cols-2'>
            <div>
              <h3 className='mb-2 text-lg font-bold'>Локация</h3>
              <p>Юнусабадский р-н, проспект А.Тимура, 119А</p>
              <a
                href='#'
                className='mt-2 inline-block text-[var(--success-strong)] hover:underline'
              >
                Показать локацию на карте
              </a>
            </div>
            <div>
              <h3 className='mb-2 text-lg font-bold'>Контакты</h3>
              <p>Телефон: +998 33 901 50 60</p>
              <p>Call center:+998 90 176 11 10</p>
              <p>Email: support@kent@gmail.com</p>
            </div>
            <div>
              <h3 className='mb-2 text-lg font-bold'>График работы</h3>
              <p>24/7</p>
            </div>
          </div>

          {/* Form */}
          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default React.memo(MapLocation);
