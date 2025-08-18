import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import newServiceData from '../../constants/NewServiceData.jsx';

const NewsService = () => {
  const { id } = useParams();
  const { i18n, t } = useTranslation();

  const service = useMemo(() => newServiceData(t)[id], [t, id]);
  if (!service) {
    return <div className='pt-20 text-center'>{t('serviceNotFound', 'Xizmat topilmadi')}</div>;
  }

  const lang = i18n.resolvedLanguage || 'uz';
  const content = service.content[lang] || service.content['uz'];

  return (
    <div className='mx-auto max-w-4xl px-4 pt-10'>
      <h1 className='mb-6 text-3xl font-bold text-gray-800'>{service.title[lang]}</h1>
      <img
        src={service.image}
        alt={service.title[lang]}
        className='mb-8 max-h-[400px] w-full rounded-xl object-cover shadow'
      />
      <div className='space-y-4 text-sm leading-relaxed text-gray-700 md:text-base'>
        {content.map((block, index) => {
          if (block.type === 'paragraph') {
            return (
              <p key={index} className={block.bold ? 'font-semibold' : ''}>
                {typeof block.text === 'object' ? block.text[lang] : block.text}
              </p>
            );
          }
          if (block.type === 'title') {
            return (
              <p key={index} className='font-bold'>
                {typeof block.text === 'object' ? block.text[lang] : block.text}
              </p>
            );
          }
          if (block.type === 'list') {
            return (
              <ul key={index} className='list-inside list-disc'>
                {block.items.map((item, i) => (
                  <li key={i}>{typeof item === 'object' ? item[lang] : item}</li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default React.memo(NewsService);
