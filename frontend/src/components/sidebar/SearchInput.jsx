import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import useConversation from "../../zustand/useConversation.js";
import useGetConversations from "../../hooks/useGetConversations.js";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error("Search term must be at least 3 characters long");
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else toast.error("No such user found!");
    };
    return (
        <>
            {/* <form onSubmit={handleSubmit} className='flex items-center gap-2'>
                <input
                    type='text'
                    placeholder='Search…'
                    className='input input-bordered rounded-full'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                    <IoSearchSharp className='w-6 h-6 outline-none' />
                </button>
            </form> */}
            <form onSubmit={handleSubmit}
            className="flex  bg-teal-500 bg-opacity-30 rounded-full w-full h-fit p-5 text-slate-100 border-emerald-500 py-2 mt-20 ">
                <input 
                type="text" 
                placeholder="Search ..." 
                className="flex-grow text-sm border-none bg-transparent focus:outline-none" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <button type='submit'>
                    <FiSearch className="text-slate-300  font-thin" />
                </button>
            </form>
        </>
    );
};
export default SearchInput;
