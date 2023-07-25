import { useState, useEffect } from "react";

export default function useProducts(filters: string) {
  const [products, setProducts] = useState([]) as any[];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await fetch(`/api/products?${filters}`).then(res =>
          res.json()
        );
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return { products };
}
