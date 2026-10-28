// Landing copy, EN and RU. Product facts follow the current 919 app (October 2026).

export type Lang = 'en' | 'ru';

export const STORE = {
  ios: 'https://apps.apple.com/app/id1533779693',
  android: 'https://play.google.com/store/apps/details?id=net.app919',
};
export const SOCIAL = {
  instagram: 'https://www.instagram.com/919_app/',
  facebook: 'https://www.facebook.com/919app/',
  linkedin: 'https://www.linkedin.com/company/74894663',
};

type Step = { title: string; text: string; screen: string; alt: string };
type Plan = { name: string; price: string; per: string; points: string[]; cta: string; featured?: boolean; badge?: 'premium' | 'max'; urgent?: boolean };

const en = {
  meta: {
    title: '919 — Find work. Find people.',
    description:
      '919 is the hiring app for hospitality, events, modeling, music and beauty in the UAE. Talent shows who they are with photos and a video. Employers post a vacancy and hire within a day.',
  },
  nav: { talent: 'For talent', employers: 'For employers', features: 'Features', pricing: 'Pricing', faq: 'FAQ', download: 'Get the app', lang: 'RU', langHref: '/ru/' },
  hero: {
    title: ['Find work.', 'Find people.'],
    lead: 'The hiring app for hospitality, events, modeling and music in the UAE. Talent shows who they are with photos and a video. Verified employers post a vacancy and hire within a day.',
    note: 'Free to start. iOS and Android.',
    ios: 'Download on the', iosStore: 'App Store',
    android: 'Get it on', androidStore: 'Google Play',
    wall: 'Hostesses, DJs, models and bartenders on 919',
  },
  roles: {
    title: 'One app, two sides',
    lead: 'Pick a side when you sign up. You can always create a second account for the other one.',
    talentTab: 'I’m looking for work',
    employerTab: 'I’m hiring',
    talent: [
      { title: 'Build a profile once', text: 'Choose your fields — as many as you work in — add photos and a short video presentation. Employers see you exactly as you are.', screen: 't_profile', alt: 'Talent profile with photos and fields' },
      { title: 'Find the right job', text: 'A feed of real vacancies with pay, contract type and start date. Filter by city, field and rate, or open the Urgent tab for jobs that start today.', screen: 't_feed', alt: 'Vacancy feed with Urgent filter' },
      { title: 'Free today? Say so', text: 'Turn on Available today and for 24 hours you’re in the Today tab of every employer looking for people to start now. Only verified companies can message you there.', screen: 't_avail', alt: 'Feed with Available today turned on' },
      { title: 'Apply in one tap', text: 'See what the employer asks for and how well you fit before you apply. Add a short note if you want to stand out.', screen: 't_vacancy', alt: 'Vacancy page' },
      { title: 'Talk to the employer', text: 'When the employer accepts your application, a chat opens. Agree on the time and dress code, share your contact or location.', screen: 't_chat', alt: 'Chat with an employer' },
      { title: 'Get hired', text: 'Once the employer confirms you, you get a notification and the job moves to Active with the date and time you start. The chat is one tap away.', screen: 't_hired', alt: 'Vacancy with the “You’re hired” status' },
    ] as Step[],
    employer: [
      { title: 'Get the verified badge', text: 'Upload your trade licence. The 919 team checks it within 24 hours and adds a blue badge next to your company name, so candidates know you’re real and reply faster.', screen: 'e_verify', alt: 'Verified employer with an approved trade licence' },
      { title: 'Post a vacancy in four steps', text: 'Field and role, basic info with photos, pay, then requirements that depend on the role — height for models, genre for DJs, languages for hosts.', screen: 'e_post', alt: 'New vacancy, step one' },
      { title: 'We check it within an hour', text: 'The 919 team reviews every vacancy before it goes live. If something needs fixing, you get a clear list of what to change.', screen: 'e_hub', alt: 'Vacancies with moderation results' },
      { title: 'Pick from real applicants', text: 'Each applicant comes with photos, languages, experience and often a video. Compare them side by side and open any profile in a tap.', screen: 'e_applicants', alt: 'Applicants of a vacancy' },
      { title: 'Need someone today?', text: 'The Today tab shows people who can start work right now. They turn it on for 24 hours, so the list is always fresh.', screen: 'e_today', alt: 'Talent available today' },
      { title: 'Chat and agree on the details', text: 'One chat per candidate, split by vacancy, so a DJ booking never mixes with a hostess job. Or find talent yourself and write first.', screen: 'e_chat', alt: 'Chat with a candidate' },
    ] as Step[],
  },
  features: {
    title: 'Made for jobs where people meet people',
    video: { title: 'A video says more than a CV', text: 'Talent records a short presentation right in the app. Employers watch it before the first call — and skip the ones that don’t fit.' },
    urgent: { title: 'Urgent hiring', text: 'Need someone tonight? Your vacancy goes to the top of the feed and search with a hot badge for 24 hours.', price: '$2.99 once', clock: 'left at the top' },
    moderation: { title: 'Verified employers', text: 'Companies upload their trade licence and the 919 team checks it before the blue badge appears. Every vacancy is reviewed too — the ones that ask candidates to pay are rejected.', states: ['Trade licence', 'On review', 'Verified'] },
    avail: {
      title: 'Free today? Say so',
      text: 'One switch puts you in the Today tab for 24 hours. Employers who need someone tonight see you first, and only verified companies can message you.',
      toggle: 'Available today',
      sub: 'Show employers you can start work today',
      when: ['Evening', 'Any time', 'Night'],
    },
    chats: { title: 'Chats that keep context', text: 'Direct messages and each vacancy live in separate threads of one chat. Report or block anyone in two taps.', chips: ['Direct', 'Hostess, rooftop', 'DJ for a boat party'] },
    team: { title: 'Hire as a team', text: 'Invite recruiters to your company profile. Everyone posts and chats under one verified name.' },
  },
  fields: {
    title: 'Choose your role',
    lead: 'From a one-night event to a full-time contract.',
    list: [
      { name: 'Hospitality', roles: 'Hostesses, waiters, bartenders, champagne girls, concierges' },
      { name: 'Events', roles: 'Promoters, event hosts, MCs, animators, event crew' },
      { name: 'Modeling', roles: 'Runway, commercial, image and promo models' },
      { name: 'Music', roles: 'DJs, singers, live bands, guitarists, pianists' },
      { name: 'Service', roles: 'Photographers, videographers, stylists, make-up artists' },
      { name: 'F&B', roles: 'Baristas, sommeliers, chefs de rang, coffee bar attendants' },
    ],
  },
  pricing: {
    title: 'Free to start',
    lead: 'Start free on both sides. Pay only when you want more.',
    talentTab: 'For talent',
    employerTab: 'For employers',
    talent: [
      { name: 'Free', price: '$0', per: '', points: ['Profile with photos and a video', 'Up to 10 applications', 'Chats with employers', 'Available today'], cta: 'Get the app' },
      { name: 'Premium', price: '$2.99', per: '/ month', badge: 'premium', points: ['Unlimited applications', 'Up to 20 photos and 5 videos', 'Blue badge on your profile', 'Everything in Free'], cta: 'Get the app' },
      { name: 'Max', price: '$5.99', per: '/ month', badge: 'max', points: ['Always at the top of employer search', 'Gold badge and a profile frame', 'Your own profile header', 'Everything in Premium'], cta: 'Get the app', featured: true },
    ] as Plan[],
    employer: [
      { name: 'Free', price: '$0', per: '', points: ['1 active vacancy', 'Applicants and chats', 'Verified badge with your trade licence', 'Team of recruiters'], cta: 'Get the app' },
      { name: 'Premium', price: '$3.99', per: '/ month', points: ['Unlimited active vacancies', 'Message any candidate directly', 'Everything in Free', 'Cancel any time'], cta: 'Get the app', featured: true },
      { name: 'Urgent hiring', price: '$2.99', per: 'once', urgent: true, points: ['24 hours at the top of the feed and search', 'Urgent badge on your vacancy', 'In the Urgent tab of candidates’ filters', 'No subscription'], cta: 'Get the app' },
    ] as Plan[],
  },
  faq: {
    title: 'Questions',
    items: [
      ['Who is 919 for?', 'For people who work in hospitality, events, modeling, music, service and F&B — and for the venues, agencies and event companies that hire them. Freelance, part-time and full-time.'],
      ['Is it free for talent?', 'Yes, to start: a profile, chats with employers, Available today and up to 10 applications are free. Premium ($2.99 a month) removes the limit. Max ($5.99 a month) also puts you at the top of employer search with a gold badge, a profile frame and your own header.'],
      ['What is Available today?', 'A switch for days when you can start work right away. For 24 hours you appear in the Today tab for employers; an hour before it ends we ask if you want to extend it.'],
      ['How do employers get verified?', 'The company uploads its trade licence. The 919 team checks it, usually within 24 hours, and adds a blue badge next to the company name. Only the 919 team sees the document.'],
      ['How does 919 keep talent safe?', 'Every vacancy is reviewed before it goes live, and the ones that ask candidates to pay are rejected. People who are available today can be messaged only by verified companies. Report or block anyone in two taps.'],
      ['How fast does a vacancy go live?', 'Usually within an hour after you send it. If something needs fixing, you get a list of corrections and can resubmit right away.'],
      ['What does Urgent hiring do?', 'For 24 hours your vacancy is pinned to the top of the feed and search, gets an Urgent badge and appears in the Urgent tab of candidates’ filters. It costs $2.99 once.'],
      ['Can I message a candidate without an application?', 'With Premium, yes: send a contact request from their profile, video or search. They can accept or decline.'],
      ['Where does 919 work?', 'In the UAE first — Dubai, Abu Dhabi, Sharjah — with vacancies in Saudi Arabia and Qatar too.'],
    ] as [string, string][],
  },
  cta: { title: 'Your next job is already posted', text: 'Download 919 and see it today.' },
  footer: { rights: '© 919 App, 2026', contact: 'Write to us', top: 'Back to top' },
};

