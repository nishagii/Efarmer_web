import express from 'express';
import {removeUser, listUsers, loginUser, registerUser, updateUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/list', listUsers);
userRouter.post('/update', updateUser);
userRouter.post('/delete', removeUser);

export default userRouter;