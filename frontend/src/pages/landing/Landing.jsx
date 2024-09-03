import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/horizontal-logo.png";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-black flex items-center justify-center h-screen ">
      <img 
        src={logo} 
        alt="Echo Logo" 
        className="h-32 cursor-pointer transition-transform duration-500 hover:scale-110" 
      />  
    </div>
  );
}

export default Landing;
