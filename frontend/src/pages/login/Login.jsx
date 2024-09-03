import React, { useState } from 'react';
import logo from "../../assets/horizontal-logo.png";
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin.js';

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const {  login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username,password);
    }
    return (
        <div className="flex flex-col font-mono-sans items-center justify-center h-screen bg-black">
            <div className="absolute top-0 left-0 right-0 flex justify-center mt-2">
                <img src={logo} alt="Logo" className="w-24 h-24" />
            </div>
            <div className="absolute top-0 right-0 mt-6 mr-6">
                <p className="text-base  text-gray-400">Don't have an account ? <Link to={'/signup'} className="text-emerald-300 mr-4 cursor-pointer" >Sign up</Link></p>
            </div>
            <button className="absolute bottom-0 left-0 right-0 flex justify-center mb-6">
                <p className="text-base mb-12 text-gray-500">Forgot password?</p>
            </button>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl text-emerald-300 mb-12 text-center">Login</h2>
                <form className="flex flex-col items-center justify-center" onClick={handleSubmit}>
                    <div className="mb-4 flex items-center">
                        <FiMail className="text-gray-400 mr-4" />
                        <input type="email" 
                        className="w-72 bg-transparent px-3 py-2 border-b transition-transform duration-300 hover:scale-105 border-gray-400 rounded-none  focus:outline-none" 
                        placeholder="Email" 
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <FiLock className="text-gray-400 mr-4" />
                        <input type="password" 
                        className="w-72 bg-transparent px-3 py-2 border-b transition-transform duration-300 hover:scale-105 border-gray-400 rounded-none  focus:outline-none" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="w-80 m-6 bg-emerald-600 text-white py-2 transition-transform duration-500 hover:scale-110"  >
                    Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
