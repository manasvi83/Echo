import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import Landing from './pages/landing/Landing.jsx'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext.jsx'

function App() {
  const {authUser} = useAuthContext();
  return (
    <div>
       <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={authUser ? <Home /> : <Navigate to = {'/login'}/>}/>
        <Route path="/login" element={authUser ? <Navigate to = '/home'/> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to = '/home'/> : <Signup />} />
       </Routes>
       <Toaster/>
    </div>
  )
}

export default App
