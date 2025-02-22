import React from 'react'; 
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Git Product with React</h1>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/categories">Categories</Link> 
        <Link to="/products">Products</Link>
        <Link to="/add-product">Add Product</Link>
      </nav>
    </header>
  );
};

export default Header;
