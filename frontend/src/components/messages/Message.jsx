import { useAuthContext } from "../../context/AuthContext.jsx";
import { extractTime } from "../../utils/extractTime.js";
import useConversation from "../../zustand/useConversation.js";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderID === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const avatar = fromMe ? authUser.avatar : selectedConversation?.avatar;
	const bubbleBgColor = fromMe ? "bg-teal-300 bg-opacity-10  text-slate-200" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className='m-0 p-0 relative'>
            <div className={`chat ${chatClassName} `}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src={avatar} />
                    </div>
                </div>
                <div className={`chat-bubble bg-teal-700 font-thin text-slate-200  ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
                <div className="chat-footer opacity-80">
                    <time className="text-xxs mx-2 opacity-50">{formattedTime}</time>
                </div>
            </div>
        </div>
	);
};
export default Message;