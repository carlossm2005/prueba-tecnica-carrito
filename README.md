# 🛒 Prueba Técnica – HoyTrabajas

Esta aplicación es la solución a la prueba técnica solicitada por HoyTrabajas.  
Incluye una API REST para manejar productos y un carrito de compras, un frontend en Next.js para interactuar con la API y una función para calcular la mejor combinación de productos que no supere un presupuesto dado.

---

## 📋 Descripción de la solución

La solución está construida en **Next.js con TypeScript**, usando **API Routes** para el backend y React para el frontend, todo en un solo proyecto.  
El carrito se mantiene **en memoria** para simplificar el flujo, tal como lo indica la prueba.

**Características principales:**
- **API REST** con 3 endpoints:
  - `GET /api/products` → Retorna la lista de productos.
  - `POST /api/cart` → Agrega un producto al carrito por su `id`.
  - `GET /api/cart` → Devuelve el contenido del carrito.
- **Frontend**:
  - Página principal con listado de productos y botón para agregarlos al carrito.
  - Página de carrito con los productos agregados y total calculado.
  - Página de combinaciones para calcular la mejor combinación de productos dentro de un presupuesto.
- **Tema claro/oscuro** Cuenta con detección automática del tema del sistema.
- **Lógica**: Algoritmo `findBestCombination` que encuentra la mejor combinación de productos sin superar un presupuesto dado.

---

## ⚙️ Instalación y ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/carlossm2005/prueba-tecnica-carrito.git

cd prueba-tecnica-carrito

```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación va a estar disponible en http://localhost:3000.
