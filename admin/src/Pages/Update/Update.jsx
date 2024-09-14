import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import './Update.css'; 

const UpdateVeg = ({ url }) => {
    const [data, setData] = useState({
        id: '',
        name: '',
        price: '',
        category: '',
        image: null,
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [items, setItems] = useState([]);

    // Fetch existing items to populate dropdown or list
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(`${url}/api/fvege/list`);
                if (response.data.success) {
                    setItems(response.data.data);
                } else {
                    toast.error("Error fetching items");
                }
            } catch (error) {
                console.error(error);
                toast.error("Error fetching items");
            }
        };

        fetchItems();
    }, [url]);

    // Handle change in input fields
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle image upload
    const onImageChange = (event) => {
        const file = event.target.files[0];
        setData((prevData) => ({ ...prevData, image: file }));
        setImagePreview(URL.createObjectURL(file));
    };

    // Handle update form submission
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('id', data.id);
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('category', data.category);
        if (data.image) formData.append('image', data.image);

        try {
            const response = await axios.post(`${url}/api/fvege/update`, formData);
            if (response.data.success) {
                toast.success(response.data.message);
                setData({
                    id: '',
                    name: '',
                    price: '',
                    category: '',
                    image: null,
                });
                setImagePreview(null);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Error updating item");
        }
    };

    return (
        <div className='update-veg'>
            <h3>Update Fresh Vegetable</h3>
            <form className='update-form' onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label htmlFor='item'>Select Item</label>
                    <select
                        id='item'
                        name='id'
                        onChange={async (e) => {
                            const selectedId = e.target.value;
                            if (selectedId) {
                                const selectedItem = items.find(item => item._id === selectedId);
                                if (selectedItem) {
                                    setData({
                                        id: selectedItem._id,
                                        name: selectedItem.name,
                                        price: selectedItem.price,
                                        category: selectedItem.category,
                                        image: null,
                                    });
                                    setImagePreview(`${url}/images/${selectedItem.image}`);
                                }
                            }
                        }}
                    >
                        <option value=''>Select an item</option>
                        {items.map(item => (
                            <option key={item._id} value={item._id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor='name'>Product Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={data.name}
                        onChange={onChangeHandler}
                        placeholder='Type here'
                        required
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='price'>Product Price</label>
                    <input
                        type='number'
                        id='price'
                        name='price'
                        value={data.price}
                        onChange={onChangeHandler}
                        placeholder='$20'
                        required
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='category'>Product Category</label>
                    <select
                        id='category'
                        name='category'
                        value={data.category}
                        onChange={onChangeHandler}
                        required
                    >
                        <option value='ffruits'>Fresh Fruits</option>
                        <option value='fveg'>Fresh Vegetables</option>
                        <option value='ofruits'>Old Fruits</option>
                        <option value='oveg'>Old Vegetables</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label htmlFor='image'>Upload Image</label>
                    <input
                        type='file'
                        id='image'
                        name='image'
                        onChange={onImageChange}
                    />
                    {imagePreview && <img src={imagePreview} alt='Image preview' className='image-preview' />}
                </div>

                <button type='submit' className='update-btn'>Update</button>
            </form>
        </div>
    );
};

export default UpdateVeg;
