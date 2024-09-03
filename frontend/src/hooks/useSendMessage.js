import useConversation from "../zustand/useConversation.js";
import toast from "react-hot-toast";


const useSendMessage = () => {
	const { messages, setMessages, selectedConversation } = useConversation();

	const sendMessage = async (message) => {
		try {
			const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),
			});
			const data = await res.json();
			if (data.error) throw new Error(data.error);

			setMessages([...messages, data]);
		} catch (error) {
			toast.error(error.message);
		} 
	};

	return { sendMessage};
};
export default useSendMessage;