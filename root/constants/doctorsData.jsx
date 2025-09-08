import Baxtiyor from '../assets/images/Baxtiyor.png';
import Gafur from '../assets/images/Gafur.png';
import Dinara from '../assets/images/Ginekolog.png';
import Gulbahor from '../assets/images/gulbahor.png';
import hoshimImg from '../assets/images/hoshimImg.png';
import nurlibekImg from '../assets/images/img_1.png';
import shirina from '../assets/images/shirina.png';
import shodmanovImg from '../assets/images/shodmanovImg.png';
import Ulugbek from '../assets/images/ulugbek.png';
import Nemat from '../assets/images/Nemat.png';

export const doctorsData = [
  {
    id: 1,
    name: {
      uz: ' Ulug‘bek Nazarov',
      ru: ' Улугбек Назаров',
      en: ' Ulugbek Nazarov',
    },
    specialty: {
      uz: 'Terapevt, Kardiolog,',
      ru: 'Терапевт, Кардиолог, ',
      en: 'Therapist, Cardiologist,',
    },
    subSpecialty: {
      uz: 'Ichki kasalliklar, yurak kasalliklari, reanimatsiya',
      ru: 'Внутренние болезни, сердечно-сосудистые заболевания, реанимация',
      en: 'Internal diseases, heart diseases, resuscitation',
    },
    image: Ulugbek,
    path: '/healer',
  },
  {
    id: 2,
    name: {
      uz: '. Dinara Davletova',
      ru: '. Динара Давлетова',
      en: ' Dinara Davletova',
    },
    specialty: {
      uz: 'Akusher-ginekolog, UZI mutaxassisi',
      ru: 'Акушер-гинеколог, специалист по УЗИ',
      en: 'Obstetrician-gynecologist, Ultrasound specialist',
    },
    subSpecialty: {
      uz: 'Homiladorlik va ayollar salomatligi',
      ru: 'Беременность и женское здоровье',
      en: "Pregnancy and women's health",
    },
    image: Dinara,
    path: '/healer',
  },
  {
    id: 3,
    name: {
      uz: ' Baxtiyor Mannapov',
      ru: ' Бахтиёр Маннапов',
      en: ' Bakhtiyor Mannapov',
    },
    specialty: {
      uz: 'Jarroh, Endoskopist, Gastroenterolog',
      ru: 'Хирург, эндоскопист, гастроэнтеролог',
      en: 'Surgeon, Endoscopist, Gastroenterologist',
    },
    subSpecialty: {
      uz: 'Oshqozon-ichak kasalliklari, jarrohlik',
      ru: 'Болезни желудочно-кишечного тракта, хирургия',
      en: 'Gastrointestinal diseases, surgery',
    },
    image: Baxtiyor,
    path: '/healer',
  },
  {
    id: 4,
    name: {
      uz: ' Gulbahor Jiyanova',
      ru: ' Гульбахор Жиянова',
      en: ' Gulbahor Jiyanova',
    },
    specialty: {
      uz: 'Akusher-ginekolog',
      ru: 'Акушер-гинеколог',
      en: 'Obstetrician-gynecologist',
    },
    subSpecialty: {
      uz: 'Jarrohlik akusherlik va ginekologiya',
      ru: 'Хирургическое акушерство и гинекология',
      en: 'Surgical obstetrics and gynecology',
    },
    image: Gulbahor,
    path: '/healer',
  },
  {
    id: 5,
    name: {
      uz: 'Shirina Maxmudova',
      ru: 'Ширина Махмудова',
      en: 'Shirina Makhmudova',
    },
    specialty: {
      uz: 'Pediatr shifokor',
      ru: 'Врач-педиатр',
      en: 'Pediatric doctor',
    },
    subSpecialty: {
      uz: 'Bolalar salomatligi',
      ru: 'Здоровье детей',
      en: "Children's health",
    },
    image: shirina,
    path: '/healer',
  },
  {
    id: 6,
    name: {
      uz: 'Nurlibek Maxatov',
      ru: 'Нурлибек Махатов',
      en: 'Nurlibek Maxatov',
    },
    specialty: {
      uz: 'LOR kasalliklari (otolaringologiya)',
      ru: 'ЛОР заболевания',
      en: 'ENT diseases',
    },
    subSpecialty: {
      uz: 'Burun, quloq va tomoq kasalliklari',
      ru: 'Болезни уха, горла и носа',
      en: 'Ear, throat and nose diseases',
    },
    image: nurlibekImg,
    path: '/healer',
  },
  {
    id: 7,
    name: {
      uz: 'Nemat Narzullaevich',
      ru: 'Немат Нарзуллаевич',
      en: 'Nemat Narzullaevich',
    },
    specialty: {
      uz: 'Jarroh, Hirurg, Travmatolog, Ortoped, Urolog',
      ru: 'Хирург, Травматолог, Ортопед, Уролог',
      en: 'Surgeon, Traumatologist, Orthopedist, Urologist',
    },
    subSpecialty: {
      uz: 'Kardiologiya, terapiya',
      ru: 'Кардиология, терапия ',
      en: 'Cardiology, therapy ',
    },
    image: Nemat,
    path: '/healer',
  },

  {
    id: 8,
    name: {
      uz: ' Shodmanov Sohibali',
      ru: ' Шодманов Сохибали',
      en: ' Shodmanov Sohibali',
    },
    specialty: {
      uz: 'Rentgenolog shifokor',
      ru: 'Врач-рентгенолог',
      en: 'Radiologist',
    },
    subSpecialty: {
      uz: 'Rentgen diagnostika',
      ru: 'Рентген-диагностика',
      en: 'X-ray diagnostics',
    },
    image: shodmanovImg,
    path: '/healer',
  },
  {
    id: 9,
    name: {
      uz: ' Ahmedov G‘afur Safarboevich',
      ru: ' Ахмедов Гафур Сафарбоевич',
      en: ' Ahmedov Gafur Safarboevich',
    },
    specialty: {
      uz: 'Kardiolog, Terapevt,',
      ru: 'Кардиолог, Терапевт, ',
      en: 'Cardiologist, Therapist,',
    },
    subSpecialty: {
      uz: 'Kardiologiya, terapiya',
      ru: 'Кардиология, терапия ',
      en: 'Cardiology, therapy ',
    },
    image: Gafur,
    path: '/healer',
  },
  {
    id: 10,
    name: {
      uz: 'Hoshim Abdullayev',
      ru: 'Хошим Абдуллаев',
      en: 'Hoshim Abdullayev',
    },
    specialty: {
      uz: 'Dermatovenerolog, UZI shifokori',
      ru: 'Дерматовенеролог, врач УЗИ',
      en: 'Dermatovenerologist, Ultrasound doctor',
    },
    subSpecialty: {
      uz: 'Teri va jinsiy yo‘l bilan yuqadigan kasalliklar',
      ru: 'Кожные и венерические заболевания',
      en: 'Skin and sexually transmitted diseases',
    },
    image: hoshimImg,
    path: '/healer',
  },
];
