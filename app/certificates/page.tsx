import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Образование и сертификаты",
  description: "Диплом и сертификаты психолога Лидии Гуринович — профессиональная подготовка и дополнительное образование.",
  alternates: { canonical: "/certificates" },
};

const certificates = Array.from({ length: 16 }, (_, index) => ({
  src: `/certificates/certificate-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `Документ об образовании Лидии Гуринович, страница ${index + 1}`,
}));

export default function CertificatesPage() {
  return (
    <main className="certificatesPage" id="top">
      <header className="nav wrap certificatesNav">
        <a className="brand" href="/" aria-label="Вернуться на главную страницу">
          <span className="brandMark">М</span>
          <span>Маяк поддержки</span>
        </a>
        <a className="navCta" href="/">← На главную</a>
      </header>

      <section className="certificatesHero">
        <div className="wrap certificatesHeroInner">
          <div>
            <p className="eyebrow">Образование и сертификаты</p>
            <h1>Профессиональная<br/>подготовка</h1>
          </div>
          <p>Диплом и документы о дополнительном профессиональном образовании Лидии Гуринович. Нажмите на любой документ, чтобы рассмотреть его в полном размере.</p>
        </div>
      </section>

      <section className="wrap certificatesCollection" aria-label="Документы об образовании">
        <div className="certificateGrid">
          {certificates.map((certificate, index) => (
            <a href={certificate.src} target="_blank" rel="noreferrer" key={certificate.src} aria-label={`Открыть документ ${index + 1} в полном размере`}>
              <img src={certificate.src} alt={certificate.alt} loading={index < 4 ? "eager" : "lazy"}/>
              <span>Документ {String(index + 1).padStart(2, "0")} · Открыть ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="certificatesReturn">
        <div className="wrap">
          <p className="eyebrow">Маяк поддержки</p>
          <h2>Вернуться к сообществу</h2>
          <p>Узнайте о бесплатных встречах, поддержке и программах терапии.</p>
          <a className="button primary" href="/">На главную страницу →</a>
        </div>
      </section>

      <a className="backToTop" href="#top" aria-label="Вернуться наверх">↑</a>
      <footer className="wrap certificatesFooter">
        <div className="brand"><span className="brandMark">М</span><span>Маяк поддержки</span></div>
        <p>Образование и сертификаты</p>
        <p>© 2026 · mayak-podderzhki.ru</p>
      </footer>
    </main>
  );
}
