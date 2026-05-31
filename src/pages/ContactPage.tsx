export default function ContactPage() {
  return (
    <section className="content-page">
      <div className="catalog-hero">
        <p className="eyebrow">Kontakt</p>
        <h1>Kontakt os</h1>
        <p>
          Vi er klar til at hjælpe dig med spørgsmål om produkter, ordrer og levering.
          Skriv til os eller ring - vi svarer inden for 24 timer på hverdage.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <p className="contact-card__icon" aria-hidden="true">📍</p>
          <h2>Adresse</h2>
          <p>Pizzagade 12</p>
          <p>9000 Aalborg</p>
          <p>Danmark</p>
        </div>

        <div className="contact-card">
          <p className="contact-card__icon" aria-hidden="true">✉️</p>
          <h2>E-mail</h2>
          <p>
            <a href="mailto:info@slice-management.dk">info@slice-management.dk</a>
          </p>
          <p className="contact-card__note">Vi svarer inden for 24 timer</p>
        </div>

        <div className="contact-card">
          <p className="contact-card__icon" aria-hidden="true">📞</p>
          <h2>Telefon</h2>
          <p>
            <a href="tel:+4512345678">+45 12 34 56 78</a>
          </p>
          <p className="contact-card__note">Mandag-fredag 8-17</p>
        </div>
      </div>
    </section>
  )
}
