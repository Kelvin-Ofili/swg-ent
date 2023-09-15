import { TicketCheckoutUI } from "features";
import React from "react";
import { useParams } from "react-router";

const TicketCheckout = () => {
  const params = useParams();
  return (
    <div>
      <TicketCheckoutUI />
    </div>
  );
};

export { TicketCheckout };
