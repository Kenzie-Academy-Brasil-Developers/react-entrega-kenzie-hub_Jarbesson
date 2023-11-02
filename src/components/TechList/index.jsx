import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { TechCard } from "./TechCard";
import { CreateTechModal } from "../Modal/CreateTechModal";
import { EditTech } from "../Modal/EditTechModal";
import {BiPlus} from"react-icons/bi";
import style from "./style.module.scss";

export const Techlist = () => {

    const { techList,editingPost,visibleModal,setVisibleModal } = useContext(TechContext)
   
    return (
        <div>
            <div className={style.div_second}>
                <h1 className="title tow">Tecnologias</h1>
                {visibleModal ? <CreateTechModal/> : null}
                <button className="title tow" onClick={() =>setVisibleModal(true)}><BiPlus/></button>
            </div>
                {editingPost ? <EditTech/> : null}
            <div >
                <ul className={style.ul_list}>
                    {techList.map(tech => {
                        const { id, title, status } = tech;
                        return (
                            <TechCard key={id} title={title} status={status} tech={tech}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};