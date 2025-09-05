import Baxtiyor from '../assets/images/Baxtiyor.png';
import Gulbahor from '../assets/images/gulbahor.png';
import hoshimImg from '../assets/images/hoshimImg.png';
import nurlibekImg from '../assets/images/img_1.png';
import shirina from '../assets/images/shirina.png';
import Ulugbek from '../assets/images/ulugbek.png';
import Dinara from '../assets/img/ginekolig.png';
import shodmanovImg from '../assets/images/shodmanovImg.png';
import Gafur from '../assets/images/Gafur.png';

export const doctorDetails = [
  {
    id: 1,
    image: Ulugbek,
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
      uz: ' Gulbahor Jiyanova',
      ru: '. Гульбахор Жиянова',
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
    workTime: { uz: '24/7', ru: '24/7', en: '24/7' },

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
    image: shirina,
    name: {
      uz: 'Maxmudova Shirina Maxmud qizi',
      ru: 'Махмудова Ширина Махмуд кизи',
      en: 'Shirina Makhmudova Maxmud qizi',
    },
    specialty: {
      uz: 'Pediatr shifokor',
      ru: 'Врач-педиатр',
      en: 'Pediatric doctor',
    },
    subSpecialty: {
      uz: '—',
      ru: '—',
      en: '—',
    },
    birthDate: {
      uz: '02.08.1993',
      ru: '02.08.1993',
      en: '02.08.1993',
    },
    birthPlace: {
      uz: 'Jizzax viloyati',
      ru: 'Джизакская область',
      en: 'Jizzakh region',
    },
    education: {
      uz: 'Toshkent Pediatriya tibbiyot instituti – 6 yil, Respublika shoshilinch tibbiy yordam ilmiy markazi – 2 yil',
      ru: 'Ташкентский педиатрический медицинский институт – 6 лет, Республиканский научный центр скорой медицинской помощи – 2 года',
      en: 'Tashkent Pediatric Medical Institute – 6 years, Republican Scientific Center of Emergency Medical Care – 2 years',
    },
    experience: {
      uz: '3 yil',
      ru: '3 года',
      en: '3 years',
    },
    workTime: {
      uz: '09:00 – 24:00',
      ru: '09:00 – 24:00',
      en: '09:00 – 24:00',
    },
    phone: '+998 90 321 11 13',
    content: {
      uz: [
        'Pediatr shifokor sifatida 3 yillik ish tajribasiga ega.',
        'Yangi hayot 66-poliklinikasida faoliyat yuritadi.',
      ],
      ru: ['Врач-педиатр с 3-летним опытом работы.', "Работает в поликлинике №66 'Янги хаёт'."],
      en: [
        'Pediatric doctor with 3 years of work experience.',
        'Currently works at Yangi Hayot Clinic No. 66.',
      ],
    },
  },

  {
    id: 6,
    image: nurlibekImg,
    name: {
      uz: 'Maxatov Nurlibek',
      ru: 'Махатов Нурлибек',
      en: 'Nurlibek Makhatoв',
    },
    specialty: {
      uz: 'Otorinolaringolog',
      ru: 'Оториноларинголог',
      en: 'Otorhinolaryngologist (ENT)',
    },
    subSpecialty: {
      uz: 'LOR kasalliklari',
      ru: 'Болезни ЛОР',
      en: 'ENT diseases',
    },
    birthDate: { uz: '16.04.1996', ru: '16.04.1996', en: '16.04.1996' },
    birthPlace: {
      uz: 'Toshkent viloyati, Parkent tumani',
      ru: 'Ташкентская область, Паркентский район',
      en: 'Parkent district, Tashkent region',
    },
    education: {
      uz: 'Toshkent Tibbiyot Akademiyasi (bakalavr), Toshkent Stomatologiya Instituti – otorinolaringologiya ordinaturasi',
      ru: 'Ташкентская медицинская академия (бакалавр), Ташкентский стоматологический институт – ординатура по оториноларингологии',
      en: 'Tashkent Medical Academy (Bachelor), Tashkent State Dental Institute – residency in otorhinolaryngology',
    },
    experience: {
      uz: '5 yil tajriba',
      ru: '5 лет опыта',
      en: '5 years of experience',
    },
    workTime: {
      uz: '14:00 – 00:00 (navbatchilik kunlariga qarab)',
      ru: '14:00 – 00:00 (в зависимости от дежурных дней)',
      en: '14:00 – 00:00 (depending on duty days)',
    },
    phone: '',
    content: {
      uz: [
        'Humo Med, LOR Medical Service va ID Medical klinikalarida faoliyat olib borgan.',
        'IELTS sertifikati (2021), USMLE STEP1 Pass (2024).',
      ],
      ru: [
        'Работал в клиниках Humo Med, LOR Medical Service и ID Medical.',
        'IELTS сертификат (2021), USMLE STEP1 Pass (2024).',
      ],
      en: [
        'Worked at Humo Med, LOR Medical Service, and ID Medical clinics.',
        'IELTS Certificate (2021), USMLE STEP1 Pass (2024).',
      ],
    },
  },

  {
    id: 7,
    image: hoshimImg,
    name: {
      uz: 'Abdullayev Hoshim Raximovich',
      ru: 'Абдуллаев Хошим Рахимович',
      en: 'Hoshim Abdullaev Rakhimovich',
    },
    specialty: {
      uz: 'Dermatovenerolog, UTT shifokori',
      ru: 'Дерматовенеролог, врач УЗИ',
      en: 'Dermatovenereologist, Ultrasound doctor',
    },
    subSpecialty: {
      uz: '—',
      ru: '—',
      en: '—',
    },
    birthDate: { uz: '28.02.1972', ru: '28.02.1972', en: '28.02.1972' },
    birthPlace: {
      uz: 'Qashqadaryo viloyati, Kitob tumani',
      ru: 'Кашкадарьинская область, Китабский район',
      en: 'Kitob district, Kashkadarya region',
    },
    education: {
      uz: 'Buxoro Davlat Tibbiyot Instituti, 1996 yil',
      ru: 'Бухарский государственный медицинский институт, 1996 год',
      en: 'Bukhara State Medical Institute, 1996',
    },
    experience: {
      uz: '2016 yildan buyon UTT shifokori',
      ru: 'С 2016 года врач УЗИ',
      en: 'Ultrasound doctor since 2016',
    },
    workTime: { uz: '24/7', ru: '24/7', en: '24/7' },

    phone: '+998 91 460 19 72',
    content: {
      uz: [
        'Dermato-venerolog sifatida malakaga ega.',
        '2016 yildan buyon UTT shifokori sifatida faoliyat yuritmoqda.',
        'Hozirda HumoMed klinikasida ishlaydi.',
      ],
      ru: [
        'Имеет квалификацию дерматовенеролога.',
        'С 2016 года работает врачом УЗИ.',
        'В настоящее время работает в клинике HumoMed.',
      ],
      en: [
        'Qualified as a dermatovenereologist.',
        'Working as an ultrasound doctor since 2016.',
        'Currently works at HumoMed clinic.',
      ],
    },
  },

  {
    id: 8,
    image: shodmanovImg,
    name: {
      uz: 'Shodmanov Sohibali Jumaboyevich',
      ru: 'Шодманов Сохибали Жумабоевич',
      en: 'Sohibali Shodmanov Jumaboyevich',
    },
    specialty: {
      uz: 'Vrach rentgenolog',
      ru: 'Врач рентгенолог',
      en: 'Radiologist',
    },
    subSpecialty: {
      uz: '—',
      ru: '—',
      en: '—',
    },
    birthDate: { uz: '20.12.1989', ru: '20.12.1989', en: '20.12.1989' },
    birthPlace: {
      uz: "Samarqand viloyati, Qo'shirobot tumani, Qo'rg'on mahallasi, Oqtepa qishlog'i, 92-uy",
      ru: 'Самаркандская область, Кушработский район, махалля Кургон, кишлак Октапа, дом 92',
      en: 'Samarkand region, Kushrabot district, Qorgon mahalla, Oqtepa village, house 92',
    },
    education: {
      uz: '2017-yilda Toshkent Pediatriya Tibbiyot Instituti. Ordinatura — Respublika ixtisoslashtirilgan xirurgiya markazi (V.V. Vahidov nomli), tibbiy radiologiya bo‘limida.',
      ru: 'В 2017 году окончил ТашПМИ. Ординатура — Республиканский специализированный центр хирургии им. В.В. Вахидова, отделение медицинской радиологии.',
      en: 'Graduated in 2017 from Tashkent Pediatric Medical Institute. Residency at the Republican Specialized Surgery Center named after V.V. Vakhidov, Department of Medical Radiology.',
    },
    experience: {
      uz: '2017–2021 yillarda RNCEMP 8-podstansiyada shoshilinch yordam shifokori. 2021-yildan hozirga qadar Zangiota tuman TMOda UTT va rentgen diagnostika bo‘limida ishlaydi.',
      ru: 'С 2017 по 2021 годы — врач экстренной помощи в РНЦЭМП 8-й подстанции. С 2021 года по настоящее время работает в Зангиатинском районном медобъединении, отделение УЗД и рентгенодиагностики.',
      en: 'From 2017 to 2021, worked as an emergency doctor at RNCEMP, 8th substation. Since 2021, works at Zangiata District Medical Association, Department of Ultrasound and X-ray diagnostics.',
    },
    workTime: { uz: '24/7', ru: '24/7', en: '24/7' },
    phone: '+998 50 009 78 52',
    content: {
      uz: [
        '2017-yilda Toshkent Pediatriya Tibbiyot Institutini tamomlagan.',
        'Ordinaturani Respublika ixtisoslashtirilgan xirurgiya markazida (V.V. Vahidov nomli) tibbiy radiologiya bo‘limida o‘tgan.',
        '2017–2021 yillarda RNCEMP 8-podstansiyada shoshilinch yordam shifokori bo‘lib ishlagan.',
        '2021-yildan hozirga qadar Zangiota tuman TMOda UTT va rentgen diagnostika bo‘limida ishlaydi.',
        'Hozirda bosh rentgenolog sifatida faoliyat yuritmoqda.',
      ],
      ru: [
        'В 2017 году окончил ТашПМИ.',
        'Проходил ординатуру в Республиканском специализированном центре хирургии им. В.В. Вахидова, отделение медицинской радиологии.',
        'С 2017 по 2021 годы работал врачом экстренной помощи в РНЦЭМП 8-й подстанции.',
        'С 2021 года по настоящее время работает в Зангиатинском районном медобъединении, в отделении УЗД и рентгенографии.',
        'В данный момент является главным врачом-рентгенологом.',
      ],
      en: [
        'Graduated in 2017 from Tashkent Pediatric Medical Institute.',
        'Completed residency at the Republican Specialized Surgery Center named after V.V. Vakhidov, Department of Medical Radiology.',
        'From 2017 to 2021, worked as an emergency doctor at RNCEMP, 8th substation.',
        'Since 2021, works at Zangiata District Medical Association, in the Department of Ultrasound and X-ray diagnostics.',
        'Currently serves as the chief radiologist.',
      ],
    },
  },

  {
    id: 9,
    image: Gafur,
    name: {
      uz: ' Diyorbek Mirzayev',
      ru: '. Диёрбек Мирзаев',
      en: ' Diyorbek Mirzayev',
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
    workTime: { uz: '24/7', ru: '24/7', en: '24/7' },

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
