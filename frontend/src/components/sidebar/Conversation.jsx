import React from 'react'
import useConversation from '../../zustand/useConversation.js';

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    return (
        <>
        <div className={`indicator flex items-center my-8 gap-2 w-full ${isSelected ? "bg-sky-800 rounded-lg h-12 p-2 " : ""}`} onClick={() => setSelectedConversation(conversation)}>
            <div className='w-8 rounded-full '>
            <span className="indicator-item indicator-bottom indicator-start  scale-x-50 scale-y-50 indicator-item-xs badge badge-success" ></span>
                <img
                    src={conversation.avatar}
                    alt='user avatar'
                    
                />
            </div>
            <div >
                <h4 className="text-md mx-4 font-semibold">{conversation.fullName}</h4>
            </div>
            
        </div>
        </>
    )
}

export default Conversation