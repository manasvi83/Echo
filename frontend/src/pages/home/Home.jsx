// import MessageContainer from "../../components/messages/MessageContainer";
import MessageContainer from "../../components/messages/MessageInput.jsx";
import Sidebar from "../../components/sidebar/Sidebar";
import Signup from "../signup/Signup.jsx";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar /> 
			{/* <MessageContainer />   */}
			<Signup/>
		</div>
	);
};
export default Home;