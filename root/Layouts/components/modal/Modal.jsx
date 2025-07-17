'use client';

import { Check, X } from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Modal = ({ isOpen, onClose, selectedTariff }) => {
  const { t } = useTranslation();
  const [selectedExtras, setSelectedExtras] = useState([]);

  if (!isOpen) return null;

  const services = [
    t('modal.services.employeeManagement'),
    t('modal.services.timeTracking'),
    t('modal.services.monthlyReport'),
    t('modal.services.support'),
    t('modal.services.backup'),
    t('modal.services.mobileApp'),
  ];

  const additionalServices = [
    { name: t('modal.extras.analytics'), price: 5000 },
    { name: t('modal.extras.design'), price: 3000 },
    { name: t('modal.extras.integration'), price: 7000 },
    { name: t('modal.extras.manager'), price: 10000 },
  ];

  const calculateTotal = (employees, pricePerEmployee, extras) => {
    const base = employees * pricePerEmployee;
    const extrasSum = extras.reduce((sum, item) => sum + item.price, 0);
    return (base + extrasSum).toLocaleString();
  };

  const toggleExtra = (extra) => {
    setSelectedExtras((prev) => {
      const exists = prev.find((e) => e.name === extra.name);
      return exists ? prev.filter((e) => e.name !== extra.name) : [...prev, extra];
    });
  };

  return (
    <div className='fixed inset-0 z-[1050] bg-black/30'>
      <div className='flex min-h-screen items-center justify-center p-2'>
        <div className='w-full max-w-md rounded-lg bg-white shadow-xl'>
          {/* Header */}
          <div className='flex items-center justify-between bg-indigo-600 p-3 text-white'>
            <h2 className='text-base font-semibold'>
              {t('modal.header', { count: selectedTariff?.employees })}
            </h2>
            <button onClick={onClose} className='rounded p-1 hover:bg-indigo-700'>
              <X className='h-4 w-4' />
            </button>
          </div>

          {/* Content */}
          <div className='max-h-[60vh] overflow-y-auto p-3'>
            <div className='space-y-3'>
              {/* Services */}
              <div className='space-y-2'>
                {services.map((service, index) => (
                  <div key={index} className='flex items-center space-x-2'>
                    <div className='flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500'>
                      <Check className='h-2 w-2 text-white' />
                    </div>
                    <span className='text-sm text-gray-700'>{service}</span>
                  </div>
                ))}
              </div>

              {/* Additional Services */}
              <div className='space-y-2'>
                {additionalServices.map((service, index) => (
                  <div key={index} className='flex items-start space-x-2'>
                    <input
                      type='checkbox'
                      checked={selectedExtras.some((e) => e.name === service.name)}
                      onChange={() => toggleExtra(service)}
                      className='mt-0.5 h-3 w-3 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500'
                    />
                    <span className='text-xs text-gray-700'>
                      {service.name} (+{service.price.toLocaleString()} UZS)
                    </span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className='space-y-2 border-t pt-3'>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-700'>{t('modal.pricePerEmployee')}</span>
                  <span className='text-sm font-bold'>
                    {selectedTariff?.price.toLocaleString()} UZS
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-700'>
                    {t('modal.totalPrice', { count: selectedTariff?.employees })}
                  </span>
                  <span className='text-base font-bold'>
                    {selectedTariff &&
                      calculateTotal(
                        selectedTariff.employees,
                        selectedTariff.price,
                        selectedExtras
                      )}{' '}
                    UZS
                  </span>
                </div>
              </div>

              {/* Button */}
              <button
                className='w-full rounded-lg bg-emerald-500 py-2 text-sm font-medium text-white transition hover:bg-emerald-600'
                onClick={onClose}
              >
                {t('modal.useTariff')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Modal);
