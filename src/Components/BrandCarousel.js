import "../Style/brandCarousel.css";

export default function BrandCarousel() {

  const brands = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/26/Flipkart-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Paytm_logo.png"
  ];

  return (
    <div className="brand-section">
      <h2 className="brand-title">Our Trusted Brands</h2>

      <div className="brand-carousel">
        <div className="brand-track">
          {brands.map((logo, index) => (
            <div className="brand-slide" key={index}>
              <img src={logo} alt="brand logo" />
            </div>
          ))}

          {/* Duplicate for smooth infinite scroll */}
          {brands.map((logo, index) => (
            <div className="brand-slide" key={"dup-" + index}>
              <img src={logo} alt="brand logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
