import { Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { useState } from "react";
import { DashboardPage } from "../pages/DashboardPage/inex";


export const RoutesMain = () =>{
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const userLogout = () =>{
        
        localStorage.removeItem("@TOKEN");
        setUser(null);
        navigate("/");
    }
    return(
        <Routes>
            <Route path="/" element={<LoginPage setUser={setUser}/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/dashboard" element={<DashboardPage user={user} userLogout={userLogout}/>}/>
        </Routes>
    )
};