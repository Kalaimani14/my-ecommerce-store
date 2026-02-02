import "../Style/category.css";

export default function CategoryPage() {

  const categories = [
    {
      id: 1,
      name: "Fruits",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Vegetables",
      img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Dairy",
      img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Bakery",
      img: "https://images.unsplash.com/photo-1608198093002-ad4e00548456?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      name: "Snacks",
      img: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd6?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 6,
      name: "Beverages",
      img: "https://images.unsplash.com/photo-1598514980287-67c1b2c4d57b?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="category-page">
      <h2 className="cat-title">Shop by Category</h2>

      <div className="cat-container">
        {categories.map((cat) => (
          <div className="cat-card" key={cat.id}>
            <img src={cat.img} alt={cat.name} />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
