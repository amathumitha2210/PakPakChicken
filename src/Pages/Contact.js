import "../styles/Home.css";

function Contact() {
  return (
    <section className="page-section contact-section">
      <div className="section-inner contact-grid">
        <div>
          <h1 className="section-title">Contact Us</h1>
          <p className="section-text">
            Have a question or want to place a special order? Send us a message and we will get back to you as soon as possible.
          </p>
          <form className="contact-form">
            <input type="text" placeholder="Your name" aria-label="Your name" />
            <input type="email" placeholder="Your email" aria-label="Your email" />
            <textarea placeholder="Your message" aria-label="Your message" />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <aside className="contact-summary">
          <div className="feature-card">
            <h3>Location</h3>
            <address>Pak Pak Chicken, 43 Edmonton Rd, Colombo 00500, Sri Lanka</address>
            <a className="map-link" href="https://maps.app.goo.gl/z4NvyAkqpLGswRiv8" target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>
          <div className="feature-card">
            <h3>Hours</h3>
            <p>Mon - Sun: 12:00 PM – 12:00 Midnight</p>
          </div>
          <div className="feature-card">
            <h3>Phone</h3>
            <p> +94 70 150 2436</p>
          </div>
        </aside>
      </div>
      <div className="map-container">
        <iframe
          title="Pak Pak Chicken map"
          src="https://maps.google.com/maps?q=Pak+Pak+Chicken+Sri+Lanka&output=embed"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default Contact;
