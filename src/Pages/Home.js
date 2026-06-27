import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import heroImage from "../assets/WhatsApp Image 2026-05-30 at 16.21.55.jpeg";
import galleryOne from "../assets/WhatsApp Image 2026-05-30 at 16.21.53.jpeg";
import galleryTwo from "../assets/WhatsApp Image 2026-05-30 at 16.21.54.jpeg";
import galleryThree from "../assets/WhatsApp Image 2026-05-30 at 16.21.54 (1).jpeg";
import galleryFour from "../assets/WhatsApp Image 2026-05-30 at 16.23.33.jpeg";

const featuredItems = [
  {
    id: 1,
    name: "Hot Hot Spicy Wings",
    description: "Six crispy wings drenched in our bold hot sauce. Spicy, punchy, and made for real heat lovers.",
    price: "LKR 1,990.00",
  },
  {
    id: 2,
    name: "Chicken Sandwich Original",
    description: "Crispy fried chicken with creamy mayo, pickles, and sauce in a soft bun.",
    price: "LKR 1,440.00",
  },
  {
    id: 3,
    name: "Chicken Sandwich Hot Hot",
    description: "Crispy chicken tossed in Hot Hot sauce, layered with mayo, pickles, and extra heat.",
    price: "LKR 1,560.00",
  },
  {
    id: 4,
    name: "Classic Chicken Loaded Fries",
    description: "Crispy fries loaded with seasoned fried chicken and Pak Pak sauce. Heavy, filling, and satisfying.",
    price: "LKR 1,550.00",
  },
];

const socialMediaImages = [
  {
    id: 1,
    src: galleryOne,
    caption: "Freshly fried chicken with signature sauces",
  },
  {
    id: 2,
    src: galleryTwo,
    caption: "Packed to-go meals ready for delivery",
  },
  {
    id: 3,
    src: galleryThree,
    caption: "A delicious plate ready for pickup",
  },
  {
    id: 4,
    src: galleryFour,
    caption: "Crispy texture with bold Sri Lankan spices",
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title">
              Welcome to <span className="brand-name">Pak Pak Chicken</span>
            </h1>
            <p className="hero-text">
              Enjoy delicious Sri Lankan chicken dishes with bold spices, crisp texture, and friendly service made for every meal.
            </p>
            <div className="button-row">
              <button
                className="primary-button"
                onClick={() => window.open('https://www.ubereats.com/store/pak-pak-chicken/LekQ6XcyQB60DrjpVRc6sQ', '_blank', 'noopener,noreferrer')}
              >
                Order Now
              </button>
              <button className="secondary-button" onClick={() => navigate('/about')}>
                Learn More
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Pak Pak Chicken special" />
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-inner">
          <h2 className="section-title">Why Choose Pak Pak Chicken</h2>
          <p className="section-text">
            From spicy fried wings to rich chicken karahi, we prepare every meal with fresh ingredients and authentic Sri Lankan flavors.
          </p>
          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">🔥</div>
              <h3>Bold Flavor</h3>
              <p>Every recipe is crafted using premium spices and fresh ingredients.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Your order arrives hot and ready in record time.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">🍗</div>
              <h3>Fresh Chicken</h3>
              <p>We serve only locally sourced chicken with quality you can taste.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Customer First</h3>
              <p>Friendly support and a menu designed to satisfy every craving.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="menu-preview-section">
        <div className="section-inner">
          <h2 className="section-title">Featured Dishes</h2>
          <p className="section-text">
            Our signature chicken dishes are made fresh daily and ready for pickup or delivery.
          </p>
          <div className="menu-grid">
            {featuredItems.map((item) => (
              <article key={item.id} className="menu-card animate-card">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-price">{item.price}</div>
                <button className="secondary-button-light" onClick={() => navigate('/menu')}>
                  View Menu
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="section-inner">
          <div className="gallery-header">
            <div>
              <h2 className="section-title">From Our Instagram</h2>
              <p className="section-text">
                See the latest taste moments from Pak Pak Chicken and discover why everyone is talking about our crispy chicken.
              </p>
            </div>
            <a
              className="gallery-action"
              href="https://linktr.ee/pakpak.chicken?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank"
              rel="noreferrer"
            >
              Visit our link in bio
            </a>
          </div>

          <div className="gallery-grid">
            {socialMediaImages.map((item) => (
              <article key={item.id} className="gallery-card animate-card">
                <img src={item.src} alt={item.caption} />
                <p>{item.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section contact-section">
        <div className="section-inner">
          <h2 className="section-title">Ready to Order?</h2>
          <p className="section-text">
            Browse our full menu, choose your favorite dishes, and let us handle the rest.
          </p>
          <div className="button-row">
            <button className="primary-button" onClick={() => navigate('/menu')}>
              View Full Menu
            </button>
            <button className="secondary-button highlight-button" onClick={() => navigate('/contact')}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
