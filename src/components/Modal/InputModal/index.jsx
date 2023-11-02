import { forwardRef } from "react";
import style from "./style.module.scss";

export const Input = forwardRef(({label, ...res}, ref) =>{
    return(
        <div className={style.input_box}>
            <label className="Headline">{label}</label>
            <input {...res} ref={ref}/>
        </div>
    )
});