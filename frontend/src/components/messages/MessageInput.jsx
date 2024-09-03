import React, { useState } from 'react';
import { funEmojis } from '../../utils/emojis.js';
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage.js';

const MessageInput = () => {
	const [message, setMessage] = useState('');
	const [showEmojiKeyboard, setShowEmojiKeyboard] = useState(false);
	const { sendMessage } = useSendMessage();

	const handleEmojiClick = (emoji) => {
		setMessage(message + emoji);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className="w-inherit flex flex-row p-4 " onSubmit={handleSubmit}>
			<input
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="Type your message..."
				className="border-none rounded-3xl bg-teal-700 bg-opacity-30 text-slate-200 w-full px-3 py-2 focus:outline-none"
			/>
			<button type='submit' className='relative m-3 inset-y-0 end-0 flex items-center pe-3'>
				<BsSend />
			</button>
			<button
				className=" top-0 right-0 items-center  pe-3"
				onClick={() => setShowEmojiKeyboard(!showEmojiKeyboard)}
			>
				😊
			</button>
			{showEmojiKeyboard && (
				<div className="absolute bottom-12 right-0 bg-white border border-gray-300 rounded shadow">
					<div className="flex bg-slate-800 focus:outline-none flex-wrap p-2">
						{funEmojis.map((emoji, index) => (
							<button
								key={index}
								className="hover:bg-gray-200 rounded-full p-2 m-1"
								onClick={() => handleEmojiClick(emoji)}
							>
								{emoji}
							</button>
						))}
					</div>
				</div>
			)}
		</form>
	);
};

export default MessageInput;