import { Language, Scenario, Review } from '../types';

export const SCENARIO_IMAGES = {
  wax1: '/src/assets/images/wax_figures_museum_1791370475293.jpg',
  wax2: '/src/assets/images/wax_figures_collection_1791370493312.jpg',
  souls: '/src/assets/images/forgotten_souls_mansion_1791370514923.jpg',
  breathe: '/src/assets/images/dont_breathe_chamber_1791370527554.jpg',
  hero: '/src/assets/images/hero_quest13_1791370458952.jpg',
  location: '/src/assets/images/location_map_tactical_1791370544733.jpg',
};

export const CONTACT_INFO = {
  phone: '+998(98) 808 55 88',
  phoneClean: '+998988085588',
  instagram: '13quest_',
  instagramUrl: 'https://instagram.com/13quest_',
  telegram: 't.me/quest13uz',
  telegramUrl: 'https://t.me/quest13uz',
  address: 'ул. Бобура, 73/А',
  city: 'Ташкент',
  yandexUrl: 'https://yandex.ru/maps/?text=Ташкент+улица+Бобура+73А',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tashkent+Bobur+street+73A',
  twoGisUrl: 'https://2gis.uz/tashkent/search/Ташкент%20улица%20Бобура%2073А',
};

export const TRANSLATIONS: Record<Language, {
  nav: {
    home: string;
    scenarios: string;
    about: string;
    specs: string;
    reviews: string;
    location: string;
    bookBtn: string;
    telegramBtn: string;
  };
  hero: {
    badge: string;
    titleFirst: string;
    titleHighlight: string;
    proGreetingTitle: string;
    proGreetingText: string;
    subtitle: string;
    bookNow: string;
    exploreScenarios: string;
    telegramQuick: string;
    soundOn: string;
    soundOff: string;
  };
  stats: {
    title: string;
    subtitle: string;
    areaValue: string;
    areaLabel: string;
    areaDesc: string;
    timeValue: string;
    timeLabel: string;
    timeDesc: string;
    playersValue: string;
    playersLabel: string;
    playersDesc: string;
    logicValue: string;
    logicLabel: string;
    logicDesc: string;
  };
  scenariosSection: {
    tag: string;
    title: string;
    subtitle: string;
    fearLevel: string;
    logicLevel: string;
    duration: string;
    playersCount: string;
    bookScenario: string;
    detailsBtn: string;
    quoteLabel: string;
  };
  scenariosList: Scenario[];
  features: {
    tag: string;
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      desc: string;
      iconName: string;
    }>;
  };
  reviewsSection: {
    tag: string;
    title: string;
    subtitle: string;
    leaveReviewBtn: string;
    ratingAverage: string;
    reviewsCount: string;
    verifiedPlayer: string;
    modalTitle: string;
    modalDesc: string;
    nameLabel: string;
    namePlaceholder: string;
    ratingLabel: string;
    scenarioLabel: string;
    commentLabel: string;
    commentPlaceholder: string;
    submitBtn: string;
    cancelBtn: string;
    successMessage: string;
  };
  locationSection: {
    tag: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    addressValue: string;
    metroLabel: string;
    metroValue: string;
    hoursLabel: string;
    hoursValue: string;
    phoneLabel: string;
    telegramLabel: string;
    instagramLabel: string;
    openInYandex: string;
    openInGoogle: string;
    openIn2Gis: string;
    directCall: string;
  };
  bookingModal: {
    title: string;
    subtitle: string;
    name: string;
    phone: string;
    scenario: string;
    date: string;
    timeSlot: string;
    players: string;
    contactLevel: string;
    contactLevels: {
      light: string;
      medium: string;
      hard: string;
    };
    sendTelegram: string;
    callDirect: string;
    note: string;
    close: string;
  };
  footer: {
    tagline: string;
    rights: string;
    warning: string;
  };
}> = {
  ru: {
    nav: {
      home: 'Главная',
      scenarios: 'Сценарии',
      about: 'О квесте',
      specs: 'Масштаб',
      reviews: 'Отзывы',
      location: 'Локация & Контакты',
      bookBtn: 'Забронировать',
      telegramBtn: 'Telegram',
    },
    hero: {
      badge: 'ЭПИЦЕНТР ХОРРОРА В ТАШКЕНТЕ • 700 М²',
      titleFirst: 'ПЕРЕСТУПИ ЧЕРТУ СТРАХА В',
      titleHighlight: 'QUEST 13',
      proGreetingTitle: '«Добро пожаловать в реальность, где ваши страхи оживают...»',
      proGreetingText: 'Вы стоите перед дверями крупнейшего хоррор-пространства Ташкента. Здесь стирается грань между иллюзией и первобытным инстинктом самосохранения. QUEST 13 — это не театральное шоу, а испытание вашего разума, хладнокровия и доверия к своей команде. Двери закроются на замок, часы начнут обратный отсчёт, и единственный способ спастись — разгадать мрачную тайну до того, как тьма поглотит вас целиком.',
      subtitle: '700 м² леденящего ужаса, кинематографические декорации, авторские логические головоломки и профессиональные актёры.',
      bookNow: 'Забронировать игру',
      exploreScenarios: 'Выбрать сценарий',
      telegramQuick: 'Написать в Telegram',
      soundOn: 'Атмосферный звук вкл',
      soundOff: 'Включить звук',
    },
    stats: {
      title: 'ЦИФРЫ И МАСШТАБ СТРАХА',
      subtitle: 'Мы создали локацию, не имеющую аналогов в Узбекистане',
      areaValue: '700 м²',
      areaLabel: 'Масштаб игровой зоны',
      areaDesc: 'Двухэтажный лабиринт страха с множеством потайных комнат, тоннелей и секретных переходов.',
      timeValue: '1 – 1.5 ч',
      timeLabel: 'Время прохождения игры',
      timeDesc: '60–90 минут непрерывного адреналина, где каждая секунда решает вашу судьбу.',
      playersValue: '4 – 16',
      playersLabel: 'Количество игроков',
      playersDesc: 'Идеальный формат как для сплочённой команды друзей, так и для больших шумных компаний.',
      logicValue: 'Логические задания',
      logicLabel: 'Интеллект под давлением',
      logicDesc: 'Сложные механизмы, шифры и авторские головоломки, которые нужно решать в обстановке стресса.',
    },
    scenariosSection: {
      tag: '4 УНИКАЛЬНЫХ СЮЖЕТА',
      title: 'ВЫБЕРИТЕ СВОЙ КОШМАР',
      subtitle: 'Каждый сценарий — это отдельный кинематографический мир с погружением на 100%',
      fearLevel: 'Уровень страха',
      logicLevel: 'Сложность логики',
      duration: 'Длительность',
      playersCount: 'Игроки',
      bookScenario: 'Забронировать',
      detailsBtn: 'Подробнее',
      quoteLabel: 'Цитата сюжета',
    },
    scenariosList: [
      {
        id: 'wax-1',
        key: 'wax1',
        title: 'Дом восковых фигур',
        quote: '«ты попал в музей, из которого никто не выходит...»',
        shortDesc: 'Старинный закрытый музей восковых скульптур. Говорят, его экспонаты слишком похожи на пропавших без вести людей.',
        fullDesc: 'Вы получаете закрытое приглашение в закрытую частную выставку. Экспонаты выполнены с пугающей анатомической точностью — стеклянные глаза следят за каждым вашим шагом, а воск под пальцами кажется неестественно тёплым. Сможете ли вы найти выход из лабиринта витрин, пока мастер не закончил свой очередной шедевр?',
        image: SCENARIO_IMAGES.wax1,
        duration: '1 – 1.5 ч',
        players: '4 – 16 игроков',
        fearLevel: 4,
        logicLevel: 4,
        genre: 'Психологический хоррор / Триллер',
        ageLimit: '14+',
      },
      {
        id: 'wax-2',
        key: 'wax2',
        title: 'Дом восковых фигур 2',
        quote: '«история продолжается... Но теперь ты - часть коллекции.»',
        shortDesc: 'Вторая глава легендарного кошмара. Новые залы, более изощрённые ловушки и беспощадный скульптор.',
        fullDesc: 'Те, кто думал, что кошмар остался позади, ошибались. Вы проникли в закрытые подземные мастерские скульптора. Здесь хранятся формы для отливки и незавершённые работы. Мастер уже приготовил для вас постамент. Хватит ли у вашей команды хладнокровия разгадать шифры и не застыть навсегда в воске?',
        image: SCENARIO_IMAGES.wax2,
        duration: '1 – 1.5 ч',
        players: '4 – 16 игроков',
        fearLevel: 5,
        logicLevel: 5,
        genre: 'Хардкор хоррор / Перформанс',
        ageLimit: '16+',
      },
      {
        id: 'souls',
        key: 'souls',
        title: 'Дом забытых душ',
        quote: '« здесь остались те, кого никто не спас... »',
        shortDesc: 'Заброшенный особняк с тёмным прошлым. Стены этого места до сих пор шепчут голосами запертых здесь узников.',
        fullDesc: 'В полуразрушенном старинном доме много лет назад произошла необъяснимая трагедия. Призраки прошлого блуждают по скрипучим лестницам и заброшенным комнатам. Вам предстоит провести спиритический ритуал, соединить обрывки записей и освободить души — иначе вы навсегда останетесь среди них.',
        image: SCENARIO_IMAGES.souls,
        duration: '1 – 1.5 ч',
        players: '4 – 16 игроков',
        fearLevel: 4,
        logicLevel: 4,
        genre: 'Мистика / Паранормальный хоррор',
        ageLimit: '14+',
      },
      {
        id: 'breathe',
        key: 'breathe',
        title: 'Не дыши',
        quote: '« ты думаешь, что тишина спасёт тебя ?... »',
        shortDesc: 'Глухая темнота. Любой шорох, неосторожный вздох или скрип половицы может стать последним звуком, который вы издадите.',
        fullDesc: 'Вы проникаете в изолированное убежище слепого маньяка с обострённым слухом. Зрение здесь бесполезно: комната погружена во тьму. Вам придётся передвигаться абсолютно бесшумно, координировать команду на ощупь, решать тактильные головоломки и контролировать собственное дыхание, когда чужое присутствие окажется в сантиметрах от вашего лица.',
        image: SCENARIO_IMAGES.breathe,
        duration: '1 – 1.5 ч',
        players: '4 – 16 игроков',
        fearLevel: 5,
        logicLevel: 4,
        genre: 'Стелс-хоррор / Тактильный квест',
        ageLimit: '14+',
      },
    ],
    features: {
      tag: 'ПРЕИМУЩЕСТВА QUEST 13',
      title: 'ПОЧЕМУ ВЫБИРАЮТ ИМЕННО НАС',
      subtitle: 'Максимальный уровень погружения и безопасности для вашей команды',
      items: [
        {
          title: 'Гигантская территория 700 м²',
          desc: 'Больше никаких тесных комнат. У нас настоящий комплекс с высокими потолками, подвалами и скрытыми локациями.',
          iconName: 'Maximize',
        },
        {
          title: 'Интеллектуальные головоломки',
          desc: 'Вам предстоит не просто бегать от монстров, но и находить подсказки, открывать тайники и соединять логические цепочки.',
          iconName: 'Brain',
        },
        {
          title: 'Выбор уровня контакта',
          desc: 'Перед игрой вы сами выбираете уровень взаимодействия с актёрами: Лайт (без касаний), Медиум или Хард (максимальный адреналин).',
          iconName: 'ShieldAlert',
        },
        {
          title: 'До 16 человек одновременно',
          desc: 'Комфортно размещаем большие компании друзей, коллег или дни рождения без деления на мелкие подгруппы.',
          iconName: 'Users',
        },
      ],
    },
    reviewsSection: {
      tag: 'ОТЗЫВЫ ИГРОКОВ',
      title: 'ЧТО ГОВОРЯТ ТЕ, КТО ВЫБРАЛСЯ',
      subtitle: 'Реальные эмоции наших гостей после прохождения квестов',
      leaveReviewBtn: 'Оставить отзыв',
      ratingAverage: '4.9 из 5.0',
      reviewsCount: 'Более 1,200 довольных команд',
      verifiedPlayer: 'Проверенный игрок',
      modalTitle: 'Оставить свой отзыв',
      modalDesc: 'Поделитесь впечатлениями о прохождении квеста в QUEST 13!',
      nameLabel: 'Ваше имя или название команды',
      namePlaceholder: 'Например: Азиз и команда',
      ratingLabel: 'Ваша оценка',
      scenarioLabel: 'Какой сценарий проходили?',
      commentLabel: 'Ваш отзыв',
      commentPlaceholder: 'Опишите эмоции, игру актёров и загадки...',
      submitBtn: 'Опубликовать отзыв',
      cancelBtn: 'Отмена',
      successMessage: 'Спасибо за ваш отзыв! Он успешно добавлен на сайт.',
    },
    locationSection: {
      tag: 'ТОЧКА СБОРА',
      title: 'КАК НАС НАЙТИ',
      subtitle: 'Мы находимся в самом сердце Ташкента. Удобный подъезд и парковка.',
      addressLabel: 'Точный адрес:',
      addressValue: 'г. Ташкент, ул. Бобура, 73/А',
      metroLabel: 'Ориентиры:',
      metroValue: 'Улица Бобура, развилка, удобная парковка для гостей',
      hoursLabel: 'Режим работы:',
      hoursValue: 'Ежедневно с 11:00 до 03:00 (по предварительной записи)',
      phoneLabel: 'Телефон для брони:',
      telegramLabel: 'Telegram:',
      instagramLabel: 'Instagram:',
      openInYandex: 'Открыть в Яндекс Картах',
      openInGoogle: 'Открыть в Google Карты',
      openIn2Gis: 'Открыть в 2ГИС',
      directCall: 'Позвонить сейчас',
    },
    bookingModal: {
      title: 'БРОНИРОВАНИЕ ИГРЫ',
      subtitle: 'Выберите желаемый сценарий и отправьте заявку напрямую в Telegram или по телефону',
      name: 'Ваше имя',
      phone: 'Номер телефона (+998...)',
      scenario: 'Выберите сценарий',
      date: 'Дата игры',
      timeSlot: 'Удобное время',
      players: 'Количество участников (от 4 до 16)',
      contactLevel: 'Желаемый уровень контакта с актёрами',
      contactLevels: {
        light: 'Лайт (без физического контакта, только атмосфера)',
        medium: 'Медиум (умеренный контакт, погружение)',
        hard: 'Хард (максимальный контакт, экстремальный адреналин)',
      },
      sendTelegram: 'Забронировать через Telegram @quest13uz',
      callDirect: 'Забронировать по телефону',
      note: 'Администратор свяжется с вами в течение 5 минут для подтверждения бронирования и инструктажа.',
      close: 'Закрыть',
    },
    footer: {
      tagline: 'QUEST 13 — Главный хоррор-перформанс Ташкента на площади 700 м².',
      rights: 'Все права защищены.',
      warning: 'Внимание: игра содержит сцены ужаса, громкие звуки и темноту. Лицам с сердечными заболеваниями и эпилепсией рекомендуется согласовать участие с администратором.',
    },
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      scenarios: 'Ssenariylar',
      about: 'Kvest haqida',
      specs: 'Maydon',
      reviews: 'Fikrlar',
      location: 'Manzil & Aloqa',
      bookBtn: 'Bron qilish',
      telegramBtn: 'Telegram',
    },
    hero: {
      badge: 'TOSHKENTDAGI QOʻRQUV EPITSENTRI • 700 M²',
      titleFirst: 'QOʻRQUV CHEGARASINI KESIB OʻTING',
      titleHighlight: 'QUEST 13',
      proGreetingTitle: '«Qoʻrquvlaringiz jonlanadigan haqiqatga xush kelibsiz...»',
      proGreetingText: 'Siz Toshkentdagi eng ulkan dahshatli kvest maydoni ostonasida turibsiz. Bu yerda xayol va tirik qolish instinkti oʻrtasidagi chiziq yoʻqoladi. QUEST 13 — bu shunchaki teatr tomoshasi emas, bu sizning aqlingiz, sabr-toqatingiz va jamoangizga boʻlgan ishonchingizning haqiqiy sinovidir. Eshiklar qulflanadi, vaqt orqaga hisoblay boshlaydi va omon qolishning yagona yoʻli — qorongʻulik sizni butunlay yutib yuborishidan oldin sirni fosh qilishdir.',
      subtitle: '700 m² yurakni larzaga soluvchi qoʻrqinchli maydon, kinoga xos dekoratsiyalar, mualliflik mantiqiy jumboqlari va professional aktyorlar.',
      bookNow: 'Oʻyinni bron qilish',
      exploreScenarios: 'Ssenariylarni koʻrish',
      telegramQuick: 'Telegramda yozish',
      soundOn: 'Atmosfera ovozi yoqildi',
      soundOff: 'Ovozni yoqish',
    },
    stats: {
      title: 'RAQAMLAR VA DAHSHAT MIQYOSI',
      subtitle: 'Oʻzbekistonda oʻxshashi boʻlmagan unikal kvest maydonini yaratdik',
      areaValue: '700 m²',
      areaLabel: 'Oʻyin maydoni masshtabi',
      areaDesc: 'Koʻplab maxfiy xonalar, tunellar va yashirin oʻtish joylariga ega ikki qavatli qoʻrquv labirinti.',
      timeValue: '1 – 1.5 soat',
      timeLabel: 'Oʻyin davomiyligi',
      timeDesc: '60–90 daqiqa toʻxtovsiz adrenalin, har bir soniya sizning taqdiringizni hal qiladi.',
      playersValue: '4 – 16',
      playersLabel: 'Oʻyinchilar soni',
      playersDesc: 'Doʻstlar davrasi, korporativ jamoalar va katta guruhlar uchun eng qulay format.',
      logicValue: 'Mantiqiy vazifalar',
      logicLabel: 'Bosim ostida aql charxi',
      logicDesc: 'Qoʻrquv va stress sharoitida yechilishi kerak boʻlgan murakkab mexanizmlar va shifrlar.',
    },
    scenariosSection: {
      tag: '4 TA UNIKAL SSENARIY',
      title: 'OʻZ QOʻRQUVINGIZNI TANLANG',
      subtitle: 'Har bir ssenariy — bu 100% atmosferaga shoʻngʻish imkonini beruvchi kino asari',
      fearLevel: 'Qoʻrquv darajasi',
      logicLevel: 'Mantiq murakkabligi',
      duration: 'Davomiyligi',
      playersCount: 'Oʻyinchilar',
      bookScenario: 'Bron qilish',
      detailsBtn: 'Batafsil',
      quoteLabel: 'Ssenariy shiori',
    },
    scenariosList: [
      {
        id: 'wax-1',
        key: 'wax1',
        title: 'Mum haykallari uyi',
        quote: '«ты попал в музей, из которого никто не выходит...»',
        shortDesc: 'Qadimiy yopiq mum haykallari muzeyi. U yerdagi eksponatlar bedarak yoʻqolgan odamlarga juda oʻxshaydi.',
        fullDesc: 'Siz maxfiy shaxsiy koʻrgazmaga taklifnoma oldingiz. Haykallar nihoyatda aniq ishlangan — ularning shisha koʻzlari sizning har bir harakatingizni kuzatadi, barmoqlar ostidagi mum esa gʻalati darajada iliq. Haykaltarosh oʻzining yangi asarini tugatmasdan oldin chiqish yoʻlini topa olasizmi?',
        image: SCENARIO_IMAGES.wax1,
        duration: '1 – 1.5 soat',
        players: '4 – 16 oʻyinchi',
        fearLevel: 4,
        logicLevel: 4,
        genre: 'Psixologik horror / Triller',
        ageLimit: '14+',
      },
      {
        id: 'wax-2',
        key: 'wax2',
        title: 'Mum haykallari uyi 2',
        quote: '«история продолжается... Но теперь ты - часть коллекции.»',
        shortDesc: 'Afsonaviy dahshatning ikkinchi qismi. Yangi xonalar, makkor tuzoqlar va shafqatsiz haykaltarosh.',
        fullDesc: 'Qoʻrquv ortda qoldi deb oʻylaganlar adashishdi. Siz haykaltaroshning yer osti ustaxonasiga kirib qoldingiz. U yerda yangi qoliplar va tugallanmagan haykallar turibdi. Haykaltarosh siz uchun ham maxsus joy tayyorlab qoʻygan. Mumga aylanib qolmaslik uchun jamoangizda yetarlicha matonat bormi?',
        image: SCENARIO_IMAGES.wax2,
        duration: '1 – 1.5 soat',
        players: '4 – 16 oʻyinchi',
        fearLevel: 5,
        logicLevel: 5,
        genre: 'Hardkor horror / Performans',
        ageLimit: '16+',
      },
      {
        id: 'souls',
        key: 'souls',
        title: 'Unutilgan ruhlar uyi',
        quote: '« здесь остались те, кого никто не спас... »',
        shortDesc: 'Qorongʻu oʻtmishga ega tashlandiq qasr. Bu yerning devorlari hali ham qamalgan mahbuslarning ovozida shivirlaydi.',
        fullDesc: 'Yillar oldin bu koʻhna uyda tushuntirib boʻlmaydigan fojia yuz bergan. Oʻtmish sharpalari gʻijirlagan zinapoyalar va xonalarda kezib yuradi. Siz maxfiy marosimni bajarib, ruhlarni ozod qilishingiz kerak — aks holda siz ham ular orasida abadiy qolib ketasiz.',
        image: SCENARIO_IMAGES.souls,
        duration: '1 – 1.5 soat',
        players: '4 – 16 oʻyinchi',
        fearLevel: 4,
        logicLevel: 4,
        genre: 'Mistika / Paranormal horror',
        ageLimit: '14+',
      },
      {
        id: 'breathe',
        key: 'breathe',
        title: 'Nafas olma',
        quote: '« ты думаешь, что тишина спасёт тебя ?... »',
        shortDesc: 'Qop-qorongʻu sukut. Har qanday shivir-shivir, ehtiyotsiz nafas yoki taxtaning gʻijirlashi sizning soʻnggi tovushingiz boʻlishi mumkin.',
        fullDesc: 'Siz eshitish qobiliyati oʻta kuchli boʻlgan koʻr manyakning boshpanasiga kirib qolasiz. Bu yerda koʻrish behuda: xonada mutlaq qorongʻulik hukm suradi. Siz mutlaqo tovush chiqarmasdan harakatlanishingiz, paypaslab jumboqlarni yechishingiz va oʻz nafasingizni jilovlashingiz shart.',
        image: SCENARIO_IMAGES.breathe,
        duration: '1 – 1.5 soat',
        players: '4 – 16 oʻyinchi',
        fearLevel: 5,
        logicLevel: 4,
        genre: 'Stels-horror / Taktil kvest',
        ageLimit: '14+',
      },
    ],
    features: {
      tag: 'QUEST 13 AFZALLIKLARI',
      title: 'NEGA AYNAN BIZNI TANLASHADI',
      subtitle: 'Jamoangiz uchun maksimal darajada hayajon va xavfsizlik kafolatlangan',
      items: [
        {
          title: '700 m² ulkan maydon',
          desc: 'Tor xonalar endi yoʻq. Baland shiftlar, yertoʻlalar va maxfiy joylarga ega haqiqiy keng koʻlamli bino.',
          iconName: 'Maximize',
        },
        {
          title: 'Mualliflik mantiqiy vazifalari',
          desc: 'Faqatgina qochish emas, balki jumboqlarni topish, kalitlarni ochish va tafakkurni ishga solish talab etiladi.',
          iconName: 'Brain',
        },
        {
          title: 'Aktyorlar bilan kontakt darajasi',
          desc: 'Oʻyindan oldin kontakt turini oʻzingiz tanlaysiz: Layt (tegmasdan), Medium yoki Xard (ekstremal adrenalin).',
          iconName: 'ShieldAlert',
        },
        {
          title: '16 kishigacha bir vaqtda',
          desc: 'Katta doʻstlar davrasi yoki jamoaviy bayramlar uchun guruhni boʻlmasdan birga oʻynash imkoniyati.',
          iconName: 'Users',
        },
      ],
    },
    reviewsSection: {
      tag: 'OʻYINCHILAR FIKRLARI',
      title: 'TIRIK CHIQIB KELGANLAR NIMA DEYDI',
      subtitle: 'Mehmonlarimizning kvestdan keyingi haqiqiy hissiyotlari',
      leaveReviewBtn: 'Fikr qoldirish',
      ratingAverage: '4.9 / 5.0',
      reviewsCount: '1,200 dan ortiq mamnun jamoalar',
      verifiedPlayer: 'Tasdiqlangan oʻyinchi',
      modalTitle: 'Fikringizni qoldiring',
      modalDesc: 'QUEST 13 kvestidagi taassurotlaringiz bilan boʻlishing!',
      nameLabel: 'Ismingiz yoki jamoangiz nomi',
      namePlaceholder: 'Masalan: Sardor va doʻstlari',
      ratingLabel: 'Bahoyingiz',
      scenarioLabel: 'Qaysi ssenariyni oʻynadingiz?',
      commentLabel: 'Fikringiz',
      commentPlaceholder: 'Aktyorlar oʻyini, hissiyotlar va jumboqlar haqida yozing...',
      submitBtn: 'Fikrni eʼlon qilish',
      cancelBtn: 'Bekor qilish',
      successMessage: 'Fikringiz uchun rahmat! U muvaffaqiyatli qoʻshildi.',
    },
    locationSection: {
      tag: 'YIGʻILISH JOYI',
      title: 'BIZNI QANDAY TOPISH MUMKIN',
      subtitle: 'Toshkent shahrining markazida joylashganmiz. Qulay yoʻl va avtoturargoh.',
      addressLabel: 'Aniq manzil:',
      addressValue: 'Toshkent sh., Bobur koʻchasi, 73/A',
      metroLabel: 'Moʻljal:',
      metroValue: 'Bobur koʻchasi boʻylab, qulay mehmonlar avtoturargohi',
      hoursLabel: 'Ish vaqti:',
      hoursValue: 'Har kuni 11:00 dan 03:00 gacha (oldindan yozilish orqali)',
      phoneLabel: 'Bron qilish uchun telefon:',
      telegramLabel: 'Telegram:',
      instagramLabel: 'Instagram:',
      openInYandex: 'Yandex Xaritalarda ochish',
      openInGoogle: 'Google Mapsda ochish',
      openIn2Gis: '2GISda ochish',
      directCall: 'Hozir qoʻngʻiroq qilish',
    },
    bookingModal: {
      title: 'OʻYINNI BRON QILISH',
      subtitle: 'Kerakli ssenariyni tanlang va toʻgʻridan-toʻgʻri Telegram yoki telefon orqali yoziling',
      name: 'Ismingiz',
      phone: 'Telefon raqamingiz (+998...)',
      scenario: 'Ssenariyni tanlang',
      date: 'Oʻyin sanasi',
      timeSlot: 'Qulay vaqt',
      players: 'Oʻyinchilar soni (4 dan 16 gacha)',
      contactLevel: 'Aktyorlar bilan kontakt darajasi',
      contactLevels: {
        light: 'Layt (tegmasdan, faqat atmosfera)',
        medium: 'Medium (meʼyoriy kontakt, kuchli hissiyot)',
        hard: 'Xard (maksimal kontakt, ekstremal adrenalin)',
      },
      sendTelegram: 'Telegram orqali yozilish @quest13uz',
      callDirect: 'Telefon orqali bron qilish',
      note: 'Administrator 5 daqiqa ichida bronni tasdiqlash uchun siz bilan bogʻlanadi.',
      close: 'Yopish',
    },
    footer: {
      tagline: 'QUEST 13 — Toshkentdagi 700 m² maydonga ega bosh horror-performans kvesti.',
      rights: 'Barcha huquqlar himoyalangan.',
      warning: 'Diqqat: oʻyinda qoʻrqinchli sahnalar, baland tovushlar va qorongʻulik mavjud. Yurak xastaligi bor shaxslarga administrator bilan maslahatlashish tavsiya etiladi.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      scenarios: 'Scenarios',
      about: 'About',
      specs: 'Scale',
      reviews: 'Reviews',
      location: 'Location & Contacts',
      bookBtn: 'Book Now',
      telegramBtn: 'Telegram',
    },
    hero: {
      badge: 'EPICENTER OF HORROR IN TASHKENT • 700 M²',
      titleFirst: 'CROSS THE BOUNDARY OF FEAR AT',
      titleHighlight: 'QUEST 13',
      proGreetingTitle: '«Welcome to a reality where your deepest fears come alive...»',
      proGreetingText: 'You stand before the gates of Tashkent’s largest horror labyrinth. Here, the boundary between illusion and primal survival instinct vanishes completely. QUEST 13 is not a staged show — it is an ultimate trial of your intellect, composure, and mutual trust under extreme pressure. The doors lock behind you, the countdown begins, and your only escape is uncovering the dark secret before the shadows swallow you whole.',
      subtitle: '700 m² of pure adrenaline, cinematic movie sets, intellectual logical riddles, and master-level live horror actors.',
      bookNow: 'Book Game',
      exploreScenarios: 'View Scenarios',
      telegramQuick: 'Chat on Telegram',
      soundOn: 'Atmospheric audio on',
      soundOff: 'Enable sound',
    },
    stats: {
      title: 'NUMBERS & SCALE OF TERROR',
      subtitle: 'An unprecedented immersive horror experience built in Uzbekistan',
      areaValue: '700 m²',
      areaLabel: 'Game zone scale',
      areaDesc: 'A massive multi-level horror labyrinth loaded with secret tunnels, concealed chambers, and hidden corridors.',
      timeValue: '1 – 1.5 hrs',
      timeLabel: 'Game completion time',
      timeDesc: '60–90 minutes of relentless adrenaline where every second counts for survival.',
      playersValue: '4 – 16',
      playersLabel: 'Number of players',
      playersDesc: 'Ideal for close-knit friends, corporate team buildings, and large adventurous squads.',
      logicValue: 'Logical tasks',
      logicLabel: 'Intellect under pressure',
      logicDesc: 'Custom author cipher puzzles, mechanical devices, and clues you must solve while terrified.',
    },
    scenariosSection: {
      tag: '4 UNIQUE STORYLINES',
      title: 'CHOOSE YOUR NIGHTMARE',
      subtitle: 'Each quest is an authentic cinematic world with 100% psychological immersion',
      fearLevel: 'Fear Level',
      logicLevel: 'Logic Difficulty',
      duration: 'Duration',
      playersCount: 'Players',
      bookScenario: 'Book Quest',
      detailsBtn: 'Details',
      quoteLabel: 'Scenario Quote',
    },
    scenariosList: [
      {
        id: 'wax-1',
        key: 'wax1',
        title: 'House of Wax Figures',
        quote: '«ты попал в музей, из которого никто не выходит...»',
        shortDesc: 'An antique closed museum of wax figures. Rumors say the exhibits resemble missing people far too closely.',
        fullDesc: 'You receive a private invitation into a secluded exhibit. The figures are sculpted with terrifying precision — their glass eyes trace your every movement, and the wax feels eerily warm. Can your team navigate the labyrinth of glass cases before the master chooses you for his next piece?',
        image: SCENARIO_IMAGES.wax1,
        duration: '1 – 1.5 hrs',
        players: '4 – 16 players',
        fearLevel: 4,
        logicLevel: 4,
        genre: 'Psychological Horror / Thriller',
        ageLimit: '14+',
      },
      {
        id: 'wax-2',
        key: 'wax2',
        title: 'House of Wax Figures 2',
        quote: '«история продолжается... Но теперь ты - часть коллекции.»',
        shortDesc: 'Chapter two of the infamous nightmare. Deeper subterranean workshops and an even more relentless sculptor.',
        fullDesc: 'Whoever believed the horror was over was dead wrong. You have ventured deep into the sculptor’s underground workshop. Casting molds, boiling wax, and unfinished silhouettes surround you. The sculptor has already carved your pedestal. Will your composure hold, or will you freeze forever in wax?',
        image: SCENARIO_IMAGES.wax2,
        duration: '1 – 1.5 hrs',
        players: '4 – 16 players',
        fearLevel: 5,
        logicLevel: 5,
        genre: 'Hardcore Horror / Performance',
        ageLimit: '16+',
      },
      {
        id: 'souls',
        key: 'souls',
        title: 'House of Forgotten Souls',
        quote: '« здесь остались те, кого никто не спас... »',
        shortDesc: 'A derelict Victorian estate steeped in dark paranormal history. Its rotting walls still echo the cries of trapped souls.',
        fullDesc: 'Decades ago, an inexplicable tragedy sealed the fate of everyone inside this estate. Restless apparitions haunt the creaking stairs and dust-choked halls. Complete the séance ritual, piece together the lost archives, and banish the dark curse before becoming permanent residents.',
        image: SCENARIO_IMAGES.souls,
        duration: '1 – 1.5 hrs',
        players: '4 – 16 players',
        fearLevel: 4,
        logicLevel: 4,
        genre: 'Mystical / Paranormal Horror',
        ageLimit: '14+',
      },
      {
        id: 'breathe',
        key: 'breathe',
        title: 'Don’t Breathe',
        quote: '« ты думаешь, что тишина спасёт тебя ?... »',
        shortDesc: 'Absolute suffocating blackness. A single rustle, uneven breath, or squeaking floorboard could seal your doom.',
        fullDesc: 'You have broken into the compound of a blind hunter with superhuman auditory senses. Eyesight is useless here in pure blackness. You must tread like ghosts, decode tactile puzzles by touch, and hold your breath as danger stops just inches from your trembling face.',
        image: SCENARIO_IMAGES.breathe,
        duration: '1 – 1.5 hrs',
        players: '4 – 16 players',
        fearLevel: 5,
        logicLevel: 4,
        genre: 'Stealth Horror / Sensory Quest',
        ageLimit: '14+',
      },
    ],
    features: {
      tag: 'WHY QUEST 13',
      title: 'WHY PLAYERS CHOOSE US',
      subtitle: 'Maximum adrenaline, cinematic quality, and safety guarantee for your crew',
      items: [
        {
          title: 'Massive 700 m² Territory',
          desc: 'No cramped escape closets. A true two-floor cinematic labyrinth with lofty ceilings, basements, and secret passages.',
          iconName: 'Maximize',
        },
        {
          title: 'Logical Riddles & Puzzles',
          desc: 'It’s not just running from shadows — you must uncover hidden codes, unlock ancient mechanisms, and think under pressure.',
          iconName: 'Brain',
        },
        {
          title: 'Selectable Actor Contact Level',
          desc: 'Choose your desired fear intensity before starting: Light (no physical touch), Medium, or Hard (maximum raw adrenaline).',
          iconName: 'ShieldAlert',
        },
        {
          title: 'Up to 16 Players Together',
          desc: 'Play together without splitting your crew into separate groups. Perfect for birthdays, friends, and team building.',
          iconName: 'Users',
        },
      ],
    },
    reviewsSection: {
      tag: 'PLAYER TESTIMONIALS',
      title: 'WHAT SURVIVORS SAY',
      subtitle: 'Authentic reviews and emotions from our brave visitors',
      leaveReviewBtn: 'Leave a Review',
      ratingAverage: '4.9 out of 5.0',
      reviewsCount: 'Over 1,200 satisfied teams',
      verifiedPlayer: 'Verified player',
      modalTitle: 'Submit Your Review',
      modalDesc: 'Share your adrenaline rush and experience at QUEST 13!',
      nameLabel: 'Your name or team name',
      namePlaceholder: 'e.g., Alex & friends',
      ratingLabel: 'Your rating',
      scenarioLabel: 'Which scenario did you play?',
      commentLabel: 'Your review',
      commentPlaceholder: 'Describe the actors, puzzles, and atmosphere...',
      submitBtn: 'Post Review',
      cancelBtn: 'Cancel',
      successMessage: 'Thank you for your review! It is now live on the site.',
    },
    locationSection: {
      tag: 'COORDINATES',
      title: 'HOW TO FIND US',
      subtitle: 'Located conveniently in central Tashkent with dedicated parking.',
      addressLabel: 'Exact address:',
      addressValue: 'Tashkent, Bobur street, 73/A',
      metroLabel: 'Landmark:',
      metroValue: 'Bobur Street hub, easy access, private parking for guests',
      hoursLabel: 'Working hours:',
      hoursValue: 'Daily from 11:00 AM to 03:00 AM (By prior reservation)',
      phoneLabel: 'Booking Phone:',
      telegramLabel: 'Telegram:',
      instagramLabel: 'Instagram:',
      openInYandex: 'Open in Yandex Maps',
      openInGoogle: 'Open in Google Maps',
      openIn2Gis: 'Open in 2GIS',
      directCall: 'Call Now',
    },
    bookingModal: {
      title: 'RESERVE YOUR GAME',
      subtitle: 'Pick your scenario and connect directly with our admin via Telegram or phone',
      name: 'Your Name',
      phone: 'Phone Number (+998...)',
      scenario: 'Select Scenario',
      date: 'Game Date',
      timeSlot: 'Preferred Time Slot',
      players: 'Number of Players (4 to 16)',
      contactLevel: 'Actor Contact Intensity',
      contactLevels: {
        light: 'Light (No physical contact, pure atmosphere)',
        medium: 'Medium (Moderate contact, intense immersion)',
        hard: 'Hard (Maximum contact, extreme horror)',
      },
      sendTelegram: 'Book via Telegram @quest13uz',
      callDirect: 'Book via Direct Call',
      note: 'Our manager will contact you within 5 minutes to confirm availability and briefing instructions.',
      close: 'Close',
    },
    footer: {
      tagline: 'QUEST 13 — Premier horror performance quest in Tashkent covering 700 m².',
      rights: 'All rights reserved.',
      warning: 'Warning: Contains intense horror scenes, sudden loud sounds, and dark spaces. Persons with cardiovascular conditions or epilepsy should consult management prior to entry.',
    },
  },
};

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Тимур & Команда «Blackout»',
    rating: 5,
    date: '2 дня назад',
    scenario: 'Дом восковых фигур 2',
    text: 'Это просто разрыв! Были на многих квестах Ташкента, но 700 квадратных метров — это абсолютно другой уровень. Актёры играют на голливудском уровне, грим нереальный. Загадки логические, действительно заставляют думать в стрессе. Рекомендую брать хард!',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Jasur va Doʻstlar',
    rating: 5,
    date: '4 kun oldin',
    scenario: 'Nafas olma / Не дыши',
    text: 'Daxshatli hissiyotlar! 8 kishi bilan kirdik, butun oʻyin davomida nafasimiz ichimizga tushib qoldi. Qorongʻulikda har bir shivir-shivir yurakni toʻxtatib qoʻyay dedi. Mantiqiy topshiriqlar ham juda zoʻr oʻylangan. QUEST 13 eng zoʻri!',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Мадина С.',
    rating: 5,
    date: 'Неделю назад',
    scenario: 'Дом забытых душ',
    text: 'Отмечали день рождения большой компанией (11 человек). Понравилось, что никто не стоял без дела — пространства очень много, декорации кинематографические. До сих пор обсуждаем впечатления!',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Elena & Victor',
    rating: 5,
    date: '2 weeks ago',
    scenario: 'Дом восковых фигур',
    text: 'The atmosphere starts from the very first corridor. Real chills! The quote "you entered a museum from which no one leaves" is 100% accurate. Puzzles are smart, mechanical, and well crafted. 10/10!',
    verified: true,
  },
];
