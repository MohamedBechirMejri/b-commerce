import { useState, useEffect, SetStateAction } from "react";
import axios from "axios";

// A custom hook to handle the state and logic of switching tabs
export default function useTabSwitcher(id?: string) {
  // The state for the current tab
  const [currentTab, setCurrentTab] = useState("details");
  // The state for the product data
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    reference: "",
    categories: [],
    brandId: "",
    tags: "",
    isPublished: false,
    images: [],
    onSale: false,
    salePrice: 0,
    price: 0,
    stock: 0,
    restockAlert: -1,
    minBuy: 1,
    maxBuy: 1,
  });

  // A function to switch the current tab
  const switchTab = (tab: SetStateAction<string>) => setCurrentTab(tab);

  // A useEffect hook to fetch the product data from the API
  useEffect(() => {
    // A function to fetch the product data by id
    const fetchProduct = async (id: string) => {
      try {
        // Use axios to get the product data
        const { data } = await axios.get(`/api/products/${id}`);
        // Set the product state with the data
        const product = {
          ...data.data,
          images: JSON.parse(data.data.images),
          categories: data.data.categories.map((category: any) => category.id),
        };

        setProduct(product);
      } catch (error) {
        // Handle any errors
        console.error(error);
      }
    };

    // Call the fetch function if the id is valid
    if (id) fetchProduct(id);
  }, [id]); // Run the effect only when the id changes

  // Return the state and function from the hook
  return { currentTab, product, setProduct, switchTab };
}
