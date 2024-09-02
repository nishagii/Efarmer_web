import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios' 
import { toast } from 'react-toastify'

const Add = ({url}) => {

  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: '',
    id: '',
    category: 'Fresh Fruits',
    price: ''
  })

  const onChangeHandler = (event) => { 
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]: value}))
  }

  // useEffect(() => {
  //   console.log(data)
  // },[data])


  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('id', data.id);
    formData.append('category', data.category);
    formData.append('price', data.price);
    formData.append('image', image);
    const response = await axios.post(`${url}/api/fvege/upload`, formData);

    if (response.data.success) {
      setData({
        name: '',
        id: '',
        category: 'Fresh Fruits',
        price: ''
      })
      setImage(false)
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
  }

  return (
    <div className='add'>
      <form className='flex-col' action="" onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])}  type="file" id='image' hidden required />
        </div>
        <div className="add-product-name">
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' required/>
        </div>
        <div className="add-product-id">
          <p>Product id</p>
          <input onChange={onChangeHandler} type="text" name='id' placeholder='Type here' required value={data.id}/>
        </div>
        <div className="add-category-price">
          <div className='add-category flex-col'>
            <p>Product Category</p>
            <select onChange={onChangeHandler} name="category" id="">
              <option value="fFruits">Fresh Fruit</option>
              <option value="fVegetables">Fresh Vegetable</option>
              <option value="oFruits">Old Fruits</option>
              <option value="oVegetables">Old Vegetable</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input onChange={onChangeHandler} type="Number" name='price' placeholder='$20' value={data.price} />
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
     </form>
      
    </div>
  )
}

export default Add
