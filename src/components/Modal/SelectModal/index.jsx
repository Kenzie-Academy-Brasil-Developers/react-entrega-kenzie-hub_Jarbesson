import { forwardRef } from "react";
import style from "./style.module.scss";

export const Select = forwardRef(({ children, label, ...res }, ref) => {
    return (
        <div className={style.selectBox}>
            <label className="Headline">{label}</label>
            <select className={style.select} {...res} ref={ref}>
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
            </select>
        </div>
    )
})