// import GenderCheckbox from "./GenderCheckbox.jsx";

// const SignUp = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-neon bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Sign Up <span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Full Name</span>
// 						</label>
// 						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
// 					</div>

// 					<div>
// 						<label className='label p-2 '>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
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

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Confirm Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Confirm Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<GenderCheckbox />

// 					<a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
// 						Already have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default SignUp;

import React from 'react';
import logo from "../../assets/horizontal-logo.png";
import { FiUser, FiMail, FiLock, FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import GenderRadio from './GenderRadio.jsx';
import useSignup from '../../hooks/useSignup.js';

const Signup = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const { loading, signup } = useSignup();
  

  const handleRadioChange = (selectedGender) => {
    setInputs({ ...inputs, gender: selectedGender });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col font-mono-sans items-center justify-center h-screen bg-black">
      <div className="absolute top-0 left-0 right-0 flex justify-center mt-2">
        <img src={logo} alt="Logo" className="w-24 h-24" />
      </div>
      <div className="absolute top-0 right-0 mt-6 mr-6">
        <p className="text-base text-gray-400">Already have an account ? <span className="text-emerald-300 mr-4 cursor-pointer" ><Link to="/login">Login</Link></span></p>
      </div>
      <div className="flex flex-col mt-16 items-center justify-center">
        <form className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <FiUser className="text-gray-400 mr-4" />
            <input type="text" className="w-72 bg-transparent px-3 py-2 border-b border-gray-400 rounded-none focus:outline-none"
              placeholder="Full Name"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>
          <div className="mb-4 flex items-center">
            <FiMail className="text-gray-400 mr-4" />
            <input type="username" className="w-72 bg-transparent px-3 py-2 border-b border-gray-400 rounded-none focus:outline-none"
              placeholder="username / Username"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>
          <div className="mb-4 flex items-center">
            <FiLock className="text-gray-400 mr-4" />
            <input type="password" className="w-72 bg-transparent px-3 py-2 border-b border-gray-400 rounded-none focus:outline-none"
              placeholder="Password"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>
          <div className="mb-4 flex items-center">
            <FiCheck className="text-gray-400 mr-4" />
            <input type="password" className="w-72 bg-transparent px-3 py-2 border-b border-gray-400 rounded-none focus:outline-none"
              placeholder="Confirm Password"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>
          <GenderRadio
            selectedGender={inputs.gender}
            onRadioChange={handleRadioChange}
          />
          <button type="submit" disabled={loading}
            className="w-80 m-4 bg-emerald-600 text-white py-2 transition-transform duration-500 hover:scale-110">
            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
