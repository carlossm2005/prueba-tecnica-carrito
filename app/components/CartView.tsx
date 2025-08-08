"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from './ProductList';

export default function CartView() {
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const res = await axios.get<Product[]>('/api/cart');
      setCart(res.data);

      return res;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col items-center cart">
      <h2 className="text-3xl font-bold text-center mb-8">Carrito</h2>
      {loading ? <p>Cargando...</p> : cart.length === 0 ? <p>Tu carrito está vacío.</p> : (
        <ul className='w-full'>
          {cart.map((item, index) => (
            <li key={index} className='w-full flex justify-between items-center font-semibold'>
              <p>{item?.name}</p>
              <p>${item?.price}</p>
            </li>
          ))}
          <li className='w-full flex justify-between items-center text-xl font-bold mt-8'>
            <p>Total:</p>
            <p>${total}</p>
          </li>
        </ul>
      )}
    </div>
  );
}
