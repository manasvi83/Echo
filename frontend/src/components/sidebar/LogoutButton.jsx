import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout.js";

const LogoutButton = () => {
	const { logout } = useLogout();

	return (
		<div className='absolute top-0 right-0 pr-2 m-4'>
			{ (
				<BiLogOut className='w-6 h-6 text-emerald-600 cursor-pointer' 
				onClick={logout} />
			) }
		</div>
	);
};
export default LogoutButton;