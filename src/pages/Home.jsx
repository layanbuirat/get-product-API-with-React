import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import CategoryList from "../components/CategoryList"; // Import category component
import ProductList from '../components/ProductList';

function Home() {
  return (
    <div>
      <h2>Welcome to the product Page</h2>
          <img src="/image/logo.png" alt="Project 1" />
          <div>
          <CategoryList />  
          <ProductList />
          </div>
          
    </div>
    
    
  );
}

export default Home;
