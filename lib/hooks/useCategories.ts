import { useState, type SetStateAction, useEffect } from "react";
import axios from "axios";

export default function useCategories() {
  const [categories, setCategories] = useState([]) as any[];

  useEffect(() => {
    const fetchCategories = async () => {
      setCategories([
        { id: "1", name: "sdcsdc" },
        { id: "2", name: "helllo" },
        { id: "3", name: "test" },
        { id: "4", name: "boooo" },
        { id: "5", name: "magic" },
      ]);

      return;

      try {
        const { data } = await axios.get("/api/categories");
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const addCategory = async (category: SetStateAction<string>) => {
    setCategories((c: any) => [
      ...c,
      { id: (c.length + 1).toString(), name: category },
    ]);

    return;

    try {
      const { data } = await axios.post("/api/categories", { category });
      setCategories([...categories, data]);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    categories,
    addCategory,
  };
}
