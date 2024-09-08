import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
// import all_product from '../../Components/Assets/all_product'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from '../../Components/Assets/dropdown_icon.png'
import Item from '../../Components/Item/Item'
import { Link } from 'react-router-dom'

const ShopCategory = (props) => {

  const{all_product}= useContext(ShopContext);

  return (
    <div className='shop-category'>
      <header>
        <h1>You Got {props.category } !</h1>
      </header>
      <img className='banner' src={props.banner} alt="" />

      <div>
        <p>
          <span className='results'>
            showing 1-40 of 100 results
          </span>
        </p>
      </div>
      <div className='shopcategory-sort'>
        Sort by : <img src={dropdown_icon} alt="" />
      </div>
      <div className="item-container">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price}  />;
          } else {
            return null;
          }
        })}
      </div>
      <div className='view-cart-btn'>
        <Link to="http://localhost:3000/cart">
          <button >View Cart</button>
        </Link>
        
      </div>

    </div>
    
  )
}

export default ShopCategory;
