import {
  FaBaby,
  FaBalanceScale,
  FaBed,
  FaBrain,
  FaHands,
  FaHeart,
  FaLungs,
  FaMicroscope,
  FaNotesMedical,
  FaProcedures,
  FaStethoscope,
  FaSyringe,
  FaUserInjured,
  FaUserMd,
  FaUserNurse,
  FaUserPlus,
  FaUtensils,
  FaVenus,
  FaVial,
  FaVirus,
  FaXRay,
} from 'react-icons/fa';

// Shifokor va bo'lim rasmlari importlari

import traumaImage from '../assets/img/traumaImage.png'; // Xirurg-Travmatolog
import cardioImage from '../assets/img/cardioImage.png'; // Kardiolog
import therapistImage from '../assets/img/therapistImage.png'; // Terapevt
import gastroImage from '../assets/images/Gastroenterolog.png'; // Gastroenterolog
import endoImage from '../assets/images/Jarayon.png'; // Endokrinolog
import gynecologistImage from '../assets/images/Ginekolog.png'; // Ginekolog
import rheumatologistImage from '../assets/img/otgolagiya.png'; // Revmatolog
import pulmonologistImage from '../assets/img/otgolagiya.png'; // Pulmonolog
import infectionistImage from '../assets/images/Terapevt-kardiolog.png'; // Infeksionist
import hepatologistImage from '../assets/img/Fizoterapiya.png'; // Gepatolog
import allergistImage from '../assets/img/otgolagiya.png'; // Allergolog
import proctologistImage from '../assets/images/Terapevt.png'; // Pragtolog
import entImage from '../assets/images/lor.png'; // Lor
import dermatologistImage from '../assets/images/Operatsiya.png'; // Dermatolog
import neuroImage from '../assets/img/neuroImage.png'; // Nevropatolog
import urologistImage from '../assets/images/Operatsiya.png'; // Urolog
import pediatricNeuroImage from '../assets/images/Gastroenterolog.png'; // Detskiy Nevropatolog
import pediatricGastroImage from '../assets/images/Terapevt.png'; // Detskiy Gastroenterolog
import pediatricImage from '../assets/img/pediatricImage.png'; // Pediator
import ultrasoundImage from '../assets/img/Ортопедия.png'; // UZD
import xrayImage from '../assets/img/otgolagiya.png'; // RENTGEN
import physiotherapyImage from '../assets/img/otgolagiya.png'; // Fizioterapiya
import massageImage from '../assets/img/massageImage.png'; // Massaj
import procedureImage from '../assets/img/otgolagiya.png'; // Procedurniy
import laboratoryImage from '../assets/img/otgolagiya.png'; // Laboratoriya
import operatingRoomImage from '../assets/img/operatingRoomImage.png'; // Опер блок
import inpatientImage from '../assets/img/otgolagiya.png'; // Стационар

