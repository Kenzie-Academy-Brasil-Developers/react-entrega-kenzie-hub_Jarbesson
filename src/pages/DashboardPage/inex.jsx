import { useContext } from "react";
import { Header } from "../../components/Header";
import style from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";
import { Techlist } from "../../components/TechList";

export const DashboardPage = () => {
    const {user} = useContext(UserContext);

    return (
        <>
            <Header/>
            <main className={style.mainBox}>
                <div>

                    <hr />
                    <div className={style.divUser} >
                        <h2 className="style.titleName title">Óla, {user?.name}</h2>
                        <p className="Headline HeadlineBold">{user?.course_module}</p>
                    </div>
                    <hr />
                    <Techlist/>
                </div>
            </main>
        </>
    )
};