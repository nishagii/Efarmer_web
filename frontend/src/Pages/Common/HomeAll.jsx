import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './HomeAll.css';
import { ShopContext } from '../../Context/ShopContext';

function HomeAll() {

    const { token, setToken } = useContext(ShopContext);
    return (
        <div>
            <main>
                <section className="hero">
                    <h2>Home</h2>
                </section>

                <section className="content">
                    <div className="text-content">
                        <h3>Healthy Food</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <h4>Biophilia</h4>
                        <p>Biophilia is the idea that humans possess an innate tendency to seek connections with nature.</p>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Nemo enim ipsam voluptatem quia voluptas.</li>
                            <li>Accusamus et iusto odio dignissimos ducimus.</li>
                            <li>Namn libero tempore, cum soluta nobis est eligendi.</li>
                        </ul>
                    </div>
                    <div className="details">
                        <h3>Services</h3>
                        <p>Healthy Food</p>
                        <p>Farmer: Mike Hardison</p>
                        <p>Duration: 4.5 Months</p>
                        <p>Location: Brooklyn, New York</p>
                    </div>
                </section>
                {!token ? <p> <Link to="/login">Login</Link> to view and order our products</p>
                    : <section className="products">
                        <h3>Explore Our Products</h3>
                        <div className="product-cards">
                            <div className="card">
                                <Link to="/fvegetables">
                                    <img src="#" alt="veg" />
                                    <h4>Fresh vegetables</h4>
                                </Link>
                            </div>
                            <div className="card">
                                <Link to="/ffruits">
                                    <img src="ffruits.jpg" alt="Fresh Fruits" />
                                    <h4>Fresh Fruits</h4>
                                </Link>
                            </div>
                            <div className="card">
                                <Link to="/oldvegetables">
                                    <img src="organic-vegetables.jpg" alt="Organic Vegetables" />
                                    <h4>Old Vegetables</h4>
                                </Link>
                            </div>
                            <div className="card">
                                <Link to="/oldfruits">
                                    <img src="dairy-products.jpg" alt="Dairy Products" />
                                    <h4>Old Fruits</h4>
                                </Link>
                            </div>
                        </div>
                    </section>}
                
            </main>
        </div>
    );
}

export default HomeAll;

