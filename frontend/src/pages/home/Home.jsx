// import MessageContainer from '../components/messages/MessageContainer.jsx';
// import Sidebar from '../components/sidebar/Sidebar.jsx';


// const Chats = () => {

    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const toggleDropdown = () => {
    //     setIsDropdownOpen(!isDropdownOpen);
    // };


    // return (
    //     <div className="flex flex-row items-center justify-center mx-10 space-between w-4/5 h-3/4 rounded-lg px-16 shadow-neon my-10">
    //     <Sidebar/>
    //     <div className="divider lg:divider-horizontal"></div>
    //     <MessageContainer/>
    //     </div>
        // <div className="flex flex-col items-center font-mono-sans justify-center h-screen bg-black">
            
        //     {/* Conversation Container */}
        //     <div className="w-fit h-4/5 rounded-lg px-16 shadow-neon my-8">
        //     <div className="relative top-0 left-0 right-0 flex justify-center">
        //         <img src={logo} alt="Logo" className="w-24 h-24" />
        //     </div>
        //         {/* Search Bar */}
        //         <div className="flex items-center border-b border-gray-300 py-2 px-4">
        //             <input type="text" placeholder="Search ..." className="flex-grow border-none bg-transparent focus:outline-none" />
        //             <FiSearch className="text-gray-500" />
        //         </div>

        //         {/* Demo Contacts */}
        //         <div className="flex items-center mt-6 mb-4">
        //             <div className='w-12 rounded-full'>
        //                 <img
        //                     src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
        //                     alt='user avatar'
        //                     className='shadow-neon'
        //                 />
        //             </div>
        //             <div>
        //                 <h4 className="text-md font-semibold">John Doe</h4>
        //                 <p className="text-gray-500 text-sm">Hey there! How are you?</p>
        //             </div>
        //         </div>
        //         <div className="flex items-center mb-4">
        //             <div className='w-12 rounded-full'>
        //                 <img
        //                     src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
        //                     alt='user avatar'
        //                 />
        //             </div>
        //             <div>
        //                 <h4 className="text-md font-semibold">Jane Smith</h4>
        //                 <p className="text-gray-500 text-sm">Can we catch up later?</p>
        //             </div>
        //         </div>
        //         <div className="flex items-center mb-4">
        //             <div className='w-12 rounded-full'>
        //                 <img
        //                     src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
        //                     alt='user avatar'
        //                 />
        //             </div>
        //             <div>
        //                 <h4 className="text-md font-semibold">Alex Johnson</h4>
        //                 <p className="text-gray-500 text-sm">Did you see the new update?</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>

            /* Bottom Right Hamburger Icon
            {/* Hamburger Icon */
            /* <div className="absolute top-4 right-4">
                <label className="btn btn-circle swap swap-rotate" onClick={toggleDropdown}>
                   
                    <input type="checkbox" />

                    
                    <svg className={`swap-off fill-current ${isDropdownOpen ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                    
                    <svg className={`swap-on fill-current ${isDropdownOpen ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                </label>
            </div>

            
            <ul className={`menu bg-base-200 w-56 rounded-box absolute top-16 right-4 ${isDropdownOpen ? '' : 'hidden'}`}>
                <li>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 002 2h2a1 1 0 002-2v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        Item 2
                    </a>
                </li>
                <li>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Item 1
                    </a>
                </li>
                <li>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        Item 3
                    </a>
                </li>
            </ul>
        </div> 
    
    ); */
// )};

// export default Chats;


import React from "react";
import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import galaxy from "../../assets/galaxy.jpg"

const Chats = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-black " style={{
            backgroundImage: `url(${galaxy})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="w-11/12 h-5/6 bg-white bg-opacity-15 backdrop-blur-lg shadow-blue rounded-lg flex  overflow-hidden">
                <div className="w-1/3 ">
                    <Sidebar />
                </div>
                {/* <div className="  p-0 m-0 w-px bg-gray-300 divider divider-horizontal"></div> */}
                <div className="w-2/3">
                    <MessageContainer />
                </div>
            </div>
        </div>
    );
};

export default Chats;
