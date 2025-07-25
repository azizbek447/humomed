import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const MapLocation = () => {
  const { t, i18n } = useTranslation();
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?lang=${
      i18n.language === 'en' ? 'en_US' : 'ru_RU'
    }&apikey=<YOUR_API_KEY>`;
    script.type = 'text/javascript';
    script.onload = () => {
      window.ymaps.ready(init);
    };
    document.head.appendChild(script);

    function init() {
      const map = new window.ymaps.Map(mapRef.current, {
        center: [41.2156, 69.1845],
        zoom: 16,
        controls: ['zoomControl', 'fullscreenControl'],
      });

      const placemark = new window.ymaps.Placemark([41.2156, 69.1845], {
        balloonContent: t('map.balloon'),
      });

      map.geoObjects.add(placemark);
    }
  }, [i18n.language, t]);

  return (
    <div className='bg-white px-4 py-16 text-center'>
      <h2 className='mb-4 text-2xl font-bold text-gray-800 sm:text-3xl'>
        {t('map.title')}
      </h2>
      <div className='mx-auto mb-10 h-1 w-20 rounded bg-[var(--success-strong)]'></div>

      <div className='mx-auto w-full max-w-7xl overflow-hidden rounded-[40px] border-4 border-[var(--success-strong)] shadow-md'>
        <div
          ref={mapRef}
          className='relative h-72 w-full sm:h-96 md:h-[400px]'
        />
      </div>
    </div>
  );
};

export default MapLocation;
