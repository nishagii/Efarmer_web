import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleNavigation = (path) => {
        navigate(path); // Navigate to the specified path
    };

    return (
        <div className="home-container">
            <div className="hero-section">
                <h1>WELCOME TO AGRIOS FARMING</h1>
                <h2>Agriculture & Eco Farming</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <button className="see-orders-btn" onClick={() => handleNavigation('/orders')}>See Orders</button>
            </div>

            <div className="cards-section">
                <div className="card" onClick={() => handleNavigation('/fresh-vegetables')}>
                    <h3>Fresh Vegetables</h3>
                    <p>See the stocked fresh vegetables</p>
                    <img src="" alt="Fresh Vegetables" />
                </div>

                <div className="card" onClick={() => handleNavigation('/fresh-fruits')}>
                    <h3>Fresh Fruits</h3>
                    <p>See the stocked fresh fruits</p>
                    <img src="" alt="Fresh Fruits" />
                </div>

                <div className="card" onClick={() => handleNavigation('/old-vegetables')}>
                    <h3>Old Vegetables</h3>
                    <p>See the old stocked vegetables</p>
                    <img src="" alt="Old Vegetables" />
                </div>

                <div className="card" onClick={() => handleNavigation('/old-fruits')}>
                    <h3>Old Fruits</h3>
                    <p>See the old stocked fruits</p>
                    <img src="" alt="Old Fruits" />
                </div>
            </div>
        </div>
    );
};

export default Home;

