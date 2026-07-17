import "./Features.css";

const FEATURES = [
  {
    id: 1,
    icon: "🛵",
    title: "Fast Delivery",
    description: "Get your food delivered hot and fresh in under 30-45 minutes.",
  },
  {
    id: 2,
    icon: "🥗",
    title: "Fresh Food",
    description: "We partner with the best restaurants to ensure quality and freshness.",
  },
  {
    id: 3,
    icon: "🔒",
    title: "Secure Payments",
    description: "Your transactions are encrypted and 100% safe with us.",
  },
  {
    id: 4,
    icon: "🎧",
    title: "24/7 Support",
    description: "Our dedicated support team is always here to help you out.",
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-inner">
        <div className="features-header">
          <h2 className="features-title">Why Choose FoodieHub</h2>
          <p className="features-subtitle">We are committed to providing you the best experience</p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-card"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="feature-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
