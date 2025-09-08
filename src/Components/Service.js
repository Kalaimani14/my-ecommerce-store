import "../Style/service.css";

export default function Service() {
  return (
    <div className="service-container">
      <div className="service-header">
        <h1>Our Services</h1>
        <p>
          We provide high-quality services to make your shopping experience smooth and enjoyable.
        </p>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <h2>🚚 Fast Delivery</h2>
          <p>Get your products delivered to your doorstep within 24 hours.</p>
        </div>

        <div className="service-card">
          <h2>💳 Secure Payments</h2>
          <p>Pay safely with multiple payment options including UPI, cards, and wallets.</p>
        </div>

        <div className="service-card">
          <h2>📞 24/7 Support</h2>
          <p>Our customer support team is always here to help you.</p>
        </div>

        <div className="service-card">
          <h2>🎁 Exclusive Offers</h2>
          <p>Enjoy discounts, coupons, and special deals every week.</p>
        </div>
      </div>
    </div>
  );
}
