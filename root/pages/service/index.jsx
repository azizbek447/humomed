import React from 'react';
import { useParams } from 'react-router-dom';
import servicesData from '../../constants/servicesData';

const Service = () => {
  const { id } = useParams();
  const service = servicesData[id];

  if (!service) return <div className="pt-20 text-center">Xizmat topilmadi</div>;

  return (
    <div className="pt-20 pb-32 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{service.title}</h1>
      <img
        src={service.image}
        alt={service.title}
        className="rounded-xl shadow mb-8 w-full object-cover max-h-[400px]"
      />
      <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
        {service.content?.map((block, index) => {
          if (block.type === 'paragraph') {
            return (
              <p key={index} className={block.bold ? 'font-semibold' : ''}>
                {block.text}
              </p>
            );
          }

          if (block.type === 'title') {
            return <p key={index} className="font-bold">{block.text}</p>;
          }

          if (block.type === 'list') {
            return (
              <ul key={index} className="list-disc list-inside">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
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

export default Service;
