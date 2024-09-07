import React, { useEffect, useState } from 'react';
import './Users.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const UserList = ({ url }) => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${url}/api/user/list`);
            if (response.data.success) {
                setUsers(response.data.data);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Error fetching users");
        }
    };

    const confirmRemoveUser = async (userId) => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: 'green',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await removeUser(userId);
            }
        });
    };

    const removeUser = async (userId) => {
        try {
            const response = await axios.post(`${url}/api/user/delete`, { id: userId });
            await fetchUsers(); // Refresh the user list after deletion
            if (response.data.success) {
                toast.success(response.data.message || "User removed successfully");
            } else {
                toast.error("Error");
            }
        } catch (error) {
            toast.error("Error removing user");
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className='list flex-col'>
            <p className='heading'>All Users</p>
            <div className='lists-table'>
                <div className='lists-table-format title'>
                    <b>Name</b>
                    <b>Email</b>
                    <b>Type</b>
                    <b>Id</b>
                    <b>Action</b>
                </div>
                {users.map((user, index) => (
                    <div key={index} className='lists-table-format'>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.type}</p>
                        <p>{user._id}</p>
                        <p className='cursor' onClick={() => confirmRemoveUser(user._id)}>X</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
