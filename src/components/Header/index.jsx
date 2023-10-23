import { useContext } from "react";
import Logo from"../../assets/Logo.svg";
import style from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const Header = () =>{
    const {userLogout} = useContext(UserContext);

    return(
        <header className={style.headerBox}>
            
                <div className={style.divSecond}>
                    <img src={Logo} alt="Logo da kenzie hub" />
                    <button className="btn2" onClick={() => userLogout()}>Sair</button>
                </div>
            
        </header>
    )
};