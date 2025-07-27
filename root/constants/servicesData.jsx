import {
  FaHeart,
  FaBrain,
  FaBaby,
  FaStethoscope,
  FaLungs,
  FaUserMd,
  FaNotesMedical,
  FaVial,
  FaUserNurse,
  FaUserInjured,
  FaProcedures,
  FaVenus,
  FaXRay,
  FaHands,
  FaMicroscope,
  FaBed,
  FaUserPlus,
  FaSyringe,
} from 'react-icons/fa';

import traumaImage from '../assets/img/otgolagiya.png';
import cardioImage from '../assets/img/otgolagiya.png';
import neuroImage from '../assets/img/otgolagiya.png';
import pediatricImage from '../assets/img/otgolagiya.png';
import therapistImage from '../assets/img/otgolagiya.png';
import pulmonologistImage from '../assets/img/otgolagiya.png';
import dermatologistImage from '../assets/img/otgolagiya.png';
import allergistImage from '../assets/img/otgolagiya.png';
import gynecologistImage from '../assets/img/otgolagiya.png';
import entImage from '../assets/img/otgolagiya.png';
import hepatologistImage from '../assets/img/otgolagiya.png';
import proctologistImage from '../assets/img/otgolagiya.png';
import rheumatologistImage from '../assets/img/otgolagiya.png';
import ultrasoundImage from '../assets/img/otgolagiya.png';
import xrayImage from '../assets/img/otgolagiya.png';
import physiotherapyImage from '../assets/img/otgolagiya.png';
import massageImage from '../assets/img/otgolagiya.png';
import procedureImage from '../assets/img/otgolagiya.png';
import laboratoryImage from '../assets/img/otgolagiya.png';
import operatingRoomImage from '../assets/img/otgolagiya.png';
import inpatientImage from '../assets/img/otgolagiya.png';

