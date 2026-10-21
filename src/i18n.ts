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

const en = {
  meta: {
    title: '919 — Find work. Find people.',
    description:
      '919 is the hiring app for hospitality, events, modeling, music and beauty in the UAE. Talent shows who they are with photos and a video. Employers post a vacancy and hire within a day.',
  },
  nav: { talent: 'For talent', employers: 'For employers', features: 'Features', pricing: 'Pricing', faq: 'FAQ', download: 'Get the app', lang: 'RU', langHref: '/ru/' },
  hero: {
    title: ['Find work.', 'Find people.'],
    lead: 'The hiring app for hospitality, events, modeling and music in the UAE. Talent shows who they are with photos and a video. Employers post a vacancy and hire within a day.',
    note: 'Free for talent. iOS and Android.',
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
      { title: 'Find the right shift', text: 'A feed of real vacancies with pay, contract type and start date. Filter by city, field and rate, or open the Urgent tab for shifts that start today.', screen: 't_feed', alt: 'Vacancy feed with Urgent filter' },
      { title: 'Apply in one tap', text: 'See what the employer asks for and how well you fit before you apply. Add a short note if you want to stand out.', screen: 't_vacancy', alt: 'Vacancy page' },
      { title: 'Talk and get hired', text: 'When the employer accepts you, a chat opens. Agree on the shift, share your contact or location, and track every application in one place.', screen: 't_chat', alt: 'Chat with an employer' },
    ] as Step[],
    employer: [
      { title: 'Post a vacancy in four steps', text: 'Field and role, basic info with photos, pay, then requirements that depend on the role — height for models, genre for DJs, languages for hosts.', screen: 'e_post', alt: 'New vacancy, step one' },
      { title: 'We check it within an hour', text: 'The 919 team reviews every vacancy before it goes live. If something needs fixing, you get a clear list of what to change.', screen: 'e_hub', alt: 'Vacancies with moderation results' },
      { title: 'Pick from real applicants', text: 'Each applicant comes with photos, languages, experience and often a video. Accept or decline in a tap — declined candidates get a polite notice.', screen: 'e_applicants', alt: 'Applicants of a vacancy' },
      { title: 'Chat and hire', text: 'One chat per candidate, split by vacancy, so a DJ booking never mixes with a hostess shift. Or find talent yourself and write first.', screen: 'e_chat', alt: 'Chat with a candidate' },
    ] as Step[],
  },
  features: {
    title: 'Made for jobs where people meet people',
    video: { title: 'A video says more than a CV', text: 'Talent records a short presentation right in the app. Employers watch it before the first call — and skip the ones that don’t fit.' },
    urgent: { title: 'Urgent hiring', text: 'Need someone tonight? Your vacancy goes to the top of the feed and search with a hot badge for 24 hours.', price: '$2.99 once', clock: 'left at the top' },
    moderation: { title: 'Checked by people', text: 'Every company is verified and every vacancy is reviewed before it goes live. Vacancies that ask candidates to pay are rejected.', states: ['On review', 'Changes needed', 'Active'] },
    chats: { title: 'Chats that keep context', text: 'Direct messages and each vacancy live in separate threads of one chat. Report or block anyone in two taps.', chips: ['Direct', 'Hostess, rooftop', 'DJ for a boat party'] },
    team: { title: 'Hire as a team', text: 'Invite recruiters to your company profile. Everyone posts and chats under one verified name.' },
  },
  fields: {
    title: 'Six fields, hundreds of roles',
    lead: 'From a one-night event to a full-time contract.',
    list: [
      { name: 'Hospitality', roles: 'Hostesses, waiters, bartenders, champagne girls, concierges', img: 'talent1' },
      { name: 'Events', roles: 'Promoters, event hosts, MCs, animators, event crew', img: 'talent2' },
      { name: 'Modeling', roles: 'Runway, commercial, image and promo models', img: 'talent5' },
      { name: 'Music', roles: 'DJs, singers, live bands, guitarists, pianists', img: 'talent4' },
      { name: 'Service', roles: 'Photographers, videographers, stylists, make-up artists', img: 'talent3' },
      { name: 'F&B', roles: 'Baristas, sommeliers, chefs de rang, coffee bar attendants', img: 'talent2' },
    ],
  },
  pricing: {
    title: 'Free to start',
    lead: 'Talent never pays. Employers pay only for more reach.',
    plans: [
      { name: 'Talent', price: 'Free', per: '', points: ['Profile with photos and video', 'Unlimited applications', 'Chats with employers', 'Saved vacancies'], cta: 'Get the app' },
      { name: 'Employer', price: 'Free', per: '', points: ['1 active vacancy', 'Applicants and chats', 'Verified company page', 'Team of recruiters'], cta: 'Get the app' },
      { name: 'Premium', price: '$3.99', per: '/ month', points: ['Unlimited active vacancies', 'Message any candidate directly', 'Everything in Employer', 'Cancel any time'], cta: 'Get the app', featured: true },
    ],
    addon: 'Urgent hiring is a one-time $2.99 for 24 hours at the top. No subscription.',
  },
  faq: {
    title: 'Questions',
    items: [
      ['Who is 919 for?', 'For people who work in hospitality, events, modeling, music, service and F&B — and for the venues, agencies and event companies that hire them. Freelance, part-time and full-time.'],
      ['Is it free for talent?', 'Yes. Creating a profile, applying and chatting with employers is free.'],
      ['How do employers get verified?', 'After sign-up the 919 team checks the company details, usually within a few hours. Until then you can browse talent and save candidates.'],
      ['How fast does a vacancy go live?', 'Usually within an hour after you send it. If something needs fixing, you get a list of corrections and can resubmit right away.'],
      ['What does Urgent hiring do?', 'For 24 hours your vacancy is pinned to the top of the feed and search, gets an Urgent badge and appears in the Urgent tab of candidates’ filters. It costs $2.99 once.'],
      ['Can I message a candidate without an application?', 'With Premium, yes: send a contact request from their profile, video or search. They can accept or decline.'],
      ['Where does 919 work?', 'In the UAE first — Dubai, Abu Dhabi, Sharjah — with vacancies in Saudi Arabia and Qatar too.'],
    ] as [string, string][],
  },
  cta: { title: 'Your next shift is already posted', text: 'Download 919 and see it today.' },
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
    lead: 'Приложение для найма в hospitality, ивентах, модельном бизнесе и музыке в ОАЭ. Соискатели показывают себя на фото и видео. Работодатели публикуют вакансию и нанимают за день.',
    note: 'Для соискателей бесплатно. iOS и Android.',
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
      { title: 'Найди подходящую смену', text: 'Лента настоящих вакансий с оплатой, типом контракта и датой старта. Фильтры по городу, сфере и ставке, а во вкладке Urgent — смены, которые начинаются сегодня.', screen: 't_feed', alt: 'Лента вакансий с фильтром Urgent' },
      { title: 'Откликнись в один тап', text: 'До отклика видно, что просит работодатель и насколько ты подходишь. Можно добавить короткое сообщение, чтобы выделиться.', screen: 't_vacancy', alt: 'Страница вакансии' },
      { title: 'Договорись и выходи на смену', text: 'Когда работодатель принимает отклик, открывается чат. Обсуди смену, отправь контакт или адрес, следи за всеми откликами в одном месте.', screen: 't_chat', alt: 'Чат с работодателем' },
    ],
    employer: [
      { title: 'Вакансия за четыре шага', text: 'Сфера и роль, описание с фото, оплата и требования под роль — рост для моделей, жанр для диджеев, языки для хостес.', screen: 'e_post', alt: 'Новая вакансия, первый шаг' },
      { title: 'Проверим в течение часа', text: 'Команда 919 смотрит каждую вакансию до публикации. Если что-то не так, придёт понятный список правок.', screen: 'e_hub', alt: 'Вакансии с результатами модерации' },
      { title: 'Выбирай из живых откликов', text: 'У каждого кандидата фото, языки, опыт и часто видео. Принять или отклонить — в один тап, отклонённые получают вежливое уведомление.', screen: 'e_applicants', alt: 'Отклики на вакансию' },
      { title: 'Общайся и нанимай', text: 'Один чат на кандидата, внутри — отдельные ветки по вакансиям, чтобы букинг диджея не смешался со сменой хостес. Или найди таланты сам и напиши первым.', screen: 'e_chat', alt: 'Чат с кандидатом' },
    ],
  },
  features: {
    title: 'Для работы, где люди встречают людей',
    video: { title: 'Видео говорит больше резюме', text: 'Соискатель записывает короткую презентацию прямо в приложении. Работодатель смотрит её до первого звонка и сразу видит, кто подходит.' },
    urgent: { title: 'Срочный найм', text: 'Нужен человек на сегодня? Вакансия поднимается в топ ленты и поиска с ярким бейджем на 24 часа.', price: '$2.99 разово', clock: 'осталось в топе' },
    moderation: { title: 'Проверено людьми', text: 'Каждая компания проходит верификацию, каждая вакансия — модерацию. Вакансии, где кандидатов просят платить, отклоняются.', states: ['На проверке', 'Нужны правки', 'Активна'] },
    chats: { title: 'Чаты не путаются', text: 'Личные сообщения и каждая вакансия живут в отдельных ветках одного чата. Пожаловаться или заблокировать — в два тапа.', chips: ['Direct', 'Hostess, rooftop', 'DJ for a boat party'] },
    team: { title: 'Нанимайте командой', text: 'Пригласи рекрутеров в профиль компании. Все публикуют вакансии и общаются от одного проверенного имени.' },
  },
  fields: {
    title: 'Шесть сфер, сотни ролей',
    lead: 'От одного вечера до постоянного контракта.',
    list: [
      { name: 'Hospitality', roles: 'Хостес, официанты, бармены, champagne girls, консьержи', img: 'talent1' },
      { name: 'Ивенты', roles: 'Промоутеры, ведущие, MC, аниматоры, ивент-команда', img: 'talent2' },
      { name: 'Модели', roles: 'Подиумные, коммерческие, имиджевые и промо-модели', img: 'talent5' },
      { name: 'Музыка', roles: 'Диджеи, вокалисты, живые группы, гитаристы, пианисты', img: 'talent4' },
      { name: 'Сервис', roles: 'Фотографы, видеографы, стилисты, визажисты', img: 'talent3' },
      { name: 'F&B', roles: 'Бариста, сомелье, шеф-де-ранги, кофейные стойки', img: 'talent2' },
    ],
  },
  pricing: {
    title: 'Начать — бесплатно',
    lead: 'Соискатели не платят никогда. Работодатели платят только за больший охват.',
    plans: [
      { name: 'Соискатель', price: 'Бесплатно', per: '', points: ['Профиль с фото и видео', 'Отклики без ограничений', 'Чаты с работодателями', 'Сохранённые вакансии'], cta: 'Скачать' },
      { name: 'Работодатель', price: 'Бесплатно', per: '', points: ['1 активная вакансия', 'Отклики и чаты', 'Проверенная страница компании', 'Команда рекрутеров'], cta: 'Скачать' },
      { name: 'Premium', price: '$3.99', per: '/ месяц', points: ['Сколько угодно активных вакансий', 'Пиши любому кандидату напрямую', 'Всё из тарифа «Работодатель»', 'Отмена в любой момент'], cta: 'Скачать', featured: true },
    ],
    addon: 'Срочный найм — разовые $2.99 за 24 часа в топе. Без подписки.',
  },
  faq: {
    title: 'Вопросы',
    items: [
      ['Для кого 919?', 'Для тех, кто работает в hospitality, ивентах, модельном бизнесе, музыке, сервисе и F&B, — и для заведений, агентств и ивент-компаний, которые их нанимают. Фриланс, частичная и полная занятость.'],
      ['Соискателям бесплатно?', 'Да. Профиль, отклики и чаты с работодателями — бесплатно.'],
      ['Как работодатель проходит проверку?', 'После регистрации команда 919 проверяет данные компании, обычно за несколько часов. А пока можно смотреть таланты и сохранять кандидатов.'],
      ['Как быстро вакансия выходит в ленту?', 'Обычно в течение часа после отправки. Если нужны правки, придёт их список — исправить и отправить снова можно сразу.'],
      ['Что даёт срочный найм?', 'На 24 часа вакансия закрепляется вверху ленты и поиска, получает бейдж Urgent и попадает во вкладку Urgent в фильтрах соискателей. Стоит $2.99 разово.'],
      ['Можно написать кандидату без отклика?', 'С Premium — да: отправьте запрос на контакт из профиля, видео или поиска. Кандидат может принять или отклонить его.'],
      ['Где работает 919?', 'В первую очередь в ОАЭ — Дубай, Абу-Даби, Шарджа, — а также есть вакансии в Саудовской Аравии и Катаре.'],
    ],
  },
  cta: { title: 'Твоя следующая смена уже опубликована', text: 'Скачай 919 и посмотри сегодня.' },
  footer: { rights: '© 919 App, 2026', contact: 'Написать нам', top: 'Наверх' },
};

export const copy = { en, ru };
