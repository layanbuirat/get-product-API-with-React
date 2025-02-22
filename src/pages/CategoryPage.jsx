import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CategoryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories")
      .then(response => {
        console.log("Fetched categories:", response.data);
        setCategories(response.data); // Store categories in state
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div>
      <h1>All Categories</h1>
      {categories.length === 0 ? (
        <p>Loading categories...</p>
      ) : (
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/category/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryPage;
