import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

export const protectRouter = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        
        if(!token){
            return res.status(401).json({message: "No token provided."});
        }
        
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        if(!decoded) {
            return res.status(401).json({message: "Token not valid."});
        }
        
        const user = await User.findOne({_id: decoded.userId}).select("-password");
        
        if(!user) {
            return res.status(404).json({message: "Invalid Token."});
        }
        
        req.user = user;
        
        next();
    } catch (error) {
        console.log("Error in protected route middleware " + error);
        res.status(500).json({message: "Error in the server. Cry lol"});
    }
}