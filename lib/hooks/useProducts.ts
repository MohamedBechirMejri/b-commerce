import { useState, useEffect } from "react";

export default function useProducts(filters: {
  [key: string]: string | string[] | boolean | number;
}) {
  const [products, setProducts] = useState([]) as any[];

  const parsedFilters = Object.entries(filters)
    .map(f => f.join("="))
    .join("&");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await fetch(`/api/products?${parsedFilters}`).then(
          res => res.json()
        );
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return [...products, ...products, ...products, ...products];
}
