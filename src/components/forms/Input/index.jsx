import { forwardRef } from "react";
import style from "./style.module.scss";

export const Inputs = forwardRef(({ label, id, error, children, ...res }, ref) => {
    return (
        <div className={style.input_box}>
            <label htmlFor={id}>{label}
                <input ref={ref} {...res} />
                {children}
            </label>
                {error ? <p className={style.error}>{error.message}</p> : null}
        </div>
    )
});