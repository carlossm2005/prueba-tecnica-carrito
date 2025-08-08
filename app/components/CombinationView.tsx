"use client"

import { useEffect, useState } from 'react';
import { findBestCombination } from '../lib/findBestCombination';
import axios from 'axios';
import { Product } from './ProductList';

const CombinationView = () => {
  const [result, setResult] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    setLoading(true);

    try {
      const res = await axios.get<Product[]>("/api/products");
      setProducts(res.data);
      
      return res;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const presupuestoInput = document.getElementById("presupuesto") as HTMLInputElement;
    const presupuesto = Number(presupuestoInput.value);

    if (!presupuesto || presupuesto <= 0) {
      alert("Por favor, ingresa un presupuesto válido");
      return;
    }

    const combination = findBestCombination(products, presupuesto);
    setResult(combination);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center combination">
      {loading ? <p>Cargando...</p> : (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Presupuesto"
              id="presupuesto"
              className="border px-3 py-1 mr-2 my-4"
            />
            <button type="submit" className="border px-4 py-1 rounded">
              Buscar
            </button>
          </form>
          <ul className='w-full mt-4'>
            {result.map((product, index) => (
              <li key={index} className='w-full flex justify-between items-center font-semibold'>
                <p>{product.name}</p>
                <p>${product.price}</p>
              </li>
            ))}
            <li className='w-full flex justify-between items-center text-xl font-bold mt-8'>
              <p>Total:</p>
              <p>${result.reduce((sum, p) => sum + p.price, 0)}</p>
            </li>
          </ul>
        </>
      )}
    </div>
  )
}

export default CombinationView