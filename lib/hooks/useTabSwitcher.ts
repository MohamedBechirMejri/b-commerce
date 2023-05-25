import { useState, useEffect, SetStateAction } from "react";

// A custom hook to handle the state and logic of switching tabs
export default function useTabSwitcher(id?: string) {
  // The state for the current tab
  const [currentTab, setCurrentTab] = useState("details");
  // The state for the product data
  const [product, setProduct] = useState(null);

  // A function to switch the current tab
  const switchTab = (tab: SetStateAction<string>) => {
    setCurrentTab(tab);
  };

  // A useEffect hook to fetch the product data from the API
  useEffect(() => {
    // A function to fetch the product data by id
    const fetchProduct = async (id: string) => {
      try {
        // Use the fetch API to get the product data
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        // Set the product state with the data
        setProduct(data);
      } catch (error) {
        // Handle any errors
        console.error(error);
      }
    };
    // Call the fetch function if the id is valid
    if (id) {
      fetchProduct(id);
    }
  }, [id]); // Run the effect only when the id changes

  // Return the state and function from the hook
  return { currentTab, product, setProduct, switchTab };
}
