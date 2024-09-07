import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import './HomeAll.css';
import overRippenFruits from '../../Components/Assets/overRippenFruits.jpg';
import freshVegetables from '../../Components/Assets/freshvegetables.jpeg';
import freshFruits from '../../Components/Assets/freshfruits.jpeg';
import oldVegetables from '../../Components/Assets/oldvegetables.jpeg';

function HomeAll() {
    const { token, userType, userName } = useContext(ShopContext);

    useEffect(() => {
        console.log('Token:', token);
        console.log('User Type:', userType);
        console.log('User Name:', userName);
    }, [token, userType, userName]);

    return (
        <div>
            <main>
                <section className="hero">
                    <div className='introdiv'>
                        <h1 className='intro'>Welcome to AGRIOS</h1>
                    </div>

                    {!token ? (
                        <p className='not-login'>
                            <Link to="/login">Login</Link> to view and order our products
                        </p>
                    ) : (
                        <section className="products">
                            <div className="product-cards">
                                {userType === "Customer" && (
                                        <h1>Welcome {userName}</h1>
                                )}
                                <div className="card">
                                    <Link to="/fvegetables">
                                        <img src={freshVegetables} alt="Fresh Vegetables" />
                                        <h4>Fresh vegetables</h4>
                                    </Link>
                                </div>
                                <div className="card">
                                    <Link to="/ffruits">
                                        <img src={freshFruits} alt="Fresh Fruits" />
                                        <h4>Fresh Fruits</h4>
                                    </Link>
                                </div>
                                <div className="card">
                                    <Link to="/oldvegetables">
                                        <img src={oldVegetables} alt="Old Vegetables" />
                                        <h4>Old Vegetables</h4>
                                    </Link>
                                </div>
                                <div className="card">
                                    <Link to="/oldfruits">
                                        <img src={overRippenFruits} alt="Old Fruits" />
                                        <h4>Old Fruits</h4>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    )}
                </section>

                <section className="content">
                    <div className="text-content">
                        <h1>Who Are We</h1>
                        <p>"We are a passionate team of dedicated farmers committed to cultivating the finest vegetables and fruits, rooted in a deep respect for nature and sustainable agriculture. Our farm is more than just a place to grow produce—it's a community that values quality, health, and the environment. With a focus on traditional farming methods combined with modern techniques, we strive to bring you the freshest, most nutritious produce directly from our fields to your table. Our mission is to nourish our community with food that's not only good for you but also good for the planet."</p>
                        <h1>What we offer</h1>
                        <p>"At our farm, we take pride in offering a diverse selection of fresh vegetables and fruits, handpicked daily to ensure the highest quality and flavor. Our commitment to sustainable farming practices means you get produce that's not only fresh but also grown with care for the environment. Whether you're looking for crisp vegetables or sweet, juicy fruits, we've got the perfect produce to add vibrant, healthy flavors to your meals."</p>
                    </div>
                    <div className="details">
                        <h1>Services</h1>
                        <p>Provide Fresh Fruits.</p>
                        <p>Provide Fresh Vegetables.</p>
                        <p>Provide Over Rippen Fruits.</p>
                        <p>Provide Rotten vegetables.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default HomeAll;
