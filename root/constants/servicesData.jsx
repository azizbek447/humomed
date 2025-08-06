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

import traumaImage from '../assets/img/traumaImage.png';
import cardioImage from '../assets/img/cardioImage.png';
import neuroImage from '../assets/img/neuroImage.png';
import pediatricImage from '../assets/img/pediatricImage.png';
import therapistImage from '../assets/img/therapistImage.png';
import pulmonologistImage from '../assets/img/otgolagiya.png';
import dermatologistImage from '../assets/img/traumaImage.png';
import allergistImage from '../assets/img/otgolagiya.png';
import gynecologistImage from '../assets/img/otgolagiya.png';
import entImage from '../assets/img/otgolagiya.png';
import hepatologistImage from '../assets/img/Fizoterapiya.png';
import proctologistImage from '../assets/img/neuroImage.png';
import rheumatologistImage from '../assets/img/otgolagiya.png';
import ultrasoundImage from '../assets/img/Ортопедия.png';
import xrayImage from '../assets/img/otgolagiya.png';
import physiotherapyImage from '../assets/img/otgolagiya.png';
import massageImage from '../assets/img/massageImage.png';
import procedureImage from '../assets/img/otgolagiya.png';
import laboratoryImage from '../assets/img/otgolagiya.png';
import operatingRoomImage from '../assets/img/operatingRoomImage.png';
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
    content: [
      {
        type: 'paragraph',
        text: 'Nevrolog – asab tizimi kasalliklarini aniqlovchi va davolovchi mutaxassis',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Nevrolog bosh miya, orqa miya, asab tolalari va mushak faoliyati bilan bog‘liq kasalliklarni tashxislaydi va davolaydi. "Humo Med" klinikasida siz zamonaviy asbob-uskunalarda tekshiruvdan o‘tasiz va yuqori malakali nevrologdan batafsil maslahat olasiz.',
      },
      {
        type: 'title',
        text: 'Sabablar va xavf omillari',
      },
      {
        type: 'paragraph',
        text: 'Stress, bosh jarohatlari, irsiy omillar, yomon turmush tarzi, surunkali kasalliklar va virusli infeksiyalar nevrologik muammolarning paydo bo‘lishiga sabab bo‘ladi.',
      },
      {
        type: 'title',
        text: 'Asosiy simptomlar:',
      },
      {
        type: 'list',
        items: [
          'Bosh og‘rig‘i yoki bosh aylanish',
          'Qo‘l va oyoqlarda uvishish yoki zaiflik',
          'Koordinatsiya buzilishi',
          'Xotira yoki nutq bilan bog‘liq muammolar',
          'Uyqu buzilishi yoki surunkali charchoq',
        ],
      },
      {
        type: 'title',
        text: 'Qachon vrachga murojaat qilish kerak?',
      },
      {
        type: 'paragraph',
        text: 'Agar yuqoridagi simptomlardan biri yoki bir nechtasi sizda mavjud bo‘lsa, vaqtni o‘tkazmasdan nevrologga murojaat qilish tavsiya etiladi.',
      },
      {
        type: 'title',
        text: 'Diagnostika va davolash',
      },
      {
        type: 'paragraph',
        text: 'MRI, KT, EEG, EMG kabi zamonaviy uskunalar yordamida aniqlik bilan tashxis qo‘yiladi. Davolash dori vositalari, fizioterapiya yoki nevroreabilitatsiya usullari orqali amalga oshiriladi.',
      },
      {
        type: 'title',
        text: 'Nega aynan Humo Med?',
      },
      {
        type: 'list',
        items: [
          'Tajribali nevrolog mutaxassislar',
          'Zamonaviy diagnostika texnologiyalari',
          'Bemorga individual yondashuv',
          'Toza va qulay muhit',
          'Doimiy kuzatuv va qo‘llab-quvvatlash',
        ],
      },
    ],
  },
  pediatrician: {
    icon: <FaBaby />,
    title: 'Pediatriya',
    image: pediatricImage,
    content: [
      {
        type: 'paragraph',
        text: 'Pediatr – bolalar salomatligi bilan shug‘ullanuvchi, kasalliklarning oldini oluvchi va davolovchi mutaxassis',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Pediatr yangi tug‘ilgan chaqaloqlardan tortib o‘smir yoshdagilargacha bo‘lgan bolalarning sog‘lig‘ini nazorat qiladi, ularning rivojlanishini baholaydi va kerakli tavsiyalarni beradi. "Humo Med" klinikasida bolalaringiz ishonchli qo‘llarda bo‘ladi – tajribali mutaxassislar va zamonaviy uskunalar bilan xizmat ko‘rsatiladi.',
      },
      {
        type: 'title',
        text: 'Sabablar va xavf omillari',
      },
      {
        type: 'paragraph',
        text: 'Immunitetning pasayishi, noto‘g‘ri ovqatlanish, gigiyenaga rioya qilmaslik, virusli infeksiyalar, allergiyalar va irsiy kasalliklar bolalarda turli muammolarni keltirib chiqarishi mumkin.',
      },
      {
        type: 'title',
        text: 'Asosiy simptomlar:',
      },
      {
        type: 'list',
        items: [
          'Tez-tez shamollash yoki isitma chiqishi',
          'Ovqat hazm qilish muammolari',
          'Teri toshmalari yoki allergik belgilar',
          'Uyqu buzilishi yoki injiqlik',
          'Og‘irlikning yetarli ortmasligi yoki rivojlanishdagi kechikish',
        ],
      },
      {
        type: 'title',
        text: 'Qachon vrachga murojaat qilish kerak?',
      },
      {
        type: 'paragraph',
        text: 'Agar farzandingizda yuqoridagi belgilar mavjud bo‘lsa, yoki oddiy tekshiruvdan o‘tkazish niyatida bo‘lsangiz, pediatrga murojaat qilish muhimdir. Vaqtida aniqlangan muammo tezda hal qilinadi.',
      },
      {
        type: 'title',
        text: 'Diagnostika va davolash',
      },
      {
        type: 'paragraph',
        text: 'Pediatr bolani umumiy ko‘rikdan o‘tkazadi, kerak bo‘lsa laboratoriya tahlillari yoki instrumental tekshiruvlar tayinlaydi. Davolash dori vositalari, parhez, fizioterapiya yoki profilaktik choralardan iborat bo‘lishi mumkin.',
      },
      {
        type: 'title',
        text: 'Nega aynan Humo Med?',
      },
      {
        type: 'list',
        items: [
          'Bolalar bilan ishlash tajribasiga ega pediatrlar',
          'Yaxshi jihozlangan va xavfsiz muhit',
          'Har tomonlama diagnostika va davolash',
          'Ota-onalar bilan hamkorlikda ishlash',
          'Farzandingiz uchun qulay va do‘stona yondashuv',
        ],
      },
    ],
  },
  therapist: {
    icon: <FaUserMd />,
    title: 'Terapiya',
    image: therapistImage,
    content: [
      {
        type: 'paragraph',
        text: 'Terapevt – ichki a’zolar kasalliklarini aniqlovchi va davo choralarini belgilovchi umumiy amaliyot shifokori',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Terapevt nafas yo‘llari, ovqat hazm qilish, yurak-qon tomir, siydik chiqarish tizimi, endokrin tizim va umumiy holat bilan bog‘liq kasalliklarni tashxislaydi va davolaydi. "Humo Med" klinikasida sizni malakali terapevtlar ko‘rigidan o‘tish va zarur davolanish imkoniyati kutmoqda.',
      },
      {
        type: 'title',
        text: 'Sabablar va xavf omillari',
      },
      {
        type: 'paragraph',
        text: 'Noto‘g‘ri turmush tarzi, stress, yomon ovqatlanish, surunkali kasalliklar, ekologik omillar va harakatsizlik ko‘plab ichki a’zolar bilan bog‘liq muammolarga olib keladi.',
      },
      {
        type: 'title',
        text: 'Asosiy simptomlar:',
      },
      {
        type: 'list',
        items: [
          'Isitma va umumiy holsizlik',
          'Yo‘tal yoki tomoq og‘rig‘i',
          'Qorinda og‘riq yoki diskomfort',
          'Bosimning ko‘tarilishi yoki tushib ketishi',
          'Charchoq, bosh aylanish, uyqusizlik',
        ],
      },
      {
        type: 'title',
        text: 'Qachon vrachga murojaat qilish kerak?',
      },
      {
        type: 'paragraph',
        text: 'Agar o‘zingizni umumiy zaif his qilsangiz, yuqoridagi belgilar mavjud bo‘lsa yoki surunkali kasalliklaringizni nazoratdan o‘tkazmoqchi bo‘lsangiz, terapevtga murojaat qiling.',
      },
      {
        type: 'title',
        text: 'Diagnostika va davolash',
      },
      {
        type: 'paragraph',
        text: 'Terapevt tekshiruv, laborator tahlillar, rentgen, UTT va boshqa uslublar orqali tashxis qo‘yadi. Davolash dori vositalari, parhez, hayot tarzini o‘zgartirish va zarur hollarda boshqa mutaxassislarga yo‘llash orqali olib boriladi.',
      },
      {
        type: 'title',
        text: 'Nega aynan Humo Med?',
      },
      {
        type: 'list',
        items: [
          'Yuqori malakali terapevtlar',
          'Har tomonlama tahlil va tekshiruvlar',
          'Shaxsiy yondashuv va qulay muhit',
          'Kasalliklarning oldini olish bo‘yicha maslahatlar',
          'Tizimli nazorat va reabilitatsiya yondashuvi',
        ],
      },
    ],
  },
  pulmonologist: {
    icon: <FaLungs />,
    title: 'Pulmonologiya',
    image: pulmonologistImage,
    content: [
      {
        type: 'paragraph',
        text: 'Pulmonolog – o‘pka va nafas yo‘llari kasalliklarini aniqlovchi va davolovchi mutaxassis',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Pulmonolog bronxit, pnevmoniya, bronxial astma, surunkali obstruktiv o‘pka kasalligi (SO‘OKK) kabi muammolar bilan shug‘ullanadi. "Humo Med" klinikasida siz nafas yo‘llari holatini chuqur tekshiruvdan o‘tkazishingiz va samarali davolanish imkoniyatiga ega bo‘lasiz.',
      },
      {
        type: 'title',
        text: 'Sabablar va xavf omillari',
      },
      {
        type: 'paragraph',
        text: 'Chekish, ekologik ifloslanish, allergiyalar, surunkali infeksiyalar, irsiy omillar va zaif immunitet o‘pka kasalliklari xavfini oshiradi.',
      },
      {
        type: 'title',
        text: 'Asosiy simptomlar:',
      },
      {
        type: 'list',
        items: [
          'Uzoq davom etuvchi yo‘tal',
          'Nafas qisishi yoki og‘ir nafas olish',
          'Ko‘krakda siqilish yoki og‘riq',
          'Balg‘am ajralishi',
          'Tez-tez shamollash yoki bronxit',
        ],
      },
      {
        type: 'title',
        text: 'Qachon vrachga murojaat qilish kerak?',
      },
      {
        type: 'paragraph',
        text: 'Agar sizda uzoq muddatli yo‘tal, nafas olishda muammo yoki yuqoridagi simptomlar mavjud bo‘lsa, vaqtni boy bermasdan pulmonologga murojaat qiling.',
      },
      {
        type: 'title',
        text: 'Diagnostika va davolash',
      },
      {
        type: 'paragraph',
        text: 'Spirometriya, rentgen, kompyuter tomografiyasi (KT), qon tahlillari va boshqa metodlar yordamida to‘g‘ri tashxis qo‘yiladi. Davolash dori vositalari, inhalyatsiya, fizioterapiya yoki hayot tarzini o‘zgartirish orqali olib boriladi.',
      },
      {
        type: 'title',
        text: 'Nega aynan Humo Med?',
      },
      {
        type: 'list',
        items: [
          'Tajribali pulmonologlar',
          'Zamonaviy diagnostika uskunalari',
          'Nafas yo‘llari uchun kompleks davolash',
          'Allergik va surunkali kasalliklarga individual yondashuv',
          'Sifatli va qulay tibbiy xizmat',
        ],
      },
    ],
  },
  dermatologist: {
    icon: <FaNotesMedical />,
    title: 'Dermatologiya',
    image: dermatologistImage,
    content: [
      {
        type: 'paragraph',
        text: 'Dermatolog – teri, soch, tirnoq va shilliq qavatlar bilan bog‘liq kasalliklarni aniqlovchi va davolovchi mutaxassis',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Dermatolog akne (ugri), dermatit, ekzema, psoriaz, zamburug‘li kasalliklar, soch to‘kilishi va boshqa teri bilan bog‘liq muammolarni tashxislaydi va samarali davolaydi. "Humo Med" klinikasida teringiz sog‘lom va chiroyli ko‘rinishga ega bo‘lishi uchun barcha sharoitlar mavjud.',
      },
      {
        type: 'title',
        text: 'Sabablar va xavf omillari',
      },
      {
        type: 'paragraph',
        text: 'Gormonal o‘zgarishlar, stress, noto‘g‘ri parvarish, allergiyalar, irsiy omillar, gigiyenaga rioya qilmaslik teri muammolarining yuzaga kelishiga olib keladi.',
      },
      {
        type: 'title',
        text: 'Asosiy simptomlar:',
      },
      {
        type: 'list',
        items: [
          'Toshmalar yoki qichishish',
          'Teri qizarishi yoki quruqligi',
          'Ugri va yiringli yallig‘lanishlar',
          'Soch to‘kilishi yoki tirnoq mo‘rtlashuvi',
          'Dog‘lar, yallig‘lanish yoki teri qavatlanishi',
        ],
      },
      {
        type: 'title',
        text: 'Qachon vrachga murojaat qilish kerak?',
      },
      {
        type: 'paragraph',
        text: 'Agar yuqoridagi belgilar uzoq vaqt davom etsa yoki yomonlashsa, o‘zboshimchalik bilan muolajalar o‘rniga dermatologga murojaat qilish tavsiya etiladi.',
      },
      {
        type: 'title',
        text: 'Diagnostika va davolash',
      },
      {
        type: 'paragraph',
        text: 'Dermatolog ko‘rikdan tashqari laborator tahlillar, allergik testlar yoki teri biopsiyasi kabi usullar bilan aniq tashxis qo‘yadi. Davolash dori vositalari, malhamlar, lazer terapiyasi yoki kosmetologik muolajalar orqali olib boriladi.',
      },
      {
        type: 'title',
        text: 'Nega aynan Humo Med?',
      },
      {
        type: 'list',
        items: [
          'Tajribali dermatolog mutaxassislar',
          'Kosmetologik va tibbiy yondashuv uyg‘unligi',
          'Individal yondashuv va to‘liq diagnostika',
          'Zamonaviy apparatlar va muolajalar',
          'Gigiyenik, xavfsiz va qulay muhit',
        ],
      },
    ],
  },
  allergist: {
    icon: <FaVial />,
    title: 'Allergologiya',
    image: allergistImage,
    content: [
      {
        type: 'paragraph',
        text: 'Allergolog – organizmning allergik reaksiyalarini aniqlovchi, sabablari va oqibatlarini davolovchi mutaxassis',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Allergolog turli allergiyalar – chang, oziq-ovqat, dori-darmon, hayvonlar, teri, nafas yo‘llari va boshqa omillarga bo‘lgan sezuvchanlikni aniqlaydi. "Humo Med" klinikasida siz allergik kasalliklarni aniqlash va nazorat qilish bo‘yicha zamonaviy yondashuvlardan foydalanishingiz mumkin.',
      },
      {
        type: 'title',
        text: 'Sabablar va xavf omillari',
      },
      {
        type: 'paragraph',
        text: 'Genetik moyillik, ekologik ifloslanish, noto‘g‘ri ovqatlanish, dori vositalari, stress va immunitetning pasayishi allergik reaksiyalarni kuchaytirishi mumkin.',
      },
      {
        type: 'title',
        text: 'Asosiy simptomlar:',
      },
      {
        type: 'list',
        items: [
          'Burun bitishi yoki oqishi (allergik rinit)',
          'Ko‘zning qichishishi va yoshlanishi',
          'Teri toshmalari, qichishish yoki ekzema',
          'Yo‘tal, nafas qisishi (bronxial astma)',
          'Ovqatdan keyin shish, qorin og‘rig‘i yoki toshmalar',
        ],
      },
      {
        type: 'title',
        text: 'Qachon vrachga murojaat qilish kerak?',
      },
      {
        type: 'paragraph',
        text: 'Agar sizda allergiyaga o‘xshash belgilar kuzatilsa yoki mavsumiy reaktsiyalar yildan-yilga takrorlansa, professional allergolog ko‘rigidan o‘tish tavsiya etiladi.',
      },
      {
        type: 'title',
        text: 'Diagnostika va davolash',
      },
      {
        type: 'paragraph',
        text: 'Allergik testlar (teriga surtma testlar, qon tahlillari), immunogramma va boshqa usullar orqali aniq tashxis qo‘yiladi. Davolashga antigistamin dorilar, immunoterapiya, parhez va allergendan uzoqlashish kiradi.',
      },
      {
        type: 'title',
        text: 'Nega aynan Humo Med?',
      },
      {
        type: 'list',
        items: [
          'Tajribali allergolog mutaxassislar',
          'To‘liq va zamonaviy allergik testlar',
          'Individal yondashuv va xavfsiz davolash',
          'Bolalar va kattalar uchun maxsus dasturlar',
          'Allergiyalarning oldini olish va nazorat qilish bo‘yicha maslahatlar',
        ],
      },
    ],
  },
  gynecologist: {
    icon: <FaVenus />,
    title: 'Ginekologiya',
    image: gynecologistImage,
    content: [
      {
        type: 'paragraph',
        text: 'Ginekolog – ayollar reproduktiv tizimi bilan bog‘liq kasalliklarni aniqlovchi va davolovchi mutaxassis',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Ginekolog hayz siklining buzilishi, gormonal o‘zgarishlar, bachadon va tuxumdon muammolari, homiladorlik va menopauza davridagi holatlarni aniqlaydi va davolaydi. "Humo Med" klinikasida ayollar salomatligi uchun to‘liq diagnostika va zamonaviy davolash usullari taqdim etiladi.',
      },
      {
        type: 'title',
        text: 'Sabablar va xavf omillari',
      },
      {
        type: 'paragraph',
        text: 'Gormonal disbalans, stress, infeksiyalar, yomon turmush tarzi, irsiy moyillik va yoshga bog‘liq o‘zgarishlar ayollar salomatligiga ta’sir qiluvchi asosiy omillardir.',
      },
      {
        type: 'title',
        text: 'Asosiy simptomlar:',
      },
      {
        type: 'list',
        items: [
          'Hayz ko‘rishdagi buzilishlar',
          'Qorin pastki qismida og‘riq',
          'Ajralmalarning o‘zgarishi',
          'Bezorilik yoki jinsiy hayotdagi noqulaylik',
          'Homilador bo‘lishdagi muammolar',
        ],
      },
      {
        type: 'title',
        text: 'Qachon vrachga murojaat qilish kerak?',
      },
      {
        type: 'paragraph',
        text: 'Agar sizda yuqoridagi simptomlar mavjud bo‘lsa yoki muntazam profilaktik tekshiruvdan o‘tmagan bo‘lsangiz, ginekologga murojaat qilish tavsiya etiladi. Vaqtida tashxis qo‘yish – sog‘lom hayot garovi.',
      },
      {
        type: 'title',
        text: 'Diagnostika va davolash',
      },
      {
        type: 'paragraph',
        text: 'UZI, laborator tahlillar, gormonal tekshiruvlar, kolposkopiya kabi usullar yordamida tashxis aniqlanadi. Davolash dori-darmonlar, gormonal terapiya, fizioterapiya yoki jarrohlik aralashuvi orqali amalga oshiriladi.',
      },
      {
        type: 'title',
        text: 'Nega aynan Humo Med?',
      },
      {
        type: 'list',
        items: [
          'Tajribali va ehtiyotkor ginekologlar',
          'Ayollar uchun zamonaviy diagnostika uskunalari',
          'Shaxsiy yondashuv va maxfiylik',
          'Homiladorlikni rejalashtirish va kuzatish xizmati',
          'Profilaktika va gormonal muvozanat nazorati',
        ],
      },
    ],
  },
  ent: {
    icon: <FaStethoscope />,
    title: 'LOR (otolaringolog)',
    image: entImage,
    content: [
      {
        type: 'paragraph',
        text: 'LOR (otolaringolog) – quloq, tomoq va burun bilan bog‘liq kasalliklarni aniqlovchi va davolovchi mutaxassis',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'LOR shifokori burun bitishi, quloq og‘rig‘i, angina, sinusit, otit, laringit kabi kasalliklarni tashxislaydi va davolaydi. "Humo Med" klinikasida siz zamonaviy texnologiyalar yordamida chuqur tekshiruvdan o‘tishingiz va samarali davolanish imkoniyatiga ega bo‘lasiz.',
      },
      {
        type: 'title',
        text: 'Sabablar va xavf omillari',
      },
      {
        type: 'paragraph',
        text: 'Virusli infeksiyalar, sovuq ob-havo, chang, allergiyalar, immunitetning pasayishi va gigiyenaga rioya qilmaslik LOR a’zolari bilan bog‘liq muammolarni keltirib chiqarishi mumkin.',
      },
      {
        type: 'title',
        text: 'Asosiy simptomlar:',
      },
      {
        type: 'list',
        items: [
          'Burun bitishi yoki oqishi',
          'Tomoq og‘rig‘i va yutishda qiyinchilik',
          'Quloq og‘rig‘i yoki eshitish pasayishi',
          'Bosh og‘rig‘i va yuz sohasida bosim',
          'Davozlik, ovoz o‘zgarishi yoki yo‘tal',
        ],
      },
      {
        type: 'title',
        text: 'Qachon vrachga murojaat qilish kerak?',
      },
      {
        type: 'paragraph',
        text: 'Agar sizda yuqoridagi belgilar bir necha kundan ortiq davom etsa yoki kuchayib borayotgan bo‘lsa, albatta LOR mutaxassisiga murojaat qilish lozim. Vaqtida davolash og‘ir asoratlarning oldini oladi.',
      },
      {
        type: 'title',
        text: 'Diagnostika va davolash',
      },
      {
        type: 'paragraph',
        text: 'LOR mutaxassisi ko‘rik, endoskopiya, audiometriya va rengen yordamida tashxis qo‘yadi. Davolash dorilar, yuvish muolajalari, fizioterapiya yoki zarur hollarda kichik jarrohlik amaliyotlari orqali amalga oshiriladi.',
      },
      {
        type: 'title',
        text: 'Nega aynan Humo Med?',
      },
      {
        type: 'list',
        items: [
          'Tajribali LOR shifokorlari',
          'Burun, quloq va tomoq uchun zamonaviy diagnostika uskunalari',
          'Bolalar va kattalar uchun mos yondashuv',
          'Og‘riqsiz va samarali muolajalar',
          'To‘liq parvarish va kuzatuv',
        ],
      },
    ],
  },
  hepatologist: {
    icon: <FaUserNurse />,
    title: 'Gepatologiya',
    image: hepatologistImage,
    content: [
      {
        type: 'paragraph',
        text: 'Gepatolog – jigar, oʻt yoʻllari va oshqozon osti bezining kasalliklarini aniqlovchi va davolovchi mutaxassis',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Gepatolog virusli gepatitlar (A, B, C), yogʻli gepatoz, sirroz, jigar shikastlanishlari va boshqa kasalliklarni aniqlaydi hamda davolaydi. "Humo Med" klinikasida zamonaviy tekshiruv usullari va tajribali mutaxassislar yordamida sizga sifatli yordam koʻrsatiladi.',
      },
      {
        type: 'title',
        text: 'Sabablar va xavf omillari',
      },
      {
        type: 'paragraph',
        text: 'Virusli infeksiyalar, spirtli ichimliklarni suiiste’mol qilish, notoʻgʻri ovqatlanish, dorilarni nazoratsiz qabul qilish, genetik moyillik jigar kasalliklariga olib kelishi mumkin.',
      },
      {
        type: 'title',
        text: 'Asosiy simptomlar:',
      },
      {
        type: 'list',
        items: [
          'Oʻng qovurgʻa ostida ogʻriq yoki ogʻirlik',
          'Ishtahaning yoʻqolishi',
          'Holzizlik va charchoq',
          'Koʻngil aynishi',
          'Terining va koʻzning sargʻayishi',
        ],
      },
      {
        type: 'title',
        text: 'Qachon vrachga murojaat qilish kerak?',
      },
      {
        type: 'paragraph',
        text: 'Agar yuqoridagi simptomlardan biri yoki bir nechtasi mavjud boʻlsa, darhol gepatologga murojaat qiling. Vaqtida aniqlangan kasalliklar samarali davolanadi.',
      },
      {
        type: 'title',
        text: 'Diagnostika va davolash',
      },
      {
        type: 'paragraph',
        text: 'Qon tahlillari, ultratovush tekshiruvi (UZI), biopsiya va boshqa tekshiruvlar yordamida tashxis qoʻyiladi. Davolash dori vositalari, parhez va hayot tarzini oʻzgartirish orqali olib boriladi.',
      },
      {
        type: 'title',
        text: 'Nega aynan Humo Med?',
      },
      {
        type: 'list',
        items: [
          'Malakali gepatolog mutaxassislar',
          'Zamonaviy laboratoriya va UZI uskunalari',
          'Individual yondashuv',
          'Kasalliklarni kompleks nazorat qilish',
          'Quvvatlovchi va reabilitatsion dasturlar',
        ],
      },
    ],
  },
  proctologist: {
    icon: <FaProcedures />,
    title: 'Proktologiya',
    image: proctologistImage,
    content: [
      {
        type: 'paragraph',
        text: 'Proktolog – to‘g‘ri ichak va orqa chiqaruv yo‘llari kasalliklarini aniqlovchi va davolovchi mutaxassis.',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Proktolog gemorroy, anal yoriqlar, paraproktit, ichakdagi yallig‘lanish va boshqa kasalliklarni tashxislaydi hamda davolaydi. "Humo Med" klinikasida zamonaviy uskunalar va tajribali shifokorlar yordamida samarali yordam olishingiz mumkin.',
      },
      {
        type: 'title',
        text: 'Sabablar va xavf omillari',
      },
      {
        type: 'paragraph',
        text: 'Noto‘g‘ri ovqatlanish, kamharakat turmush tarzi, uzoq vaqt o‘tirib ishlash, ich qotishi, homiladorlik va tug‘ruq proktologik muammolarga olib keladi.',
      },
      {
        type: 'title',
        text: 'Asosiy simptomlar:',
      },
      {
        type: 'list',
        items: [
          'Orqa chiqaruvda og‘riq',
          'Qichishish yoki noqulaylik',
          'Qon ketishi',
          'Ich ketish yoki ich qotish',
          'Shish yoki tugunlar sezilishi',
        ],
      },
      {
        type: 'title',
        text: 'Qachon vrachga murojaat qilish kerak?',
      },
      {
        type: 'paragraph',
        text: 'Agar yuqoridagi belgilar kuzatilsa, kechiktirmay proktologga murojaat qiling. Vaqtida davolash asoratlarning oldini oladi.',
      },
      {
        type: 'title',
        text: 'Diagnostika va davolash',
      },
      {
        type: 'paragraph',
        text: 'Rektoskopiya, anoskopiya kabi tekshiruvlar orqali aniqlik kiritiladi. Davolash konservativ (dori, parhez) yoki jarrohlik usulida olib boriladi.',
      },
      {
        type: 'title',
        text: 'Nega aynan Humo Med?',
      },
      {
        type: 'list',
        items: [
          'Tajribali proktologlar',
          'Noqulaylikni minimallashtiruvchi tekshiruvlar',
          'Yashirinlik va noziklikka to‘liq e’tibor',
          'Zamonaviy davolash protokollari',
          'Shaxsiy yondashuv va reabilitatsiya',
        ],
      },
    ],
  },
  rheumatologist: {
    icon: <FaHands />,
    title: 'Revmatologiya',
    image: rheumatologistImage,
    content: [
      {
        type: 'paragraph',
        text: 'Revmatolog – bo‘g‘imlar, mushaklar, paylar va to‘qimalarning yallig‘lanishli kasalliklarini aniqlovchi va davolovchi mutaxassis.',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'U revmatoid artrit, podagra, lupus, osteoartrit, vaskulit va boshqa autoimmun kasalliklarni tashxislaydi va davolaydi. "Humo Med" klinikasida tajribali revmatologlar va zamonaviy tekshiruv uskunalari mavjud.',
      },
      {
        type: 'title',
        text: 'Revmatologik kasalliklarning sabablari',
      },
      {
        type: 'paragraph',
        text: 'Genetik moyillik, immun tizimining buzilishi, infeksiyalar, stress va ekologik omillar bu kasalliklarning rivojlanishiga olib keladi.',
      },
      {
        type: 'title',
        text: 'Asosiy simptomlar:',
      },
      {
        type: 'list',
        items: [
          'Bo‘g‘imlarda og‘riq va shish',
          'Harakatlanish cheklanishi',
          'Ertalabki qotishish',
          'Tana haroratining ko‘tarilishi',
          'Mushaklarda og‘riq va holsizlik',
        ],
      },
      {
        type: 'title',
        text: 'Qachon revmatologga murojaat qilish kerak?',
      },
      {
        type: 'paragraph',
        text: 'Bo‘g‘imlardagi doimiy og‘riq, shish yoki harakat cheklanishi mavjud bo‘lsa, revmatologga murojaat qilish muhim. Vaqtida davolanish kasallikning kuchayishini oldini oladi.',
      },
      {
        type: 'title',
        text: 'Diagnostika va davolash',
      },
      {
        type: 'paragraph',
        text: 'Qon tahlillari, rentgen, UZI va boshqa metodlar orqali kasallik aniqlanadi. Davolash dori vositalari, fizioterapiya va hayot tarzini o‘zgartirish orqali amalga oshiriladi.',
      },
      {
        type: 'title',
        text: 'Nega aynan Humo Med?',
      },
      {
        type: 'list',
        items: [
          'Yuqori malakali revmatologlar',
          'Zamonaviy tashxis uskunalari',
          'Kompleks yondashuv',
          'Reabilitatsiya dasturlari',
          'Individual davolash rejalari',
        ],
      },
    ],
  },
  ultrasound: {
    icon: <FaMicroscope />,
    title: 'Ultratovush tekshiruvi (UZI)',
    image: ultrasoundImage,
    content: [
      {
        type: 'paragraph',
        text: 'Ultratovush tekshiruvi (UZI) – ichki a’zolarni real vaqt rejimida tekshiruvchi, xavfsiz va og‘riqsiz diagnostika usulidir.',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'UZI orqali yurak, jigar, buyrak, o‘t pufagi, qalqonsimon bez, ayollar va erkaklar jinsiy a’zolari, homila holati va boshqa ko‘plab ichki tuzilmalarni aniqlik bilan ko‘rish mumkin.',
      },
      {
        type: 'title',
        text: 'UZI qanday hollarda kerak bo‘ladi?',
      },
      {
        type: 'list',
        items: [
          'Ichki a’zolardagi og‘riq yoki noqulaylik',
          'Homiladorlikni kuzatish',
          'Qon tahlillarida o‘zgarishlar aniqlanganda',
          'Profilaktik tekshiruvlar uchun',
          'Yallig‘lanish yoki o‘smalardan shubhalanganda',
        ],
      },
      {
        type: 'title',
        text: 'UZI turlari:',
      },
      {
        type: 'list',
        items: [
          'Qorin bo‘shlig‘i UZI',
          'Jigar va o‘t yo‘llari UZI',
          'Buyrak va siydik yo‘llari UZI',
          'Ayollar va erkaklar jinsiy organlari UZI',
          'Qalqonsimon bez UZI',
          'Yurak (EchoKG)',
          'Homila UZI (1-2-3 trimestr)',
        ],
      },
      {
        type: 'title',
        text: 'UZI afzalliklari:',
      },
      {
        type: 'list',
        items: [
          'Tez va og‘riqsiz',
          'Nurlanishsiz va xavfsiz',
          'Aniq natijalar',
          'Ko‘p hollarda tayyorgarlik talab etilmaydi',
        ],
      },
      {
        type: 'title',
        text: 'Nega aynan Humo Med klinikasida UZI?',
      },
      {
        type: 'list',
        items: [
          'Zamonaviy UZI uskunalari',
          'Tajribali mutaxassislar',
          'Homiladorlik monitoringi',
          'To‘liq tekshiruvlar majmuasi',
          'Tezkor va aniq natijalar',
        ],
      },
    ],
  },
  xray: {
    icon: <FaXRay />,
    title: 'Rentgen',
    image: xrayImage,
    content: [
      {
        type: 'paragraph',
        text: 'Rentgen – suyaklar, o‘pka, bo‘g‘imlar va boshqa ichki tuzilmalarni tekshiruvchi tezkor va samarali diagnostika usuli hisoblanadi.',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Rentgen nurlari tana orqali o‘taydi va turli to‘qimalar ularni turlicha yutadi. Bu esa shifokorga tashxis qo‘yishda aniq tasvir olish imkonini beradi.',
      },
      {
        type: 'title',
        text: 'Rentgen qachon kerak bo‘ladi?',
      },
      {
        type: 'list',
        items: [
          'Suyaklar sinishi yoki shubha qilinganda',
          'O‘pka kasalliklari (zotiljam, sil, astma)da',
          'Bo‘g‘imlarda yallig‘lanish yoki shikastlanishda',
          'Skolioz yoki umurtqa muammolari bo‘lsa',
          'Y foreign predmetlar yutilganda',
        ],
      },
      {
        type: 'title',
        text: 'Rentgen turlari:',
      },
      {
        type: 'list',
        items: [
          'Ko‘krak qafasi rentgeni (o‘pka, yurak)',
          'Umurtqa rentgeni (bo‘yinka, bel, orqa)',
          'Qo‘l-oyoq suyaklari rentgeni',
          'Bo‘g‘imlar rentgeni',
          'Sinuslar (burun bo‘shliqlari) rentgeni',
        ],
      },
      {
        type: 'title',
        text: 'Rentgenning afzalliklari:',
      },
      {
        type: 'list',
        items: [
          'Tez va og‘riqsiz tekshiruv',
          'Aniq tasvirlar',
          'Suyak va to‘qimalarni baholash imkoniyati',
          'Diagnostika uchun muhim vosita',
        ],
      },
      {
        type: 'title',
        text: 'Nega Humo Medda rentgen topshiring?',
      },
      {
        type: 'list',
        items: [
          'Zamonaviy raqamli rentgen apparatlari',
          'Kam nurlanish bilan xavfsiz muhit',
          'Tajribali rentgenologlar',
          'Tez natijalar va professional tahlil',
          'Qulay va gigiyenik sharoitlar',
        ],
      },
    ],
  },
  physiotherapy: {
    icon: <FaHands />,
    title: 'Fizioterapiya',
    image: physiotherapyImage,
    content: [
      {
        type: 'paragraph',
        text: 'Fizioterapiya — bu tabiiy va sunʼiy fizik omillar yordamida davolovchi muolajalar majmuasidir. Bu usul og‘riqni kamaytirish, yallig‘lanishni yo‘qotish va organizmni tiklashda keng qo‘llaniladi.',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Fizioterapiya shikastlanishlar, nevrologik kasalliklar, bo‘g‘im va mushak og‘riqlari, shuningdek, surunkali holatlarni davolashda samarali hisoblanadi.',
      },
      {
        type: 'title',
        text: 'Fizioterapiya qanday holatlarda tavsiya etiladi?',
      },
      {
        type: 'list',
        items: [
          'Bel, bo‘yin yoki umurtqa og‘riqlarida',
          'Bo‘g‘im va mushak kasalliklarida (artroz, artrit)',
          'Nevrologik muammolarda (radikulit, nevrit)',
          'Travmalardan keyingi reabilitatsiyada',
          'Surunkali og‘riqlar va stress holatlarida',
        ],
      },
      {
        type: 'title',
        text: 'Asosiy fizioterapiya turlari:',
      },
      {
        type: 'list',
        items: [
          'Elektroterapiya (elektr toki bilan davolash)',
          'Magnitoterapiya (magnit maydoni yordamida)',
          'Ultratovushli terapiya',
          'Lazeroterapiya',
          'Issiqlik va sovuq muolajalari',
          'UHF, fonoforez, darsonval',
        ],
      },
      {
        type: 'title',
        text: 'Fizioterapiya afzalliklari:',
      },
      {
        type: 'list',
        items: [
          'Og‘riqsiz va invaziv bo‘lmagan usul',
          'Dori-darmonlarsiz davolash imkoniyati',
          'Qon aylanishini yaxshilaydi',
          'Yallig‘lanishni kamaytiradi',
          'Harakat faoliyatini tiklaydi',
        ],
      },
      {
        type: 'title',
        text: 'Nega aynan Humo Med fizioterapiyasi?',
      },
      {
        type: 'list',
        items: [
          'Zamonaviy fizioterapiya uskunalari',
          'Tajribali mutaxassislar',
          'Individual yondashuv',
          'Qulay sharoitlar va xavfsiz muhit',
          'Natijadorlikka qaratilgan muolajalar',
        ],
      },
    ],
  },
  massage: {
    icon: <FaUserPlus />,
    title: 'Massaj terapiyasi',
    image: massageImage,
    content: [
      {
        type: 'paragraph',
        text: 'Massaj terapiyasi — bu teri, mushak va yumshoq to‘qimalarga qo‘l bilan ta’sir ko‘rsatish orqali tanani davolovchi usuldir. U qon aylanishini yaxshilaydi, mushaklardagi zo‘riqishni kamaytiradi va umumiy holatni yaxshilaydi.',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Humo Med klinikasida massaj terapiyasi sog‘lomlashtirish, reabilitatsiya va stressni kamaytirish maqsadida qo‘llaniladi.',
      },
      {
        type: 'title',
        text: 'Massaj qanday hollarda tavsiya etiladi?',
      },
      {
        type: 'list',
        items: [
          'Bel va bo‘yin og‘rig‘i',
          'Yelkadagi taranglik',
          'Sport jarohatlari',
          'Stress va charchoq',
          'Qon aylanish buzilishi',
          'Orqa umurtqa muammolari',
        ],
      },
      {
        type: 'title',
        text: 'Massaj turlari:',
      },
      {
        type: 'list',
        items: [
          'Umumiy sog‘lomlashtiruvchi massaj',
          'Tibbiy massaj (nevrologik, ortopedik)',
          'Sport massaji',
          'Bolalar uchun massaj',
          'Linfodrenaj massaji',
          'Yuz va bo‘yin massaji',
        ],
      },
      {
        type: 'title',
        text: 'Massajning afzalliklari:',
      },
      {
        type: 'list',
        items: [
          'Mushaklardagi zo‘riqishni kamaytiradi',
          'Qon aylanishini yaxshilaydi',
          'Stressni kamaytiradi',
          'Yallig‘lanishni kamaytiradi',
          'Immunitetni mustahkamlaydi',
        ],
      },
      {
        type: 'title',
        text: 'Nega aynan Humo Med massaj terapiyasi?',
      },
      {
        type: 'list',
        items: [
          'Malakali va tajribali massaj terapevtlar',
          'Individual yondashuv va reja asosida muolajalar',
          'Gigienik va qulay sharoitlar',
          'Yuqori sifatli yog‘lar va vositalar',
          'Tinch va dam olishga mos muhit',
        ],
      },
    ],
  },
  procedure_room: {
    icon: <FaSyringe />,
    title: 'Muolajalar xonasi',
    image: procedureImage,
    content: [
      {
        type: 'paragraph',
        text: 'Muolajalar xonasi — bu turli tibbiy muolajalar, inʼyeksiyalar va fizioterapevtik davolashlar amalga oshiriladigan maxsus jihozlangan tibbiy xonadir.',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Humo Med klinikasida muolajalar xonasi zamonaviy tibbiy uskunalar bilan jihozlangan bo‘lib, muolajalar tajribali hamshiralar va shifokorlar nazorati ostida bajariladi.',
      },
      {
        type: 'title',
        text: 'Muolajalar xonasida qanday xizmatlar ko‘rsatiladi?',
      },
      {
        type: 'list',
        items: [
          'Inʼyeksiyalar (tomoq, mushak ichiga, teri ostiga)',
          'Sistemalar (kapel’nitsa)',
          'Yallig‘lanishga qarshi muolajalar',
          'Dorivor elektroforez',
          'Yaralarni davolash va bog‘lash',
          'Zondlash va boshqa tibbiy manipulyatsiyalar',
        ],
      },
      {
        type: 'title',
        text: 'Afzalliklarimiz:',
      },
      {
        type: 'list',
        items: [
          'Zamonaviy va sterillik talablariga to‘liq javob beruvchi muhit',
          'Tajribali tibbiyot xodimlari',
          'Individual yondashuv',
          'Tezkor va og‘riqsiz muolajalar',
          'Doimiy nazorat va xavfsizlik kafolati',
        ],
      },
      {
        type: 'title',
        text: 'Kimlarga tavsiya etiladi?',
      },
      {
        type: 'list',
        items: [
          'Yallig‘lanish kasalliklarida',
          'Surunkali og‘riqlarni yengillashtirishda',
          'Organizmni umumiy tiklash uchun',
          'Dorilarni tez singdirish maqsadida',
        ],
      },
    ],
  },
  laboratory: {
    icon: <FaMicroscope />,
    title: 'Laboratoriya',
    image: laboratoryImage,
    content: [
      {
        type: 'paragraph',
        text: 'Laboratoriya — kasalliklarni aniqlash, tashxis qo‘yish va davolash jarayonini monitoring qilish uchun turli biologik namunalarni (qon, siydik, najas va boshqalar) tekshiradigan muassasa.',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Humo Med klinikasi zamonaviy laboratoriya uskunalari bilan jihozlangan bo‘lib, yuqori aniqlikka ega natijalarni taqdim etadi.',
      },
      {
        type: 'title',
        text: 'Laboratoriyada amalga oshiriladigan asosiy tahlillar:',
      },
      {
        type: 'list',
        items: [
          'Umumiy qon tahlili',
          'Biokimyoviy tahlillar',
          'Gormonal tahlillar',
          'Allergik testlar',
          'PCR (virus va bakteriyalarni aniqlash)',
          'COVID-19 testi',
          'Siydik va najas tahlillari',
        ],
      },
      {
        type: 'title',
        text: 'Laboratoriyamizning afzalliklari:',
      },
      {
        type: 'list',
        items: [
          'Eng yangi uskunalar va texnologiyalar',
          'Tezkor va ishonchli natijalar',
          'Tajribali laborator tibbiyot xodimlari',
          'Tahlil natijalarini onlayn olish imkoniyati',
          'Sterillik va xavfsizlik standartlariga to‘liq rioya',
        ],
      },
      {
        type: 'title',
        text: 'Laboratoriya xizmatlari kimlarga kerak?',
      },
      {
        type: 'list',
        items: [
          'Profilaktik ko‘rikdan o‘tayotganlarga',
          'Tashxis aniqlashtirish zarur bo‘lgan hollarda',
          'Davolashdan oldin va keyin natijalarni kuzatish uchun',
          'Kasal bo‘lganlikda sababini aniqlash uchun',
        ],
      },
    ],
  },
  operating_room: {
    icon: <FaProcedures />,
    title: 'Operatsiya xonasi',
    image: operatingRoomImage,
    content: [
      {
        type: 'paragraph',
        text: 'Operatsiya xonasi — jarrohlik amaliyotlari o‘tkaziladigan maxsus, yuqori sterillikka ega tibbiyot xonasi.',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Humo Med klinikasining operatsiya xonasi zamonaviy standartlarga to‘liq javob beradi hamda ilg‘or texnologiyalar bilan jihozlangan.',
      },
      {
        type: 'title',
        text: 'Operatsiya xonamizning asosiy afzalliklari:',
      },
      {
        type: 'list',
        items: [
          'Yuqori darajadagi sterillik va xavfsizlik',
          'Eng yangi jarrohlik uskunalari',
          'Tajribali va malakali jarrohlar',
          'Operatsiya oldi va keyingi kuzatuv xizmati',
          'Zarur hollarda behushlik (narkoz) bilan ta’minlash',
        ],
      },
      {
        type: 'title',
        text: 'Operatsiya xonasida bajariladigan asosiy amaliyotlar:',
      },
      {
        type: 'list',
        items: [
          'Kichik jarrohlik amaliyotlari (teridagi o‘simtalar, muhrlar olib tashlash)',
          'Ginekologik jarrohlik amaliyotlari',
          'Proktologik aralashuvlar',
          'LOR sohasidagi operatsiyalar',
          'Ambulator operatsiyalar (tezda uyga qaytish imkoniyati bilan)',
        ],
      },
      {
        type: 'title',
        text: 'Xavfsizlik kafolati:',
      },
      {
        type: 'paragraph',
        text: 'Operatsiya xonamizda yuqori darajadagi gigiena va dezinfeksiya choralari ko‘rilgan bo‘lib, bemorning xavfsizligi ustuvor hisoblanadi.',
      },
    ],
  },
  inpatient: {
    icon: <FaBed />,
    title: 'Statsionar davolash',
    image: inpatientImage,
    content: [
      {
        type: 'paragraph',
        text: 'Statsionar davolash — bu bemorlar klinikamizda tunab, uzluksiz tibbiy kuzatuv va davolovchi muolajalarni oladigan davolash shaklidir.',
        bold: true,
      },
      {
        type: 'paragraph',
        text: 'Humo Med klinikasida statsionar sharoitda bemorlarga qulay, xavfsiz va zamonaviy xizmatlar taqdim etiladi.',
      },
      {
        type: 'title',
        text: 'Statsionar davolashning afzalliklari:',
      },
      {
        type: 'list',
        items: [
          '24/7 malakali shifokor va hamshira kuzatuvi',
          'Shinam va qulay xonalar',
          'Zarur hollarda infuzion (tomchilatib) terapiya',
          'Diagnostika va laborator tekshiruvlar o‘z vaqtida',
          'Sifatli oziqlanish va parvarish',
        ],
      },
      {
        type: 'title',
        text: 'Statsionar sharoitda quyidagi yo‘nalishlar bo‘yicha davolanish mumkin:',
      },
      {
        type: 'list',
        items: [
          'Ichki kasalliklar (terapiya)',
          'Ginekologik muammolar',
          'LOR kasalliklari',
          'Nevrologik simptomlar',
          'Proktologik muolajalar',
        ],
      },
      {
        type: 'title',
        text: 'Shifoxonamizda bemorning holati diqqat bilan kuzatilib, individual yondashuv asosida davolash rejalashtiriladi.',
      },
    ],
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

export const SERVICE_LIST = Object.entries(servicesData).map(([key, value]) => ({
  ...value,
  key,
  name: value.title,
}));

export default servicesData;
