import { Link } from "react-router-dom";
import "./OffersBanner.css";

const OFFERS = [
  {
    id: 1,
    emoji: "🎉",
    title: "50% OFF Your First Order",
    subtitle: "Use code WELCOME50 at checkout",
    cta: "Order Now",
    accent: "#e85d04",
    bg: "linear-gradient(135deg, #fff4ef 0%, #ffe8d6 100%)",
  },
  {
    id: 2,
    emoji: "🛵",
    title: "Free Delivery All Weekend",
    subtitle: "No minimum order. Saturday & Sunday only.",
    cta: "Explore Restaurants",
    accent: "#1a1a1a",
    bg: "linear-gradient(135deg, #f0f0f0 0%, #e4e4e4 100%)",
  },
  {
    id: 3,
    emoji: "⚡",
    title: "Lightning Fast — Under 30 Mins",
    subtitle: "Select restaurants now offer express delivery",
    cta: "See Express",
    accent: "#e85d04",
    bg: "linear-gradient(135deg, #fff9e6 0%, #ffefc8 100%)",
  },
];

const OffersBanner = () => {
  return (
    <section className="offers-section">
      <div className="offers-inner">
        <div className="offers-header">
          <h2 className="offers-title">🔥 Today&apos;s Offers</h2>
          <p className="offers-subtitle">Limited time deals you won&apos;t want to miss</p>
        </div>

        <div className="offers-grid">
          {OFFERS.map((offer, index) => (
            <div
              key={offer.id}
              className="offer-card"
              style={{
                background: offer.bg,
                animationDelay: `${index * 80}ms`,
              }}
            >
              <span className="offer-emoji" aria-hidden="true">
                {offer.emoji}
              </span>
              <div className="offer-body">
                <h3 className="offer-title" style={{ color: offer.accent }}>
                  {offer.title}
                </h3>
                <p className="offer-subtitle">{offer.subtitle}</p>
              </div>
              <Link
                to="/restaurants"
                className="offer-cta"
                style={{ background: offer.accent }}
              >
                {offer.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersBanner;
