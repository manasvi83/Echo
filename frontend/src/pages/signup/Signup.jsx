import React from 'react';
import logo from "../../assets/horizontal-logo.png";
import { FiUser, FiMail, FiLock, FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import GenderCheckbox from './GenderCheckbox.jsx';
import useSignup from '../../hooks/useSignup.js';

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const { signup} = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(inputs);
    console.log(inputs);
  }

  return (
    <div className="flex flex-col font-mono-sans items-center justify-center h-screen bg-black">
      <div className="absolute top-0 left-0 right-0 flex justify-center mt-2">
        <img src={logo} alt="Logo" className="w-24 h-24" />
      </div>
      <div className="absolute top-0 right-0 mt-6 mr-6">
        <p className="text-base text-gray-400">Already have an account ? <Link to={'/login'} className="text-emerald-300 mr-4 cursor-pointer" >Login</Link></p>
      </div>
      <div className="flex flex-col mt-16 items-center justify-center">
        <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <FiUser className="text-gray-400 mr-4" />
            <input type="text"
              className="w-72 bg-transparent px-3 py-2 border-b border-gray-400 rounded-none transition-transform duration-300 hover:scale-105 focus:outline-none"
              placeholder="Full Name"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>
          <div className="mb-4 flex items-center">
            <FiMail className="text-gray-400 mr-4" />
            <input type="email"
              className="w-72 bg-transparent px-3 py-2 border-b border-gray-400 rounded-none transition-transform duration-300 hover:scale-105 focus:outline-none"
              placeholder="Email / Username"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
          </div>
          <div className="mb-4 flex items-center">
            <FiLock className="text-gray-400 mr-4" />
            <input type="password"
              className="w-72 bg-transparent px-3 py-2 border-b border-gray-400 rounded-none transition-transform duration-300 hover:scale-105 focus:outline-none"
              placeholder="Password"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>
          <div className="mb-4 flex items-center">
            <FiCheck className="text-gray-400 mr-4" />
            <input type="password"
              className="w-72 bg-transparent px-3 py-2 border-b border-gray-400 rounded-none transition-transform duration-300 hover:scale-105 focus:outline-none"
              placeholder="Confirm Password"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
          <button type="submit" className="w-80 m-4 bg-emerald-600 text-white py-2 transition-transform duration-500 hover:scale-110" >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
