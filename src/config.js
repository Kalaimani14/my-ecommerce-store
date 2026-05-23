// Centralized configuration for the app.
// Replace SELLER_PHONE with your WhatsApp number (country code + number), e.g. '919876543210'.
export const SELLER_PHONE = process.env.REACT_APP_SELLER_PHONE || "919000000000";

export const COUPONS = {
  SAVE10: { type: "percent", value: 10 },
  FLAT50: { type: "flat", value: 50 },
  WELCOME200: { type: "flat", value: 200 },
};

export default {
  SELLER_PHONE,
  COUPONS,
};
