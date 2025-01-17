import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import './Header.css';
import greenbox from '../images/greenbox.png';

const Header = ({ cartItemsCount, toggleCart }) => {
  const location = useLocation(); // Get current route path

  const getCategoryTestId = (path) => {
    return location.pathname === path ? 'active-category-link' : 'category-link';
  };

  return (
    <header className="header">
      <div className="header-content">
        <nav className="nav">
          <ul className="nav-links">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                end 
                data-testid={getCategoryTestId('/')}
              >
                ALL
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/category/clothes" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                data-testid={getCategoryTestId('/category/clothes')}
              >
                CLOTHES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/category/tech" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                data-testid={getCategoryTestId('/category/tech')}
              >
                TECH
              </NavLink>
            </li>
          </ul>  
        </nav>
        <div className="logo-container">
          <img src={greenbox} alt="Logo" className="logo-image" />
        </div>
        <div className="cart">
          <button onClick={toggleCart} className="cart-container-head" data-testid="cart-btn">
            <ShoppingCart size={23} />
            {cartItemsCount > 0 && (
              <span className="number">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
