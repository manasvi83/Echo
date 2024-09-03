import useGetConversations from "../../hooks/useGetConversations.js";
import Conversation from "./Conversation.jsx";

const Conversations = () => {
	const {conversations } = useGetConversations();
	console.log("CONVERSATIONS:",conversations );
	return (
		<div className='w-full p-2 mt-4 mb-6 overflow-y-scroll hide-scrollbar justify-center'>
                {/* <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation /> */}
				
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

		</div>
	);
};
export default Conversations;