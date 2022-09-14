import { BrowserRouter, Route, Routes, Outlet, Navigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"



const AppRouter = () => {
    const currentUser = localStorage.getItem("user") || false
    function PrivateRouter() {
        return currentUser ? <Outlet /> : <Navigate to="/login"  />;
      }
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path="register/" element={<Register/>}/>
            <Route path="login/" element={<Login/>}/>
            <Route path="/" element={<PrivateRouter />}>
                <Route path="" element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
