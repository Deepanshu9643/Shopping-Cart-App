import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../slices/productsSlice';
import { addToCart } from '../slices/cartSlice';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      dispatch(addToCart(product));
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <span>Shopping Cart</span>
        </div>
        <div className="navbar-right">
          <Link to="/" className="nav-link">Home Page</Link>
          <Link to="/cart" className="nav-link">Cart Page</Link>
        </div>
      </nav>

      {/* Main Content */}
      <h1 className="page-heading">All Items</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.images[0]} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
