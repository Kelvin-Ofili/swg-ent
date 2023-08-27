export const Routes = {
  landing: "/",
  about: "/about",
  gallery: "/gallery",
  contact: "/contact",
  tickets: "/get-tickets",
  ticketCheckout: "/get-ticket/:id",
  ticketCheckoutId: (id) => `/get-ticket/${id}`,
};
