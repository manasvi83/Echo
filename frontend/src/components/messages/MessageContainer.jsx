import React from "react";
import MessageInput from "./MessageInput.jsx";
import Messages from "./Messages.jsx";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation.js";
import { useAuthContext } from "../../context/AuthContext.jsx";
import { useEffect } from "react";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);
	return (
		<div className="w-full relative h-full  flex  flex-col items-center  font-mono-sans rounded-lg  ">
			{/* Header */}
			{!selectedConversation ? (
				<NoChatSelected />
			) :  (
				<>
					<div className="bg-LightSeaGreen text-middle flex-shrink-0 top-0 h-fit p-4 pb-2 w-full border-b  border-teal-800 ">
						<span className="label-text ">To:</span> <span className="text-white mx-4 font-bold">{selectedConversation.fullName}</span>
					</div>
					<div className="w-full flex-grow overflow-x-hidden overflow-y-scroll bg-black bg-opacity-20  pl-0 py-0 hide-scrollbar ">
						<Messages />
					</div>
					<div className="w-full  flex-shrink-0 bg-LightSeaGreen h-fit items-baseline bottom-0 justify-center font-mono-sans rounded-l border-t  border-teal-800">
						<MessageInput />
					</div>
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
				<p>Welcome  {authUser.fullName} ❄</p>
				<p>Select a chat to start texting</p>
				<TiMessages className = 'text-3xl md:text:6xl text-center' />
			</div>
		</div>

	)
};