import "../Style/about.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to <span className="highlight">Kalai-EShop</span>!  
          We are passionate about providing fresh and quality products 
          at the best prices. Our mission is to make your shopping 
          experience simple, fast, and enjoyable.
        </p>

        <p>
          Founded in 2025, K-EShop has grown into a trusted online store 
          for groceries and daily essentials. We believe in 
          <strong> quality, trust, and customer satisfaction</strong>.
        </p>

        <div className="about-team">
          <h2>Our Values</h2>
          <ul>
            <li>✔ Customer First</li>
            <li>✔ Fresh & Quality Products</li>
            <li>✔ Affordable Pricing</li>
            <li>✔ Fast Delivery</li>
          </ul>
        </div>
      </div>
    </div>
  );
}