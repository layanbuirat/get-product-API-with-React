import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CategoryProducts() {
  const { category } = useParams(); // Get the category from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Category passed:", category);

    axios.get(`https://dummyjson.com/products/category/${category}`)
      .then(response => {
        console.log("Fetched Products:", response.data.products);
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [category]);

  return (
    <div>
      <h1>Products in {category}</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <img src={product.thumbnail} alt={product.title} width="100" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryProducts;
