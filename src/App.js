import logo from './logo.svg';
import './App.css';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="root">
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero__background"></div>
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1 className="hero__tagline">
            Elevate Your Hair Ritual with Nature's Finest
          </h1>
          <button
            className="btn btn--primary hero__cta"
            onClick={() => scrollToSection('about')}
          >
            Discover More
          </button>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="achievements__grid">
            {[
              "Over 1 million bottles sold",
              "Dermatologist-recommended",
              "100% recyclable packaging",
              "Winner of Beauty Innovation Award 2024",
            ].map((text, index) => (
              <div key={index} className="achievement-item fade-in visible">
                <div className="achievement-item__content">
                  <h3>{text}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="reviews__grid">
            {[
              {
                name: "Andrea",
                text: "My hair has never felt this soft and vibrant. Truly transformative.",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=634&q=80",
              },
              {
                name: "Dheeraj",
                text: "A luxurious experience with every wash, and the scent is divine.",
                img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=634&q=80",
              },
              {
                name: "Yogeshwar",
                text: "Knowing it's clean beauty makes me love it even more.",
                img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=634&q=80",
              },
            ].map(({ name, text, img }, index) => (
              <div key={index} className="review-card fade-in visible">
                <img src={img} alt={name} className="review-card__avatar" />
                <div className="review-card__content">
                  <p className="review-card__text">"{text}"</p>
                  <h4 className="review-card__name">{name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about__grid">
            <div className="about__image">
              <img
                src="https://pplx-res.cloudinary.com/image/upload/v1754573225/pplx_project_search_images/ea72d6d2cf9d9260781ddc91a29a95e19778a892.jpg"
                alt="Premium amber glass shampoo bottles on bathroom shelf"
                className="about__img"
              />
            </div>
            <div className="about__content">
              <h2 className="about__heading">Our Commitment to deliver Beauty</h2>
              <p className="about__text">
                At Your Haircare, we believe that luxury should never compromise
                wellness. Our formulas harness plant-derived actives, are free
                from sulfates and silicones, and blended in 100% recyclable
                packaging to deliver salon-quality results with a conscience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <h3 className="footer__brand">Your Haircare</h3>
            <p className="footer__copyright">
              &copy; 2025 Your Haircare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

