import { useContext } from "react";
import { Header } from "../../components/Header";
import style from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";

export const DashboardPage = () => {
    const {user} = useContext(UserContext);

    return (
        <>
            <Header/>
            <main className={style.mainBox}>
                <div>

                    <hr />
                    <div className={style.divUser} >
                        <h2 className="style.titleName title">{user?.name}</h2>
                        <p className="Headline HeadlineBold">{user?.course_module}</p>
                    </div>
                    <hr />

                    <h1 className={`${style.titleDescription} Headline`}>Que pena! Estamos em desenvolvimento.</h1>
                    <p className="Headline HeadlineBold">Nossa aplição está em desenvolvimento, em breve teremos novidades </p>
                </div>
            </main>
        </>
    )
};