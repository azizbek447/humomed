import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ResidencyNom = () => {
  const location = useLocation(); // Joriy sahifani aniqlash uchun

  const buttons = [
    { label: 'CALL-CENTER', path: '/service/callCenter' },
    { label: 'Перечень документов', path: '/residency/documents' },
    { label: 'Квота приёма', path: '/residency/quota' },
  ];

  return (
    <div className='bg-white'>
      <div
        className='mt-20 flex h-[150px] w-full items-center justify-center bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${h1img})` }}
      >
        <h1 className='rounded-md px-4 py-2 text-center text-2xl font-bold text-white uppercase md:text-3xl'>
          КЛИНИЧЕСКАЯ ОРДИНАТУРА
        </h1>
      </div>

      <div className='flex flex-wrap justify-center gap-4 px-4 py-6'>
        {buttons.map((btn, idx) => {
          const isActive = location.pathname === btn.path;

          return (
            <Link
              key={idx}
              to={btn.path}
              className={`rounded-lg border px-6 py-3 text-sm font-medium shadow transition ${
                isActive
                  ? 'bg-[var(--success-strong)] text-white'
                  : 'bg-white text-gray-700 hover:bg-[var(--success-strong)] hover:text-white'
              }`}
            >
              → {btn.label}
            </Link>
          );
        })}
      </div>

      <div className='px-5 py-10 lg:px-20'>
        <div className='mx-auto max-w-4xl space-y-4 text-center text-gray-800'>
          <h2 className='text-2xl font-bold text-green-700'>КЛИНИЧЕСКАЯ ОРДИНАТУРА</h2>
          <p className='text-lg font-semibold'>
            ОБЪЯВЛЕН ПРИЁМ В КЛИНИЧЕСКУЮ ОРДИНАТУРУ «PROF MED TURIZM»
          </p>
          <p>Подавшие документы на поступление в клиническую ординатуру в 2024/2025 учебном году</p>
          <p className='cursor-pointer text-[var(--success-strong)] underline'>
            Список для подачи в Агентство по оценке знаний и навыков
          </p>
        </div>

        <div className='mx-auto mt-10 max-w-4xl space-y-4 text-gray-800'>
          <p className='cursor-pointer text-[var(--success-strong)] underline'>
            Ординатура Список.docx
          </p>

          <p>
            С целью создания удобства для абитуриентов, подающих документы в клиническую ординатуру
            в 2024-2025 учебном году, приём документов будет осуществляться в онлайн режиме на
            официальном веб-сайте. Чтобы отправить заявку — перейдите по этой{' '}
            <span className='cursor-pointer text-[var(--success-strong)] underline'>ССЫЛКЕ</span>
          </p>

          <p>
            Приём документов в клиническую ординатуру будет осуществляться со дня объявления о
            приёме до <strong>20 августа 2024 года</strong> (в этот день включительно).
          </p>

          <p>
            В связи с началом приёма в высшие учебные заведения на 2024-2025 учебный год в «PROF MED
            TURIZM» был создан «Call-центр» для облегчения работы абитуриентов и их родителей и
            быстрого ответа на их вопросы.
          </p>

          <p>
            Граждане могут связаться с Call-центром по указанным ниже номерам телефонов, чтобы
            получить ответы на свои вопросы.
          </p>

          <div>
            <strong>Телефоны call-центра:</strong> <br />
            <span className='text-[var(--success-strong)]'>+998 55 5010303, 1210</span>
          </div>

          <div>
            <strong>Режим работы call-центра:</strong> <br />
            С понедельника по субботу — с 9:00 до 18:00; <br />
            обед — с 13:00 до 14:00.
          </div>

          <p>
            Вступительные испытания в клиническую ординатуру будут объявлены в группе или по месту
            сдачи документов (если оффлайн сдал документы).
          </p>

          <p>День экзаменов в Ординатуру будет объявлен на официальном сайте учебного центра.</p>

          <p className='font-bold'>
            Распределение параметров приема в клиническую ординатуру в 2024-2025 учебном году по
            специальности ОТОЛАРИНГОЛОГИЯ
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResidencyNom;
