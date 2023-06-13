import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

const getStripePromise = () => {
  const key = "pk_test_51NEAWFAbedfhBaKkXrvOtAOadiZIxa1A2aoeGFc6xaZs2Mxv5eOgkZK5A1Tac7GsV7fQJPvfgktoh6CtsidwqXTu00uEyI9K5q" || "";

  if (!stripePromise && "pk_test_51NEAWFAbedfhBaKkXrvOtAOadiZIxa1A2aoeGFc6xaZs2Mxv5eOgkZK5A1Tac7GsV7fQJPvfgktoh6CtsidwqXTu00uEyI9K5q") {
    stripePromise = loadStripe(key);
  }

  return stripePromise;
};

export default getStripePromise;