const ru: typeof en = {
  meta: {
    title: '919 — Работа и люди',
    description:
      '919 — приложение для найма в hospitality, ивентах, модельном бизнесе, музыке и бьюти в ОАЭ. Соискатели показывают себя на фото и видео. Работодатели публикуют вакансию и нанимают за день.',
  },
  nav: { talent: 'Соискателям', employers: 'Работодателям', features: 'Возможности', pricing: 'Цены', faq: 'Вопросы', download: 'Скачать', lang: 'EN', langHref: '/' },
  hero: {
    title: ['Найди работу.', 'Найди людей.'],
    lead: 'Приложение для найма в hospitality, ивентах, модельном бизнесе и музыке в ОАЭ. Соискатели показывают себя на фото и видео. Проверенные работодатели публикуют вакансию и нанимают за день.',
    note: 'Начать — бесплатно. iOS и Android.',
    ios: 'Загрузите в', iosStore: 'App Store',
    android: 'Доступно в', androidStore: 'Google Play',
    wall: 'Хостес, диджеи, модели и бармены в 919',
  },
  roles: {
    title: 'Одно приложение, две стороны',
    lead: 'Роль выбирается при регистрации. Для другой роли можно завести второй аккаунт.',
    talentTab: 'Ищу работу',
    employerTab: 'Ищу людей',
    talent: [
      { title: 'Один раз заполни профиль', text: 'Выбери сферы — сколько угодно, — добавь фото и короткую видеопрезентацию. Работодатель увидит тебя таким, какой ты есть.', screen: 't_profile', alt: 'Профиль соискателя с фото и сферами' },
      { title: 'Найди подходящую работу', text: 'Лента настоящих вакансий с оплатой, типом контракта и датой старта. Фильтры по городу, сфере и ставке, а во вкладке Urgent — работа, которая начинается сегодня.', screen: 't_feed', alt: 'Лента вакансий с фильтром Urgent' },
      { title: 'Свободен сегодня? Скажи об этом', text: 'Включи Available today — и на 24 часа ты во вкладке Today у работодателей, которым нужны люди прямо сейчас. Написать тебе оттуда могут только проверенные компании.', screen: 't_avail', alt: 'Лента с включённым Available today' },
      { title: 'Откликнись в один тап', text: 'До отклика видно, что просит работодатель и насколько ты подходишь. Можно добавить короткое сообщение, чтобы выделиться.', screen: 't_vacancy', alt: 'Страница вакансии' },
      { title: 'Договорись с работодателем', text: 'Когда работодатель принимает отклик, открывается чат. Обсуди время и дресс-код, отправь контакт или адрес.', screen: 't_chat', alt: 'Чат с работодателем' },
      { title: 'Тебя наняли', text: 'Когда работодатель подтверждает тебя, приходит уведомление, а вакансия переезжает во вкладку Active с датой и временем выхода. Чат — в один тап.', screen: 't_hired', alt: 'Вакансия со статусом «You’re hired»' },
    ],
    employer: [
      { title: 'Получи галочку', text: 'Загрузи торговую лицензию. Команда 919 проверит её за 24 часа и поставит синюю галочку у названия компании — кандидаты доверяют таким компаниям и отвечают быстрее.', screen: 'e_verify', alt: 'Проверенная компания с одобренной лицензией' },
      { title: 'Вакансия за четыре шага', text: 'Сфера и роль, описание с фото, оплата и требования под роль — рост для моделей, жанр для диджеев, языки для хостес.', screen: 'e_post', alt: 'Новая вакансия, первый шаг' },
      { title: 'Проверим в течение часа', text: 'Команда 919 смотрит каждую вакансию до публикации. Если что-то не так, придёт понятный список правок.', screen: 'e_hub', alt: 'Вакансии с результатами модерации' },
      { title: 'Выбирай из живых откликов', text: 'У каждого кандидата фото, языки, опыт и часто видео. Сравнивай их и открывай любой профиль в один тап.', screen: 'e_applicants', alt: 'Отклики на вакансию' },
      { title: 'Нужен человек сегодня?', text: 'Во вкладке Today — те, кто готов выйти прямо сейчас. Статус включают на 24 часа, поэтому список всегда свежий.', screen: 'e_today', alt: 'Таланты, свободные сегодня' },
      { title: 'Договорись о деталях', text: 'Один чат на кандидата, внутри — отдельные ветки по вакансиям, чтобы букинг диджея не смешался с вакансией хостес. Или найди таланты сам и напиши первым.', screen: 'e_chat', alt: 'Чат с кандидатом' },
    ],
  },
  features: {
    title: 'Для работы, где люди встречают людей',
    video: { title: 'Видео говорит больше резюме', text: 'Соискатель записывает короткую презентацию прямо в приложении. Работодатель смотрит её до первого звонка и сразу видит, кто подходит.' },
    urgent: { title: 'Срочный найм', text: 'Нужен человек на сегодня? Вакансия поднимается в топ ленты и поиска с ярким бейджем на 24 часа.', price: '$2.99 разово', clock: 'осталось в топе' },
    moderation: { title: 'Проверенные работодатели', text: 'Компании загружают торговую лицензию, команда 919 проверяет её — только после этого появляется синяя галочка. Каждую вакансию тоже смотрим до публикации: если кандидатов просят платить, она отклоняется.', states: ['Лицензия', 'На проверке', 'Проверено'] },
    avail: {
      title: 'Свободен сегодня? Скажи об этом',
      text: 'Один переключатель — и на 24 часа ты во вкладке Today. Работодатели, которым нужен человек на вечер, видят тебя первым, а написать могут только проверенные компании.',
      toggle: 'Available today',
      sub: 'Покажи работодателям, что можешь выйти сегодня',
      when: ['Вечер', 'Любое время', 'Ночь'],
    },
    chats: { title: 'Чаты не путаются', text: 'Личные сообщения и каждая вакансия живут в отдельных ветках одного чата. Пожаловаться или заблокировать — в два тапа.', chips: ['Direct', 'Hostess, rooftop', 'DJ for a boat party'] },
    team: { title: 'Нанимайте командой', text: 'Пригласи рекрутеров в профиль компании. Все публикуют вакансии и общаются от одного проверенного имени.' },
  },
  fields: {
    title: 'Выбирайте свою роль',
    lead: 'От одного вечера до постоянного контракта.',
    list: [
      { name: 'Hospitality', roles: 'Хостес, официанты, бармены, champagne girls, консьержи' },
      { name: 'Ивенты', roles: 'Промоутеры, ведущие, MC, аниматоры, ивент-команда' },
      { name: 'Модели', roles: 'Подиумные, коммерческие, имиджевые и промо-модели' },
      { name: 'Музыка', roles: 'Диджеи, вокалисты, живые группы, гитаристы, пианисты' },
      { name: 'Сервис', roles: 'Фотографы, видеографы, стилисты, визажисты' },
      { name: 'F&B', roles: 'Бариста, сомелье, шеф-де-ранги, кофейные стойки' },
    ],
  },
  pricing: {
    title: 'Начать — бесплатно',
    lead: 'Обе стороны начинают бесплатно. Платишь, только когда нужно больше.',
    talentTab: 'Соискателям',
    employerTab: 'Работодателям',
    talent: [
      { name: 'Free', price: '$0', per: '', points: ['Профиль с фото и видео', 'До 10 откликов', 'Чаты с работодателями', 'Available today'], cta: 'Скачать' },
      { name: 'Premium', price: '$2.99', per: '/ месяц', badge: 'premium', points: ['Отклики без ограничений', 'До 20 фото и 5 видео', 'Синий значок в профиле', 'Всё из Free'], cta: 'Скачать' },
      { name: 'Max', price: '$5.99', per: '/ месяц', badge: 'max', points: ['Всегда в топе поиска у работодателей', 'Золотой значок и рамка профиля', 'Своя шапка профиля', 'Всё из Premium'], cta: 'Скачать', featured: true },
    ],
    employer: [
      { name: 'Free', price: '$0', per: '', points: ['1 активная вакансия', 'Отклики и чаты', 'Галочка по торговой лицензии', 'Команда рекрутеров'], cta: 'Скачать' },
      { name: 'Premium', price: '$3.99', per: '/ месяц', points: ['Сколько угодно активных вакансий', 'Пиши любому кандидату напрямую', 'Всё из Free', 'Отмена в любой момент'], cta: 'Скачать', featured: true },
      { name: 'Срочный найм', price: '$2.99', per: 'разово', urgent: true, points: ['24 часа в топе ленты и поиска', 'Бейдж Urgent на вакансии', 'Во вкладке Urgent у соискателей', 'Без подписки'], cta: 'Скачать' },
    ],
  },
  faq: {
    title: 'Вопросы',
    items: [
      ['Для кого 919?', 'Для тех, кто работает в hospitality, ивентах, модельном бизнесе, музыке, сервисе и F&B, — и для заведений, агентств и ивент-компаний, которые их нанимают. Фриланс, частичная и полная занятость.'],
      ['Соискателям бесплатно?', 'Да, для старта: профиль, чаты с работодателями, Available today и до 10 откликов — бесплатно. Premium ($2.99 в месяц) снимает лимит. Max ($5.99 в месяц) ещё и ставит тебя в топ поиска у работодателей — с золотым значком, рамкой и своей шапкой профиля.'],
      ['Что такое Available today?', 'Переключатель на дни, когда можешь выйти на работу сразу. На 24 часа ты появляешься во вкладке Today у работодателей, а за час до конца мы спросим, продлить ли статус.'],
      ['Как работодатель проходит проверку?', 'Компания загружает торговую лицензию. Команда 919 проверяет её, обычно за 24 часа, и ставит синюю галочку у названия. Документ видит только команда 919.'],
      ['Как 919 защищает соискателей?', 'Каждую вакансию проверяем до публикации, а те, где кандидатов просят платить, отклоняем. Тем, кто свободен сегодня, могут писать только проверенные компании. Пожаловаться или заблокировать — в два тапа.'],
      ['Как быстро вакансия выходит в ленту?', 'Обычно в течение часа после отправки. Если нужны правки, придёт их список — исправить и отправить снова можно сразу.'],
      ['Что даёт срочный найм?', 'На 24 часа вакансия закрепляется вверху ленты и поиска, получает бейдж Urgent и попадает во вкладку Urgent в фильтрах соискателей. Стоит $2.99 разово.'],
      ['Можно написать кандидату без отклика?', 'С Premium — да: отправьте запрос на контакт из профиля, видео или поиска. Кандидат может принять или отклонить его.'],
      ['Где работает 919?', 'В первую очередь в ОАЭ — Дубай, Абу-Даби, Шарджа, — а также есть вакансии в Саудовской Аравии и Катаре.'],
    ],
  },
  cta: { title: 'Твоя следующая работа уже опубликована', text: 'Скачай 919 и посмотри сегодня.' },
  footer: { rights: '© 919 App, 2026', contact: 'Написать нам', top: 'Наверх' },
};

export const copy = { en, ru };
