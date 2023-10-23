import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

 export const UserProvider = ({children}) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(false);
     const navigate = useNavigate();

     const pathname = window.location.pathname

    useEffect(() =>{
        const token = localStorage.getItem("@TOKEN")
        const useId = localStorage.getItem("@USERID")

        const getUser = async () => {
            try {
                setLoading(true)
                const {data} = await api.get(`/users/${useId}`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(data);
                navigate(pathname)
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        getUser();

    },[])

    const userLogout = () =>{    
        setUser(null);
        navigate("/");
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        toast.success("Deslogando...");             
    }
    
    
    const userLogin = async (payload , setLoading) => {
        try {
            setLoading(true)
            const { data } = await api.post("/sessions", payload);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@USERID", data.user.id);
            setUser(data.user);
            navigate("/dashboard");
            toast.success("Login feito com sucesso");
        } catch (error) {
              toast.error("Credências invalida tente novamente!");
        } finally {
            setLoading(false);
        }
    };

    const registerUser = async (payload, setLoading) => {
        try {
            setLoading(true);
            await api.post("/users", payload);
            toast.success("conta criada com sucesso");
            navigate("/");
        } catch (error) {
            
            if (error.response?.data === "Email already exists") {
                toast.error("Usuário já cadastrado tente novamente!");
            }
        } finally {
            setLoading(false);
        }
    };

    return(
        <UserContext.Provider value={{loading,userLogin,registerUser,userLogout,user}}>
            {children}
        </UserContext.Provider>
    )
}