const servicesData = (t) => ({
  cardiology: {
    icon: <FaHeart />,
    title: t('services.cardiology.title'),
    image: cardioImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Кардиолог – специалист, выявляющий и лечащий проблемы, связанные с сердцем и кровеносной системой',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Кардиолог диагностирует и лечит ишемическую болезнь сердца, нарушения ритма, гипертонию и другие состояния. В клинике "Humo Med" вы можете пройти обследование с использованием современных методов и получить консультацию высококвалифицированных специалистов.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Стресс, неправильное питание, малоподвижный образ жизни, вредные привычки (курение, алкоголь), генетическая предрасположенность повышают риск сердечных заболеваний.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Боль в области груди',
            'Быстрая утомляемость',
            'Одышка',
            'Нарушения сердечного ритма',
            'Головокружение или обмороки',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Если вы чувствуете дискомфорт в области сердца или у вас есть вышеуказанные симптомы, немедленно обратитесь к кардиологу.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Диагноз ставится с помощью электрокардиограммы (ЭКГ), ЭХО, тестов сердца. Лечение проводится медикаментами или изменением образа жизни.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Опытные специалисты',
            'Современное диагностическое оборудование',
            'Комфортные и безопасные условия лечения',
            'Индивидуальный подход к пациенту',
            'Реабилитация и наблюдение',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'A cardiologist is a specialist who diagnoses and treats issues related to the heart and vascular system',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'A cardiologist treats conditions such as ischemic heart disease, arrhythmias, and hypertension. At "Humo Med" clinic, you will undergo examinations using modern methods and receive expert consultations from highly qualified doctors.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Stress, poor diet, physical inactivity, bad habits (smoking, alcohol), and genetic predisposition increase the risk of heart disease.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Chest pain',
            'Fatigue',
            'Shortness of breath',
            'Irregular heartbeat',
            'Dizziness or fainting',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'If you experience discomfort in the chest or have any of the above symptoms, do not delay—see a cardiologist.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'Diagnosis is performed using ECG, echocardiogram, and heart tests. Treatment may involve medication or lifestyle changes.',
        },
        {
          type: 'title',
          text: 'Why Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Experienced specialists',
            'Modern diagnostic equipment',
            'Comfortable and safe treatment conditions',
            'Patient-centered approach',
            'Rehabilitation and follow-up care',
          ],
        },
      ],
    },
  },
  neurologist: {
    icon: <FaBrain />,
    title: t('services.neurologist.title'),
    image: neuroImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Невролог — специалист, который выявляет и лечит заболевания нервной системы',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Невролог диагностирует и лечит заболевания головного и спинного мозга, нервных волокон и мышечной активности. В клинике "Humo Med" вы проходите обследование на современном оборудовании и получаете подробную консультацию у высококвалифицированного невролога.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Стресс, травмы головы, наследственные факторы, нездоровый образ жизни, хронические заболевания и вирусные инфекции могут вызывать неврологические проблемы.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Головная боль или головокружение',
            'Онемение или слабость в руках и ногах',
            'Нарушение координации',
            'Проблемы с памятью или речью',
            'Нарушения сна или хроническая усталость',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Если у вас есть один или несколько из вышеуказанных симптомов, рекомендуется как можно скорее обратиться к неврологу.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Точная диагностика проводится с помощью современных методов: МРТ, КТ, ЭЭГ, ЭМГ. Лечение осуществляется с помощью медикаментов, физиотерапии или нейрореабилитации.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Опытные неврологи',
            'Современные диагностические технологии',
            'Индивидуальный подход к пациенту',
            'Чистая и комфортная среда',
            'Постоянное наблюдение и поддержка',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'A neurologist is a specialist who diagnoses and treats diseases of the nervous system',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'A neurologist diagnoses and treats conditions related to the brain, spinal cord, nerve fibers, and muscle function. At "Humo Med" clinic, you undergo examination using modern equipment and receive detailed consultation from a highly qualified neurologist.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Stress, head injuries, hereditary factors, unhealthy lifestyle, chronic illnesses, and viral infections can lead to neurological problems.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Headache or dizziness',
            'Numbness or weakness in hands and feet',
            'Coordination disorders',
            'Memory or speech problems',
            'Sleep disorders or chronic fatigue',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'If you experience one or more of the above symptoms, it is recommended to see a neurologist without delay.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'Accurate diagnosis is performed using modern equipment such as MRI, CT, EEG, and EMG. Treatment involves medication, physiotherapy, or neurorehabilitation methods.',
        },
        {
          type: 'title',
          text: 'Why Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Experienced neurologists',
            'Modern diagnostic technologies',
            'Individual approach to each patient',
            'Clean and comfortable environment',
            'Continuous monitoring and support',
          ],
        },
      ],
    },
  },
  pediatrician: {
    icon: <FaBaby />,
    title: t('services.pediatrician.title'),
    image: pediatricImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Педиатр — специалист, занимающийся здоровьем детей, профилактикой и лечением заболеваний',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Педиатр контролирует здоровье детей от новорождённых до подростков, оценивает их развитие и дает необходимые рекомендации. В клинике "Humo Med" ваши дети будут в надежных руках — услуги предоставляются опытными специалистами и с использованием современного оборудования.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Снижение иммунитета, неправильное питание, несоблюдение гигиены, вирусные инфекции, аллергии и наследственные заболевания могут вызвать различные проблемы у детей.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Частые простуды или повышение температуры',
            'Проблемы с пищеварением',
            'Кожные высыпания или аллергические реакции',
            'Нарушения сна или капризность',
            'Недостаточная прибавка в весе или задержка в развитии',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Если у вашего ребёнка есть вышеуказанные симптомы или вы хотите пройти профилактический осмотр — обращение к педиатру обязательно. Своевременно выявленная проблема решается быстрее.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Педиатр проводит общий осмотр ребенка, при необходимости назначает лабораторные анализы или инструментальные исследования. Лечение может включать медикаменты, диету, физиотерапию или профилактические меры.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Педиатры с опытом работы с детьми',
            'Хорошо оснащённая и безопасная среда',
            'Комплексная диагностика и лечение',
            'Сотрудничество с родителями',
            'Уютный и дружелюбный подход к вашему ребёнку',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'A pediatrician is a specialist who focuses on children’s health, disease prevention, and treatment',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'A pediatrician monitors the health of children from newborns to teenagers, assesses their development, and provides necessary recommendations. At "Humo Med" clinic, your children are in safe hands – services are provided by experienced specialists using modern equipment.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Weakened immunity, poor nutrition, lack of hygiene, viral infections, allergies, and hereditary diseases can cause various problems in children.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Frequent colds or fevers',
            'Digestive issues',
            'Skin rashes or allergic signs',
            'Sleep disorders or irritability',
            'Insufficient weight gain or delayed development',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'If your child has any of the above symptoms or if you simply want a routine check-up, it is important to visit a pediatrician. Early detection ensures faster resolution of the problem.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'The pediatrician conducts a general examination of the child, and if needed, may recommend lab tests or instrumental diagnostics. Treatment may include medication, diet, physiotherapy, or preventive care.',
        },
        {
          type: 'title',
          text: 'Why Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Pediatricians with experience working with children',
            'Well-equipped and safe environment',
            'Comprehensive diagnostics and treatment',
            'Collaboration with parents',
            'Friendly and child-centered approach',
          ],
        },
      ],
    },
  },
  therapist: {
    icon: <FaUserMd />,
    title: t('services.therapist.title'),
    image: therapistImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Терапевт — врач общей практики, диагностирующий и лечащий заболевания внутренних органов',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Терапевт диагностирует и лечит заболевания дыхательной, пищеварительной, сердечно-сосудистой, мочевыделительной, эндокринной систем, а также общего состояния организма. В клинике "Humo Med" вас ждёт консультация квалифицированного терапевта и необходимое лечение.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Неправильный образ жизни, стресс, нездоровое питание, хронические заболевания, экологические факторы и малоподвижность могут вызывать проблемы с внутренними органами.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Повышение температуры и общая слабость',
            'Кашель или боль в горле',
            'Боль или дискомфорт в животе',
            'Повышение или понижение давления',
            'Усталость, головокружение, бессонница',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Если вы чувствуете общую слабость, у вас есть указанные выше симптомы или вы хотите проверить хронические заболевания — обратитесь к терапевту.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Терапевт проводит осмотр, назначает лабораторные анализы, рентген, УЗИ и другие методы диагностики. Лечение включает лекарства, диету, изменение образа жизни и, при необходимости, направление к узким специалистам.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Высококвалифицированные терапевты',
            'Комплексные анализы и обследования',
            'Индивидуальный подход и комфортная среда',
            'Рекомендации по профилактике заболеваний',
            'Системный подход к контролю и реабилитации',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'A therapist is a general practitioner who diagnoses and treats diseases of internal organs',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'A therapist diagnoses and treats conditions related to the respiratory, digestive, cardiovascular, urinary, and endocrine systems, as well as overall health. At "Humo Med" clinic, you can receive a professional consultation and necessary treatment from a qualified therapist.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'An unhealthy lifestyle, stress, poor nutrition, chronic illnesses, environmental factors, and physical inactivity can lead to various internal health problems.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Fever and general weakness',
            'Cough or sore throat',
            'Abdominal pain or discomfort',
            'High or low blood pressure',
            'Fatigue, dizziness, insomnia',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'If you feel generally unwell, have any of the above symptoms, or want to monitor a chronic condition — it’s time to visit a therapist.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'The therapist will conduct an examination and may prescribe lab tests, X-rays, ultrasounds, and other diagnostic methods. Treatment may include medication, dietary changes, lifestyle adjustments, and referrals to specialists if needed.',
        },
        {
          type: 'title',
          text: 'Why Choose Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Highly qualified therapists',
            'Comprehensive diagnostics and evaluations',
            'Personalized care and comfortable environment',
            'Advice on disease prevention',
            'Systematic monitoring and rehabilitation approach',
          ],
        },
      ],
    },
  },
  gastroenterology: {
    icon: <FaStethoscope />,
    title: t('services.gastroenterology.title'),
    image: gastroImage,
    content: {
      uz: [
        {
          type: 'paragraph',
          text: 'Gastroenterolog — oshqozon-ichak trakti, jigar, o‘t pufagi va ovqat hazm qilish tizimining boshqa organlari bilan bog‘liq kasalliklarni aniqlaydigan va davolaydigan mutaxassis',
          bold: true,
        },
        {
          type: 'paragraph',
          text: '"Humo Med" klinikasida gastroenterologlar zamonaviy endoskopik usullar, laborator tahlillar va individual davolash rejalarini taklif etadi. Ular oshqozon yarasi, gastrit, gepatit, pankreatit, o‘t yo‘llari kasalliklari va ichak yallig‘lanishlari kabi ko‘plab kasalliklarni aniqlaydi va davolaydi.',
        },
        {
          type: 'title',
          text: 'Sabablar va xavf omillari',
        },
        {
          type: 'paragraph',
          text: 'Noto‘g‘ri ovqatlanish, spirtli ichimliklarni suiiste’mol qilish, stress, H. pylori infeksiyasi, dori vositalari va genetik omillar oshqozon-ichak kasalliklari xavfini oshiradi.',
        },
        {
          type: 'title',
          text: 'Asosiy simptomlar:',
        },
        {
          type: 'list',
          items: [
            'Qorin og‘rig‘i yoki noqulaylik',
            'Ko‘ngil aynishi va qayt qilish',
            'Qorin shishishi va gaz',
            'Ovqat hazm qilishning buzilishi',
            'Qonli najas yoki qora najas',
            'Qabziyat yoki diareya',
          ],
        },
        {
          type: 'title',
          text: 'Qachon vrachga murojaat qilish kerak?',
        },
        {
          type: 'paragraph',
          text: 'Agar uzoq davom etuvchi qorin og‘rig‘i, ovqat hazm qilish muammolari, qonli najas yoki keskin vazn yo‘qotish kuzatilsa — darhol gastroenterologga murojaat qiling.',
        },
        {
          type: 'title',
          text: 'Diagnostika va davolash',
        },
        {
          type: 'paragraph',
          text: 'Gastroskopiya, kolonoskopiya, ultratovush, qon va najas tahlillari orqali tashxis qo‘yiladi. Davolash dori vositalari, parhez, endoskopik muolajalar yoki jarrohlikni o‘z ichiga olishi mumkin.',
        },
        {
          type: 'title',
          text: 'Nega aynan Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Tajribali gastroenterologlar',
            'Zamonaviy endoskopik va laborator diagnostika',
            'Individual davolash rejasi',
            'Qulay va xavfsiz muhit',
            'Profilaktika va kuzatuv xizmatlari',
          ],
        },
      ],
      ru: [
        {
          type: 'paragraph',
          text: 'Гастроэнтеролог — специалист, диагностирующий и лечащий заболевания желудочно-кишечного тракта, печени и желчевыводящих путей',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'В "Humo Med" гастроэнтерологи используют современные эндоскопические методы, лабораторные анализы и индивидуальные планы лечения для диагностики и терапии гастрита, язвы, гепатита, панкреатита и других заболеваний.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Неправильное питание, злоупотребление алкоголем, стресс, инфекция H. pylori, лекарства и наследственная предрасположенность повышают риск болезней ЖКТ.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Боль или дискомфорт в животе',
            'Тошнота и рвота',
            'Вздутие и газы',
            'Нарушения пищеварения',
            'Кровь в стуле или чёрный стул',
            'Запор или диарея',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'При длительной боли в животе, нарушениях пищеварения, крови в стуле или резкой потере веса — немедленно обратитесь к гастроэнтерологу.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Используются гастроскопия, колоноскопия, УЗИ, анализы крови и кала. Лечение включает медикаменты, диету, эндоскопические процедуры или хирургию.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Опытные врачи',
            'Современная эндоскопическая и лабораторная диагностика',
            'Индивидуальный план лечения',
            'Комфортные условия',
            'Профилактика и наблюдение',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'A gastroenterologist is a specialist who diagnoses and treats disorders of the digestive tract, liver and biliary system',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'At "Humo Med", gastroenterologists use modern endoscopic methods, lab tests, and personalized treatment plans to manage gastritis, ulcers, hepatitis, pancreatitis, biliary diseases, and more.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Poor diet, alcohol abuse, stress, H. pylori infection, medications, and genetic predisposition increase the risk of gastrointestinal diseases.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Abdominal pain or discomfort',
            'Nausea and vomiting',
            'Bloating and gas',
            'Digestive disturbances',
            'Blood in stool or black stool',
            'Constipation or diarrhea',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'Seek a gastroenterologist if you have persistent abdominal pain, digestive problems, blood in stool, or sudden weight loss.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'Diagnosis includes gastroscopy, colonoscopy, ultrasound, blood and stool tests. Treatment may involve medication, diet, endoscopic therapy, or surgery.',
        },
        {
          type: 'title',
          text: 'Why Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Experienced gastroenterologists',
            'Modern endoscopic and laboratory diagnostics',
            'Personalized treatment plan',
            'Comfortable and safe environment',
            'Prevention and follow-up services',
          ],
        },
      ],
    },
  },

  endocrinology: {
    icon: <FaBalanceScale />,
    title: t('services.endocrinology.title'),
    image: endoImage,
    content: {
      uz: [
        {
          type: 'paragraph',
          text: 'Endokrinolog — gormonlar va endokrin tizim kasalliklarini aniqlash va davolash bo‘yicha mutaxassis',
          bold: true,
        },
        {
          type: 'paragraph',
          text: '"Humo Med" klinikasida endokrinologlar qandli diabet, qalqonsimon bez kasalliklari, gormon buzilishlari, metabolik sindrom va boshqa endokrin muammolarni davolashda yuqori malakaga ega.',
        },
        {
          type: 'title',
          text: 'Sabablar va xavf omillari',
        },
        {
          type: 'paragraph',
          text: 'Genetika, noto‘g‘ri ovqatlanish, ortiqcha vazn, stress, infektsiyalar va ayrim dori vositalari endokrin kasalliklarni keltirib chiqaradi.',
        },
        {
          type: 'title',
          text: 'Asosiy simptomlar:',
        },
        {
          type: 'list',
          items: [
            'Doimiy charchoq',
            'Vazn o‘zgarishi',
            'Issiq yoki sovuqqa sezgirlik',
            'Soch to‘kilishi yoki teri o‘zgarishlari',
            'Tez-tez chanqash yoki siyish',
            'Gormonal tsikl buzilishlari',
          ],
        },
        {
          type: 'title',
          text: 'Qachon vrachga murojaat qilish kerak?',
        },
        {
          type: 'paragraph',
          text: 'Agar sizda yuqoridagi belgilar yoki gormonlar bilan bog‘liq muammolar mavjud bo‘lsa — endokrinologga murojaat qiling.',
        },
        {
          type: 'title',
          text: 'Diagnostika va davolash',
        },
        {
          type: 'paragraph',
          text: 'Qon tahlillari (TSH, T4, insulin va boshqalar), ultratovush, glyukoza testi yordamida tashxis qo‘yiladi. Davolash dori terapiyasi, gormon almashtirish yoki hayot tarzini o‘zgartirish orqali amalga oshiriladi.',
        },
        {
          type: 'title',
          text: 'Nega aynan Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Tajribali endokrinologlar',
            'Zamonaviy laborator diagnostika',
            'Individual davolash yondashuvi',
            'Kompleks profilaktika',
            'Doimiy kuzatuv va maslahat',
          ],
        },
      ],
      ru: [
        {
          type: 'paragraph',
          text: 'Эндокринолог — специалист по диагностике и лечению заболеваний гормональной и эндокринной системы',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'В "Humo Med" эндокринологи лечат сахарный диабет, болезни щитовидной железы, гормональные нарушения, метаболические синдромы и другие эндокринные заболевания.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Генетическая предрасположенность, неправильное питание, лишний вес, стресс, инфекции и некоторые лекарства вызывают эндокринные заболевания.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Постоянная усталость',
            'Изменение веса',
            'Чувствительность к жаре или холоду',
            'Выпадение волос или изменения кожи',
            'Частая жажда или мочеиспускание',
            'Нарушения гормонального цикла',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Если у вас есть вышеперечисленные симптомы или подозрение на гормональные нарушения — обратитесь к эндокринологу.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Проводятся анализы крови на гормоны (TSH, T4, инсулин и др.), УЗИ, тесты на глюкозу. Лечение включает медикаменты, гормональную терапию или изменение образа жизни.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Опытные эндокринологи',
            'Современная лабораторная диагностика',
            'Индивидуальный подход к лечению',
            'Комплексная профилактика',
            'Длительное наблюдение и консультации',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'An endocrinologist is a specialist in diagnosing and treating hormonal and endocrine disorders',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'At "Humo Med", endocrinologists treat diabetes, thyroid disorders, hormonal imbalances, metabolic syndromes, and other endocrine conditions.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Genetics, poor diet, excess weight, stress, infections, and certain medications contribute to endocrine diseases.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Persistent fatigue',
            'Weight changes',
            'Sensitivity to heat or cold',
            'Hair loss or skin changes',
            'Frequent thirst or urination',
            'Hormonal cycle irregularities',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'If you experience the above symptoms or suspect a hormonal disorder, see an endocrinologist.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'Diagnosis includes blood tests (TSH, T4, insulin, etc.), ultrasound, glucose testing. Treatment involves medications, hormone therapy, or lifestyle changes.',
        },
        {
          type: 'title',
          text: 'Why Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Experienced endocrinologists',
            'Modern laboratory diagnostics',
            'Individual treatment approach',
            'Comprehensive prevention',
            'Ongoing follow-up and consultations',
          ],
        },
      ],
    },
  },

  pulmonologist: {
    icon: <FaLungs />,
    title: t('services.pulmonologist.title'),
    image: pulmonologistImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Пульмонолог — специалист по диагностике и лечению заболеваний легких и дыхательных путей',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Пульмонолог занимается лечением таких заболеваний, как бронхит, пневмония, бронхиальная астма, хроническая обструктивная болезнь легких (ХОБЛ). В клинике "Humo Med" вы можете пройти полное обследование дыхательных путей и получить эффективное лечение.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Курение, загрязнение окружающей среды, аллергии, хронические инфекции, наследственные факторы и слабый иммунитет увеличивают риск заболеваний легких.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Затяжной кашель',
            'Одышка или затрудненное дыхание',
            'Сдавление или боль в груди',
            'Выделение мокроты',
            'Частые простуды или бронхиты',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Если у вас длительный кашель, проблемы с дыханием или один из вышеуказанных симптомов — не откладывайте визит к пульмонологу.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Диагностика проводится с помощью спирометрии, рентгена, КТ, анализа крови и других методов. Лечение может включать медикаменты, ингаляции, физиотерапию или изменение образа жизни.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Опытные пульмонологи',
            'Современное диагностическое оборудование',
            'Комплексное лечение дыхательных путей',
            'Индивидуальный подход к аллергическим и хроническим заболеваниям',
            'Качественные и комфортные медицинские услуги',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'A pulmonologist is a specialist who diagnoses and treats diseases of the lungs and respiratory tract',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Pulmonologists treat conditions such as bronchitis, pneumonia, bronchial asthma, and chronic obstructive pulmonary disease (COPD). At "Humo Med" clinic, you can receive a thorough respiratory examination and effective treatment.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Smoking, environmental pollution, allergies, chronic infections, genetic factors, and weak immunity all increase the risk of lung diseases.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Persistent cough',
            'Shortness of breath or difficulty breathing',
            'Chest tightness or pain',
            'Phlegm production',
            'Frequent colds or bronchitis',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'If you experience a prolonged cough, trouble breathing, or any of the above symptoms — don’t delay visiting a pulmonologist.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'Diagnosis involves spirometry, X-ray, CT scans, blood tests, and other methods. Treatment may include medications, inhalation therapy, physiotherapy, or lifestyle changes.',
        },
        {
          type: 'title',
          text: 'Why Choose Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Experienced pulmonologists',
            'Modern diagnostic equipment',
            'Comprehensive treatment for respiratory conditions',
            'Personalized approach to allergic and chronic diseases',
            'High-quality and comfortable medical care',
          ],
        },
      ],
    },
  },
  infectionist: {
    icon: <FaVirus />,
    title: t('services.infectionist.title'),
    image: infectionistImage,
    content: {
      uz: [
        {
          type: 'paragraph',
          text: 'Infeksionist – yuqumli kasalliklarni aniqlash, davolash va oldini olish bilan shug‘ullanuvchi mutaxassis',
          bold: true,
        },
        {
          type: 'paragraph',
          text: '"Humo Med" klinikasida infeksionist zamonaviy laboratoriya uskunalari yordamida virusli, bakterial va parazitar infeksiyalarni aniqlaydi hamda davolash rejasini tuzadi.',
        },
        {
          type: 'title',
          text: 'Sabablar va xavf omillari',
        },
        {
          type: 'paragraph',
          text: 'Zaif immunitet, gigiyena qoidalariga rioya qilmaslik, ifloslangan oziq-ovqat va suv, yuqumli kasallik bilan kasallangan shaxs bilan aloqa qilish infeksiyalar xavfini oshiradi.',
        },
        {
          type: 'title',
          text: 'Asosiy simptomlar:',
        },
        {
          type: 'list',
          items: [
            'Isitma',
            'Holssizlik',
            'Bosh og‘rig‘i',
            'Ko‘ngil aynishi yoki qusish',
            'Diareya yoki ich ketishi',
            'Teri toshmalari',
          ],
        },
        {
          type: 'title',
          text: 'Qachon vrachga murojaat qilish kerak?',
        },
        {
          type: 'paragraph',
          text: 'Agar yuqoridagi simptomlardan birini sezsangiz yoki o‘zingizda yuqumli kasallikdan shubhalansangiz, darhol infeksionistga murojaat qiling.',
        },
        {
          type: 'title',
          text: 'Diagnostika va davolash',
        },
        {
          type: 'paragraph',
          text: 'Laboratoriya tahlillari (qon, siydik, najas), PZR testlar, serologik tekshiruvlar yordamida tashxis qo‘yiladi. Davolash dori vositalari, virusga qarshi preparatlar, antibiotiklar yoki simptomatik terapiya orqali olib boriladi.',
        },
        {
          type: 'title',
          text: 'Nega aynan Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Yuqori malakali infeksionist shifokorlar',
            'Aniq va tezkor diagnostika',
            'Zamonaviy laboratoriya uskunalari',
            'Har bir bemorga individual yondashuv',
            'Infeksiyalardan himoya bo‘yicha tavsiyalar',
          ],
        },
      ],
      ru: [
        {
          type: 'paragraph',
          text: 'Инфекционист – специалист по диагностике, лечению и профилактике инфекционных заболеваний',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'В клинике "Humo Med" инфекционист с помощью современного лабораторного оборудования выявляет вирусные, бактериальные и паразитарные инфекции, а также разрабатывает план лечения.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Ослабленный иммунитет, несоблюдение правил гигиены, загрязнённая пища и вода, контакт с больным человеком повышают риск инфекций.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Повышенная температура',
            'Слабость',
            'Головная боль',
            'Тошнота или рвота',
            'Диарея',
            'Кожная сыпь',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Если вы заметили вышеуказанные симптомы или подозреваете у себя инфекцию, немедленно обратитесь к инфекционисту.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Диагностика проводится с помощью лабораторных анализов (кровь, моча, кал), ПЦР-тестов, серологических исследований. Лечение может включать противовирусные препараты, антибиотики и симптоматическую терапию.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Опытные инфекционисты',
            'Точная и быстрая диагностика',
            'Современное лабораторное оборудование',
            'Индивидуальный подход к каждому пациенту',
            'Рекомендации по профилактике инфекций',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'An infectionist is a specialist who diagnoses, treats, and prevents infectious diseases',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'At "Humo Med" clinic, an infectionist uses modern laboratory equipment to detect viral, bacterial, and parasitic infections and develops a personalized treatment plan.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Weakened immune system, poor hygiene, contaminated food and water, and contact with infected individuals increase the risk of infections.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: ['Fever', 'Weakness', 'Headache', 'Nausea or vomiting', 'Diarrhea', 'Skin rash'],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'If you experience any of the above symptoms or suspect an infection, seek medical attention from an infectionist immediately.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'Diagnosis is carried out using laboratory tests (blood, urine, stool), PCR tests, and serological studies. Treatment may include antiviral drugs, antibiotics, or symptomatic therapy.',
        },
        {
          type: 'title',
          text: 'Why Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Highly qualified infectionists',
            'Accurate and fast diagnostics',
            'Modern laboratory equipment',
            'Individual approach to each patient',
            'Infection prevention recommendations',
          ],
        },
      ],
    },
  },

  dermatologist: {
    icon: <FaNotesMedical />,
    title: t('services.dermatologist.title'),
    image: dermatologistImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Дерматолог — специалист по диагностике и лечению заболеваний кожи, волос, ногтей и слизистых оболочек',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Дерматолог диагностирует и эффективно лечит акне, дерматиты, экзему, псориаз, грибковые заболевания, выпадение волос и другие кожные проблемы. В клинике "Humo Med" созданы все условия для здоровья и красоты вашей кожи.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Гормональные изменения, стресс, неправильный уход, аллергии, наследственные факторы, несоблюдение гигиены — все это может вызывать кожные заболевания.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Сыпь или зуд',
            'Покраснение или сухость кожи',
            'Акне и гнойные воспаления',
            'Выпадение волос или ломкость ногтей',
            'Пятна, воспаления или шелушение кожи',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Если вышеуказанные симптомы сохраняются длительное время или усиливаются — не занимайтесь самолечением, обратитесь к дерматологу.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Диагностика включает осмотр, лабораторные анализы, аллергопробы или биопсию кожи. Лечение проводится с помощью медикаментов, мазей, лазерной терапии или косметологических процедур.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Опытные дерматологи',
            'Сочетание косметологического и медицинского подхода',
            'Индивидуальный подход и полная диагностика',
            'Современное оборудование и процедуры',
            'Гигиеничная, безопасная и комфортная среда',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'A dermatologist is a specialist who diagnoses and treats diseases related to the skin, hair, nails, and mucous membranes',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'A dermatologist diagnoses and effectively treats acne, dermatitis, eczema, psoriasis, fungal infections, hair loss, and other skin-related issues. At "Humo Med" clinic, all conditions are created to keep your skin healthy and beautiful.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Hormonal changes, stress, improper skincare, allergies, genetic predisposition, and poor hygiene can lead to skin problems.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Rashes or itching',
            'Redness or dryness of the skin',
            'Acne and purulent inflammation',
            'Hair loss or brittle nails',
            'Spots, inflammation, or skin peeling',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'If the above symptoms persist for a long time or worsen, it is recommended to see a dermatologist instead of self-treatment.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'In addition to physical examination, dermatologists use lab tests, allergy testing, or skin biopsy for accurate diagnosis. Treatment includes medications, ointments, laser therapy, or cosmetic procedures.',
        },
        {
          type: 'title',
          text: 'Why Choose Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Experienced dermatology specialists',
            'Combination of cosmetic and medical approach',
            'Individual care and complete diagnostics',
            'Modern equipment and procedures',
            'Hygienic, safe, and comfortable environment',
          ],
        },
      ],
    },
  },
  allergist: {
    icon: <FaVial />,
    title: t('services.allergist.title'),
    image: allergistImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Аллерголог — специалист по выявлению, лечению и контролю аллергических реакций организма',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Аллерголог диагностирует чувствительность к различным аллергенам — пыль, пища, лекарства, животные, кожа, дыхательные пути и другие факторы. В клинике "Humo Med" вы можете пройти современные методы диагностики и лечения аллергии.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Генетическая предрасположенность, загрязнённая экология, неправильное питание, лекарства, стресс и ослабление иммунитета могут усиливать аллергические реакции.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Заложенность или насморк (аллергический ринит)',
            'Зуд и слезотечение глаз',
            'Кожные высыпания, зуд или экзема',
            'Кашель, одышка (бронхиальная астма)',
            'Отёки, боль в животе или сыпь после еды',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Если вы замечаете симптомы аллергии или сезонные реакции повторяются из года в год — рекомендуется пройти осмотр у профессионального аллерголога.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Диагностика включает кожные тесты, анализ крови, иммунограмму и другие методы. Лечение включает антигистаминные препараты, иммуннотерапию, диету и избегание аллергенов.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Опытные специалисты-аллергологи',
            'Полные и современные аллергические тесты',
            'Индивидуальный подход и безопасное лечение',
            'Специальные программы для детей и взрослых',
            'Консультации по профилактике и контролю аллергий',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'An allergist is a specialist who identifies allergic reactions, determines their causes, and provides treatment for their effects',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'An allergist diagnoses sensitivities to dust, food, medications, animals, skin, airways, and other allergens. At "Humo Med" clinic, you can benefit from modern approaches for diagnosing and managing allergic conditions.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Genetic predisposition, environmental pollution, poor diet, medications, stress, and a weakened immune system can intensify allergic reactions.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Nasal congestion or runny nose (allergic rhinitis)',
            'Itchy and watery eyes',
            'Skin rashes, itching, or eczema',
            'Coughing, shortness of breath (bronchial asthma)',
            'Swelling, abdominal pain, or rash after eating',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'If you experience allergy-like symptoms or have seasonal reactions that repeat annually, it is recommended to consult a professional allergist.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'Accurate diagnosis is made through allergy tests (skin prick tests, blood tests), immunogram, and other methods. Treatment includes antihistamines, immunotherapy, dietary adjustments, and avoiding allergens.',
        },
        {
          type: 'title',
          text: 'Why Choose Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Experienced allergist specialists',
            'Comprehensive and modern allergy testing',
            'Individual approach and safe treatment',
            'Special programs for children and adults',
            'Advice on allergy prevention and management',
          ],
        },
      ],
    },
  },
  gynecologist: {
    icon: <FaVenus />,
    title: t('services.gynecologist.title'),
    image: gynecologistImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Гинеколог — специалист по диагностике и лечению заболеваний женской репродуктивной системы',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Гинеколог выявляет и лечит нарушения менструального цикла, гормональные сбои, заболевания матки и яичников, а также состояния во время беременности и менопаузы. В клинике "Humo Med" предоставляется полная диагностика и современные методы лечения женского здоровья.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Гормональный дисбаланс, стресс, инфекции, нездоровый образ жизни, наследственность и возрастные изменения — это основные факторы, влияющие на женское здоровье.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Нарушения менструального цикла',
            'Боли внизу живота',
            'Изменения выделений',
            'Дискомфорт или боль при интимной близости',
            'Трудности с зачатием',
          ],
        },
        {
          type: 'title',
          text: 'Когда обратиться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Если у вас наблюдаются вышеуказанные симптомы или вы давно не проходили профилактический осмотр, рекомендуется обратиться к гинекологу. Своевременная диагностика — залог здоровья.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Диагностика включает УЗИ, лабораторные анализы, гормональные исследования, кольпоскопию и другие методы. Лечение проводится с помощью медикаментов, гормональной терапии, физиопроцедур или хирургического вмешательства.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Опытные и деликатные гинекологи',
            'Современное диагностическое оборудование для женщин',
            'Индивидуальный подход и конфиденциальность',
            'Услуги по планированию и ведению беременности',
            'Профилактика и контроль гормонального баланса',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'A gynecologist is a specialist who diagnoses and treats conditions related to the female reproductive system',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'A gynecologist identifies and treats menstrual disorders, hormonal changes, uterine and ovarian issues, as well as conditions during pregnancy and menopause. At "Humo Med" clinic, full diagnostics and modern treatments are available for women’s health.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Hormonal imbalance, stress, infections, unhealthy lifestyle, genetic predisposition, and age-related changes are key factors affecting women’s health.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Irregular menstrual cycles',
            'Lower abdominal pain',
            'Changes in vaginal discharge',
            'Discomfort or pain during intimacy',
            'Difficulty conceiving',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'If you have any of the symptoms above or haven’t had a routine check-up recently, it is recommended to see a gynecologist. Early diagnosis is key to a healthy life.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'Diagnosis is carried out using ultrasound, lab tests, hormone screenings, colposcopy, and other methods. Treatment may include medication, hormone therapy, physiotherapy, or surgical intervention.',
        },
        {
          type: 'title',
          text: 'Why Choose Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Experienced and careful gynecologists',
            'Modern diagnostic equipment for women',
            'Personalized approach and confidentiality',
            'Pregnancy planning and monitoring services',
            'Prevention and hormonal balance control',
          ],
        },
      ],
    },
  },
  ent: {
    icon: <FaStethoscope />,
    title: t('services.ent.title'),
    image: entImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'ЛОР (отоларинголог) — специалист по диагностике и лечению заболеваний уха, горла и носа',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'ЛОР-врач диагностирует и лечит такие заболевания, как заложенность носа, боль в ухе, ангина, синусит, отит, ларингит. В клинике "Humo Med" вы можете пройти полное обследование с использованием современных технологий и получить эффективное лечение.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Вирусные инфекции, холодная погода, пыль, аллергии, снижение иммунитета и несоблюдение гигиены могут привести к проблемам с ЛОР-органами.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Заложенность или насморк',
            'Боль в горле и затруднённое глотание',
            'Боль в ухе или снижение слуха',
            'Головная боль и давление в области лица',
            'Охриплость, изменение голоса или кашель',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Если у вас наблюдаются вышеуказанные симптомы более нескольких дней или они усиливаются, обязательно обратитесь к ЛОР-специалисту. Своевременное лечение предотвращает серьёзные осложнения.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Диагностика проводится с помощью осмотра, эндоскопии, аудиометрии и рентгена. Лечение включает медикаменты, промывания, физиотерапию или, при необходимости, малые хирургические вмешательства.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Опытные ЛОР-врачи',
            'Современное оборудование для диагностики уха, горла и носа',
            'Подход, адаптированный для детей и взрослых',
            'Безболезненные и эффективные процедуры',
            'Полный уход и наблюдение',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'ENT (otolaryngologist) – a specialist in diagnosing and treating ear, throat, and nose conditions',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'An ENT doctor diagnoses and treats nasal congestion, ear pain, tonsillitis, sinusitis, otitis, laryngitis, and other related conditions. At "Humo Med" clinic, you can undergo thorough examinations using modern technologies and receive effective treatment.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Viral infections, cold weather, dust, allergies, weakened immunity, and poor hygiene can all contribute to ENT-related problems.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Nasal congestion or runny nose',
            'Sore throat and difficulty swallowing',
            'Ear pain or hearing loss',
            'Headache and facial pressure',
            'Hoarseness, voice changes, or cough',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'If the symptoms above persist for more than a few days or worsen, it is strongly recommended to consult an ENT specialist. Timely treatment helps prevent serious complications.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'The ENT specialist conducts diagnosis using examination, endoscopy, audiometry, and X-rays. Treatment includes medications, rinsing procedures, physiotherapy, or minor surgical interventions when necessary.',
        },
        {
          type: 'title',
          text: 'Why Choose Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Experienced ENT doctors',
            'Modern diagnostic tools for the nose, ear, and throat',
            'Tailored approach for both children and adults',
            'Painless and effective procedures',
            'Comprehensive care and follow-up',
          ],
        },
      ],
    },
  },
  hepatologist: {
    icon: <FaUserNurse />,
    title: t('services.hepatologist.title'),
    image: hepatologistImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Гепатолог — специалист по диагностике и лечению заболеваний печени, желчных путей и поджелудочной железы',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Гепатолог выявляет и лечит вирусные гепатиты (A, B, C), жировой гепатоз, цирроз, поражения печени и другие заболевания. В клинике "Humo Med" вам окажут качественную помощь с применением современных методов диагностики и опыта специалистов.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Вирусные инфекции, злоупотребление алкоголем, неправильное питание, бесконтрольный приём лекарств и генетическая предрасположенность могут привести к заболеваниям печени.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Боль или тяжесть под правым рёберным краем',
            'Потеря аппетита',
            'Слабость и усталость',
            'Тошнота',
            'Пожелтение кожи и глаз',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Если у вас есть один или несколько из вышеуказанных симптомов, срочно обратитесь к гепатологу. Своевременно выявленные заболевания хорошо поддаются лечению.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Диагноз ставится с помощью анализа крови, УЗИ, биопсии и других исследований. Лечение проводится с применением медикаментов, диеты и изменения образа жизни.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Квалифицированные гепатологи',
            'Современное лабораторное и УЗИ-оборудование',
            'Индивидуальный подход',
            'Комплексный контроль заболеваний',
            'Поддерживающие и реабилитационные программы',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'Hepatologist – a specialist in diagnosing and treating diseases of the liver, bile ducts, and pancreas',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'A hepatologist diagnoses and treats viral hepatitis (A, B, C), fatty liver disease, cirrhosis, liver damage, and other conditions. At "Humo Med" clinic, you will receive quality care with the help of modern diagnostics and experienced specialists.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Viral infections, alcohol abuse, poor nutrition, uncontrolled medication use, and genetic predisposition can lead to liver diseases.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Pain or heaviness under the right rib',
            'Loss of appetite',
            'Weakness and fatigue',
            'Nausea',
            'Yellowing of the skin and eyes',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'If you experience one or more of the above symptoms, consult a hepatologist immediately. Early diagnosis ensures effective treatment.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'Diagnosis is made through blood tests, ultrasound (USG), biopsy, and other examinations. Treatment includes medications, a proper diet, and lifestyle changes.',
        },
        {
          type: 'title',
          text: 'Why Choose Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Qualified hepatology specialists',
            'Modern laboratory and ultrasound equipment',
            'Individualized approach',
            'Comprehensive disease monitoring',
            'Supportive and rehabilitation programs',
          ],
        },
      ],
    },
  },
  proctologist: {
    icon: <FaProcedures />,
    title: t('services.proctologist.title'),
    image: proctologistImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Гепатолог — специалист по диагностике и лечению заболеваний печени, желчных путей и поджелудочной железы',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Гепатолог выявляет и лечит вирусные гепатиты (A, B, C), жировой гепатоз, цирроз, поражения печени и другие заболевания. В клинике "Humo Med" вам окажут качественную помощь с применением современных методов диагностики и опыта специалистов.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Вирусные инфекции, злоупотребление алкоголем, неправильное питание, бесконтрольный приём лекарств и генетическая предрасположенность могут привести к заболеваниям печени.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Боль или тяжесть под правым рёберным краем',
            'Потеря аппетита',
            'Слабость и усталость',
            'Тошнота',
            'Пожелтение кожи и глаз',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Если у вас есть один или несколько из вышеуказанных симптомов, срочно обратитесь к гепатологу. Своевременно выявленные заболевания хорошо поддаются лечению.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Диагноз ставится с помощью анализа крови, УЗИ, биопсии и других исследований. Лечение проводится с применением медикаментов, диеты и изменения образа жизни.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Квалифицированные гепатологи',
            'Современное лабораторное и УЗИ-оборудование',
            'Индивидуальный подход',
            'Комплексный контроль заболеваний',
            'Поддерживающие и реабилитационные программы',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'Hepatologist – a specialist in diagnosing and treating diseases of the liver, bile ducts, and pancreas',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'A hepatologist diagnoses and treats viral hepatitis (A, B, C), fatty liver disease, cirrhosis, liver damage, and other conditions. At "Humo Med" clinic, you will receive quality care with the help of modern diagnostics and experienced specialists.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Viral infections, alcohol abuse, poor nutrition, uncontrolled medication use, and genetic predisposition can lead to liver diseases.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Pain or heaviness under the right rib',
            'Loss of appetite',
            'Weakness and fatigue',
            'Nausea',
            'Yellowing of the skin and eyes',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'If you experience one or more of the above symptoms, consult a hepatologist immediately. Early diagnosis ensures effective treatment.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'Diagnosis is made through blood tests, ultrasound (USG), biopsy, and other examinations. Treatment includes medications, a proper diet, and lifestyle changes.',
        },
        {
          type: 'title',
          text: 'Why Choose Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Qualified hepatology specialists',
            'Modern laboratory and ultrasound equipment',
            'Individualized approach',
            'Comprehensive disease monitoring',
            'Supportive and rehabilitation programs',
          ],
        },
      ],
    },
  },
  rheumatologist: {
    icon: <FaHands />,
    title: t('services.rheumatologist.title'),
    image: rheumatologistImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Ревматолог — специалист по диагностике и лечению воспалительных заболеваний суставов, мышц, сухожилий и тканей.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Он диагностирует и лечит ревматоидный артрит, подагру, волчанку, остеоартрит, васкулит и другие аутоиммунные заболевания. В клинике "Humo Med" работают опытные ревматологи и используется современное диагностическое оборудование.',
        },
        {
          type: 'title',
          text: 'Причины ревматологических заболеваний',
        },
        {
          type: 'paragraph',
          text: 'Генетическая предрасположенность, нарушения иммунной системы, инфекции, стресс и экологические факторы способствуют развитию данных заболеваний.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Боль и отёк в суставах',
            'Ограничение подвижности',
            'Утренняя скованность',
            'Повышение температуры тела',
            'Боль в мышцах и слабость',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к ревматологу?',
        },
        {
          type: 'paragraph',
          text: 'Если вы ощущаете постоянную боль, отёк или ограничение движений в суставах, важно обратиться к ревматологу. Своевременное лечение предотвращает ухудшение состояния.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Заболевание выявляется с помощью анализа крови, рентгена, УЗИ и других методов. Лечение включает в себя медикаментозную терапию, физиотерапию и изменение образа жизни.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Высококвалифицированные ревматологи',
            'Современное диагностическое оборудование',
            'Комплексный подход',
            'Реабилитационные программы',
            'Индивидуальные планы лечения',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'Rheumatologist – a specialist in diagnosing and treating inflammatory diseases of the joints, muscles, tendons, and connective tissues.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'They diagnose and treat rheumatoid arthritis, gout, lupus, osteoarthritis, vasculitis, and other autoimmune diseases. At "Humo Med" clinic, experienced rheumatologists and advanced diagnostic equipment are available.',
        },
        {
          type: 'title',
          text: 'Causes of Rheumatologic Diseases',
        },
        {
          type: 'paragraph',
          text: 'Genetic predisposition, immune system disorders, infections, stress, and environmental factors contribute to the development of these conditions.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Joint pain and swelling',
            'Limited mobility',
            'Morning stiffness',
            'Fever',
            'Muscle pain and weakness',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Rheumatologist?',
        },
        {
          type: 'paragraph',
          text: 'If you experience persistent joint pain, swelling, or limited movement, it’s important to consult a rheumatologist. Early treatment helps prevent disease progression.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'Diagnosis is made using blood tests, X-rays, ultrasound, and other methods. Treatment involves medications, physiotherapy, and lifestyle changes.',
        },
        {
          type: 'title',
          text: 'Why Choose Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Highly qualified rheumatologists',
            'Modern diagnostic equipment',
            'Comprehensive approach',
            'Rehabilitation programs',
            'Individualized treatment plans',
          ],
        },
      ],
    },
  },
  ultrasound: {
    icon: <FaMicroscope />,
    title: t('services.ultrasound.title'),
    image: ultrasoundImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Ультразвуковое исследование (УЗИ) — безопасный и безболезненный метод диагностики, позволяющий в реальном времени изучить внутренние органы.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'С помощью УЗИ можно точно исследовать сердце, печень, почки, желчный пузырь, щитовидную железу, половые органы женщин и мужчин, состояние плода и другие внутренние структуры.',
        },
        {
          type: 'title',
          text: 'Когда необходимо УЗИ?',
        },
        {
          type: 'list',
          items: [
            'Боль или дискомфорт во внутренних органах',
            'Мониторинг беременности',
            'Изменения в анализах крови',
            'Профилактические обследования',
            'Подозрение на воспаления или опухоли',
          ],
        },
        {
          type: 'title',
          text: 'Виды УЗИ:',
        },
        {
          type: 'list',
          items: [
            'УЗИ брюшной полости',
            'УЗИ печени и желчных путей',
            'УЗИ почек и мочевых путей',
            'УЗИ половых органов у женщин и мужчин',
            'УЗИ щитовидной железы',
            'УЗИ сердца (ЭхоКГ)',
            'УЗИ плода (1-2-3 триместры)',
          ],
        },
        {
          type: 'title',
          text: 'Преимущества УЗИ:',
        },
        {
          type: 'list',
          items: [
            'Быстро и безболезненно',
            'Без излучения и безопасно',
            'Точные результаты',
            'Часто не требует подготовки',
          ],
        },
        {
          type: 'title',
          text: 'Почему именно УЗИ в Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Современное УЗИ-оборудование',
            'Опытные специалисты',
            'Мониторинг беременности',
            'Комплексное обследование',
            'Быстрые и точные результаты',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'Ultrasound examination (USG) is a safe and painless diagnostic method that examines internal organs in real time.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Ultrasound allows detailed visualization of the heart, liver, kidneys, gallbladder, thyroid gland, male and female reproductive organs, fetal development, and many other internal structures.',
        },
        {
          type: 'title',
          text: 'When is Ultrasound Needed?',
        },
        {
          type: 'list',
          items: [
            'Pain or discomfort in internal organs',
            'Pregnancy monitoring',
            'Changes in blood test results',
            'For preventive check-ups',
            'Suspected inflammation or tumors',
          ],
        },
        {
          type: 'title',
          text: 'Types of Ultrasound:',
        },
        {
          type: 'list',
          items: [
            'Abdominal ultrasound',
            'Liver and bile ducts ultrasound',
            'Kidneys and urinary tract ultrasound',
            'Male and female pelvic ultrasound',
            'Thyroid ultrasound',
            'Heart ultrasound (EchoCG)',
            'Fetal ultrasound (1st, 2nd, 3rd trimester)',
          ],
        },
        {
          type: 'title',
          text: 'Advantages of Ultrasound:',
        },
        {
          type: 'list',
          items: [
            'Fast and painless',
            'Radiation-free and safe',
            'Accurate results',
            'Often requires no preparation',
          ],
        },
        {
          type: 'title',
          text: 'Why Choose Humo Med for Ultrasound?',
        },
        {
          type: 'list',
          items: [
            'Modern ultrasound equipment',
            'Experienced specialists',
            'Pregnancy monitoring',
            'Comprehensive examination packages',
            'Fast and accurate results',
          ],
        },
      ],
    },
  },
  xray: {
    icon: <FaXRay />,
    title: t('services.xray.title'),
    image: xrayImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Рентген — это быстрый и эффективный метод диагностики для изучения костей, лёгких, суставов и других внутренних структур.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Рентгеновские лучи проходят через тело, и разные ткани по-разному их поглощают. Это позволяет врачу получить чёткое изображение для постановки диагноза.',
        },
        {
          type: 'title',
          text: 'Когда необходим рентген?',
        },
        {
          type: 'list',
          items: [
            'При подозрении на переломы костей',
            'При заболеваниях лёгких (пневмония, туберкулёз, астма)',
            'При воспалении или травмах суставов',
            'При сколиозе или проблемах с позвоночником',
            'При проглатывании инородных предметов',
          ],
        },
        {
          type: 'title',
          text: 'Виды рентгена:',
        },
        {
          type: 'list',
          items: [
            'Рентген грудной клетки (лёгкие, сердце)',
            'Рентген позвоночника (шейный, поясничный, грудной отдел)',
            'Рентген костей рук и ног',
            'Рентген суставов',
            'Рентген носовых пазух (синусы)',
          ],
        },
        {
          type: 'title',
          text: 'Преимущества рентгена:',
        },
        {
          type: 'list',
          items: [
            'Быстрое и безболезненное обследование',
            'Чёткие изображения',
            'Оценка состояния костей и тканей',
            'Важный инструмент диагностики',
          ],
        },
        {
          type: 'title',
          text: 'Почему сделать рентген в Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Современные цифровые рентген-аппараты',
            'Безопасная среда с низким уровнем облучения',
            'Опытные рентгенологи',
            'Быстрые результаты и профессиональный анализ',
            'Комфортные и гигиеничные условия',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'X-ray is a fast and effective diagnostic method used to examine bones, lungs, joints, and other internal structures.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'X-ray beams pass through the body, and different tissues absorb them at different rates. This provides clear images to assist the doctor in diagnosis.',
        },
        {
          type: 'title',
          text: 'When is X-ray Needed?',
        },
        {
          type: 'list',
          items: [
            'Suspected bone fractures',
            'Lung conditions (pneumonia, tuberculosis, asthma)',
            'Joint inflammation or trauma',
            'Spinal issues or scoliosis',
            'Swallowed foreign objects',
          ],
        },
        {
          type: 'title',
          text: 'Types of X-ray:',
        },
        {
          type: 'list',
          items: [
            'Chest X-ray (lungs, heart)',
            'Spine X-ray (neck, lower back, thoracic)',
            'Limb bones X-ray',
            'Joint X-ray',
            'Sinus (nasal cavity) X-ray',
          ],
        },
        {
          type: 'title',
          text: 'Advantages of X-ray:',
        },
        {
          type: 'list',
          items: [
            'Quick and painless procedure',
            'Clear imaging results',
            'Assessment of bones and tissues',
            'Essential diagnostic tool',
          ],
        },
        {
          type: 'title',
          text: 'Why Choose Humo Med for X-ray?',
        },
        {
          type: 'list',
          items: [
            'Modern digital X-ray equipment',
            'Safe environment with minimal radiation',
            'Experienced radiologists',
            'Fast results and professional analysis',
            'Comfortable and hygienic conditions',
          ],
        },
      ],
    },
  },
  urologist: {
    icon: <FaUserMd />,
    title: t('services.urologist.title'),
    image: urologistImage,
    content: {
      uz: [
        {
          type: 'paragraph',
          text: 'Urolog – siydik chiqarish tizimi va erkak jinsiy salomatligi bilan bog‘liq kasalliklarni aniqlovchi va davolovchi mutaxassis',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Urolog buyrak, siydik pufagi, prostata va siydik yo‘llari kasalliklarini aniqlaydi va davolaydi. "Humo Med" klinikasida zamonaviy diagnostika uskunalari yordamida tekshiruvdan o‘tasiz.',
        },
        {
          type: 'title',
          text: 'Sabablar va xavf omillari',
        },
        {
          type: 'paragraph',
          text: 'Infeksiyalar, toshlar, gormonal buzilishlar, yomon odatlar (chekish, alkogol), gigiyena qoidalariga amal qilmaslik, hamda genetik moyillik urologik kasalliklar xavfini oshiradi.',
        },
        {
          type: 'title',
          text: 'Asosiy simptomlar:',
        },
        {
          type: 'list',
          items: [
            'Siydik chiqarishda og‘riq yoki qiyinchilik',
            'Qon aralash siydik',
            'Tez-tez siydik chiqarish',
            'Bel sohasida og‘riq',
            'Prostata bilan bog‘liq muammolar',
          ],
        },
        {
          type: 'title',
          text: 'Qachon vrachga murojaat qilish kerak?',
        },
        {
          type: 'paragraph',
          text: 'Agar siydik chiqarishda o‘zgarishlar, og‘riq yoki yuqoridagi simptomlardan biri kuzatilsa, darhol urologga murojaat qiling.',
        },
        {
          type: 'title',
          text: 'Diagnostika va davolash',
        },
        {
          type: 'paragraph',
          text: 'Ultratovush tekshiruvi (UZI), siydik va qon tahlillari, sistoskopiya va boshqa usullar orqali tashxis qo‘yiladi. Davolash dori vositalari, fizioterapiya yoki jarrohlik amaliyotini o‘z ichiga olishi mumkin.',
        },
        {
          type: 'title',
          text: 'Nega aynan Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Malakali urolog mutaxassislar',
            'Zamonaviy diagnostika uskunalari',
            'Bemorga individual yondashuv',
            'Qulay va xavfsiz davolash muhiti',
            'Profilaktika bo‘yicha tavsiyalar',
          ],
        },
      ],
      ru: [
        {
          type: 'paragraph',
          text: 'Уролог – специалист, который выявляет и лечит заболевания мочевыделительной системы и мужского здоровья',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Уролог диагностирует и лечит заболевания почек, мочевого пузыря, простаты и мочевых путей. В клинике "Humo Med" обследование проводится с использованием современного оборудования.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Инфекции, камни, гормональные нарушения, вредные привычки (курение, алкоголь), несоблюдение гигиены и генетическая предрасположенность повышают риск урологических заболеваний.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Боль или затруднение при мочеиспускании',
            'Кровь в моче',
            'Частое мочеиспускание',
            'Боль в пояснице',
            'Проблемы с простатой',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Если вы заметили изменения при мочеиспускании, боль или один из вышеуказанных симптомов, немедленно обратитесь к урологу.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Диагноз ставится с помощью УЗИ, анализа мочи и крови, цистоскопии и других методов. Лечение может включать медикаментозную терапию, физиотерапию или хирургическое вмешательство.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Опытные урологи',
            'Современное диагностическое оборудование',
            'Индивидуальный подход к каждому пациенту',
            'Комфортные и безопасные условия лечения',
            'Рекомендации по профилактике',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'A urologist is a specialist who diagnoses and treats diseases of the urinary system and male reproductive health',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'A urologist treats conditions of the kidneys, bladder, prostate, and urinary tract. At "Humo Med" clinic, examinations are carried out using modern diagnostic equipment.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Infections, stones, hormonal imbalances, bad habits (smoking, alcohol), poor hygiene, and genetic predisposition increase the risk of urological diseases.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Pain or difficulty urinating',
            'Blood in urine',
            'Frequent urination',
            'Lower back pain',
            'Prostate-related issues',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'If you notice changes in urination, pain, or any of the above symptoms, consult a urologist immediately.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'Diagnosis is carried out using ultrasound, urine and blood tests, cystoscopy, and other methods. Treatment may involve medication, physiotherapy, or surgery.',
        },
        {
          type: 'title',
          text: 'Why Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Experienced urologists',
            'Modern diagnostic equipment',
            'Individual approach to each patient',
            'Comfortable and safe treatment environment',
            'Prevention and health recommendations',
          ],
        },
      ],
    },
  },
  pediatricNeuro: {
    icon: <FaBrain />,
    title: t('services.pediatricNeuro.title'),
    image: pediatricNeuroImage,
    content: {
      uz: [
        {
          type: 'paragraph',
          text: 'Bola nevropatologi – bolalarda asab tizimi kasalliklarini aniqlovchi va davolovchi mutaxassis',
          bold: true,
        },
        {
          type: 'paragraph',
          text: '"Humo Med" klinikasida bolalarning asab tizimi bilan bog‘liq turli kasalliklar zamonaviy usullar yordamida tashxis qilinadi va davolanadi.',
        },
        {
          type: 'title',
          text: 'Sabablar va xavf omillari',
        },
        {
          type: 'paragraph',
          text: 'Tug‘ma asab tizimi nuqsonlari, bosh miya shikastlanishlari, infeksiyalar, genetik kasalliklar, kislorod yetishmovchiligi va rivojlanishdagi kechikishlar bolalarda nevrologik muammolarni keltirib chiqarishi mumkin.',
        },
        {
          type: 'title',
          text: 'Asosiy simptomlar:',
        },
        {
          type: 'list',
          items: [
            'Rivojlanish bosqichlarida kechikish (o‘tirish, yurish, gapirish)',
            'Tez-tez yoki uzoq davom etuvchi bosh og‘rig‘i',
            'Tutqanoq (epilepsiya) xurujlari',
            'Harakat muvofiqlashuvi buzilishi',
            'Mushak tonusining ortishi yoki pasayishi',
          ],
        },
        {
          type: 'title',
          text: 'Qachon vrachga murojaat qilish kerak?',
        },
        {
          type: 'paragraph',
          text: 'Agar bolangizda yuqoridagi belgilar kuzatilsa yoki asab tizimiga oid boshqa shubhali simptomlar mavjud bo‘lsa, darhol nevropatologga murojaat qiling.',
        },
        {
          type: 'title',
          text: 'Diagnostika va davolash',
        },
        {
          type: 'paragraph',
          text: 'Diagnostika EEG, MRT, ultratovush, laborator tahlillar va klinik ko‘rik yordamida amalga oshiriladi. Davolash medikamentoz terapiya, fizioterapiya va reabilitatsiya dasturlarini o‘z ichiga oladi.',
        },
        {
          type: 'title',
          text: 'Nega aynan Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Bolalar nevrologiyasi bo‘yicha malakali mutaxassislar',
            'Zamonaviy diagnostika uskunalari',
            'Har bir bemorga individual yondashuv',
            'Reabilitatsiya va psixologik qo‘llab-quvvatlash',
            'Ota-onalar uchun maslahat va tavsiyalar',
          ],
        },
      ],
      ru: [
        {
          type: 'paragraph',
          text: 'Детский невролог – специалист, диагностирующий и лечащий заболевания нервной системы у детей',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'В клинике "Humo Med" проводится диагностика и лечение различных заболеваний нервной системы у детей с использованием современных методов.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Врожденные патологии нервной системы, черепно-мозговые травмы, инфекции, генетические заболевания, гипоксия и задержка развития могут вызывать неврологические проблемы у детей.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Задержка развития (сидение, ходьба, речь)',
            'Частые или продолжительные головные боли',
            'Приступы судорог (эпилепсия)',
            'Нарушение координации движений',
            'Повышенный или пониженный мышечный тонус',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Если у вашего ребенка наблюдаются вышеперечисленные симптомы или другие признаки проблем с нервной системой, необходимо обратиться к детскому неврологу.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Диагностика проводится с помощью ЭЭГ, МРТ, ультразвука, лабораторных анализов и клинического осмотра. Лечение включает медикаментозную терапию, физиотерапию и реабилитационные программы.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Опытные специалисты по детской неврологии',
            'Современное диагностическое оборудование',
            'Индивидуальный подход к каждому пациенту',
            'Реабилитация и психологическая поддержка',
            'Консультации и рекомендации для родителей',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'A pediatric neurologist is a specialist who diagnoses and treats nervous system disorders in children',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'At "Humo Med" clinic, various nervous system conditions in children are diagnosed and treated using modern techniques.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Congenital nervous system defects, brain injuries, infections, genetic disorders, oxygen deficiency, and developmental delays can cause neurological problems in children.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Developmental delays (sitting, walking, speaking)',
            'Frequent or prolonged headaches',
            'Seizures (epilepsy)',
            'Movement coordination disorders',
            'Increased or decreased muscle tone',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'If your child shows any of the above signs or other suspicious neurological symptoms, consult a pediatric neurologist immediately.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'Diagnosis includes EEG, MRI, ultrasound, laboratory tests, and clinical examination. Treatment may involve medication, physiotherapy, and rehabilitation programs.',
        },
        {
          type: 'title',
          text: 'Why Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Experienced pediatric neurology specialists',
            'Modern diagnostic equipment',
            'Individual approach to each patient',
            'Rehabilitation and psychological support',
            'Consultations and advice for parents',
          ],
        },
      ],
    },
  },

  pediatricGastro: {
    icon: <FaUtensils />,
    title: t('services.pediatricGastro.title'),
    image: pediatricGastroImage,
    content: {
      uz: [
        {
          type: 'paragraph',
          text: 'Bola gastroenterologi – bolalarda ovqat hazm qilish tizimi kasalliklarini aniqlovchi va davolovchi mutaxassis',
          bold: true,
        },
        {
          type: 'paragraph',
          text: '"Humo Med" klinikasida bolalarda oshqozon, ichak va boshqa ovqat hazm qilish tizimi kasalliklari samarali davolanadi.',
        },
        {
          type: 'title',
          text: 'Sabablar va xavf omillari',
        },
        {
          type: 'paragraph',
          text: 'Noto‘g‘ri ovqatlanish, ovqat allergiyasi, infeksiyalar, genetik moyillik, ichak mikroflorasining buzilishi va surunkali kasalliklar gastroenterologik muammolarga olib kelishi mumkin.',
        },
        {
          type: 'title',
          text: 'Asosiy simptomlar:',
        },
        {
          type: 'list',
          items: [
            'Qorin og‘rishi yoki noqulaylik',
            'Doimiy qabziyat yoki diareya',
            'Ovqatdan keyin qusish yoki ko‘ngil aynishi',
            'Vaznning yetarlicha oshmasligi',
            'Ishtahaning pasayishi',
          ],
        },
        {
          type: 'title',
          text: 'Qachon vrachga murojaat qilish kerak?',
        },
        {
          type: 'paragraph',
          text: 'Agar bolangizda yuqoridagi belgilar muntazam takrorlansa, vaqtida gastroenterolog ko‘rigidan o‘tkazing.',
        },
        {
          type: 'title',
          text: 'Diagnostika va davolash',
        },
        {
          type: 'paragraph',
          text: 'Endoskopiya, ultratovush, laborator tahlillar va boshqa usullar orqali tashxis qo‘yiladi. Davolashga dieta, dori vositalari va fizioterapiya kiradi.',
        },
        {
          type: 'title',
          text: 'Nega aynan Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Bolalar gastroenterologiyasi bo‘yicha malakali shifokorlar',
            'Zamonaviy tibbiy texnologiyalar',
            'Individual davolash rejasi',
            'Bola uchun qulay va xavfsiz sharoit',
            'Ota-onalar uchun profilaktika bo‘yicha tavsiyalar',
          ],
        },
      ],
      ru: [
        {
          type: 'paragraph',
          text: 'Детский гастроэнтеролог – специалист, диагностирующий и лечащий заболевания пищеварительной системы у детей',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'В клинике "Humo Med" эффективно лечат заболевания желудка, кишечника и других органов пищеварительной системы у детей.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Неправильное питание, пищевая аллергия, инфекции, генетическая предрасположенность, нарушение микрофлоры кишечника и хронические заболевания могут вызывать гастроэнтерологические проблемы.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Боль или дискомфорт в животе',
            'Постоянные запоры или диарея',
            'Рвота или тошнота после еды',
            'Недостаточный набор веса',
            'Снижение аппетита',
          ],
        },
        {
          type: 'title',
          text: 'Когда обращаться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Если у вашего ребенка регулярно наблюдаются вышеуказанные симптомы, необходимо обратиться к детскому гастроэнтерологу.',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'Диагностика проводится с помощью эндоскопии, ультразвука, лабораторных анализов и других методов. Лечение включает диету, медикаменты и физиотерапию.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Опытные врачи по детской гастроэнтерологии',
            'Современные медицинские технологии',
            'Индивидуальный план лечения',
            'Комфортные и безопасные условия для ребенка',
            'Рекомендации по профилактике для родителей',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'A pediatric gastroenterologist is a specialist who diagnoses and treats digestive system disorders in children',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'At "Humo Med" clinic, stomach, intestinal, and other digestive system conditions in children are treated effectively.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Poor nutrition, food allergies, infections, genetic predisposition, intestinal microbiota imbalance, and chronic diseases can lead to gastroenterological problems.',
        },
        {
          type: 'title',
          text: 'Main Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Abdominal pain or discomfort',
            'Persistent constipation or diarrhea',
            'Vomiting or nausea after meals',
            'Insufficient weight gain',
            'Loss of appetite',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'If your child regularly experiences the above symptoms, schedule a visit to a pediatric gastroenterologist.',
        },
        {
          type: 'title',
          text: 'Diagnosis and Treatment',
        },
        {
          type: 'paragraph',
          text: 'Diagnosis is made through endoscopy, ultrasound, laboratory tests, and other methods. Treatment may include dietary adjustments, medications, and physiotherapy.',
        },
        {
          type: 'title',
          text: 'Why Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Experienced pediatric gastroenterology doctors',
            'Modern medical technology',
            'Personalized treatment plan',
            'Comfortable and safe environment for the child',
            'Prevention tips for parents',
          ],
        },
      ],
    },
  },

  physiotherapy: {
    icon: <FaHands />,
    title: t('services.physiotherapy.title'),
    image: physiotherapyImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Физиотерапия — это комплекс процедур, основанных на применении природных и искусственных физических факторов. Метод широко используется для снижения боли, снятия воспаления и восстановления организма.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Физиотерапия эффективна при травмах, неврологических заболеваниях, болях в суставах и мышцах, а также при хронических состояниях.',
        },
        {
          type: 'title',
          text: 'Когда рекомендована физиотерапия?',
        },
        {
          type: 'list',
          items: [
            'Боли в пояснице, шее или позвоночнике',
            'Заболевания суставов и мышц (артроз, артрит)',
            'Неврологические проблемы (радикулит, неврит)',
            'Реабилитация после травм',
            'Хроническая боль и стрессовые состояния',
          ],
        },
        {
          type: 'title',
          text: 'Основные виды физиотерапии:',
        },
        {
          type: 'list',
          items: [
            'Электротерапия (лечение электрическим током)',
            'Магнитотерапия (воздействие магнитным полем)',
            'Ультразвуковая терапия',
            'Лазеротерапия',
            'Тепловые и холодовые процедуры',
            'УВЧ, фонофорез, дарсонваль',
          ],
        },
        {
          type: 'title',
          text: 'Преимущества физиотерапии:',
        },
        {
          type: 'list',
          items: [
            'Безболезненные и неинвазивные методы',
            'Лечение без медикаментов',
            'Улучшает кровообращение',
            'Снижает воспаление',
            'Восстанавливает двигательную активность',
          ],
        },
        {
          type: 'title',
          text: 'Почему физиотерапия в Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Современное физиотерапевтическое оборудование',
            'Опытные специалисты',
            'Индивидуальный подход',
            'Комфортные условия и безопасная среда',
            'Процедуры, направленные на результат',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'Physiotherapy is a set of treatments that use natural and artificial physical factors. It is widely used to reduce pain, eliminate inflammation, and restore the body.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Physiotherapy is effective in treating injuries, neurological conditions, joint and muscle pain, as well as chronic issues.',
        },
        {
          type: 'title',
          text: 'When is Physiotherapy Recommended?',
        },
        {
          type: 'list',
          items: [
            'Back, neck, or spinal pain',
            'Joint and muscle disorders (arthrosis, arthritis)',
            'Neurological problems (radiculitis, neuritis)',
            'Post-traumatic rehabilitation',
            'Chronic pain and stress conditions',
          ],
        },
        {
          type: 'title',
          text: 'Main Types of Physiotherapy:',
        },
        {
          type: 'list',
          items: [
            'Electrotherapy (treatment with electric current)',
            'Magnetotherapy (magnetic field treatment)',
            'Ultrasound therapy',
            'Laser therapy',
            'Heat and cold treatments',
            'UHF, phonophoresis, darsonval',
          ],
        },
        {
          type: 'title',
          text: 'Benefits of Physiotherapy:',
        },
        {
          type: 'list',
          items: [
            'Painless and non-invasive method',
            'Drug-free treatment option',
            'Improves blood circulation',
            'Reduces inflammation',
            'Restores motor functions',
          ],
        },
        {
          type: 'title',
          text: 'Why Choose Humo Med for Physiotherapy?',
        },
        {
          type: 'list',
          items: [
            'Modern physiotherapy equipment',
            'Experienced specialists',
            'Individual approach',
            'Comfortable and safe environment',
            'Results-oriented procedures',
          ],
        },
      ],
    },
  },
  massage: {
    icon: <FaUserPlus />,
    title: t('services.massage.title'),
    image: massageImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Массажная терапия — это метод лечения тела с помощью ручного воздействия на кожу, мышцы и мягкие ткани. Он улучшает кровообращение, снимает мышечное напряжение и улучшает общее самочувствие.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'В клинике Humo Med массаж применяется с целью оздоровления, реабилитации и снятия стресса.',
        },
        {
          type: 'title',
          text: 'Когда рекомендуется массаж?',
        },
        {
          type: 'list',
          items: [
            'Боль в пояснице и шее',
            'Напряжение в плечах',
            'Спортивные травмы',
            'Стресс и усталость',
            'Нарушения кровообращения',
            'Проблемы с позвоночником',
          ],
        },
        {
          type: 'title',
          text: 'Виды массажа:',
        },
        {
          type: 'list',
          items: [
            'Общий оздоровительный массаж',
            'Медицинский массаж (неврологический, ортопедический)',
            'Спортивный массаж',
            'Массаж для детей',
            'Лимфодренажный массаж',
            'Массаж лица и шеи',
          ],
        },
        {
          type: 'title',
          text: 'Преимущества массажа:',
        },
        {
          type: 'list',
          items: [
            'Снимает мышечное напряжение',
            'Улучшает кровообращение',
            'Снижает стресс',
            'Уменьшает воспаление',
            'Укрепляет иммунитет',
          ],
        },
        {
          type: 'title',
          text: 'Почему стоит выбрать массаж в Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Квалифицированные и опытные массажисты',
            'Индивидуальный подход и процедуры по плану',
            'Гигиеничные и комфортные условия',
            'Качественные масла и средства',
            'Спокойная и расслабляющая атмосфера',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'Massage therapy is a method of treating the body by manually working on the skin, muscles, and soft tissues. It improves blood circulation, reduces muscle tension, and enhances overall well-being.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'At Humo Med clinic, massage therapy is used for wellness, rehabilitation, and stress relief.',
        },
        {
          type: 'title',
          text: 'When is Massage Recommended?',
        },
        {
          type: 'list',
          items: [
            'Lower back and neck pain',
            'Shoulder tension',
            'Sports injuries',
            'Stress and fatigue',
            'Poor blood circulation',
            'Spinal issues',
          ],
        },
        {
          type: 'title',
          text: 'Types of Massage:',
        },
        {
          type: 'list',
          items: [
            'General wellness massage',
            'Medical massage (neurological, orthopedic)',
            'Sports massage',
            'Massage for children',
            'Lymphatic drainage massage',
            'Facial and neck massage',
          ],
        },
        {
          type: 'title',
          text: 'Benefits of Massage:',
        },
        {
          type: 'list',
          items: [
            'Reduces muscle tension',
            'Improves blood circulation',
            'Relieves stress',
            'Reduces inflammation',
            'Boosts immunity',
          ],
        },
        {
          type: 'title',
          text: 'Why Choose Humo Med Massage Therapy?',
        },
        {
          type: 'list',
          items: [
            'Qualified and experienced massage therapists',
            'Individual approach and treatment plans',
            'Hygienic and comfortable environment',
            'High-quality oils and supplies',
            'Peaceful and relaxing atmosphere',
          ],
        },
      ],
    },
  },
  procedure_room: {
    icon: <FaSyringe />,
    title: t('services.procedure_room.title'),
    image: procedureImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Процедурный кабинет — это специально оборудованное медицинское помещение, где проводятся различные лечебные процедуры, инъекции и физиотерапевтические мероприятия.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'В клинике Humo Med процедурный кабинет оснащён современным медицинским оборудованием, а все процедуры выполняются под контролем опытных медсестёр и врачей.',
        },
        {
          type: 'title',
          text: 'Какие услуги предоставляются в процедурном кабинете?',
        },
        {
          type: 'list',
          items: [
            'Инъекции (внутривенные, внутримышечные, подкожные)',
            'Капельницы (системы)',
            'Противовоспалительные процедуры',
            'Лекарственный электрофорез',
            'Обработка и перевязка ран',
            'Зондирование и другие медицинские манипуляции',
          ],
        },
        {
          type: 'title',
          text: 'Наши преимущества:',
        },
        {
          type: 'list',
          items: [
            'Современная и стерильная обстановка',
            'Опытный медицинский персонал',
            'Индивидуальный подход',
            'Быстрые и безболезненные процедуры',
            'Постоянный контроль и гарантия безопасности',
          ],
        },
        {
          type: 'title',
          text: 'Кому рекомендуется?',
        },
        {
          type: 'list',
          items: [
            'При воспалительных заболеваниях',
            'Для облегчения хронических болей',
            'Для общего восстановления организма',
            'Для быстрого усвоения лекарств',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'The treatment room is a specially equipped medical space where various procedures, injections, and physiotherapeutic treatments are performed.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'At Humo Med clinic, the treatment room is equipped with modern medical devices, and all procedures are carried out under the supervision of experienced nurses and doctors.',
        },
        {
          type: 'title',
          text: 'What services are provided in the treatment room?',
        },
        {
          type: 'list',
          items: [
            'Injections (intravenous, intramuscular, subcutaneous)',
            'IV drips (infusions)',
            'Anti-inflammatory treatments',
            'Medicinal electrophoresis',
            'Wound care and bandaging',
            'Probing and other medical manipulations',
          ],
        },
        {
          type: 'title',
          text: 'Our Advantages:',
        },
        {
          type: 'list',
          items: [
            'Modern and sterile environment',
            'Experienced medical staff',
            'Individual approach',
            'Fast and painless procedures',
            'Continuous supervision and safety guarantee',
          ],
        },
        {
          type: 'title',
          text: 'Who is it recommended for?',
        },
        {
          type: 'list',
          items: [
            'For inflammatory diseases',
            'To relieve chronic pain',
            'For overall body recovery',
            'For faster medication absorption',
          ],
        },
      ],
    },
  },
  laboratory: {
    icon: <FaMicroscope />,
    title: t('services.laboratory.title'),
    image: laboratoryImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Лаборатория — это учреждение, где исследуются различные биологические образцы (кровь, моча, кал и другие) для выявления заболеваний, постановки диагноза и контроля лечения.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Лаборатория клиники Humo Med оснащена современным оборудованием и предоставляет результаты с высокой точностью.',
        },
        {
          type: 'title',
          text: 'Основные анализы, проводимые в лаборатории:',
        },
        {
          type: 'list',
          items: [
            'Общий анализ крови',
            'Биохимические анализы',
            'Гормональные исследования',
            'Аллергические тесты',
            'ПЦР (выявление вирусов и бактерий)',
            'Тест на COVID-19',
            'Анализы мочи и кала',
          ],
        },
        {
          type: 'title',
          text: 'Наши преимущества:',
        },
        {
          type: 'list',
          items: [
            'Новейшее оборудование и технологии',
            'Быстрые и достоверные результаты',
            'Опытные лабораторные специалисты',
            'Возможность получения результатов онлайн',
            'Полное соблюдение стандартов стерильности и безопасности',
          ],
        },
        {
          type: 'title',
          text: 'Кому нужны лабораторные услуги?',
        },
        {
          type: 'list',
          items: [
            'Проходящим профилактический осмотр',
            'При необходимости уточнения диагноза',
            'Для контроля результатов до и после лечения',
            'Для выявления причины болезни',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'A laboratory is a facility that examines various biological samples (blood, urine, stool, etc.) to detect diseases, make diagnoses, and monitor treatment processes.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'The Humo Med clinic is equipped with modern laboratory equipment, providing highly accurate test results.',
        },
        {
          type: 'title',
          text: 'Main tests performed in the laboratory:',
        },
        {
          type: 'list',
          items: [
            'Complete blood count (CBC)',
            'Biochemical tests',
            'Hormonal tests',
            'Allergy tests',
            'PCR (for detecting viruses and bacteria)',
            'COVID-19 test',
            'Urine and stool analysis',
          ],
        },
        {
          type: 'title',
          text: 'Our laboratory advantages:',
        },
        {
          type: 'list',
          items: [
            'State-of-the-art equipment and technologies',
            'Fast and reliable results',
            'Experienced laboratory professionals',
            'Online access to test results',
            'Full compliance with hygiene and safety standards',
          ],
        },
        {
          type: 'title',
          text: 'Who needs laboratory services?',
        },
        {
          type: 'list',
          items: [
            'Those undergoing preventive checkups',
            'When diagnosis clarification is needed',
            'To monitor treatment progress before and after',
            'To determine the cause of illness',
          ],
        },
      ],
    },
  },
  operating_room: {
    icon: <FaProcedures />,
    title: t('services.operating_room.title'),
    image: operatingRoomImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Операционная — это специальное медицинское помещение с высоким уровнем стерильности, где проводятся хирургические вмешательства.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Операционная клиники Humo Med соответствует современным стандартам и оснащена передовыми технологиями.',
        },
        {
          type: 'title',
          text: 'Основные преимущества нашей операционной:',
        },
        {
          type: 'list',
          items: [
            'Высокий уровень стерильности и безопасности',
            'Новейшее хирургическое оборудование',
            'Опытные и квалифицированные хирурги',
            'Предоперационное и послеоперационное наблюдение',
            'Обеспечение наркозом при необходимости',
          ],
        },
        {
          type: 'title',
          text: 'Основные виды операций, проводимых в операционной:',
        },
        {
          type: 'list',
          items: [
            'Малые хирургические вмешательства (удаление кожных новообразований, уплотнений)',
            'Гинекологические операции',
            'Проктологические вмешательства',
            'Операции в области ЛОР',
            'Амбулаторные операции (с возможностью быстрого возвращения домой)',
          ],
        },
        {
          type: 'title',
          text: 'Гарантия безопасности:',
        },
        {
          type: 'paragraph',
          text: 'В нашей операционной обеспечены высокий уровень гигиены и дезинфекции, безопасность пациента — наш приоритет.',
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'An operating room is a specialized medical space with high-level sterility where surgical procedures are performed.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'The operating room at Humo Med Clinic meets modern standards and is equipped with advanced technologies.',
        },
        {
          type: 'title',
          text: 'Main advantages of our operating room:',
        },
        {
          type: 'list',
          items: [
            'High level of sterility and safety',
            'Latest surgical equipment',
            'Experienced and qualified surgeons',
            'Pre- and post-operative care services',
            'Anesthesia support when needed',
          ],
        },
        {
          type: 'title',
          text: 'Main procedures performed in the operating room:',
        },
        {
          type: 'list',
          items: [
            'Minor surgical interventions (removal of skin growths, lumps)',
            'Gynecological surgeries',
            'Proctological procedures',
            'ENT (ear, nose, throat) surgeries',
            'Outpatient surgeries (with same-day discharge)',
          ],
        },
        {
          type: 'title',
          text: 'Safety guarantee:',
        },
        {
          type: 'paragraph',
          text: 'Our operating room follows strict hygiene and disinfection protocols, ensuring the highest level of patient safety.',
        },
      ],
    },
  },
  inpatient: {
    icon: <FaBed />,
    title: t('services.inpatient.title'),
    image: inpatientImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Стационарное лечение — это форма терапии, при которой пациенты остаются в клинике на ночь и получают непрерывное медицинское наблюдение и процедуры.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'В клинике Humo Med пациентам в стационаре предоставляются комфортные, безопасные и современные условия.',
        },
        {
          type: 'title',
          text: 'Преимущества стационарного лечения:',
        },
        {
          type: 'list',
          items: [
            'Круглосуточное наблюдение квалифицированных врачей и медсестер',
            'Уютные и комфортабельные палаты',
            'Инфузионная (капельная) терапия при необходимости',
            'Своевременная диагностика и лабораторные исследования',
            'Качественное питание и уход',
          ],
        },
        {
          type: 'title',
          text: 'В стационаре можно пройти лечение по следующим направлениям:',
        },
        {
          type: 'list',
          items: [
            'Терапевтические заболевания',
            'Гинекологические проблемы',
            'ЛОР-заболевания',
            'Неврологические симптомы',
            'Проктологические процедуры',
          ],
        },
        {
          type: 'title',
          text: 'В нашей клинике состояние пациента тщательно отслеживается и разрабатывается индивидуальный план лечения.',
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'Inpatient treatment is a form of care where patients stay overnight in our clinic and receive continuous medical monitoring and therapeutic procedures.',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'At Humo Med Clinic, patients receive comfortable, safe, and modern inpatient services.',
        },
        {
          type: 'title',
          text: 'Advantages of inpatient treatment:',
        },
        {
          type: 'list',
          items: [
            '24/7 monitoring by qualified doctors and nurses',
            'Cozy and comfortable rooms',
            'Infusion (IV drip) therapy when needed',
            'Timely diagnostics and lab tests',
            'Nutritious meals and proper care',
          ],
        },
        {
          type: 'title',
          text: 'Inpatient care is available for the following conditions:',
        },
        {
          type: 'list',
          items: [
            'Internal medicine (therapy)',
            'Gynecological issues',
            'ENT diseases',
            'Neurological symptoms',
            'Proctological procedures',
          ],
        },
        {
          type: 'title',
          text: 'In our clinic, each patient’s condition is closely monitored and treated with an individualized approach.',
        },
      ],
    },
  },
  trauma: {
    icon: <FaUserInjured />,
    title: t('services.trauma.title'),
    image: traumaImage,
    content: {
      uz: [
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
      ru: [
        {
          type: 'paragraph',
          text: 'Травматолог-хирург — специалист по костям, суставам и травмам',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'Травматолог-ортопед — это специалист, который диагностирует и лечит травмы, заболевания костей, суставов и мягких тканей. В клинике "Humo Med" квалифицированные врачи используют современные методы диагностики и индивидуальный подход к каждому пациенту.',
        },
        {
          type: 'title',
          text: 'Причины и факторы риска',
        },
        {
          type: 'paragraph',
          text: 'Переломы, вывихи, спортивные травмы, ДТП или падения дома — всё это причины обратиться к травматологу. У пожилых людей хрупкость костей, вызванная остеопорозом, представляет особую опасность.',
        },
        {
          type: 'title',
          text: 'Основные симптомы:',
        },
        {
          type: 'list',
          items: [
            'Отёк, синяк и боль',
            'Ограниченная или отсутствующая подвижность сустава',
            'Деформация кости',
            'Хруст при движении',
          ],
        },
        {
          type: 'title',
          text: 'Когда нужно обратиться к врачу?',
        },
        {
          type: 'paragraph',
          text: 'Даже лёгкая травма может привести к серьёзным осложнениям, если её не лечить своевременно. Если боль не уходит через 1-2 дня или сустав выглядит неестественно — срочно обратитесь к травматологу клиники "Humo Med".',
        },
        {
          type: 'title',
          text: 'Диагностика и лечение',
        },
        {
          type: 'paragraph',
          text: 'В нашей клинике применяются рентген, УЗИ, МРТ для точной диагностики. Лечение подбирается индивидуально и может включать медикаменты, фиксацию, физиотерапию или хирургическое вмешательство.',
        },
        {
          type: 'title',
          text: 'Почему именно Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Опытные травматологи и ортопеды',
            'Современное диагностическое оборудование',
            'Комфортные и безопасные условия лечения',
            'Удобный подход к каждому пациенту',
            'Реабилитация и наблюдение',
          ],
        },
      ],
      en: [
        {
          type: 'paragraph',
          text: 'Trauma surgeon – a specialist in bones, joints, and injuries',
          bold: true,
        },
        {
          type: 'paragraph',
          text: 'A traumatologist-orthopedist is a specialist who diagnoses and treats physical injuries, bone and joint issues, and soft tissue problems. At Humo Med Clinic, our skilled doctors provide personalized care using advanced diagnostic tools.',
        },
        {
          type: 'title',
          text: 'Causes and Risk Factors',
        },
        {
          type: 'paragraph',
          text: 'Bone fractures, dislocations, sports injuries, car accidents, or household falls may require a visit to a traumatologist. In the elderly, osteoporosis increases the risk of bone fragility.',
        },
        {
          type: 'title',
          text: 'Key Symptoms:',
        },
        {
          type: 'list',
          items: [
            'Swelling, bruising, and pain',
            'Restricted or absent joint movement',
            'Bone deformity',
            'Crackling sound during movement',
          ],
        },
        {
          type: 'title',
          text: 'When to See a Doctor?',
        },
        {
          type: 'paragraph',
          text: 'Even minor injuries can lead to complications if left untreated. If pain persists for more than 1–2 days or the bone/joint looks abnormal, contact a Humo Med traumatologist immediately.',
        },
        {
          type: 'title',
          text: 'Diagnostics and Treatment',
        },
        {
          type: 'paragraph',
          text: 'Our clinic offers precise diagnostics using X-ray, ultrasound, and MRI. Treatment plans are tailored individually and may include medication, splinting, physiotherapy, or surgical intervention.',
        },
        {
          type: 'title',
          text: 'Why Humo Med?',
        },
        {
          type: 'list',
          items: [
            'Experienced traumatologists and orthopedists',
            'Modern diagnostic equipment',
            'Safe and comfortable treatment environment',
            'Patient-friendly approach',
            'Rehabilitation and follow-up care',
          ],
        },
      ],
    },
  },
});

export default servicesData;
