import React from 'react';
import './About.css'; // Make sure to include your CSS file

const AboutPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-about">
                <div className="hero-about-content">
                    <h1>About</h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="main-content">
                <div className="content-left">
                    <h2>The Best Agriculture Market</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    <ul>
                        <li>Supeo ednise suscipit sagittis leo</li>
                        <li>Entum estibulum dignissim posuere</li>
                        <li>Lorem ipsum on the tend to repeat</li>
                    </ul>
                    <button className="discover-more-button">Discover More</button>
                </div>
                <div className="content-right">
                    <img src="tractor-farm.jpg" alt="Tractor on a farm" />
                    <img src="farmer.jpg" alt="Farmer with crops" />
                </div>
            </section>

            {/* ECO-Friendly Section */}
            <section className="eco-friendly">
                <h2>ECO-Friendly Products can be Made from Scratch</h2>
                <button className="play-video-button">Play Video</button>
            </section>

            {/* What We Offer Section */}
            <section className="what-we-offer">
                <h2>What We Offer</h2>
                <div className="offer-cards">
                    <div className="offer-card">
                        <img src="agriculture-products.jpg" alt="Agriculture Products" />
                        <button className="offer-button">Read More</button>
                    </div>
                    <div className="offer-card">
                        <img src="organic-products.jpg" alt="Organic Products" />
                        <button className="offer-button">Read More</button>
                    </div>
                    <div className="offer-card">
                        <img src="fresh-vegetables.jpg" alt="Fresh Vegetables" />
                        <button className="offer-button">Read More</button>
                    </div>
                    <div className="offer-card">
                        <img src="daily-products.jpg" alt="Daily Products" />
                        <button className="offer-button">Read More</button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>What They Say</h2>
                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <p>There are many variations of passages of lorem ipsum, but the majority have suffered alteration.</p>
                        <div className="testimonial-author">
                            <img src="customer1.jpg" alt="Bonnie Tolbet" />
                            <h3>Bonnie Tolbet</h3>
                            <span>Customer</span>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p>There are many variations of passages of lorem ipsum, but the majority have suffered alteration.</p>
                        <div className="testimonial-author">
                            <img src="customer2.jpg" alt="Sarah Albert" />
                            <h3>Sarah Albert</h3>
                            <span>Customer</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
