import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages.js";
// import useListenMessages from "../../hooks/useListenMessages.js";
import Message from "./Message.jsx";
import MessageSkeleton from "./MessageSkeleton.jsx";

const Messages = () => {
	const { messages } = useGetMessages()
	console.log("messages:", messages)
	// useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);


	return (
		<div className=' relative w-full  p-6 overflow-hidden'>
			{messages.length > 0 ?
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				)):
			(
				<p className='text-center align-middle'>Say Hi!</p>
			)}
		</div>
	);
};
export default Messages;