import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


//login user

const loginUser = async (req, res) => { 


}

const createToken = (id) => { 
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user

const registerUser = async (req, res) => { 
    const { name, email, type, password } = req.body;
    try {
        //check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({
                success: false,
                message: "User already exists",
            });
        }

            //validate email format and strong password

        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Invalid email",
            });
        }
        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Password should be atleast 8 characters",
            });
        }

            //hashing password

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new userModel({
                name: name,
                email: email,
                type: type,
                password: hashedPassword,
            })

            const user = await newUser.save();
            const token = createToken(user._id);
            res.json({ success: true, token: token });
            
        }catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error. User not registered",
        });
    }
}

export { loginUser, registerUser };
