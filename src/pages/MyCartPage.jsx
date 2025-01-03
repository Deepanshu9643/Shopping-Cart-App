import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../slices/cartSlice';
import { Link } from 'react-router-dom';
import '../App.css';

const MyCartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    dispatch(clearCart());
    alert('Items have been checked out!');
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
      <h1 className="page-heading">My Cart</h1>
      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.images[0]} alt={item.title} />
              <h2>Title: {item.title}</h2>
              <p>Price: ${item.price}</p>
              <button onClick={() => dispatch(removeFromCart(item))}>
                Remove From Cart
              </button>
            </div>
          ))}
        </div>

        <div className="checkout">
          <h2>Checkout List</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {index + 1}. {item.title} - ${item.price}
              </li>
            ))}
          </ul>
          <div className="total">
            <p>Total: <strong>${total.toFixed(2)}</strong></p>
          </div>
          <button onClick={handleCheckout}>Click To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default MyCartPage;
