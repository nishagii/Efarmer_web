import express from 'express';
import {removeUser, listUsers, loginUser, registerUser, updateUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser); //ishan
userRouter.post('/login', loginUser); // ishan
userRouter.get('/list', listUsers); // ishan
userRouter.post('/update', updateUser); //sawani
userRouter.post('/delete', removeUser); //sujan

export default userRouter;