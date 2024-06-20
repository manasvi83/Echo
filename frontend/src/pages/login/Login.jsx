// const Login = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Login
// 					<span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>
// 					<a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
// 						{"Don't"} have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2'>Login</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default Login;

import React from 'react';
import logo from "../../assets/horizontal-logo.png";
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Login = ({ onSignupClick ,onLoginSuccess}) => {
    return (
        <div className="flex flex-col font-mono-sans items-center justify-center h-screen bg-black">
            <div className="absolute top-0 left-0 right-0 flex justify-center mt-2">
                <img src={logo} alt="Logo" className="w-24 h-24" />
            </div>
            <div className="absolute top-0 right-0 mt-6 mr-6">
                <div className="text-base  text-gray-400">Don't have an account ? <span className="text-emerald-300 mr-4 cursor-pointer" onClick={onSignupClick}><Link to= '/signup'>Sign up</Link></span></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-6">
                <p className="text-base mb-12 text-gray-500">Forgot password?</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl text-emerald-300 mb-12 text-center">Login</h2>
                <form className="flex flex-col items-center justify-center">
                    <div className="mb-4 flex items-center">
                        <FiMail className="text-gray-400 mr-4" />
                        <input type="email" className="w-72 bg-transparent px-3 py-2 border-b transition-transform duration-300 hover:scale-105 border-gray-400 rounded-none  focus:outline-none" placeholder="Email" />
                    </div>
                    <div className="mb-4 flex items-center">
                        <FiLock className="text-gray-400 mr-4" />
                        <input type="password" className="w-72 bg-transparent px-3 py-2 border-b transition-transform duration-300 hover:scale-105 border-gray-400 rounded-none  focus:outline-none" placeholder="Password" />
                    </div>
                    <button type="submit" className="w-80 m-6 bg-emerald-600 text-white py-2 transition-transform duration-500 hover:scale-110" onClick={onLoginSuccess}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;

