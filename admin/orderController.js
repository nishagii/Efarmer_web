import orderModel from '../backend/models/orderModel.js';
import userModel from '../backend/models/userModel.js';

//placing user order from front end
const placeOrder = async (req, res) => {

  const frontendUrl = "http://localhost:3000";

  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    res.json({ success: true, message: "Order placed successfully", session_url: frontendUrl });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error occurred" });
  }
};

//user orders for frontend

const userOrders = async (req, res)=>{
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({success:true,data:orders})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
  }
}


//listing orders for admin panel

const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "error" });
  }
};

//api for updating order status

const updateStatus = async (req, res) => { 
  try {
    await orderModel.findByIdAndUpdate(req.body.id, { status: req.body.status });
    res.json({ success: true, message: "Order status updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
}

export { listOrders, placeOrder,userOrders ,updateStatus};
