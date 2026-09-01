const GEMSPACE = "https://links.gemspace.com/local-space/DA-MAYAK";
const TELEGRAM = "https://t.me/mayak0903";
const PERSONAL_GEMSPACE = "https://links.gemspace.com/invite/Lidia-Gurinovic";
const PERSONAL_TELEGRAM = "https://t.me/Lidiya1703";
const INSTAGRAM = "https://www.instagram.com/psycholog.depressii?igsh=MTZkbHNrenF3a3Q1NA==";

const certificates = Array.from({ length: 16 }, (_, index) => ({
  src: `/certificates/certificate-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `Документ об образовании Лидии, страница ${index + 1}`,
}));

const principles = [
  ["Анонимность", "Кто был на встрече и что рассказывал, остаётся внутри круга."],
  ["Равенство", "Мы общаемся на равных, по имени и на «ты». Здесь нет советов сверху."],
  ["Бережность", "Делимся чувствами и личным опытом, не критикуем и не учим жить."],
  ["Самостоятельность", "Сообщество существует благодаря добровольному участию и пожертвованиям."],
  ["Уважение", "Не обсуждаем политику и религию. Минута тишины и молитва всегда опциональны."],
  ["Свобода", "Можно слушать, молчать, быть без камеры и приходить в своём ритме."],
];

const rules = [
  "Сохраняем конфиденциальность и не выносим личные истории за пределы встречи.",
  "Говорим от первого лица — о себе, своих чувствах и своём опыте.",
  "Не перебиваем, не оцениваем и не даём непрошеных советов.",
  "Не обсуждаем политику и религию, уважаем разные взгляды.",
  "Не рекламируем товары, услуги и сторонние сообщества без согласования.",
  "Камера и участие в разговоре — по желанию. Можно просто быть рядом.",
  "Группа взаимопомощи не заменяет медицинскую или психотерапевтическую помощь.",
];

export default function Home() {
  return (
    <main>
      <header className="nav wrap">
        <a className="brand" href="#top"><span className="brandMark">М</span><span>Маяк поддержки</span></a>
        <nav aria-label="Основная навигация"><a href="#community">Сообщество</a><a href="#join">Как вступить</a><a href="#newcomers">Новичкам</a><a href="#therapy">Терапия</a></nav>
        <a className="navCta" href={GEMSPACE} target="_blank" rel="noreferrer">Войти в группу</a>
      </header>

      <section className="hero" id="top"><div className="wrap heroGrid">
        <div className="heroCopy"><p className="eyebrow">Сообщество взаимопомощи при депрессии</p><h1>Маяк<br/><em>поддержки</em></h1><p className="lead">Мы — люди, которые делятся опытом, силой и надеждой. Сообщество создано и курируется практикующим психологом, прошедшим собственный путь выздоровления.</p><div className="heroActions"><a className="button primary" href="#community">Бесплатная группа</a><a className="button ghost" href="#therapy">Профессиональная терапия</a></div><p className="privacy">Бережно · конфиденциально · без осуждения</p></div>
        <div className="visual"><div className="logoCircle"><img src="/mayak-logo.jpg" alt="Логотип Маяк поддержки — маяк среди волн"/></div><p>Мы держим свет включённым<br/>специально для вас</p></div>
      </div></section>

      <section className="wrap directions" aria-label="Направления помощи">
        <a className="direction" href="#community"><span>Бесплатно</span><h2>Группа поддержки</h2><p>Онлайн-встречи равных. Безопасное пространство, чтобы быть услышанным.</p><b>Узнать и присоединиться →</b></a>
        <a className="direction warm" href="#therapy"><span>С психологом</span><h2>Профессиональная терапия</h2><p>Личные сессии и арт-терапия с человеком, который знает этот путь изнутри.</p><b>Подробнее о программах →</b></a>
      </section>

      <section className="creator wrap"><div className="portrait"><img src="/lidia-gurinovich.jpg" alt="Психолог Лидия Гуринович"/></div><div><p className="eyebrow">Знакомство с создателем</p><h2>Я знаю, как нужен свет, когда берега не видно</h2><p>Здравствуйте. Меня зовут Лидия. Я психолог, и я знаю, каково это — когда внутри шторм, а снаружи нужно жить. Я прошла через БАР 2 типа и глубокие депрессивные эпизоды, была участницей и ведущей групп поддержки, прошла личную терапию. Сейчас у меня вторая длительная ремиссия, и я помогаю другим — как волонтёр и как специалист. «Маяк поддержки» — это место, где не нужно объяснять, почему трудно: здесь вас поймут и помогут найти опору.</p><a className="textLink" href="#therapy">Моя история и программы →</a></div></section>

      <section className="community section" id="community"><div className="wrap"><div className="sectionHead"><div><p className="eyebrow">О бесплатном сообществе</p><h2>Поддержка на равных</h2></div><p>Мы встречаемся онлайн, чтобы поддерживать друг друга. Здесь нет врачей, оценок и советов «сверху» — только бережное присутствие и прожитый опыт.</p></div><div className="benefits"><article><h3>Быть услышанным</h3><p>Можно выговориться без осуждения или просто послушать других.</p></article><article><h3>Встретить понимание</h3><p>Рядом люди, которые знают, что такое тёмная вода депрессии.</p></article><article><h3>Найти опору</h3><p>Чувство принадлежности и практические способы справляться день за днём.</p></article></div><div className="principles">{principles.map(([title,text],i)=><article key={title}><b>0{i+1}</b><h3>{title}</h3><p>{text}</p></article>)}</div><p className="important"><b>Важно:</b> группа — пространство взаимопомощи, а не психотерапевтический процесс. Профессиональная помощь представлена отдельно.</p></div></section>

      <section className="section wrap" id="join"><div className="sectionHead"><div><p className="eyebrow">Как присоединиться</p><h2>Три простых шага</h2></div><a className="button primary" href={GEMSPACE} target="_blank" rel="noreferrer">Открыть Gem Space</a></div><div className="stepsGrid"><article><span>01</span><h3>Скачайте Gem Space</h3><p>Установите бесплатное приложение на телефон или откройте веб-версию.</p></article><article><span>02</span><h3>Зайдите на собрание</h3><p>Выберите удобное время. Можно подключиться без видео и молча.</p></article><article><span>03</span><h3>Оставайтесь с нами</h3><p>Приходите в своём ритме. Регулярность помогает мягко выстраивать опору.</p></article></div><div className="schedule"><div><p className="eyebrow">Расписание · МСК</p><h3>Онлайн-встречи в 14:00</h3><p>Суббота — выходной. Никакой предварительной записи.</p></div><div className="scheduleJoin"><a className="button primary" href={GEMSPACE} target="_blank" rel="noreferrer">Присоединиться</a></div></div></section>

      <section className="newcomers section" id="newcomers"><div className="wrap newcomerGrid"><div><p className="eyebrow light">Новичкам</p><h2>Добро пожаловать<br/>в «Маяк поддержки»</h2><p className="bigText">Если шторм в душе не стихает, а волны накрывают с головой — знайте: вы нашли убежище.</p><p>Мы не обещаем, что буря утихнет мгновенно. Но здесь можно переждать самые тяжёлые волны, высушить паруса и получить немного света, чтобы плыть дальше.</p></div><div className="meeting"><h3>Что ждёт на первой встрече</h3><ol><li>Вступительное слово ведущего и минута тишины.</li><li>Опциональная короткая молитва о душевном покое.</li><li>Круг знакомств: назовите любое имя, напишите в чат или промолчите.</li><li>«Чайная» — неформальное общение после основной части.</li></ol><a className="button cream" href={GEMSPACE} target="_blank" rel="noreferrer">Прийти на встречу</a></div></div><div className="wrap faq"><h3>Частые вопросы</h3>{[["Это бесплатно?","Да. Добровольные пожертвования принимаются, но не обязательны."],["Я стесняюсь говорить","Можно просто слушать. Многие начинают именно так."],["Вдруг я заплачу?","Это естественно. Здесь вас поймут и не будут оценивать."],["Обязательно включать камеру?","Нет. Камера, имя и участие в разговоре — на ваше усмотрение."]].map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

      <section className="section wrap" id="rules"><div className="sectionHead"><div><p className="eyebrow">Правила группы</p><h2>Чтобы каждому было безопасно</h2></div><p>Присоединяясь к встрече, участники принимают эти простые правила бережного общения.</p></div><div className="rules">{rules.map((rule,i)=><div key={rule}><span>{String(i+1).padStart(2,"0")}</span><p>{rule}</p></div>)}</div></section>

      <section className="therapy section" id="therapy"><div className="wrap"><div className="sectionHead"><div><p className="eyebrow light">О специалисте</p><h2>Профессиональная помощь<br/>от психолога, который прошёл этот путь</h2></div><p>Я соединяю профессиональные знания с человеческой теплотой и пониманием, которое не даётся учебниками.</p></div><div className="qualification"><span className="qualificationPhoto"><img src="/lidia-gurinovich-circle.jpg" alt="Лидия Гуринович"/></span><div><h3>Лидия Гуринович</h3><p>Практикующий психолог. Опыт ведения групп поддержки и индивидуального консультирования людей с депрессией и биполярным расстройством. Собственный путь устойчивой ремиссии — более двух лет.</p></div></div><div className="credentials"><div className="credentialsHead"><p className="eyebrow light">Образование и сертификаты</p><h3>Профессиональная подготовка</h3><p>Нажмите на документ, чтобы открыть его в полном размере.</p></div><div className="certificateGrid">{certificates.map((certificate)=><a href={certificate.src} target="_blank" rel="noreferrer" key={certificate.src} aria-label="Открыть документ"><img src={certificate.src} alt={certificate.alt} loading="lazy"/><span>Открыть документ ↗</span></a>)}</div></div><div className="programs"><article><small>Индивидуально</small><h3>Личная терапия</h3><p>Онлайн, 50 минут. Интегративный подход с опорой на КПТ, терапию принятия и ответственности и арт-терапевтические техники.</p><ul><li>Депрессивные состояния и апатия</li><li>Эмоциональная неустойчивость при БАР</li><li>Потеря смыслов и профилактика рецидивов</li></ul><p className="placeholder">Стоимость и пакеты встреч — уточняются лично</p><a className="button primary" href={PERSONAL_TELEGRAM} target="_blank" rel="noreferrer">Записаться</a></article><article><small>Группа до 8 человек</small><h3>«Свет внутри»</h3><p>8 онлайн-встреч по 1,5 часа. Арт-терапия помогает выразить чувства, на которые не хватает слов, и найти ресурсы через творчество.</p><ul><li>Художественные навыки не требуются</li><li>Бережный путь от пустоты к контакту с собой</li><li>Дата старта и стоимость — скоро</li></ul><p className="placeholder">Оставьте заявку, чтобы узнать о ближайшем потоке</p><a className="button primary" href={PERSONAL_GEMSPACE} target="_blank" rel="noreferrer">Узнать подробнее</a></article><article className="groupTherapy"><small>Группа до 6 человек</small><h3>Групповая терапия для людей с депрессией</h3><p>Авторская группа психолога, создателя «Маяка поддержки».</p><h4>Почему так мало людей?</h4><p>Чтобы каждому было безопасно, спокойно и достаточно внимания.</p><h4>Что даёт работа с психологом — в отличие от бесплатных встреч</h4><ul><li><b>Структура и безопасность</b> — я управляю процессом, чтобы каждый был услышан, а обсуждение проходило безопасно, с большим доверием друг к другу в своём малом кругу.</li><li><b>Профессиональная обратная связь</b> — не просто мнения, а квалифицированный взгляд на ваши реакции и состояние.</li><li><b>Проверенные техники</b> — упражнения из доказательной терапии, которые помогают менять состояние, а не просто говорить о нём.</li><li><b>Работа с причинами</b> — разбираем не только симптомы, но и то, что поддерживает депрессию.</li><li><b>Живой опыт ремиссии</b> — я знаю, что действительно помогает на практике, потому что сама прошла через биполярное расстройство 2 типа и достигла устойчивой ремиссии.</li></ul><p className="placeholder"><b>Формат:</b> онлайн, раз в неделю, до 90 минут, конфиденциально.</p><a className="button primary" href={PERSONAL_TELEGRAM} target="_blank" rel="noreferrer">Узнать подробнее</a></article></div><p className="separation">Платные программы — отдельная от бесплатной группы деятельность. Никто из участников не обязан обращаться к специалисту платно, и это не влияет на участие в сообществе.</p></div></section>

      <section className="support section" id="support"><div className="wrap supportGrid"><div><p className="eyebrow">Поддержать сообщество</p><h2>Помогите маяку<br/>оставаться включённым</h2><p>Группа держится на энтузиазме волонтёров и добровольных взносах участников.</p></div><div className="supportCards"><article><h3>Стать волонтёром</h3><p>Нам нужны ведущие и дублёры, спикерхантеры, помощь с анонсами и социальными сетями.</p><a className="textLink" href={TELEGRAM} target="_blank" rel="noreferrer">Написать в Telegram →</a></article><article><h3>Сделать пожертвование</h3><p>Средства идут на онлайн-сервисы, буклеты и поддержку сайта. Все взносы добровольны.</p><code>Т‑Банк · 2200 7009 5838 8471</code><small>Получатель: Гуринович Лидия Н.</small></article></div></div></section>

      <section className="contacts section" id="contacts"><div className="wrap contactGrid"><div><p className="eyebrow">Контакты</p><h2>Оставайтесь<br/>на связи</h2><p>Полный раздел контактов и форма обратной связи появятся после запуска.</p></div><div className="socials"><a href={GEMSPACE} target="_blank" rel="noreferrer"><b>Gem Space</b><span>Основная группа сообщества →</span></a><a href={TELEGRAM} target="_blank" rel="noreferrer"><b>Telegram</b><span>Новости и анонсы →</span></a><a href={INSTAGRAM} target="_blank" rel="noreferrer"><b>Instagram</b><span>Психолог о депрессии →</span></a><a href={PERSONAL_GEMSPACE} target="_blank" rel="noreferrer"><b>Лидия в Gem Space</b><span>Личная терапия и вопросы →</span></a></div></div></section>

      <footer className="wrap"><div className="brand"><span className="brandMark">М</span><span>Маяк поддержки</span></div><p>Сообщество взаимопомощи при депрессии</p><p>© 2026 · mayak-podderzhki.ru</p></footer>
    </main>
  );
}
