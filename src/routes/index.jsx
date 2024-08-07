import { Route, Routes, } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage/inex";
import { PriveteRoutes } from "./PriveteRoutes";
import { TechProvider } from "../providers/TechContext";

export const RoutesMain = () => {
    return (
        <Routes>     
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          
            <Route element={<PriveteRoutes />}>
                <Route path="/dashboard" element={ <TechProvider><DashboardPage /></TechProvider>} />
            </Route>
        </Routes>
    )
};