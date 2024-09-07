import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Updateuser.css'; // Make sure to add your styles

const UpdateUser = ({ url }) => {
  const [data, setData] = useState({
    id: '',
    name: '',
    email: '',
    type: '',
    password: ''
  });
  const [users, setUsers] = useState([]);

  // Fetch existing users to populate dropdown
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${url}/api/user/list`);
        if (response.data.success) {
          setUsers(response.data.data);
        } else {
          toast.error("Error fetching users");
        }
      } catch (error) {
        console.error(error);
        toast.error("Error fetching users");
      }
    };

    fetchUsers();
  }, [url]);

  // Handle change in input fields
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle update form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${url}/api/user/update`, data);
      if (response.data.success) {
        toast.success(response.data.message);
        setData({
          id: '',
          name: '',
          email: '',
          type: '',
          password: ''
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating user");
    }
  };

  return (
    <div className='update-user'>
      <h3>Update User Details</h3>
      <form className='update-form' onSubmit={onSubmitHandler}>
        <div className='form-group'>
          <label htmlFor='user'>Select User</label>
          <select
            id='user'
            name='id'
            onChange={async (e) => {
              const selectedId = e.target.value;
              if (selectedId) {
                const selectedUser = users.find(user => user._id === selectedId);
                if (selectedUser) {
                  setData({
                    id: selectedUser._id,
                    name: selectedUser.name,
                    email: selectedUser.email,
                    type: selectedUser.type,
                    password: ''
                  });
                }
              }
            }}
          >
            <option value=''>Select a user</option>
            {users.map(user => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='name'>User Name</label>
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
          <label htmlFor='email'>User Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={data.email}
            onChange={onChangeHandler}
            placeholder='email@example.com'
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='type'>User Type</label>
          <select
            id='type'
            name='type'
            value={data.type}
            onChange={onChangeHandler}
          >
            <option value=''>Select type</option>
            <option value='Customer'>Customer</option>
            <option value='Shop Owner'>Shop Owner</option>
            <option value='Animal Farm Owner'>Animal Farm Owner</option>
            <option value='Admin'>Admin</option>
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='password'>New Password (optional)</label>
          <input
            type='password'
            id='password'
            name='password'
            value={data.password}
            onChange={onChangeHandler}
            placeholder='Leave blank to keep unchanged'
          />
        </div>

        <div className='button-wrapper'>
          <button type='submit' className='update-btn'>Update</button>
        </div>

      </form>
    </div>
  );
};

export default UpdateUser;

