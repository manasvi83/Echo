import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import Landing from './pages/landing/Landing.jsx'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div>
       <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
       </Routes>
       <Toaster/>
    </div>
  )
}

export default App
