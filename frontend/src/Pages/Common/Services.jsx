import React from 'react';
import './Services.css'; // Make sure to import your CSS file

const Services = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Agriculture & Organic Market</h1>
                    <button className="hero-button">Show Now</button>
                </div>
            </section>

            {/* Description Section */}
            <section className="description">
                <p>
                    cisdhoicshdcsv c fof ciods fdhoi hifoi fishpf shf cfhpstsc fs pdfsd hdu cds
                    cdifod fist hsdoifh ds
                    ds
                    fdsf d
                    dfdfsiofhsdiufhdsiufgdsif df d fdsdo . dsodsf9s 0sfddshfi sdfipds fiusd ihsduigsi gf ui efdhn fhiafdos
                    methana description ekak ape website eka gana
                </p>
            </section>

            {/* Products Section */}
            <section className="products">
                <div className="product">
                    <img src="vegetables.jpg" alt="Vegetables" />
                    <div className="product-content">
                        <h2>Vegetables</h2>
                        <button className="product-button">Order Now</button>
                    </div>
                </div>
                <div className="product">
                    <img src="fruits.jpg" alt="Fruits" />
                    <div className="product-content">
                        <h2>Fruits</h2>
                        <button className="product-button">Order Now</button>
                    </div>
                </div>
                <div className="product">
                    <img src="vegetables.jpg" alt="Vegetables" />
                    <div className="product-content">
                        <h2>Vegetables</h2>
                        <button className="product-button">Order Now</button>
                    </div>
                </div>
                <div className="product">
                    <img src="vegetables.jpg" alt="Vegetables" />
                    <div className="product-content">
                        <h2>Vegetables</h2>
                        <button className="product-button">Order Now</button>
                    </div>
                </div>
            </section>

            {/* Food Section */}
            <section className="food">
                <h2>Get the MAXimum use of Food...</h2>
                <img src="food.jpg" alt="Food" />
            </section>
        </div>
    );
};

export default Services;
