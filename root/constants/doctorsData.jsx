import previewImg from '../assets/images/ulugbek.png';

import Baxtiyor from '../assets/images/Baxtiyor.png';
import Dinara from '../assets/img/ginekolig.png';

import sanjarImg from '../assets/img/img_2-removebg-preview.png';
import akmalImg from '../assets/img/neyxuriga.png';
import malikaImg from '../assets/img/neyxuriga.png';

export const doctorsData = [
  {
    id: 1,
    name: 'Dr. Ulugbek Nazarov',
    specialty: 'Terapевt, Kardiolog, Anesteziolog-Reanimatolog',
    subSpecialty: 'Ichki kasalliklar, yurak kasalliklari, reanimatsiya',
    image: previewImg,
  },
  {
    id: 2,
    name: 'Dr. Dinara Davletova',
    specialty: 'Akusher-ginekolog, UZI mutaxassisi',
    subSpecialty: 'Homiladorlik va ayollar salomatligi',
    image: Dinara,
  },
  {
    id: 3,
    name: 'Dr. Bakhtiyor Mannapov',
    specialty: 'Jarroh, Endoskopist, Gastroenterolog',
    subSpecialty: 'Oshqozon-ichak kasalliklari, jarrohlik',
    image: Baxtiyor,
  },
  {
    id: 4,
    name: 'Dr. Otabek Sobirov',
    specialty: 'Travmatolog',
    image: Baxtiyor,
    path: '/healer',
  },
  {
    id: 5,
    name: 'Dr. Farangiz Qodirova',
    specialty: 'Ginekolog',
    image: sanjarImg,
    path: '/healer',
  },
  {
    id: 6,
    name: 'Dr. Sanjar Xasanov',
    specialty: 'Urolog',
    image: akmalImg,
    path: '/healer',
  },
  {
    id: 7,
    name: 'Dr. Malika Tojiyeva',
    specialty: 'Pediatr',
    image: malikaImg,
    path: '/healer',
  },
  {
    id: 8,
    name: 'Dr. Akmal G‘iyosov',
    specialty: 'Endokrinolog',
    image: previewImg,
    path: '/healer',
  },
  {
    id: 9,
    name: 'Dr. Islom Rajabov',
    specialty: 'Revmatolog',
    image: Baxtiyor,
    path: '/healer',
  },
];
