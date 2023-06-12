import { useState, type SetStateAction, useEffect } from "react";
import axios from "axios";

export default function useBrands() {
  const [brands, setBrands] = useState([]) as any[];

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const { data } = await axios.get("/api/brands");
        setBrands(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBrands();
  }, []);

  const addBrand = async (brand: string) => {
    try {
      const { data } = await axios.post("/api/brands", { brand });
      setBrands([...brands, data.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return { brands, addBrand };
}
