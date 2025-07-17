import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useTranslation } from 'react-i18next';
import Contactform from '../../Layouts/components/contactform';

const MapLocation = () => {
  const { i18n } = useTranslation();

  const coords = [41.2156, 69.1845];
  const zoom = 16;

  return (
    <div className='bg-white pt-20 text-center'>
      {/* Map */}
      <div className='h-[400px] w-[1200px] w-full'>
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

      {/* Contact Info Block */}
      <div className='w-full rounded-t-3xl bg-[#f8f9fa] px-6 py-30'>
        <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 text-left md:grid-cols-3'>
          <div>
            <h3 className='mb-2 text-lg font-bold'>Локация</h3>
            <p>Юнусабадский р-н, проспект А.Тимура, 119А</p>
            <a href='#' className='mt-2 inline-block text-blue-500 hover:underline'>
              Показать локацию на карте
            </a>
          </div>
          <div>
            <h3 className='mb-2 text-lg font-bold'>Контакты</h3>
            <p>Телефон: +998 55 5010303</p>
            <p>Call center: 1210</p>
            <p>Email: support@kent@gmail.com</p>
          </div>
          <div>
            <h3 className='mb-2 text-lg font-bold'>График работы</h3>
            <p>Пн-суб с 09:00 до 18:00</p>
          </div>
        </div>
      </div>
      <div>
        <Contactform />
      </div>
    </div>
  );
};

export default React.memo(MapLocation);
