import { genrateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    const data = req.body;
    if(!data.fullName || !data.password || !data.email){
        return res.status(403).json({message: "Input values missing."});
    }
    //email password fullName
    try {
        if(data.password.length < 6){
            return res.status(400).json({message: "Password is less than 6 characters."});
        }
        
        const email = data.email;
        const user = await User.findOne({email});
        
        if(user){
            return res.status(400).json({message: "Email already exists."});
        }
        
        //hash password
        const salt = await bcrypt.genSalt(15);
        const hPassword = await bcrypt.hash(data.password, salt);
        const newUser = new User({
            email: email,
            fullName: data.fullName,
            password: hPassword
        })
        
        if(newUser){
            genrateToken(newUser._id, res);
            await newUser.save();
            
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePicture: newUser.profilePicture
            })
        } else{
            res.status(400).json({message: "Invalid data."});
        }
    } catch (error) {
        console.error("Error: Signup Controller " + error);
        res.status(500).json({message: "Servver error. Cry Emoji."});
    }
};