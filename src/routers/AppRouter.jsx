import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"



const AppRouter = () => {
    
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="register/" element={<Register/>}/>
            <Route path="login/" element={<Login/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
