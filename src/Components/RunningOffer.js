import "../Style/offer.css";

export default function RunningOffer() {

  const offers = [
    {
      id: 1,
      title: "Big Summer Sale",
      desc: "Up to 50% off on all products",
      code: "SUMMER50"
    },
    {
      id: 2,
      title: "New User Offer",
      desc: "Get ₹200 instant cashback",
      code: "WELCOME200"
    },
    {
      id: 3,
      title: "Weekend Bonanza",
      desc: "Buy 1 Get 1 Free",
      code: "WEEKEND"
    },
    {
      id: 4,
      title: "Festival Offer",
      desc: "Flat 30% off",
      code: "FEST30"
    }
  ];

  return (
    <div className="offer-page">

      {/* Running Offer Banner */}
      <div className="offer-runner">
        <p>
          🔥 Limited Time Offer — Flat 40% OFF | Use Code: FLASH40 &nbsp;&nbsp; | &nbsp;&nbsp;
          🎁 Free Delivery on orders above ₹499 &nbsp;&nbsp; | &nbsp;&nbsp;
          🛍️ Buy 2 Get 1 Free on selected items
        </p>
      </div>
      {/* Offer Cards */}
      <div className="offer-container">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <h3>{offer.title}</h3>
            <p>{offer.desc}</p>
            <span className="offer-code">{offer.code}</span>
            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
