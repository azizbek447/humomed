import React from 'react';
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <div className="flex flex-col sm:items-start items-start text-left">
          <img src={logo} alt="Humo Med" className="w-24 h-24 mb-4 object-contain" />
          <div className="flex gap-4">
            {[
              { icon: <FaFacebookF />, link: 'https://facebook.com' },
              { icon: <FaTelegramPlane />, link: 'https://t.me/humo_med' },
              { icon: <FaInstagram />, link: 'https://instagram.com/humo_med_center' },
            ].map(({ icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-[var(--success-strong)] hover:bg-[var(--success-strong)] hover:text-white transition-colors duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="text-left">
          <h3 className="font-semibold text-lg mb-4">Yangiliklar</h3>
          <ul className="space-y-3 text-sm">
            {[
              { title: 'Innovatsion uskunalar', date: '30 Iyul 2021' },
              { title: 'Yangi filial ochildi', date: '30 Iyul 2021' },
              { title: 'Bepul maslahat kunlari', date: '30 Iyul 2021' },
            ].map(({ title, date }, idx) => (
              <li key={idx}>
                <strong>{title}</strong>
                <br />
                <span className="text-gray-500">{date}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-left">
          <h3 className="font-semibold text-lg mb-4">Bog‘lanish</h3>
          <ul className="space-y-3 text-sm">
            {[
              'Yunusobod t., A. Timura, 119A',
              'Buxoro, K. Muxtorov, "Prof Med Service"',
              'Qarshi, Xodjayev MFY, Bunyodkor',
              'Andijon, Luchka 26',
              'Kurgan-Tepa, Mustaqillik 120',
            ].map((addr, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[var(--success-strong)] mt-1" />
                <span>{addr}</span>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[var(--success-strong)]" />
              <span>+998 55 501 03 03 (1210)</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[var(--success-strong)]" />
              <span>pmstashkent@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[var(--success-strong)] text-white text-center py-3 text-sm">
        Copyright © 2019 HumoService
      </div>
    </footer>
  );
};

export default Footer;
