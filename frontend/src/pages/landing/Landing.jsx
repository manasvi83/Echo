import logo from "../../assets/horizontal-logo.png"
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="bg-black flex items-center justify-center h-screen ">
      <Link to="/login">
      <img 
        src={logo} 
        alt="Echo Logo" 
        className="h-32 cursor-pointer transition-transform duration-500 hover:scale-110" 
      />  
      </Link>
    </div>
  )
}

export default Landing
