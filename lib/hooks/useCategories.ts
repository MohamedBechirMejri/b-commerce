import { useState, type SetStateAction, useEffect } from "react";
import axios from "axios";

export default function useCategories() {
  const [categories, setCategories] = useState([]) as any[];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get("/api/categories");
        setCategories(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const addCategory = async (category: SetStateAction<string>) => {
    try {
      const { data } = await axios.post("/api/categories", { category });
      setCategories([...categories, data.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return { categories, addCategory };
}
