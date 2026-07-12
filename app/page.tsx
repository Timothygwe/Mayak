const steps = [
  { n: "01", title: "Скачать приложение", text: "Установите Telegram или Game Space — выберите привычный и удобный формат." },
  { n: "02", title: "Присоединиться к группе", text: "Зайдите под своим именем или оставайтесь анонимным. Рассказывать о себе сразу не обязательно." },
  { n: "03", title: "Идти к восстановлению", text: "Получайте поддержку, делитесь опытом и двигайтесь маленькими шагами в своём темпе." },
];

const facts = [
  ["Это не слабость", "Депрессия — заболевание, которое влияет на настроение, мысли, сон, энергию и способность справляться с обычными делами."],
  ["Вы не одиноки", "Одиночество усиливает тяжёлые переживания. Безопасный контакт с людьми, которые понимают, помогает вернуть опору."],
  ["Помощь работает", "Поддержка сообщества может дополнять работу с психиатром или психологом, но не заменяет диагностику и лечение."],
];

export default function Home() {
  return (
    <main>
      <header className="nav wrap">
        <a className="brand" href="#top" aria-label="Маяк поддержки — на главную">
          <span className="brandMark">М</span><span>Маяк поддержки</span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#about">О сообществе</a><a href="#depression">О депрессии</a><a href="#join">Присоединиться</a>
        </nav>
        <a className="navCta" href="#join">Найти поддержку</a>
      </header>

      <section className="hero" id="top">
        <div className="wrap heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Анонимно · бережно · без осуждения</p>
            <h1>Когда темно —<br/><em>мы рядом.</em></h1>
            <p className="lead">«Маяк поддержки» — сообщество людей, которые делятся опытом, силой и надеждой в борьбе с депрессией.</p>
            <div className="heroActions"><a className="button primary" href="#join">Присоединиться</a><a className="button ghost" href="#about">Как это работает <span>↓</span></a></div>
            <p className="privacy"><span>●</span> Можно участвовать анонимно и начать просто с чтения</p>
          </div>
          <div className="visual" aria-label="Логотип сообщества — маяк среди волн">
            <div className="sun"/><img src="/mayak-logo.jpg" alt="Маяк поддержки — логотип с маяком"/>
            <p>Свет виден даже<br/>в самую долгую ночь</p>
          </div>
        </div>
      </section>

      <section className="steps wrap" id="about">
        <div className="sectionIntro"><p className="eyebrow">Начать проще, чем кажется</p><h2>Три шага к людям,<br/>которые понимают</h2></div>
        <div className="stepGrid">{steps.map((s) => <article className="step" key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div>
      </section>

      <section className="aboutBand">
        <div className="wrap quoteGrid">
          <div><p className="eyebrow light">В чём смысл группы</p><h2>Не давать советов сверху.<br/>Быть рядом на равных.</h2></div>
          <div className="quote"><p>«Здесь не нужно притворяться, что всё хорошо. Можно прийти таким, какой ты есть сегодня»</p><small>Принцип сообщества «Маяк поддержки»</small></div>
        </div>
      </section>

      <section className="facts wrap" id="depression">
        <div className="factsHead"><div><p className="eyebrow">Важно знать</p><h2>О депрессии —<br/>честно и спокойно</h2></div><p>Депрессия может случиться с любым человеком. Её симптомы бывают разными и могут длиться неделями. Точный диагноз ставит только специалист.</p></div>
        <div className="factList">{facts.map(([title,text], i) => <article key={title}><b>0{i+1}</b><h3>{title}</h3><p>{text}</p></article>)}</div>
        <aside className="notice"><b>Сообщество не заменяет медицинскую помощь.</b><span>Если вам тяжело, обратитесь к врачу или психологу. Если есть риск причинить вред себе или кому-то — позвоните 112 или в местную экстренную службу прямо сейчас.</span><a href="tel:112">Позвонить 112</a></aside>
      </section>

      <section className="join" id="join">
        <div className="wrap joinGrid">
          <div><p className="eyebrow light">Ваш первый шаг</p><h2>Можно ничего<br/>не объяснять.<br/><em>Просто приходите.</em></h2></div>
          <div className="joinCard"><h3>Выберите удобную площадку</h3><p>Ссылки откроются здесь после запуска групп. Их можно будет заменить без изменения страницы.</p><a className="platform" href="#" aria-label="Telegram — ссылка появится скоро"><span className="platformIcon">Т</span><span><b>Группа в Telegram</b><small>Ссылка появится скоро</small></span><i>→</i></a><a className="platform" href="#" aria-label="Game Space — ссылка появится скоро"><span className="platformIcon coral">G</span><span><b>Группа в Game Space</b><small>Ссылка появится скоро</small></span><i>→</i></a><small className="consent">Переходя в группу, вы соглашаетесь соблюдать правила бережного общения.</small></div>
        </div>
      </section>

      <footer className="wrap"><div className="brand"><span className="brandMark">М</span><span>Маяк поддержки</span></div><p>Сообщество взаимопомощи при депрессии</p><p>© 2026 · mayak-podderzhki.ru</p></footer>
    </main>
  );
}
