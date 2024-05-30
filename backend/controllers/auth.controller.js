import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password and Confirm Password must be the same." })
        }

        const user = await User.findOne({ username }); //if user exists

        if (user) {
            return res.status(400).json({ message: "Username already exists." })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        

        const boyavatar = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlavatar = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName: fullName,
            username,
            password: hashedPassword,
            gender,
            avatar: gender === "male" ? boyavatar : girlavatar,
        });

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                avatar: newUser.avatar,
            });
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }


    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export const logout = async(req, res) => {
    try {
        res.cookie("jwt","",{ maxAge: 0 })
        res.status(200).json({message:"Logged out successfully"})
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user =  await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            avatar: user.avatar,
        });

    } catch (error) { 
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }    
}

// export { authController };