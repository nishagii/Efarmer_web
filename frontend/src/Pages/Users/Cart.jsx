import React from "react";
import "./CSS/Cart.css";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
import all_product from "../../Components/Assets/all_product";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cartItems,all_product, addToCart, removeFromCart,getTotalCartAmount ,url} = useContext(ShopContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Add more (5Kg)</p>
          <p>Remove</p>
         
        </div>
        <br />
        <hr />
        {all_product.map((item,index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt="no image" />
                  <p>{item.name}</p>
                  <p>Rs. {item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>Rs. {item.price * cartItems[item.id]}</p>
                  <p onClick={()=>addToCart(item.id)} className="add-more">ADD</p>
                  <p onClick={()=>removeFromCart(item.id)} className="cross">X</p>
                </div>
                <hr />
              </div>
              
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>LKR {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Discounts Today</p>
              <p>10%</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Money Saved</p>
              <p>LKR { getTotalCartAmount()*0.1}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>LKR {getTotalCartAmount()*0.9}</p>
            </div>
          </div>
          <Link to="/placeorder">  <button >Save the order</button></Link>
         
        </div>
      </div>
    </div>
  )
};

export default Cart;
