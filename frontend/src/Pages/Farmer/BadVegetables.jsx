import React from 'react';
import './bad.css'; 

const BadVegetables = () => {
    const badVegetables = [
        { name: 'Rotten Tomato', price: '$10.00/Kg', quantity: '50 Kg' },
        { name: 'Overripe Potato', price: '$5.00/Kg', quantity: '100 Kg' },
        { name: 'Wilted Spinach', price: '$8.00/Kg', quantity: '30 Kg' },
        { name: 'Spoiled Carrot', price: '$12.00/Kg', quantity: '40 Kg' },
        { name: 'Bruised Eggplant', price: '$9.00/Kg', quantity: '25 Kg' },
        { name: 'Moldy Cabbage', price: '$7.00/Kg', quantity: '60 Kg' },
    ];

    return (
        <div className="bad-vegetables">
            <h2>Animal Food: Unsellable Vegetables</h2>
            <div className="vegetable-list">
                {badVegetables.map((item, index) => (
                    <div key={index} className="vegetable-item">
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <p>Available Quantity: {item.quantity}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BadVegetables;
