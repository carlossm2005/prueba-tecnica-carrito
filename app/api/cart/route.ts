import { cartStore } from '@/app/lib/cartStore';

const products = [
  { id: 1, name: 'Producto 1', price: 60 },
  { id: 2, name: 'Producto 2', price: 100 },
  { id: 3, name: 'Producto 3', price: 120 },
  { id: 4, name: 'Producto 4', price: 70 },
];

export async function GET(request: Request) {
  const cartIds = cartStore.getCart();
  const cartItems = cartIds.map(id => products.find(p => p.id === id));

  return Response.json(cartItems)
}

export async function POST(request: Request) {
  const { productId } = await request.json();
  cartStore.addToCart(productId);

  return Response.json({message: 'Producto agregado'}, {status: 201})
}
