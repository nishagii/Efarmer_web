import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder,listOrders, userOrders, updateStatus } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);//sujan(add)
orderRouter.post("/userorders",authMiddleware,userOrders)//sujan(retrive) 
orderRouter.get("/list",listOrders); //sujan (retrive)
orderRouter.post("/status",updateStatus);  //sujan (update)

export default orderRouter;
