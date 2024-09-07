import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const List = ({ url }) => {

  const MySwal = withReactContent(Swal);
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/fvege/list`);
    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error("Error fetching products");
    }
  }

  const removeFood = async (foodId) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: 'green',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.post(`${url}/api/fvege/delete`, { id: foodId });
        await fetchList();
        if (response.data.success) {
          MySwal.fire(
            'Deleted!',
            'The product has been deleted.',
            'success'
          );
        } else {
          toast.error("Error removing product");
        }
      }
    })
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='list add flex-col'>
      <p>All products list</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Id</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.id}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className='cursor' onClick={() => removeFood(item._id)}>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List;
