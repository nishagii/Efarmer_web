import React from 'react';
import './bad.css'; 

const BadFruits = () => {
    const badFruits = [
        { name: 'Rotten Apple', price: '$10.00/Kg', quantity: '50 Kg' },
        { name: 'Overripe Banana', price: '$5.00/Kg', quantity: '100 Kg' },
        { name: 'Moldy Orange', price: '$8.00/Kg', quantity: '30 Kg' },
        { name: 'Bruised Mango', price: '$12.00/Kg', quantity: '40 Kg' },
        { name: 'Wilted Grapes', price: '$9.00/Kg', quantity: '25 Kg' },
        { name: 'Spoiled Pineapple', price: '$7.00/Kg', quantity: '60 Kg' },
    ];

    return (
        <div className="bad-fruits">
            <h2>Animal Food: Unsellable Fruits</h2>
            <div className="fruit-list">
                {badFruits.map((item, index) => (
                    <div key={index} className="fruit-item">
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

export default BadFruits;
