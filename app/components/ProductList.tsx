"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export interface Product {
  id: number;
  name: string;
  price: number;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const fetchProducts = async () => {
    const res = await axios.get<Product[]>("/api/products");
    setProducts(res.data);
  };

  const addToCart = async (productId: number) => {
    setLoadingId(productId);
    try {
      await axios.post("/api/cart", { productId });
      alert("Producto agregado al carrito");
    } catch (err) {
      console.error(err);
      alert("Error al agregar producto");
    } finally {
      setLoadingId(null);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-8">Productos</h2>
      <ul className="flex justify-between flex-wrap">
        {products.map((product) => (
          <li key={product.id} className="py-6 px-8 m-4 product-item">
            <h1 className="text-2xl font-semibold">{product.name}</h1>
            <h2 className="text-xl font-bold">${product.price}</h2>
            <button
              onClick={() => addToCart(product.id)}
              disabled={loadingId === product.id}
              style={{
                margin: 5,
                padding: "5px 15px",
                border: "1px solid var(--text-primary)",
                borderRadius: 6,
                opacity: loadingId === product.id ? 0.6 : 1,
                cursor: loadingId === product.id ? "not-allowed" : "pointer",
              }}
            >
              {loadingId === product.id ? "Agregando..." : "Agregar al carrito"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
