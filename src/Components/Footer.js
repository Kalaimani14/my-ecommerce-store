import "../Style/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We provide quality products with the best customer experience.
            Fast delivery, secure payment, and great offers every day.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Offers</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Chennai, India</p>
          <p>📞 +91 6380010292</p>
          <p>📧 support@yourstore.com</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Your Store | All Rights Reserved
      </div>
    </footer>
  );
}
