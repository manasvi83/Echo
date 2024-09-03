import React from 'react';
import logo from "../../assets/horizontal-logo.png";
import { FiSearch } from 'react-icons/fi';
// import { BiLogOut } from "react-icons/bi";
import Conversations from './Conversations.jsx';
import LogoutButton from './LogoutButton.jsx';
import SearchInput from './SearchInput.jsx';

const Sidebar = () => {
    return (
        <div className="w-inherit relative h-full flex flex-col  items-center font-mono-sans bg-inherit rounded-r-none rounded-b-none px-10 border-r  border-teal-800 ">
            <div>
                <div className="flex absolute pl-8 left-0 top-0 align-middle ">
                    <img src={logo} alt="Logo" className="w-16 h-16" />
                </div>
                <LogoutButton/>
            </div>
            {/* Search Bar */}
            {/* <div className="flex   bg-teal-500 bg-opacity-30 rounded-full w-full  p-5 text-slate-100 border-emerald-500 py-2 mt-20 ">
                <input type="text" placeholder="Search ..." className="flex-grow text-sm border-none bg-transparent focus:outline-none" />
                <button><FiSearch className="text-slate-300  font-thin" /></button>
            </div> */}
            <SearchInput/>
            <Conversations/>
        </div>
    );
};


export default Sidebar;