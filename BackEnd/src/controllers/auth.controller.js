import { genrateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";
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
                profilePic: newUser.profilePic
            })
        } else{
            res.status(400).json({message: "Invalid data."});
        }
    } catch (error) {
        console.error("Error: Signup Controller " + error);
        res.status(500).json({message: "Servver error. Cry Emoji."});
    }
};

export const login = async (req, res) => {
    const data = req.body;
    try {
        const email = data.email;
        const user = await User.findOne({email});
        
        if(!user){
            return res.status(400).json({message: "Invalid User."});
        }
        
        const auth = await bcrypt.compare(data.password, user.password);
        
        if(!auth){
            return res.status(400).json({message: "Invalid Password."});
        }
        
        genrateToken(user._id, res);
        
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: email,
            profilePic: user.profilePic
        })
    } catch (error) {
        console.log("Error in login Controller.");
        
        res.status(500).json({message: "Error on server, Cry Emote"});
    }
};

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "loggedoff succesfully."});
    } catch (error) {
        console.log("Error in logout Controller.");
        
        res.status(500).json({message: "Error on server, Cry Emote"});
    }
};

export const updateProfile = async (req, res) => {
    try {
        const {profilePic} = req.body;
        
        const userId = req.user._id;
        
        if(!profilePic){
            return res.status(400).json({message: "No profile picture provided."});
        }
        const upload = await cloudinary.uploader.upload(profilePic);
        console.log(profilePic);
        
        const updateUser = await User.findByIdAndUpdate(userId, {profilePic: upload.secure_url}, {new: true});
        
        res.status(200).json(updateUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error on server. Cry lol."});
    }
}

export const check = (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.error("Error on check controller " + error);
        res.status(500).json({message: "Error on server, Cry lol."});
    }
};