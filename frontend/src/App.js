import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import BadFruits from "./Pages/Farmer/BadFruits";
import BadVegetables from "./Pages/Farmer/BadVegetables";
import FreshFruits from "./Pages/Farmer/Freshfruits";
// import Home from "./Pages/Home";
import Contact from "./Pages/Common/Contact";
import FreshVegetables from "./Pages/Farmer/FreshVegetables";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "./Pages/Farmer/Orders";
import About from "./Pages/Common/About";
import Footer from "./Components/Footer/Footer";
import Services from "./Pages/Common/Services";
import UpdateItem from "./Pages/Farmer/UpdateFreshFruits";
import HomeAll from "./Pages/Common/HomeAll";
// import Fveg from "./Pages/Users/Fveg";
// import Ffruits from "./Pages/Users/Ffruit";
// import Oldveg from "./Pages/Users/Oldveg";
// import Oldfruits from "./Pages/Users/Oldfruits";
import Cart from "./Pages/Users/Cart";
import ScrollToTop from "./Components/Layout/Layout";
import Product from "./Pages/Users/Product";
import LoginSignup from "./Pages/Common/LoginSignup";
import ShopCategory from "./Pages/Users/ShopCategory";
import fruit_image from "./Components/Assets/freshfut.jpeg";
import vegetable_image from "./Components/Assets/fvegetables.jpeg";
import AppDownload from "./Components/AppDownload/AppDownload";

function App() {
  // Initial fruits data
  const initialFruits = [
    {
      id: 101, // Changed IDs to avoid overlap with products
      name: "Apple",
      price: 70.0,
      quantity: 100,
      image: "/path-to-image/apple.jpg",
    },
    {
      id: 102,
      name: "Banana",
      price: 30.0,
      quantity: 150,
      image: "/path-to-image/banana.jpg",
    },
    {
      id: 103,
      name: "Orange",
      price: 50.0,
      quantity: 120,
      image: "/path-to-image/orange.jpg",
    },
    {
      id: 104,
      name: "Grapes",
      price: 90.0,
      quantity: 80,
      image: "/path-to-image/grapes.jpg",
    },
    {
      id: 105,
      name: "Strawberry",
      price: 150.0,
      quantity: 60,
      image: "/path-to-image/strawberry.jpg",
    },
    {
      id: 106,
      name: "Mango",
      price: 120.0,
      quantity: 50,
      image: "/path-to-image/mango.jpg",
    },
  ];

  // Initial vegetables (products) data
  const initialProducts = [
    {
      id: 201, // Changed IDs to avoid overlap with fruits
      name: "Tomato",
      price: 50.0,
      quantity: 200,
      image: "/path-to-image/tomato.jpg",
    },
    {
      id: 202,
      name: "Potato",
      price: 30.0,
      quantity: 300,
      image: "/path-to-image/potato.jpg",
    },
    {
      id: 203,
      name: "Carrot",
      price: 40.0,
      quantity: 150,
      image: "/path-to-image/carrot.jpg",
    },
    {
      id: 204,
      name: "Cucumber",
      price: 25.0,
      quantity: 250,
      image: "/path-to-image/cucumber.jpg",
    },
    {
      id: 205,
      name: "Broccoli",
      price: 60.0,
      quantity: 100,
      image: "/path-to-image/broccoli.jpg",
    },
    {
      id: 206,
      name: "Spinach",
      price: 20.0,
      quantity: 180,
      image: "/path-to-image/spinach.jpg",
    },
  ];

  const [fruits, setFruits] = useState(initialFruits);
  const [products, setProducts] = useState(initialProducts);

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />

        <Navbar />

        <Routes>

          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/contact" element={<Contact />} />

          {/* these are for the farmer */}
          <Route
            path="/fresh-vegetables"
            element={
              <FreshVegetables products={products} setProducts={setProducts} />
            }
          />
          <Route
            path="/fresh-fruits"
            element={<FreshFruits fruits={fruits} setFruits={setFruits} />}
          />
          <Route path="/old-vegetables" element={<BadVegetables />} />
          <Route path="/old-fruits" element={<BadFruits />} />
          
          <Route path="/orders" element={<Orders />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/" element={<HomeAll />} />
          <Route
            path="/update/:id"
            element={
              <UpdateItem
                products={products}
                setProducts={setProducts}
                fruits={fruits}
                setFruits={setFruits}
              />
            }
          />
  
            {/* these are for the users */}
          {/* <Route path="/fvegetables" element={<Fveg />} />
          <Route path="/ffruits" element={<Ffruits />} />
          <Route path="/oldvegetables" element={<Oldveg />} />
          <Route path="/oldfruits" element={<Oldfruits />} /> */}

          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />

          <Route path="/ffruits" element={<ShopCategory banner={fruit_image} category="ffruits" />} />
          <Route path="/fvegetables" element={<ShopCategory banner={vegetable_image} category="fveg" />} />
          <Route path="/oldfruits" element={<ShopCategory category="ofruits" />} />
          <Route path="/oldvegetables" element={<ShopCategory category="oveg" />} />
          
          
        </Routes>
        <AppDownload />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
