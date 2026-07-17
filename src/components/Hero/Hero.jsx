import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = ({ search, setSearch }) => {
  return (
    <section className="hero">
      {/* Decorative blobs */}
      <div className="hero-blob hero-blob--1" aria-hidden="true" />
      <div className="hero-blob hero-blob--2" aria-hidden="true" />

      <div className="hero-inner">
        {/* Text side */}
        <div className="hero-content">
          <span className="hero-pill">🚀 Fast delivery · 30–45 mins</span>

          <h1 className="hero-title">
            Cravings Delivered<br />
            <span className="hero-title-accent">Right to Your Door</span>
          </h1>

          <p className="hero-subtitle">
            Discover the best restaurants around you. Order your favourite
            meals and enjoy a hot, fresh delivery experience.
          </p>

          {/* Search bar */}
          <div className="hero-search" role="search">
            <span className="hero-search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              placeholder="Search restaurants or dishes…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="hero-search-input"
              aria-label="Search restaurants or dishes"
            />
          </div>

          {/* CTA Buttons */}
          <div className="hero-ctas">
            <Link to="/restaurants" className="hero-cta hero-cta--primary">
              Explore Restaurants
            </Link>
            <a href="#offers" className="hero-cta hero-cta--secondary">
              View Offers
            </a>
          </div>

          {/* Quick stats */}
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>500+</strong>
              <span>Restaurants</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true" />
            <div className="hero-stat">
              <strong>50k+</strong>
              <span>Happy Customers</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true" />
            <div className="hero-stat">
              <strong>4.8 ⭐</strong>
              <span>Avg Rating</span>
            </div>
          </div>
        </div>

        {/* Illustration side */}
        <div className="hero-illustration" aria-hidden="true">
          <div className="hero-plate">
            <span className="hero-plate-emoji">🍔</span>
          </div>
          <div className="hero-float hero-float--pizza">🍕</div>
          <div className="hero-float hero-float--sushi">🍣</div>
          <div className="hero-float hero-float--icecream">🍦</div>
          <div className="hero-float hero-float--noodles">🍜</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;