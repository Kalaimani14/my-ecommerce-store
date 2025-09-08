import "../Style/help.css";

export default function Help() {
  return (
    <div className="help-container">
      <h1>Help & Support</h1>
      <p className="intro">
        Welcome to the Help Center!  
        Here are some frequently asked questions and answers.
      </p>

      <div className="faq-section">
        <div className="faq-item">
          <h3>❓ How do I place an order?</h3>
          <p>
            Browse the products, add them to your cart, and click on checkout.  
            You can pay securely using UPI, card, or wallet.
          </p>
        </div>

        <div className="faq-item">
          <h3>❓ Can I track my order?</h3>
          <p>
            Yes! Once your order is confirmed, you’ll receive an order ID and tracking details.
          </p>
        </div>

        <div className="faq-item">
          <h3>❓ What payment methods do you accept?</h3>
          <p>
            We support UPI, debit/credit cards, net banking, and popular wallets.
          </p>
        </div>

        <div className="faq-item">
          <h3>❓ How can I contact customer support?</h3>
          <p>
            You can reach us via the <strong>Contact Page</strong> or call our 24/7 helpline at <strong>+91 638XX1XXX2</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
