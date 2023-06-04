import { useState, type SetStateAction, useEffect } from "react";
import axios from "axios";

export default function useBrands() {
  const [brands, setBrands] = useState([]) as any[];

  useEffect(() => {
    const fetchCategories = async () => {
      setBrands([
        { id: "1", name: "sdcsdc" },
        { id: "2", name: "helllo" },
        { id: "3", name: "test" },
        { id: "4", name: "boooo" },
        { id: "5", name: "magic" },
      ]);

      return;

      try {
        const { data } = await axios.get("/api/brands");
        setBrands(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const addBrand = async (brand: SetStateAction<string>) => {
    setBrands((c: any) => [
      ...c,
      { id: (c.length + 1).toString(), name: brand },
    ]);

    return;

    try {
      const { data } = await axios.post("/api/brands", { brand });
      setBrands([...brands, data]);
    } catch (error) {
      console.error(error);
    }
  };

  return { brands, addBrand };
}
