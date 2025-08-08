let cart: number[] = [];

export const cartStore = {
  getCart: () => cart,
  addToCart: (productId: number) => {
    cart.push(productId);
  },
  resetCart: () => {
    cart = [];
  },
};
