import React, { useEffect, useState } from 'react';
import "./ProductPage.css"
import { useCart } from '../context/CartContext';

const ProductPage = () => {
    const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const truncateTitle = (title, maxLength) => {
    if (title.length <= maxLength) return title;
    return `${title.slice(0, maxLength)}...`;
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return `${description.slice(0, maxLength)}...`;
  };

  if (loading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-danger">Error: {error.message}</h2>;
  }

  return (
    <div className="container mt-4 w-100 bg-dark">
      <h1 className="text-center mb-4 text-light">Our Products</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-3 mb-3 " key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{truncateTitle(product.title, 30)}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">{truncateDescription(product.description, 80)}</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;