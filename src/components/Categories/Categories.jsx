import categories from "../../data/Categories";
import "./Categories.css";

const Categories = () => {
  return (
    <section className="cat-section">
      <div className="cat-inner">
        <div className="cat-header">
          <h2 className="cat-title">Popular Categories</h2>
          <p className="cat-subtitle">What are you craving today?</p>
        </div>

        <div className="cat-grid">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className="cat-card"
              style={{ animationDelay: `${index * 60}ms` }}
              aria-label={`Browse ${category.name}`}
            >
              <div className="cat-img-wrap">
                <img
                  src={category.image}
                  alt={category.name}
                  className="cat-img"
                  loading="lazy"
                />
                <div className="cat-img-overlay" aria-hidden="true" />
              </div>
              <div className="cat-info">
                <p className="cat-name">{category.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;