const servicesData = {
  cardiology: {
    icon: <FaHeart />,
    title: 'Kardiologiya',
    image: cardioImage,
    content: [
      {
        type: 'paragraph',
        text: 'Kardiolog – yurak va qon-tomir tizimi bilan bog‘liq muammolarni aniqlovchi va davolovchi mutaxassis',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Kardiolog yurak ishemik kasalligi, yurak urishidagi buzilishlar, gipertoniya kabi holatlarni aniqlaydi va davolaydi. "Humo Med" klinikasida siz zamonaviy usullar bilan tekshiruvdan o‘tasiz va yuqori malakali mutaxassislardan maslahat olasiz.',
      },
      {
        type: 'title',
        text: 'Sabablar va xavf omillari',
      },
      {
        type: 'paragraph',
        text: 'Stress, noto‘g‘ri ovqatlanish, kamharakatlilik, yomon odatlar (chekish, alkogol), genetik moyillik yurak kasalliklari xavfini oshiradi.',
      },
      {
        type: 'title',
        text: 'Asosiy simptomlar:',
      },
      {
        type: 'list',
        items: [
          'Ko‘krak sohasida og‘riq',
          'Tez charchash',
          'Nafas qisishi',
          'Yurak urishidagi buzilishlar',
          'Bosh aylanish yoki hushdan ketish',
        ],
      },
      {
        type: 'title',
        text: 'Qachon vrachga murojaat qilish kerak?',
      },
      {
        type: 'paragraph',
        text: 'Agar yurak sohasida noqulaylik sezsangiz yoki yuqoridagi simptomlar sizda mavjud bo‘lsa, kechiktirmasdan kardiologga murojaat qiling.',
      },
      {
        type: 'title',
        text: 'Diagnostika va davolash',
      },
      {
        type: 'paragraph',
        text: 'Elektrokardiogramma (EKG), ECHO, yurak testlari yordamida tashxis qo‘yiladi. Davolash dori vositalari yoki hayot tarzini o‘zgartirish orqali olib boriladi.',
      },
      {
        type: 'title',
        text: 'Nega aynan Humo Med?',
      },
      {
        type: 'list',
        items: [
          'Tajribali mutaxassislar',
          'Zamonaviy diagnostika uskunalari',
          'Qulay va xavfsiz davolash sharoiti',
          'Bemorga qulay yondashuv',
          'Reabilitatsiya va kuzatuv',
        ],
      },
    ],
  },
  neurologist: {
    icon: <FaBrain />,
    title: 'Nevrologiya',
    image: neuroImage,
    description: 'Asab tizimi kasalliklarini davolovchi mutaxassislar xizmati.',
  },
  pediatrician: {
    icon: <FaBaby />,
    title: 'Pediatriya',
    image: pediatricImage,
    description: 'Bolalar salomatligini saqlash va kasalliklarni davolash.',
  },
  therapist: {
    icon: <FaUserMd />,
    title: 'Terapiya',
    image: therapistImage,
    description: 'Ichki kasalliklar bo‘yicha umumiy davolovchi shifokorlar.',
  },
  pulmonologist: {
    icon: <FaLungs />,
    title: 'Pulmonologiya',
    image: pulmonologistImage,
    description: 'Nafas olish tizimi (o‘pka) kasalliklarini davolash.',
  },
  dermatologist: {
    icon: <FaNotesMedical />,
    title: 'Dermatologiya',
    image: dermatologistImage,
    description: 'Teriga oid muammolar, toshmalar va allergiyalar.',
  },
  allergist: {
    icon: <FaVial />,
    title: 'Allergologiya',
    image: allergistImage,
    description: 'Allergik reaksiyalarni aniqlash va bartaraf etish.',
  },
  gynecologist: {
    icon: <FaVenus />,
    title: 'Ginekologiya',
    image: gynecologistImage,
    description: 'Ayollar salomatligi, reproduktiv tizim muammolari.',
  },
  ent: {
    icon: <FaStethoscope />,
    title: 'LOR (otolaringolog)',
    image: entImage,
    description: 'Quloq, burun, tomoq kasalliklari bo‘yicha davolash.',
  },
  hepatologist: {
    icon: <FaUserNurse />,
    title: 'Gepatologiya',
    image: hepatologistImage,
    description: 'Jigar, o‘t pufagi va me’da osti bezi muammolari.',
  },
  proctologist: {
    icon: <FaProcedures />,
    title: 'Proktologiya',
    image: proctologistImage,
    description: 'Ichki va tashqi bavosil, to‘g‘ri ichak kasalliklari.',
  },
  rheumatologist: {
    icon: <FaHands />,
    title: 'Revmatologiya',
    image: rheumatologistImage,
    description: 'Bo‘g‘im va harakat tizimi kasalliklarini davolash.',
  },
  ultrasound: {
    icon: <FaMicroscope />,
    title: 'Ultratovush tekshiruvi (UZI)',
    image: ultrasoundImage,
    description: 'Organlar holatini ultratovush orqali tekshirish.',
  },
  xray: {
    icon: <FaXRay />,
    title: 'Rentgen',
    image: xrayImage,
    description: 'Suyaklar, bo‘g‘imlar va ichki a’zolarning tasvirini olish.',
  },
  physiotherapy: {
    icon: <FaHands />,
    title: 'Fizioterapiya',
    image: physiotherapyImage,
    description: 'Elektr, magnit, issiqlik orqali davolovchi muolajalar.',
  },
  massage: {
    icon: <FaUserPlus />,
    title: 'Massaj terapiyasi',
    image: massageImage,
    description: 'Sog‘lomlashtiruvchi va reabilitatsion massaj xizmatlari.',
  },
  procedure_room: {
    icon: <FaSyringe />,
    title: 'Muolajalar xonasi',
    image: procedureImage,
    description: 'Inyeksiya, sistemalar va boshqa muolajalar xizmati.',
  },
  laboratory: {
    icon: <FaMicroscope />,
    title: 'Laboratoriya',
    image: laboratoryImage,
    description: 'Qon, siydik, boshqa analizlar laboratoriyada.',
  },
  operating_room: {
    icon: <FaProcedures />,
    title: 'Operatsiya xonasi',
    image: operatingRoomImage,
    description: 'Zarur hollarda jarrohlik amaliyotlari o‘tkaziladi.',
  },
  inpatient: {
    icon: <FaBed />,
    title: 'Statsionar davolash',
    image: inpatientImage,
    description: 'Klinikamizda yotib davolanish sharoitlari.',
  },
  trauma: {
    icon: <FaUserInjured />,
    title: 'Травматолог-ортопед',
    image: traumaImage,
    content: [
      {
        type: 'paragraph',
        text: 'Travmatolog-jarroh – suyak, bo‘g‘im va jarohatlar bo‘yicha mutaxassis',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Travmatolog-ortoped – bu jismoniy jarohatlar, suyaklar, bo‘g‘imlar va yumshoq to‘qimalar bilan bog‘liq har qanday muammolarni aniqlash va davolash bilan shug‘ullanadigan mutaxassis. "Humo Med" klinikasidagi malakali vrachlar har bir bemorga individual yondashadi va zamonaviy diagnostika vositalaridan foydalanadi.',
      },
      {
        type: 'title',
        text: 'Sabablar va xavf omillari',
      },
      {
        type: 'paragraph',
        text: 'Suyak sinishi, chiqish, sport jarohatlari, avtohalokatlar yoki uyda yiqilish kabi holatlar travmatologga murojaat qilishga sabab bo‘lishi mumkin. Keksalarda esa osteoporoz natijasida suyaklarning mo‘rtlashishi katta xavf tug‘diradi.',
      },
      {
        type: 'title',
        text: 'Asosiy simptomlar:',
      },
      {
        type: 'list',
        items: [
          'Shish, ko‘karish va og‘riq',
          'Bo‘g‘imda harakatning cheklanishi yoki yo‘qligi',
          'Suyaklarda shaklning buzilishi',
          'Harakat paytida qarsillagan ovoz',
        ],
      },
      {
        type: 'title',
        text: 'Qachon vrachga murojaat qilish kerak?',
      },
      {
        type: 'paragraph',
        text: 'Hatto yengil jarohat ham o‘z vaqtida davolanmasa, murakkab asoratlarga olib kelishi mumkin. Og‘riq 1-2 kundan keyin kamaymasa, bo‘g‘im yoki suyak holati g‘alati bo‘lsa, kechiktirmasdan "Humo Med" travmatologiga murojaat qiling.',
      },
      {
        type: 'title',
        text: 'Diagnostika va davolash',
      },
      {
        type: 'paragraph',
        text: 'Klinikamizda rentgen, UZI, MRT kabi tekshiruvlar yordamida aniq tashxis qo‘yiladi. Davolash usullari individual tanlanadi – bu dori vositalari, bog‘lash, fizioterapiya yoki kerak bo‘lsa, jarrohlik amaliyotlarini o‘z ichiga oladi.',
      },
      {
        type: 'title',
        text: 'Nega aynan Humo Med?',
      },
      {
        type: 'list',
        items: [
          'Tajribali travmatolog va ortopedlar',
          'Zamonaviy diagnostika uskunalari',
          'Qulay va xavfsiz davolash sharoiti',
          'Bemorga qulay yondashuv',
          'Reabilitatsiya va kuzatuv',
        ],
      },
    ],
  },
};

export default servicesData;
