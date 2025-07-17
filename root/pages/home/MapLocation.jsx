import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useTranslation } from 'react-i18next';

const MapLocation = () => {
  const { i18n } = useTranslation();

  const coords = [41.2156, 69.1845];
  const zoom = 16;

  return (
    <div className='bg-white px-4 py-16 text-center'>
      <h2 className='mb-8 text-2xl font-bold text-gray-800 sm:text-3xl'>
        {i18n.language === 'ru' ? 'Где мы находимся?' : 'Bizning manzil'}
      </h2>

      <div className='mx-auto w-full max-w-5xl overflow-hidden rounded-[40px] border-4 border-green-500 shadow-md'>
        <div className='relative h-72 w-full sm:h-96 md:h-[400px]'>
          <YMaps
            query={{
              lang: i18n.language === 'en' ? 'en_US' : 'ru_RU',
              mode: 'release',
            }}
          >
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
              modules={['control.ZoomControl', 'control.FullscreenControl']}
            >
              <Placemark geometry={coords} />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MapLocation);
