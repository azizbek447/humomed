import qonbosimi from '../assets/images/qonbosimi.png';
import MRI from '../assets/images/img_4.png';
import yangifilyal from '../assets/img/2филиал.png';
import semenar from '../assets/images/img_3.png';
import ultratovush from '../assets/img/New-diagnostic-equipment .png';
import rentgin from '../assets/images/rentgenga.png'

const newServiceData = (t) => ({
  1: {
    title: {
      en: 'New Cardiology Department Opened',
      uz: 'Yangi kardiologiya bo‘limi ochildi',
      ru: 'Открылось новое кардиологическое отделение',
    },
    image: qonbosimi,
    content: {
      en: [
        {
          type: 'paragraph',
          text: 'The opening of a modern cardiology department at our clinic has elevated cardiovascular health services to a new level. This department specializes in early detection, accurate diagnosis, and personalized treatment of heart and vascular diseases. Equipped with the latest medical technologies, the center conducts comprehensive examinations such as ECG, ECHO, stress tests, Holter monitoring, long-term blood pressure monitoring, and lipid profile assessments. This approach enables early detection of subtle changes in heart function and intervention before conditions worsen.',
        },
        {
          type: 'paragraph',
          text: 'The department’s work is centered on personalized medicine principles: each patient is evaluated based on their clinical condition, age, lifestyle, occupational risks, and hereditary factors. The team of doctors—a multidisciplinary group of experienced cardiologists, functional diagnostics specialists, and dietitians—collaborates with the patient in decision-making. When necessary, integrated examinations with related specialties (endocrinology, nephrology, neurology) are organized to comprehensively analyze the chain of factors contributing to heart disease.',
        },
        {
          type: 'paragraph',
          text: 'Prevention is a key focus in our department. Special programs have been introduced for at-risk groups: for patients with arterial hypertension, diabetes, obesity, or smoking, monitoring frequency is individually determined. Patients receive practical recommendations on healthy eating, increasing physical activity, sleep hygiene, and stress management, along with follow-up plans. Additionally, simplified medication protocols, reminder cards for medication adherence, and convenient home-monitoring checklists are provided.',
        },
        {
          type: 'paragraph',
          text: 'Diagnostic rooms are ergonomically designed to ensure patient privacy. Waiting areas are spacious, clean, and well-lit; an electronic queue management system saves time. Test results are stored digitally, allowing precise comparison of dynamics during subsequent visits. Furthermore, remote consultation (telemedicine) channels have been established, providing significant convenience for patients under long-term monitoring.',
        },
        {
          type: 'paragraph',
          text: 'We don’t just treat—we educate and motivate. Open classes dedicated to heart health, small group seminars, and family counseling sessions are held regularly. Doctor-patient collaboration is the cornerstone of effective outcomes. Therefore, our department fosters a culture of answering patient questions thoroughly, explaining decisions in simple language, and maintaining transparency in our approach.',
        },
        {
          type: 'paragraph',
          text: 'The launch of the new cardiology department has positioned our clinic as one of the region’s trusted heart centers. Patients can now access international-standard, highly accurate examinations and individually tailored treatments without traveling far. Our goal is early disease detection, improving quality of life, and maintaining heart health for years to come.',
        },
      ],
      uz: [
        {
          type: 'paragraph',
          text: 'Klinikamizda zamonaviy kardiologiya bo‘limining ochilishi yurak-qon tomir tizimi sog‘lig‘i xizmatlarini yangi darajaga ko‘tardi. Ushbu bo‘lim yurak va qon tomir kasalliklarini erta aniqlash, aniq tashxis qo‘yish va shaxsiylashtirilgan davolashga ixtisoslashgan. Eng so‘nggi tibbiy texnologiyalar bilan jihozlangan markazda EKG, EXO, stress-testlar, Holter monitoringi, uzoq muddatli qon bosimi monitoringi va lipid profilini baholash kabi keng qamrovli tekshiruvlar o‘tkaziladi. Bu yondashuv yurak faoliyatidagi nozik o‘zgarishlarni erta aniqlash va holat yomonlashguncha aralashish imkonini beradi.',
        },
        {
          type: 'paragraph',
          text: 'Bo‘limning ishi shaxsiylashtirilgan tibbiyot tamoyillariga asoslanadi: har bir bemor klinik holati, yoshi, turmush tarzi, kasbiy xavf-xatarlar va irsiy omillarga qarab baholanadi. Tajribali kardiologlar, funksional diagnostika mutaxassislari va dietologlardan iborat ko‘p tarmoqli shifokorlar jamoasi bemor bilan birgalikda qaror qabul qiladi. Zarur bo‘lganda, yurak kasalliklariga olib keluvchi omillar zanjirini keng qamrovli tahlil qilish uchun tegishli mutaxassisliklar (endokrinologiya, nefrologiya, nevrologiya) bilan integratsiyalashgan tekshiruvlar tashkil etiladi.',
        },
        {
          type: 'paragraph',
          text: 'Oldini olish bo‘limimizning asosiy yo‘nalishi hisoblanadi. Xavf guruhidagi bemorlar uchun maxsus dasturlar joriy etilgan: arterial gipertenziya, qandli diabet, semizlik yoki chekish kabi omillar mavjud bo‘lgan bemorlar uchun monitoring chastotasi individual ravishda belgilanadi. Bemorlar sog‘lom ovqatlanish, jismoniy faollikni oshirish, uyqu gigienasi va stressni boshqarish bo‘yicha amaliy tavsiyalar, shuningdek, kuzatuv rejalari oladi. Bundan tashqari, soddalashtirilgan dori-darmon protokollari, dori qabul qilishni eslatuvchi kartalar va uyda monitoring uchun qulay nazorat ro‘yxatlari taqdim etiladi.',
        },
        {
          type: 'paragraph',
          text: 'Diagnostika xonalari bemorlar maxfiyligini ta’minlash uchun ergonomik tarzda loyihalashtirilgan. Kutish joylari keng, toza va yaxshi yoritilgan; elektron navbat boshqaruv tizimi vaqtni tejaydi. Tekshiruv natijalari raqamli shaklda saqlanadi, bu keyingi tashriflarda dinamikani aniq taqqoslash imkonini beradi. Bundan tashqari, uzoq muddatli monitoring ostidagi bemorlar uchun katta qulaylik yaratadigan masofaviy maslahat (telemeditsina) kanallari tashkil etilgan.',
        },
        {
          type: 'paragraph',
          text: 'Biz nafaqat davolaymiz — biz o‘qitamiz va rag‘batlantiramiz. Yurak sog‘lig‘iga bag‘ishlangan ochiq darslar, kichik guruhlar uchun seminarlar va oilaviy maslahat seanslari muntazam ravishda o‘tkaziladi. Shifokor va bemor o‘rtasidagi hamkorlik samarali natijalarning asosidir. Shuning uchun bo‘limimizda bemorlarning savollariga batafsil javob berish, qarorlarni oddiy tilda tushuntirish va yondashuvda shaffoflikni saqlash madaniyati shakllantirilgan.',
        },
        {
          type: 'paragraph',
          text: 'Yangi kardiologiya bo‘limining ishga tushirilishi klinikamizni mintaqadagi ishonchli yurak markazlaridan biriga aylantirdi. Endi bemorlar uzoq safar qilmasdan xalqaro standartlardagi yuqori aniqlikdagi tekshiruvlar va individual ravishda ishlab chiqilgan davolash usullaridan foydalanishlari mumkin. Bizning maqsadimiz — kasallikni erta aniqlash, hayot sifatini yaxshilash va yurak sog‘lig‘ini uzoq yillar davomida saqlash.',
        },
      ],
      ru: [
        {
          type: 'paragraph',
          text: 'Открытие современного кардиологического отделения в нашей клинике вывело услуги по охране здоровья сердечно-сосудистой системы на новый уровень. Это отделение специализируется на раннем выявлении, точной диагностике и индивидуальном лечении заболеваний сердца и сосудов. Центр оснащен новейшими медицинскими технологиями, включая ЭКГ, ЭХО, стресс-тесты, Холтер-мониторинг, длительное наблюдение за артериальным давлением и оценку липидного профиля. Такой подход позволяет выявлять малейшие изменения в работе сердца и принимать меры до усугубления состояния.',
        },
        {
          type: 'paragraph',
          text: 'Работа отделения строится на принципах персонализированной медицины: каждый пациент оценивается с учетом его клинического состояния, возраста, образа жизни, профессиональных рисков и наследственных факторов. Команда врачей — многопрофильная группа, включающая опытных кардиологов, специалистов функциональной диагностики и диетологов, — принимает решения совместно с пациентом. При необходимости организуются интегрированные обследования с привлечением смежных направлений (эндокринология, нефрология, неврология) для полного анализа цепочки факторов, способствующих сердечным заболеваниям.',
        },
        {
          type: 'paragraph',
          text: 'Профилактика занимает важное место в работе отделения. Для групп риска введены специальные программы: при наличии артериальной гипертензии, сахарного диабета, ожирения или курения частота мониторинга определяется индивидуально. Пациенты получают практические рекомендации по здоровому питанию, повышению физической активности, гигиене сна и управлению стрессом, а также планы наблюдения. Кроме того, предоставляются упрощенные протоколы медикаментозной терапии, карты-напоминания для соблюдения режима приема лекарств и удобные чек-листы для домашнего мониторинга.',
        },
        {
          type: 'paragraph',
          text: 'Диагностические кабинеты спроектированы с учетом конфиденциальности пациентов. Зоны ожидания просторные, чистые и светлые; система электронной очереди экономит время. Результаты анализов хранятся в цифровом виде, что позволяет точно сравнивать динамику при последующих визитах. Кроме того, налажены каналы дистанционного консультирования (телемедицина), что особенно удобно для пациентов, находящихся под долгосрочным наблюдением.',
        },
        {
          type: 'paragraph',
          text: 'Мы не только лечим — мы обучаем и мотивируем. Регулярно проводятся открытые занятия по здоровью сердца, семинары для малых групп и семейные консультационные сессии. Сотрудничество врача и пациента — основа эффективных результатов. Поэтому в нашем отделении создана культура подробных ответов на вопросы пациентов, объяснения решений простым языком и сохранения прозрачности подхода.',
        },
        {
          type: 'paragraph',
          text: 'Запуск нового кардиологического отделения сделал нашу клинику одним из надежных сердечных центров региона. Теперь пациенты могут получить обследования и индивидуально разработанное лечение по международным стандартам, не выезжая за пределы региона. Наша цель — раннее выявление заболеваний, улучшение качества жизни и сохранение здоровья сердца на долгие годы.',
        },
      ],
    },
  },

  // 2) New Equipment Arrived
  2: {
    title: {
      en: 'New Generation Equipment for MRI and Ultrasound Arrived',
      uz: 'MRI va ultratovush uchun yangi avlod jihozlari keldi',
      ru: 'Поступило новое поколение оборудования для МРТ и УЗИ',
    },
    image: MRI,
    content: {
      en: [
        {
          type: 'paragraph',
          text: 'Our clinic has launched new-generation magnetic resonance imaging (MRI) and ultrasound (US) equipment to significantly enhance diagnostic capabilities. These devices improve image quality, examination speed, and patient comfort simultaneously. The new MRI platform features high magnetic field stability, noise-reducing acoustic shielding, and optimized protocols for patients sensitive to breath-holding. As a result, high-resolution images can be obtained even for patients with respiratory difficulties or mobility limitations.',
        },
        {
          type: 'paragraph',
          text: 'The ultrasound system supports 3D/4D real-time reconstruction, Doppler flow analysis, and elastography. Elastography aids in assessing tissue stiffness, facilitating early differentiation of tumors and fibrotic processes. The Doppler mode accurately displays blood flow velocity and direction, enhancing diagnostic value in cardiovascular, abdominal, gynecological, and urological examinations.',
        },
        {
          type: 'paragraph',
          text: 'The new technologies ensure not only accuracy but also safety. Protocols are redesigned to minimize patient exposure, shorten examination times, and provide a painless experience. Special comfortable beds, stabilizers, and visual distraction modules are available for children and elderly patients. This reduces patient discomfort, resulting in fewer artifacts and clearer images.',
        },
        {
          type: 'paragraph',
          text: 'Staff training was conducted alongside the technological upgrade: radiologists and ultrasound specialists underwent training courses by the manufacturer, followed by in-house masterclasses on internal protocols. This process standardized diagnostic sequences, simplified report language, and improved integration with clinical departments. Reports and images are stored in a digital archive via PACS, ensuring fast and secure sharing among doctors.',
        },
        {
          type: 'paragraph',
          text: 'This upgrade brings practical benefits to patients: shorter waiting times, faster results, and reduced need for re-examinations. High-resolution imaging plays a critical role in oncology monitoring, orthopedic injuries, neurodiagnostics, and pregnancy monitoring, enabling precise treatment planning. Our diagnostic department has thus become a reliable, patient-centered center meeting international standards.',
        },
        {
          type: 'paragraph',
          text: 'We view equipment upgrades as an ongoing process: continuous collaboration with service providers, preventive maintenance, and timely software updates ensure system reliability and consistently high-quality results. Most importantly, our patients benefit from accuracy, speed, and convenience.',
        },
      ],
      uz: [
        {
          type: 'paragraph',
          text: 'Klinikamiz diagnostika imkoniyatlarini sezilarli darajada oshirish uchun yangi avlod magnit-rezonans tomografiya (MRI) va ultratovush (US) jihozlarini ishga tushirdi. Ushbu qurilmalar tasvir sifatini, tekshiruv tezligini va bemor qulayligini bir vaqtning o‘zida yaxshilaydi. Yangi MRI platformasi yuqori magnit maydon barqarorligi, shovqinni kamaytiruvchi akustik himoya va nafas tutishga sezgir bemorlar uchun optimallashtirilgan protokollarga ega. Natijada, nafas olish qiyinchiliklari yoki harakat cheklovlari bo‘lgan bemorlarda ham yuqori aniqlikdagi tasvirlar olish mumkin.',
        },
        {
          type: 'paragraph',
          text: 'Ultratovush tizimi 3D/4D real vaqtda rekonstruksiyani, Doppler oqim tahlilini va elastografiyani qo‘llab-quvvatlaydi. Elastografiya to‘qimalarning qattiqligini baholashda yordam beradi va o‘sma va fibrotik jarayonlarni erta farqlashni osonlashtiradi. Doppler rejimi qon oqimining tezligi va yo‘nalishini aniq ko‘rsatadi, bu yurak-qon tomir tizimi, qorin bo‘shlig‘i, ginekologik va urologik tekshiruvlarda diagnostik ahamiyatni oshiradi.',
        },
        {
          type: 'paragraph',
          text: 'Yangi texnologiyalar nafaqat aniqlikni, balki xavfsizlikni ham ta’minlaydi. Protokollar bemor ta’sirini minimallashtirish, tekshiruv vaqtini qisqartirish va og‘riqsiz tajriba taqdim etish uchun qayta ishlab chiqilgan. Bolalar va keksa yoshdagi bemorlar uchun maxsus qulay yotoqlar, stabilizatorlar va vizual chalg‘itish modullari mavjud. Bu bemor noqulayligini kamaytiradi, natijada artefaktlar kamayadi va aniqroq tasvirlar olinadi.',
        },
        {
          type: 'paragraph',
          text: 'Texnologik yangilanish bilan birga kadrlar tayyorlandi: radiologlar va ultratovush mutaxassislari ishlab chiqaruvchi tomonidan o‘quv kurslaridan o‘tdi, so‘ngra ichki protokollar bo‘yicha ichki master-klasslar o‘tkazildi. Bu jarayon diagnostika ketma-ketligini standartlashtirdi, hisobot tilini soddalashtirdi va klinik bo‘limlar bilan integratsiyani yaxshiladi. Hisobotlar va tasvirlar PACS orqali raqamli arxivda saqlanadi, bu shifokorlar o‘rtasida tez va xavfsiz almashishni ta’minlaydi.',
        },
        {
          type: 'paragraph',
          text: 'Ushbu yangilanish bemorlarga amaliy foyda keltiradi: tekshiruv uchun navbatlar qisqaradi, natijalar tezroq tayyorlanadi va qayta tekshiruvlar zarurati minimallashtiriladi. Yuqori aniqlikdagi tasvirlar onkologik monitoring, ortopedik jarohatlar, neyrodagnostika va homiladorlik monitoringida muhim rol o‘ynaydi, bu aniq davolash rejalashtirish imkonini beradi. Diagnostika bo‘limimiz shu tariqa xalqaro standartlarga mos keladigan ishonchli, bemorga yo‘naltirilgan markazga aylandi.',
        },
        {
          type: 'paragraph',
          text: 'Biz jihozlarni yangilashni doimiy jarayon sifatida ko‘ramiz: xizmat ko‘rsatuvchi provayderlar bilan doimiy hamkorlik, profilaktik texnik xizmat ko‘rsatish va dasturiy ta’minotni o‘z vaqtida yangilash tizimning ishonchliligini va doimiy ravishda yuqori sifatli natijalarni ta’minlaydi. Eng muhimi, bemorlarimiz aniqlik, tezlik va qulaylikdan foyda ko‘radi.',
        },
      ],
      ru: [
        {
          type: 'paragraph',
          text: 'Наша клиника запустила оборудование нового поколения для магнитно-резонансной томографии (МРТ) и ультразвукового исследования (УЗИ), чтобы значительно повысить диагностические возможности. Эти устройства одновременно улучшают качество изображения, скорость обследования и комфорт пациента. Новая платформа МРТ обладает высокой стабильностью магнитного поля, акустической защитой для снижения шума и оптимизированными протоколами для пациентов, чувствительных к задержке дыхания. Это позволяет получать изображения высокого разрешения даже у пациентов с затруднением дыхания или ограничением подвижности.',
        },
        {
          type: 'paragraph',
          text: 'Система УЗИ поддерживает реконструкцию в реальном времени в режимах 3D/4D, анализ кровотока по Допплеру и эластографию. Эластография помогает оценивать жесткость тканей, что способствует раннему различению опухолей и фиброзных процессов. Режим Допплера точно отображает скорость и направление кровотока, повышая диагностическую ценность при обследованиях сердечно-сосудистой системы, брюшной полости, гинекологических и урологических исследований.',
        },
        {
          type: 'paragraph',
          text: 'Новые технологии обеспечивают не только точность, но и безопасность. Протоколы переработаны для минимизации дозы облучения, сокращения времени обследования и обеспечения безболезненных условий. Для детей и пожилых пациентов предусмотрены специальные удобные кровати, стабилизаторы и модули визуального отвлечения. Это снижает дискомфорт пациентов, что приводит к уменьшению артефактов и получению более четких изображений.',
        },
        {
          type: 'paragraph',
          text: 'Подготовка кадров проводилась параллельно с технологическим обновлением: радиологи и специалисты УЗИ прошли обучающие курсы от производителя, а затем внутренние мастер-классы по внутренним протоколам. Этот процесс позволил стандартизировать последовательность диагностики, упростить язык заключений и улучшить интеграцию с клиническими отделениями. Заключения и изображения хранятся в цифровом архиве через PACS, обеспечивая быструю и безопасную передачу между врачами.',
        },
        {
          type: 'paragraph',
          text: 'Это обновление приносит практическую пользу пациентам: сокращаются очереди на обследование, результаты готовятся быстрее, а необходимость повторных обследований минимизируется. Изображения высокого разрешения играют ключевую роль в онкологическом наблюдении, ортопедических травмах, нейродиагностике и мониторинге беременности, позволяя точно планировать лечение. Таким образом, наш диагностический отдел стал надежным центром, ориентированным на пациента и соответствующим международным стандартам.',
        },
        {
          type: 'paragraph',
          text: 'Мы рассматриваем обновление техники как непрерывный процесс: постоянное сотрудничество с сервисными службами, профилактические осмотры и своевременные обновления программного обеспечения гарантируют стабильность системы и неизменно высокое качество результатов. Главное — наши пациенты выигрывают в точности, скорости и удобстве.',
        },
      ],
    },
  },

  // 3) Medical Seminar Held
  4: {
    title: {
      en: 'International Medical Seminar Held',
      uz: 'Xalqaro tibbiy seminar o‘tkazildi',
      ru: 'Проведен международный медицинский семинар',
    },
    image: semenar,
    content: {
      en: [
        {
          type: 'paragraph',
          text: 'Our clinic hosted a large-scale international medical seminar. The event was attended by professors from foreign universities and clinics, practicing doctors, and local industry leaders. The goal was to find modern solutions to pressing clinical issues, discuss new diagnostic and treatment approaches, and implement them swiftly into practice. The seminar program covered cardiology, oncology, anesthesiology-critical care, and laboratory medicine.',
        },
        {
          type: 'paragraph',
          text: 'The lecture block addressed topics such as individualized therapy protocols for heart failure, minimally invasive techniques, postoperative pain management, and pharmacoeconomic analysis in pharmacotherapy. Additionally, genetic screening and biomarker-based early cancer detection, along with digital algorithms for assessing treatment response, were presented. Participants analyzed decision-making processes using real clinical cases, reinforcing practical skills.',
        },
        {
          type: 'paragraph',
          text: 'Interactive workshops included elastography in ultrasound, differential analysis of ECG rhythm disorders, and team-based practice with simulators for critical care scenarios and rapid response algorithms. These sessions enhanced not only individual skills but also interdisciplinary team communication, task delegation, and leadership abilities.',
        },
        {
          type: 'paragraph',
          text: 'During the seminar, memoranda were signed for scientific collaboration: agreements were reached on data exchange, joint clinical research, and resident exchange programs. These agreements accelerate knowledge flow, harmonize methodologies, and ultimately improve the quality of patient care. At the conclusion, participants received certificates, and the best clinical case presentations were recognized.',
        },
        {
          type: 'paragraph',
          text: 'Such seminars are strategically important for our clinic: they facilitate updating internal protocols, standardizing report language, measuring performance indicators, and enhancing quality management systems. Most importantly, our doctors can compare their expertise to international standards, enabling rapid and informed implementation of changes. Patients benefit from faster, more accurate, and safer medical care.',
        },
        {
          type: 'paragraph',
          text: 'Based on the seminar outcomes, educational content will be prepared and shared with the public through open classes and online webinars. This initiative promotes a culture of health maintenance, strengthens preventive approaches, and reduces delayed medical consultations.',
        },
      ],
      uz: [
        {
          type: 'paragraph',
          text: 'Klinikamizda katta miqyosli xalqaro tibbiy seminar o‘tkazildi. Tadbirda xorijiy universitetlar va klinikalardan professorlar, amaliyotchi shifokorlar va mahalliy soha yetakchilari ishtirok etdi. Maqsad dolzarb klinik muammolarga zamonaviy yechimlar topish, yangi diagnostika va davolash usullarini muhokama qilish va ularni tezda amaliyotga joriy etish edi. Seminar dasturi kardiologiya, onkologiya, anesteziologiya-reanimatologiya va laboratoriya tibbiyotini qamrab oldi.',
        },
        {
          type: 'paragraph',
          text: 'Lektsiyalar blokida yurak yetishmovchiligi uchun shaxsiylashtirilgan davolash protokollari, minimal invaziv usullar, operatsiyadan keyingi og‘riqni boshqarish va farmakoterapiyada farmakoekonomik tahlil kabi mavzular muhokama qilindi. Bundan tashqari, genetik skrining va biomarkerga asoslangan saratonni erta aniqlash, shuningdek davolash javobini baholash uchun raqamli algoritmlar taqdim etildi. Ishtirokchilar real klinik holatlar misolida qaror qabul qilish jarayonlarini tahlil qilib, amaliy ko‘nikmalarini mustahkamladilar.',
        },
        {
          type: 'paragraph',
          text: 'Interaktiv master-klasslarda ultratovushda elastografiya, EKG ritm buzilishlarining differensial tahlili va kritik holatlar va tezkor javob algoritmlari uchun simulyatorlar bilan jamoaviy amaliyot o‘tkazildi. Ushbu seanslar nafaqat individual ko‘nikmalarni, balki fanlararo jamoa muloqotini, vazifalarni taqsimlash va yetakchilik qobiliyatlarini rivojlantirdi.',
        },
        {
          type: 'paragraph',
          text: 'Seminar davomida ilmiy hamkorlik uchun memorandumlar imzolandi: ma’lumotlar almashinuvi, qo‘shma klinik tadqiqotlar va rezidentlar almashinuv dasturlari bo‘yicha kelishuvlarga erishildi. Ushbu kelishuvlar bilimlar oqimini tezlashtiradi, metodologiyalarni uyg‘unlashtiradi va oxir-oqibat bemorlarga ko‘rsatiladigan xizmat sifatini oshiradi. Yakunida ishtirokchilarga sertifikatlar topshirildi va eng yaxshi klinik holat taqdimotlari e’tirof etildi.',
        },
        {
          type: 'paragraph',
          text: 'Bunday seminarlar klinikamiz uchun strategik ahamiyatga ega: ular ichki protokollarni yangilash, hisobot tilini standartlashtirish, ishlash ko‘rsatkichlarini o‘lchash va sifat boshqaruvi tizimlarini takomillashtirishga yordam beradi. Eng muhimi, shifokorlarimiz o‘z tajribalarini xalqaro standartlar bilan solishtirishi mumkin, bu o‘zgarishlarni tez va ongli ravishda joriy etish imkonini beradi. Bemorlar tezroq, aniqroq va xavfsizroq tibbiy yordamdan foyda ko‘radi.',
        },
        {
          type: 'paragraph',
          text: 'Seminar natijalariga asoslanib, ochiq darslar va onlayn vebinarlar orqali jamoatchilikka ta’lim mazmuni tayyorlanadi va tarqatiladi. Ushbu tashabbus sog‘liqni saqlash madaniyatini targ‘ib qiladi, profilaktik yondashuvlarni mustahkamlaydi va kechiktirilgan tibbiy murojaatlarni kamaytiradi.',
        },
      ],
      ru: [
        {
          type: 'paragraph',
          text: 'В нашей клинике прошел масштабный международный медицинский семинар. В мероприятии приняли участие профессора зарубежных университетов и клиник, практикующие врачи и местные лидеры отрасли. Целью было поиск современных решений актуальных клинических проблем, обсуждение новых подходов к диагностике и лечению, а также их оперативное внедрение в практику. Программа семинара охватила кардиологию, онкологию, анестезиологию-реаниматологию и лабораторную медицину.',
        },
        {
          type: 'paragraph',
          text: 'В блоке лекций были рассмотрены такие темы, как индивидуальные протоколы терапии при сердечной недостаточности, минимально инвазивные методы, управление послеоперационной болью и фармакоэкономический анализ в фармакотерапии. Также были представлены генетический скрининг и раннее выявление рака на основе биомаркеров, а также цифровые алгоритмы для оценки ответа на лечение. Участники анализировали процесс принятия решений на примерах реальных клинических случаев, что укрепило практические навыки.',
        },
        {
          type: 'paragraph',
          text: 'Интерактивные мастер-классы включали эластографию в УЗИ, дифференциальный анализ нарушений ритма на ЭКГ, а также тренировки командной работы и быстрых алгоритмов в реанимационных ситуациях с использованием симуляторов. Эти занятия развивали не только индивидуальные навыки, но и междисциплинарное взаимодействие, распределение задач и лидерские качества.',
        },
        {
          type: 'paragraph',
          text: 'В ходе семинара были подписаны меморандумы о научном сотрудничестве: достигнуты договоренности об обмене данными, совместных клинических исследованиях и программах обмена резидентами. Эти соглашения ускоряют поток знаний, гармонизируют методики и в конечном итоге повышают качество помощи пациентам. По итогам семинара участникам были вручены сертификаты, а лучшие клинические прецеденты были отмечены наградами.',
        },
        {
          type: 'paragraph',
          text: 'Такие семинары имеют стратегическое значение для нашей клиники: они способствуют обновлению внутренних протоколов, стандартизации языка заключений, измерению показателей и совершенствованию системы управления качеством. Главное — наши врачи могут сравнить свой опыт с международными стандартами, что позволяет быстро и осознанно внедрять изменения. Пациенты получают более быструю, точную и безопасную медицинскую помощь.',
        },
        {
          type: 'paragraph',
          text: 'По итогам семинара будет подготовлен просветительский контент, который будет передан населению через открытые занятия и онлайн-вебинары. Эта инициатива способствует повышению культуры сохранения здоровья, укреплению профилактических подходов и снижению числа запоздалых обращений.',
        },
      ],
    },
  },

  // 4) New Branch Opened
  3: {
    title: {
      en: 'New Branch Opened in Tashkent',
      uz: 'Toshkentda yangi filial ochildi',
      ru: 'Открылся новый филиал в Ташкенте',
    },
    image: yangifilyal,
    content: {
      en: [
        {
          type: 'paragraph',
          text: 'Our clinic network has expanded with the opening of a modern, spacious, and well-lit branch in Tashkent. The branch offers services in general therapy, cardiology, ultrasound, laboratory, dentistry, and pediatrics. Electronic queue management, online registration, and clean, comfortable waiting areas create a more pleasant environment for patients.',
        },
        {
          type: 'paragraph',
          text: 'All rooms are equipped with modern devices, with digital archiving and teleconsultation capabilities available. Our staff is experienced, communicates courteously with patients, and prioritizes an individualized approach. The new branch brings high-quality medical care closer to the community.',
        },
        {
          type: 'list',
          items: [
            'Wide range of diagnostics',
            'Remote consultation and follow-up',
            'Special comfortable conditions for children',
            'Convenient location and transport access',
          ],
        },
        {
          type: 'paragraph',
          text: 'The launch of the branch has expanded service coverage, increased efficiency, and created equal opportunities across the region. We remain committed to quality, transparency, and collaboration.',
        },
      ],
      uz: [
        {
          type: 'paragraph',
          text: 'Klinikamiz tarmog‘i Toshkentda zamonaviy, keng va yaxshi yoritilgan yangi filialning ochilishi bilan kengaydi. Filial umumiy terapiya, kardiologiya, ultratovush, laboratoriya, stomatologiya va pediatriya xizmatlarini taklif etadi. Elektron navbat boshqaruvi, onlayn ro‘yxatdan o‘tish va toza, qulay kutish joylari bemorlar uchun yanada yoqimli muhit yaratadi.',
        },
        {
          type: 'paragraph',
          text: 'Barcha xonalar zamonaviy qurilmalar bilan jihozlangan bo‘lib, raqamli arxivlash va telekonsultatatsiya imkoniyatlari mavjud. Xodimlarimiz tajribali, bemorlar bilan xushmuomala muloqot qiladi va shaxsiylashtirilgan yondashuvni birinchi o‘ringa qo‘yadi. Yangi filial yuqori sifatli tibbiy yordamni jamiyatga yanada yaqinlashtiradi.',
        },
        {
          type: 'list',
          items: [
            'Keng ko‘lamli diagnostika',
            'Masofaviy maslahat va kuzatuv',
            'Bolalar uchun maxsus qulay sharoitlar',
            'Qulay joylashuv va transport qulayligi',
          ],
        },
        {
          type: 'paragraph',
          text: 'Filialning ochilishi xizmatlar qamrovini kengaytirdi, samaradorlikni oshirdi va mintaqada teng imkoniyatlar yaratdi. Biz sifat, shaffoflik va hamkorlik tamoyillariga sodiq qolamiz.',
        },
      ],
      ru: [
        {
          type: 'paragraph',
          text: 'Сеть нашей клиники расширилась с открытием нового современного, просторного и светлого филиала в Ташкенте. Филиал предлагает услуги по общей терапии, кардиологии, УЗИ, лабораторной диагностике, стоматологии и педиатрии. Электронное управление очередями, онлайн-регистрация и чистые, удобные зоны ожидания создают более комфортную среду для пациентов.',
        },
        {
          type: 'paragraph',
          text: 'Все кабинеты оснащены современным оборудованием, доступны цифровое архивирование и телеконсультации. Наш персонал опытен, вежливо общается с пациентами и считает индивидуальный подход приоритетом. Новый филиал делает высококачественную медицинскую помощь ближе к населению.',
        },
        {
          type: 'list',
          items: [
            'Широкий спектр диагностики',
            'Дистанционные консультации и обратная связь',
            'Особые комфортные условия для детей',
            'Удобное расположение и транспортная доступность',
          ],
        },
        {
          type: 'paragraph',
          text: 'Открытие филиала расширило охват услуг, повысило оперативность и создало равные возможности в регионе. Мы остаемся верны принципам качества, прозрачности и сотрудничества.',
        },
      ],
    },
  },

  // 5) 24/7 Services and Night Discounts
  5: {
    title: {
      en: '24/7 Ultrasound, Therapist-Cardiologist, and Procedures: 20% Discount from 00:00 to 07:00',
      uz: '24/7 Ultratovush, terapevt-kardiolog va protseduralar: 00:00 dan 07:00 gacha 20% chegirma',
      ru: 'Круглосуточные УЗИ, терапевт-кардиолог и процедуры: 20% скидка с 00:00 до 07:00',
    },
    image: ultratovush,
    content: {
      en: [
        {
          type: 'paragraph',
          text: 'Ultrasound, therapist-cardiologist, and procedural services are now available 24 hours a day. Patients can access high-quality care even on weekends and holidays. This is a significant convenience for those with busy schedules or working night shifts.',
        },
        {
          type: 'paragraph',
          text: 'A 20% discount applies to these services from 00:00 to 07:00, allowing patients to receive prompt examinations at a lower cost. Queues are short, and examinations are conducted quickly and accurately.',
        },
        {
          type: 'list',
          items: [
            'Rapid response to emergencies',
            'Electronic queue and online registration',
            'Digital archiving of results',
            'Remote feedback and follow-up consultations',
          ],
        },
        {
          type: 'paragraph',
          text: 'Our goal is constant availability, efficiency, and reliability. Don’t delay your health: we’re open all night.',
        },
      ],
      uz: [
        {
          type: 'paragraph',
          text: 'Ultratovush, terapevt-kardiolog va protsedura xizmatlari endi kuniga 24 soat mavjud. Bemorlar dam olish kunlari va bayramlarda ham yuqori sifatli yordam olishlari mumkin. Bu band jadvalga ega yoki tungi smenada ishlaydiganlar uchun katta qulaylikdir.',
        },
        {
          type: 'paragraph',
          text: 'Ushbu xizmatlarga 00:00 dan 07:00 gacha 20% chegirma qo‘llaniladi, bu bemorlarga tez tekshiruvlarni arzonroq narxda olish imkonini beradi. Navbatlar qisqa, tekshiruvlar esa tez va aniq o‘tkaziladi.',
        },
        {
          type: 'list',
          items: [
            'Favqulodda holatlarga tezkor javob',
            'Elektron navbat va onlayn ro‘yxatdan o‘tish',
            'Natijalarni raqamli arxivlash',
            'Masofaviy fikr-mulohaza va keyingi maslahatlar',
          ],
        },
        {
          type: 'paragraph',
          text: 'Bizning maqsadimiz doimiy mavjudlik, samaradorlik va ishonchlilikdir. Sog‘lig‘ingizni kechiktirmang: biz tun bo‘yi ochiqmiz.',
        },
      ],
      ru: [
        {
          type: 'paragraph',
          text: 'УЗИ, услуги терапевта-кардиолога и процедуры теперь доступны круглосуточно. Пациенты могут получить высококачественную помощь даже в выходные и праздничные дни. Это большое удобство для тех, у кого плотный график или кто работает в ночные смены.',
        },
        {
          type: 'paragraph',
          text: 'С 00:00 до 07:00 на эти услуги действует скидка 20%, что позволяет пациентам пройти оперативное обследование по более низкой стоимости. Очереди минимальны, а обследования проводятся быстро и точно.',
        },
        {
          type: 'list',
          items: [
            'Быстрый ответ на неотложные случаи',
            'Электронная очередь и онлайн-регистрация',
            'Цифровое архивирование результатов',
            'Дистанционная обратная связь и повторные консультации',
          ],
        },
        {
          type: 'paragraph',
          text: 'Наша цель — постоянная доступность, оперативность и надежность. Не откладывайте заботу о здоровье: мы открыты всю ночь.',
        },
      ],
    },
  },

  // 6) Weekly Bonus – Discounts for Active Clients
  6: {
    title: {
      en: 'Mobile X-ray and Fluorography – Safe Diagnostics at Your Home 24/7',
      uz: 'Mobil rentgen va flyurografiya – uyingizda xavfsiz tashxis 24/7',
      ru: 'Мобильный рентген и флюорография — безопасная диагностика у вас дома 24/7',
    },
    image: rentgin,
    content: {
      en: [
        {
          type: 'paragraph',
          text: 'Skip the clinic queues — we bring cutting-edge diagnostic services straight to your home. Our mobile X-ray and fluorography services operate 24/7 to ensure you get timely, safe, and precise diagnostics when you need it most.',
        },
        {
          type: 'paragraph',
          text: 'Our certified medical team uses advanced nano-tube digital X-ray equipment to provide high-resolution images with minimal radiation exposure. Whether it’s a preventive scan or an urgent need — we’ve got you covered.',
        },
        {
          type: 'list',
          items: [
            'Available 24/7 – anytime, anywhere',
            'Nano-tube digital X-ray – safe and ultra-accurate',
            'Fluorography – fast and preventive lung screening',
            'Comfort of diagnostics at your own home',
            'Flexible pricing – fair and agreed upon in advance',
          ],
        },
        {
          type: 'paragraph',
          text: 'To schedule your home visit, just give us a call:',
        },
        {
          type: 'paragraph',
          text: '+99897 424 54 42  |  +99897 779 54 42',
        },
      ],
      uz: [
        {
          type: 'paragraph',
          text: 'Navbat kutishsiz tashxis – zamonaviy tibbiy xizmatlar endi bevosita uyingizda! 24/7 faoliyat yurituvchi mobil rentgen va flyurografiya xizmati orqali siz istalgan vaqtda xavfsiz va aniq tekshiruvdan o‘ta olasiz.',
        },
        {
          type: 'paragraph',
          text: 'Malakali shifokorlarimiz zamonaviy nano-trubkali raqamli rentgen uskunalaridan foydalanadi. Ular yuqori aniqlikdagi tasvirlarni minimal nurlanish bilan taqdim etadi. Profilaktik tekshiruvmi yoki shoshilinch yordammi – biz har doim tayyormiz.',
        },
        {
          type: 'list',
          items: [
            '24/7 xizmat – kunu tun, istalgan vaqtda',
            'Nano-trubkali raqamli rentgen – xavfsiz va aniq tashxis',
            'Flyuorografiya – o‘pka uchun tezkor profilaktik tekshiruv',
            'Uyingizda qulay va ishonchli xizmat',
            'Narxlar – oldindan kelishilgan, halol va shaffof',
          ],
        },
        {
          type: 'paragraph',
          text: 'Xizmatga buyurtma berish uchun bizga qo‘ng‘iroq qiling:',
        },
        {
          type: 'paragraph',
          text: '+99897 424 54 42  |  +99897 779 54 42',
        },
      ],
      ru: [
        {
          type: 'paragraph',
          text: 'Больше никаких очередей в клиниках — теперь передовые диагностические услуги доступны прямо у вас дома! Мы предоставляем мобильные рентген и флюорографию круглосуточно, 24/7.',
        },
        {
          type: 'paragraph',
          text: 'Наши сертифицированные врачи используют современное цифровое рентген-оборудование с нанотрубками, которое обеспечивает высокую точность изображений при минимальном облучении. Нужна профилактика или срочная диагностика — мы рядом.',
        },
        {
          type: 'list',
          items: [
            'Круглосуточно — 24/7 в любое время и день',
            'Цифровой рентген на нанотрубках — безопасно и точно',
            'Флюорография — экспресс-проверка состояния легких',
            'Удобство и комфорт прямо у вас дома',
            'Цены — честные и согласованные заранее',
          ],
        },
        {
          type: 'paragraph',
          text: 'Чтобы заказать выезд, просто позвоните нам:',
        },
        {
          type: 'paragraph',
          text: '+99897 424 54 42  |  +99897 779 54 42',
        },
      ],
    },
  },
});

export default newServiceData;

export class clinicNewsData {}
