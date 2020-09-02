import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HKgJZLbwVq4vqqGva6GcVEHczTyjb5dKGjN1nwXiR43Bo1MWwtjTobcDqZ5lolO10JDgaZ3ziAsPHoiG4tacHLR00PZCoo9AT";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Eshop Project"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripekey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
