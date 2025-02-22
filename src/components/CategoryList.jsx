import React, { useEffect, useState } from "react";
import axios from "axios";

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories") // Fetch all products
      .then((response) => {
        const uniqueCategories = [
          ...new Set(response.data.products.map((product) => product.category)),
        ]; // Extract unique categories
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div>
      <h2>Product Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li> // Display category names
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
