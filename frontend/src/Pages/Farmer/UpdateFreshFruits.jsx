
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Updateitem.css';

const UpdateFreshFruits = ({ fruits, setFruits }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const fruit = fruits.find(f => f.id === parseInt(id));

    const [name, setName] = useState(fruit.name);
    const [price, setPrice] = useState(fruit.price);
    const [quantity, setQuantity] = useState(fruit.quantity);

    const handleUpdate = (event) => {
        event.preventDefault();
        const updatedFruits = fruits.map(f =>
            f.id === fruit.id ? { ...f, name, price, quantity } : f
        );
        setFruits(updatedFruits);
        navigate('/');
    };

    return (
        <div className="update-item-container">
            <h2>Update Fruit</h2>
            <form onSubmit={handleUpdate}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        required
                    />
                </div>
                <button type="submit" className="update-button">Update</button>
            </form>
        </div>
    );
};

export default UpdateFreshFruits;
