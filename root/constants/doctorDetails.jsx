import Baxtiyor from '../assets/images/Baxtiyor.png';
import Gulbahor from '../assets/images/gulbahor.png';
import sanjarImg from '../assets/images/img_1.png';
import previewImg from '../assets/images/ulugbek.png';
import Dinara from '../assets/img/ginekolig.png';
import akmalImg from '../assets/img/neyxuriga.png';
import malikaImg from '../assets/img/neyxuriga.png';

export const doctorDetails = [
  {
    id: 1,
    image: previewImg,
    name: {
      uz: 'Nazarov Ulug‘bek Shaxobiddinovich',
      ru: 'Назаров Улугбек Шахобиддинович',
      en: 'Nazarov Ulugbek Shakhobiddinovich',
    },
    specialty: {
      uz: 'Terapevt, Kardiolog, UАSh, Anesteziolog, Reanimatolog',
      ru: 'Терапевт, Кардиолог, УАШ, Анестезиолог, Реаниматолог',
      en: 'Therapist, Cardiologist, UASh, Anesthesiologist, Resuscitator',
    },
    birthDate: { uz: '—', ru: '—', en: '—' },
    birthPlace: {
      uz: 'Tojikiston Respublikasi, Dushanbe shahri',
      ru: 'Республика Таджикистан, город Душанбе',
      en: 'Republic of Tajikistan, city of Dushanbe',
    },
    education: {
      uz: 'Toshkent Tibbiyot Akademiyasi — 9 yil',
      ru: 'Ташкентская Медицинская Академия — 9 лет',
      en: 'Tashkent Medical Academy — 9 years',
    },
    experience: { uz: '15 yil', ru: '15 лет', en: '15 years' },
    workTime: { uz: 'Kechki smena', ru: 'Вечерняя смена', en: 'Evening shift' },
    phone: '+998 99 636 66 12',
    content: {
      uz: [
        '15 yillik tajribaga ega shifokor.',
        'Terapevt, kardiolog, anesteziolog va reanimatolog sifatida faoliyat yuritadi.',
      ],
      ru: [
        'Врач с 15-летним опытом.',
        'Работает как терапевт, кардиолог, анестезиолог и реаниматолог.',
      ],
      en: [
        'Doctor with 15 years of experience.',
        'Practices as a therapist, cardiologist, anesthesiologist, and resuscitator.',
      ],
    },
  },

  {
    id: 2,
    image: Dinara,
    name: {
      uz: 'Davletova Dinara Atabayevna',
      ru: 'Давлетова Динара Атабаевна',
      en: 'Davletova Dinara Atabayevna',
    },
    specialty: {
      uz: 'UАSh, Akusher-ginekolog, UZI mutaxassisi',
      ru: 'УАШ, Акушер-гинеколог, Специалист УЗИ',
      en: 'UASh, Obstetrician-gynecologist, Ultrasound specialist',
    },
    birthDate: { uz: '03.10.1987', ru: '03.10.1987', en: '03.10.1987' },
    birthPlace: {
      uz: 'Xorazm viloyati, Qo‘shko‘pir tumani',
      ru: 'Хорезмская область, Кушкупырский район',
      en: 'Khorezm region, Qo‘shko‘pir district',
    },
    education: {
      uz: 'Toshkent Tibbiyot Akademiyasi — 9 yil',
      ru: 'Ташкентская Медицинская Академия — 9 лет',
      en: 'Tashkent Medical Academy — 9 years',
    },
    experience: { uz: '10 yil', ru: '10 лет', en: '10 years' },
    workTime: {
      uz: 'Har kuni: 09:00 – 17:00',
      ru: 'Каждый день: 09:00 – 17:00',
      en: 'Every day: 09:00 – 17:00',
    },
    phone: '+998 94 607 44 07',
    content: {
      uz: [
        '10 yillik tajribaga ega shifokor.',
        'Akusher-ginekologiya va UZI sohasida mutaxassis.',
        "Hozirda 'Humomed' XKda faoliyat yuritadi.",
      ],
      ru: [
        'Врач с 10-летним опытом.',
        'Специалист по акушерству, гинекологии и УЗИ.',
        "В настоящее время работает в 'Humomed' ХК.",
      ],
      en: [
        'Doctor with 10 years of experience.',
        'Specialist in obstetrics, gynecology, and ultrasound.',
        "Currently working at 'Humomed' LLC.",
      ],
    },
  },

  {
    id: 3,
    image: Baxtiyor,
    name: {
      uz: 'Mannapov Baxtiyor Abdurahmonovich',
      ru: 'Маннопов Бахтиёр Абдурахмонович',
      en: 'Mannapov Bakhtiyor Abdurakhmonovich',
    },
    specialty: {
      uz: 'Jarroh, Endoskopist, Gastroenterolog',
      ru: 'Хирург, Эндоскопист, Гастроэнтеролог',
      en: 'Surgeon, Endoscopist, Gastroenterologist',
    },
    birthDate: { uz: '04.02.1965', ru: '04.02.1965', en: '04.02.1965' },
    birthPlace: {
      uz: 'Toshkent shahri',
      ru: 'город Ташкент',
      en: 'Tashkent city',
    },
    education: {
      uz:
        'Toshkent Tibbiyot Akademiyasi, Urganch filiali — 7 yil\n' +
        'Klinik ordinatura, malaka oshirish instituti — Nevropatolog, 2 yil',
      ru:
        'Ташкентская Медицинская Академия, Ургенчский филиал — 7 лет\n' +
        'Клиническая ординатура, институт повышения квалификации — Невропатолог, 2 года',
      en:
        'Tashkent Medical Academy, Urgench branch — 7 years\n' +
        'Clinical residency, institute of advanced training — Neuropathologist, 2 years',
    },
    experience: { uz: '35 yil', ru: '35 лет', en: '35 years' },
    workTime: {
      uz:
        'Dushanba, Chorshanba, Juma: 09:00 – 17:00\n' +
        'Seshanba, Payshanba, Shanba: 13:30 – 17:00',
      ru:
        'Понедельник, Среда, Пятница: 09:00 – 17:00\n' + 'Вторник, Четверг, Суббота: 13:30 – 17:00',
      en:
        'Monday, Wednesday, Friday: 09:00 – 17:00\n' + 'Tuesday, Thursday, Saturday: 13:30 – 17:00',
    },
    phone: '+998 99 103 37 67',
    content: {
      uz: [
        '35 yillik tajribaga ega shifokor.',
        'Jarrohlik, endoskopiya va gastroenterologiya sohalarida mutaxassis.',
      ],
      ru: [
        'Врач с 35-летним опытом.',
        'Специалист в области хирургии, эндоскопии и гастроэнтерологии.',
      ],
      en: [
        'Doctor with 35 years of experience.',
        'Specialist in surgery, endoscopy, and gastroenterology.',
      ],
    },
  },

  {
    id: 4,
    image: Gulbahor,
    name: {
      uz: 'Dr. Gulbahor Jiyanova',
      ru: 'Др. Гульбахор Жиянова',
      en: 'Dr. Gulbahor Jiyanova',
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
    birthDate: { uz: '—', ru: '—', en: '—' },
    birthPlace: { uz: '—', ru: '—', en: '—' },
    education: {
      uz: '1995-yil Samarqand tibbiyot instituti',
      ru: '1995 г. Самаркандский медицинский институт',
      en: '1995 Samarkand Medical Institute',
    },
    experience: {
      uz: '30 yildan ortiq',
      ru: 'Более 30 лет',
      en: 'Over 30 years',
    },
    workTime: { uz: '—', ru: '—', en: '—' },
    phone: '',
    content: {
      uz: [
        '1996-yilda Surxondaryo viloyati Muzrabot tumanida tug‘ruq bo‘limida akusher-ginekolog sifatida faoliyat boshlagan.',
        '1998-yildan Termiz shahrida tez tibbiy yordam shifoxonasida vrach-konsultant va shahar tug‘ruqxonasida akusher-ginekolog bo‘lib ishlagan.',
        '2001–2009-yillarda Muzrabot tumani tug‘ruqxonasida jarroh akusher-ginekolog sifatida faoliyat yuritgan.',
        '2009-yilda BAA, Jidda shahridagi Al Kaira gospitalida jarroh akusher-ginekolog bo‘lib ishlagan.',
        '2021-yilda Istanbul shahridagi Medipol xususiy ko‘p tarmoqli shifoxonasida akusher-ginekolog sifatida ishlagan.',
        '2024-yildan Toshkent shahridagi Humo Med xususiy klinikasida oliy toifali akusher-ginekolog sifatida faoliyat yuritmoqda.',
      ],
      ru: [
        'В 1996 г. начала работать акушером-гинекологом в родильном отделении Музрабадского района Сурхандарьинской области.',
        'С 1998 г. работала врачом-консультантом в Термезской скорой помощи и акушером-гинекологом в городской родильной больнице.',
        'В 2001–2009 гг. продолжала деятельность в качестве хирурга акушера-гинеколога в родильном доме Музрабадского района.',
        'В 2009 г. трудилась в г. Джидда (ОАЭ) в госпитале Al Kaira как хирург акушер-гинеколог.',
        'В 2021 г. работала в Стамбуле (Турция) в многопрофильной частной клинике Medipol.',
        'С 2024 г. трудится в Ташкенте в частной клинике Humo Med как врач акушер-гинеколог высшей категории.',
      ],
      en: [
        'In 1996, she began her career as an obstetrician-gynecologist in the maternity ward of Muzrabot district, Surkhandarya region.',
        'Since 1998, she has worked as a consultant physician in Termez Emergency Hospital and as an obstetrician-gynecologist in the city maternity hospital.',
        'From 2001 to 2009, she continued her practice as a surgical obstetrician-gynecologist in Muzrabot district maternity hospital.',
        'In 2009, she worked in Jeddah, UAE, at Al Kaira Hospital as a surgical obstetrician-gynecologist.',
        'In 2021, she practiced at Medipol Private Multidisciplinary Hospital in Istanbul, Turkey.',
        'Since 2024, she has been working as a senior obstetrician-gynecologist at Humo Med Private Clinic in Tashkent.',
      ],
    },
  },

  {
    id: 5,
    image: sanjarImg,
    name: {
      uz: 'Dr. Akmal Xolmatov',
      ru: 'Др. Акмал Холматов',
      en: 'Dr. Akmal Kholmatov',
    },
    specialty: {
      uz: 'Ortoped-travmatolog',
      ru: 'Ортопед-травматолог',
      en: 'Orthopedic traumatologist',
    },
    subSpecialty: {
      uz: 'Sport jarohatlari va suyak jarrohligi',
      ru: 'Спортивные травмы и костная хирургия',
      en: 'Sports injuries and bone surgery',
    },
    birthDate: { uz: '—', ru: '—', en: '—' },
    birthPlace: { uz: '—', ru: '—', en: '—' },
    education: { uz: '—', ru: '—', en: '—' },
    experience: { uz: '20 yil', ru: '20 лет', en: '20 years' },
    workTime: { uz: '—', ru: '—', en: '—' },
    phone: '',
    content: {
      uz: [
        "20 yildan beri ortopediya va travmatologiya yo'nalishida faoliyat yuritadi.",
        'Sport jarohatlari va suyak sinishlarini davolashda katta tajribaga ega.',
        "Protezlash va reabilitatsiya bo'yicha yuqori malakali mutaxassis.",
      ],
      ru: [
        'Ортопед-травматолог с 20-летним стажем.',
        'Имеет опыт в лечении спортивных травм и переломов костей.',
        'Специалист в области протезирования и реабилитации.',
      ],
      en: [
        'Orthopedic traumatologist with 20 years of experience.',
        'Experienced in treating sports injuries and bone fractures.',
        'Specialist in prosthetics and rehabilitation.',
      ],
    },
  },

  {
    id: 6,
    image: akmalImg,
    name: {
      uz: "Dr. Malika To'xtayeva",
      ru: 'Др. Малика Тухтаева',
      en: 'Dr. Malika Tukhtayeva',
    },
    specialty: {
      uz: 'Ginekolog',
      ru: 'Гинеколог',
      en: 'Gynecologist',
    },
    subSpecialty: {
      uz: 'Reproduktiv salomatlik va homiladorlik kuzatuvi',
      ru: 'Репродуктивное здоровье и ведение беременности',
      en: 'Reproductive health and pregnancy monitoring',
    },
    birthDate: { uz: '—', ru: '—', en: '—' },
    birthPlace: { uz: '—', ru: '—', en: '—' },
    education: { uz: '—', ru: '—', en: '—' },
    experience: { uz: '15+ yil', ru: 'более 15 лет', en: 'over 15 years' },
    workTime: { uz: '—', ru: '—', en: '—' },
    phone: '',
    content: {
      uz: [
        '15 yildan ortiq tajribaga ega ginekolog.',
        "Homiladorlik kuzatuvi va ayollar salomatligi bo'yicha mutaxassis.",
        'Bepushtlik muammolari va davolashda katta tajribaga ega.',
      ],
      ru: [
        'Гинеколог с более чем 15-летним опытом.',
        'Специалист по ведению беременности и женскому здоровью.',
        'Имеет большой опыт в лечении бесплодия.',
      ],
      en: [
        'Gynecologist with over 15 years of experience.',
        "Specialist in pregnancy monitoring and women's health.",
        'Extensive experience in infertility treatment.',
      ],
    },
  },

  {
    id: 7,
    image: malikaImg,
    name: {
      uz: 'Dr. Farrux Usmonov',
      ru: 'Др. Фаррух Усмонов',
      en: 'Dr. Farrukh Usmonov',
    },
    specialty: {
      uz: 'Urolog',
      ru: 'Уролог',
      en: 'Urologist',
    },
    subSpecialty: {
      uz: 'Buyrak va siydik tizimi kasalliklari',
      ru: 'Заболевания почек и мочевыводящей системы',
      en: 'Kidney and urinary system diseases',
    },
    birthDate: { uz: '—', ru: '—', en: '—' },
    birthPlace: { uz: '—', ru: '—', en: '—' },
    education: { uz: '—', ru: '—', en: '—' },
    experience: { uz: '—', ru: '—', en: '—' },
    workTime: { uz: '—', ru: '—', en: '—' },
    phone: '',
    content: {
      uz: [
        "Buyrak va siydik yo'llari kasalliklari bo'yicha tajribali urolog.",
        "Prostata kasalliklari va endoskopik muolajalar bo'yicha yuqori malakali.",
        'Erkaklar salomatligi va reproduktiv tizimda katta tajribaga ega.',
      ],
      ru: [
        'Опытный уролог по заболеваниям почек и мочевыводящих путей.',
        'Специалист по заболеваниям простаты и эндоскопическим процедурам.',
        'Имеет опыт в области мужского здоровья и репродуктивной системы.',
      ],
      en: [
        'Experienced urologist in kidney and urinary tract diseases.',
        'Skilled in prostate disorders and endoscopic procedures.',
        'Extensive experience in men’s health and reproductive system.',
      ],
    },
  },

  {
    id: 8,
    image: previewImg,
    name: {
      uz: 'Dr. Saida Rasulova',
      ru: 'Др. Саида Расулова',
      en: 'Dr. Saida Rasulova',
    },
    specialty: {
      uz: 'Endokrinolog',
      ru: 'Эндокринолог',
      en: 'Endocrinologist',
    },
    subSpecialty: {
      uz: 'Qandli diabet va qalqonsimon bez kasalliklari',
      ru: 'Сахарный диабет и заболевания щитовидной железы',
      en: 'Diabetes and thyroid diseases',
    },
    birthDate: { uz: '—', ru: '—', en: '—' },
    birthPlace: { uz: '—', ru: '—', en: '—' },
    education: { uz: '—', ru: '—', en: '—' },
    experience: { uz: '14 yil', ru: '14 лет', en: '14 years' },
    workTime: { uz: '—', ru: '—', en: '—' },
    phone: '',
    content: {
      uz: [
        '14 yillik tajribaga ega endokrinolog.',
        'Qandli diabetni tashxislash va davolashda yetakchi mutaxassis.',
        "Qalqonsimon bez kasalliklari va gormonal buzilishlar bo'yicha tajribaga ega.",
      ],
      ru: [
        'Эндокринолог с 14-летним стажем.',
        'Опытный специалист по диагностике и лечению диабета.',
        'Занимается заболеваниями щитовидной железы и гормональными нарушениями.',
      ],
      en: [
        'Endocrinologist with 14 years of experience.',
        'Specialist in diagnosis and treatment of diabetes.',
        'Experienced in thyroid diseases and hormonal disorders.',
      ],
    },
  },

  {
    id: 9,
    image: Baxtiyor,
    name: {
      uz: 'Dr. Diyorbek Mirzayev',
      ru: 'Др. Диёрбек Мирзаев',
      en: 'Dr. Diyorbek Mirzayev',
    },
    specialty: {
      uz: 'Psixolog',
      ru: 'Психолог',
      en: 'Psychologist',
    },
    subSpecialty: {
      uz: 'Kognitiv-terapevtik yondashuv',
      ru: 'Когнитивно-терапевтический подход',
      en: 'Cognitive-therapeutic approach',
    },
    birthDate: { uz: '—', ru: '—', en: '—' },
    birthPlace: { uz: '—', ru: '—', en: '—' },
    education: { uz: '—', ru: '—', en: '—' },
    experience: { uz: '—', ru: '—', en: '—' },
    workTime: { uz: '—', ru: '—', en: '—' },
    phone: '',
    content: {
      uz: [
        'Stress, depressiya va shaxsiy muammolarni yengishda yordam beradi.',
        "Kognitiv-terapevtik yondashuv bo'yicha mutaxassis.",
        "Bolalar va kattalar psixologiyasi bo'yicha maslahat beradi.",
      ],
      ru: [
        'Помогает справиться со стрессом, депрессией и личными проблемами.',
        'Специалист по когнитивно-терапевтическому подходу.',
        'Консультирует по детской и взрослой психологии.',
      ],
      en: [
        'Helps with stress, depression, and personal issues.',
        'Specialist in cognitive-therapeutic approach.',
        'Provides counseling in child and adult psychology.',
      ],
    },
  },
];
