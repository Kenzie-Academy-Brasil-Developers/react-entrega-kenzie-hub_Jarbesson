import { forwardRef } from "react";
import style from "./style.module.scss";

export const Select = forwardRef(({label,id,children,error, ...res},ref) =>{
    return(
        <div>
            <label className={style.label} htmlFor={id}>{label}</label>
            <select className={style.selectBox} ref={ref} {...res}>{children}</select>
            {error && <p>{error.message}</p>}
        </div>
    )
});