import React from 'react';
import './Freshfruits.css'; // Assuming you have a CSS file for styles
import { Link } from 'react-router-dom';

const Freshfruits = ({ fruits, setFruits }) => {
    return (
        <div className="fruits-container">
            <h2 className="fruits-title">Recently Completed</h2>
            <h1 className="fruits-subtitle">Fresh Fruits</h1>
            <div className="product-list">
                {fruits.map((fruit) => (
                    <div key={fruit.id} className="product-card">
                        <div className="product-info">
                            <img src={fruit.image} alt={fruit.name} className="product-image" />
                            <h3 className="product-name">{fruit.name}</h3>
                            <p className="product-price">${fruit.price.toFixed(2)}/Kg</p>
                            <p className="product-quantity">Available Quantity: {fruit.quantity} Kg</p>
                            <div className="product-actions">
                                <Link to={`/update/${fruit.id}`} className="edit-button">
                                    Edit
                                </Link>
                                <button
                                    className="delete-button"
                                    onClick={() => {
                                        // Implement delete functionality here
                                        // Example:
                                        // setFruits(fruits.filter(f => f.id !== fruit.id));
                                    }}
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
};

export default Freshfruits;
