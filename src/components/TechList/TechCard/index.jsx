import { useContext } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { TechContext } from "../../../providers/TechContext";
import style from "./style.module.scss";

export const TechCard = ({ tech }) => {

    const { status, title } = tech
    const { setEditingPost, techDelete } = useContext(TechContext)

    return (
        <div className={style.container}>
            <li className={style.list}>
                <div className={style.div_second}>
                    <div>
                        <h3 className="Headline">{title}</h3>
                    </div>
                    <div className={style.div_status}>
                        <p className="Headline HeadlineBold" >{status}</p>
                        <div className={style.div_icons}>
                            <button className="Headline" onClick={() => setEditingPost(tech)}>
                                <MdEdit />
                            </button>
                            <button onClick={() => techDelete(tech.id)} className="Headline">
                                <MdDelete />
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
};