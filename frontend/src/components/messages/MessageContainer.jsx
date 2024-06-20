import MessageInput from "./MessageInput.jsx";
import Messages from "./Messages.jsx";

const MessageContainer = () => {
	return (
		<div className='w-full h-full flex flex-col items-center justify-center font-mono-sans bg-base-100 rounded-lg  py-8'>
			<>
				{/* Header */}
				<div className='bg-slate-500 px-4 py-2 mb-2'>
					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
				</div>

				<Messages />
				<MessageInput />
			</>
		</div>
	);
};
export default MessageContainer;