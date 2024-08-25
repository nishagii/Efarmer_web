import React from 'react';
import './FreshVegetables.css'; // Assuming you have a CSS file for styles
import { Link } from 'react-router-dom';

const Stocks = ({ products, setProducts }) => {
    return (
        <div className="cart-container">
            <h2 className="cart-title">Recently Completed</h2>
            <h1 className="cart-subtitle">Fresh Vegetables</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-info">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">${product.price.toFixed(2)}/Kg</p>
                            <p className="product-quantity">Available Quantity: {product.quantity} Kg</p>
                            <div className="product-actions">
                                <Link to={`/update/${products.id}`} className="edit-button">
                                    Edit
                                </Link>
                                <button
                                    className="delete-button"
                                    onClick={() => handleDelete(product.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    function handleEdit(id) {
        // Logic to handle edit, e.g., navigating to an edit page
    }

    function handleDelete(id) {
        // Logic to handle deletion
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
    }
};

export default Stocks;
