import React, { useState, useCallback, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Apple",
    price: 1.99,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Banana",
    price: 0.99,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Cherry",
    price: 2.99,
    image: "https://via.placeholder.com/100",
  },
];

type ProductCardProps = {
  product: Product;
  onAddToCart: (productId: number) => void;
};

// const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
//   console.log(`!Ререндер без memo: ${product.id}`);
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} />
//       <h3>{product.name}</h3>
//       <p>Price: ${product.price}</p>
//       <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
//     </div>
//   );
// };

const ProductCard: React.FC<ProductCardProps> = React.memo(
  ({ product, onAddToCart }) => {
    console.log(`рендринг: ${product.id}`);
    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
      </div>
    );
  }
);

export const ProductList: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleAddToCart = useCallback((productId: number): void => {
    console.log(`Добавлен продукт ${productId}`);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Counter: {counter}</p>
      {mockProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};
