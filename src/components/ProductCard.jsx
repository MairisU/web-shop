import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import './ProductCard.css';

const toKebabCase = (str) => {
  return str
    .replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
    .replace(/\s+/g, '-')
    .replace(/^-/, '')
    .replace(/[^a-z0-9-]/g, ''); // remove non-alphanumeric characters
};

const ProductCard = ({ product, addToCart }) => {
  const kebabCaseProductName = toKebabCase(product.name);

  const addToCartWithDefaults = () => {
    const defaultAttributes = {};

    switch (product.id) {
      case '1':
        defaultAttributes['bootsize'] = '40';
        break;
      case '2':
        defaultAttributes['size'] = 'S';
        break;
      case '3':
        defaultAttributes['color'] = 'Green';
        defaultAttributes['capacity'] = '512GB';
        break;
      case '5': 
        defaultAttributes['capacity'] = '256GB';
        defaultAttributes['usbports'] = 'YES';
        defaultAttributes['touchid'] = 'YES';
        break;
      case '6': 
        defaultAttributes['capacity'] = '512GB';
        defaultAttributes['color'] = 'Green';
        break;
      default:
        break;
    }

    addToCart(product, defaultAttributes);
  };

  return (
    <div className="product-card" data-testid={`product-${kebabCaseProductName}`}>
      <Link to={`/product/${product.id}`}>
        <div className="product-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </Link>
      {product.inStock && (
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCartWithDefaults();
          }}
          className="quick-shop-btn"
          data-testid={`add-to-cart-${product.id}`}
        >
          <ShoppingCart size={20} />
        </button>
      )}
      {!product.inStock && (
        <div className="out-of-stock-overlay">
          <p style={{ color: 'red', textAlign: 'center' }}>OUT OF STOCK</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
