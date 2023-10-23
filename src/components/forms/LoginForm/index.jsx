import { useForm } from "react-hook-form";
import { Inputs } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import { Link,  } from "react-router-dom";
import { useState } from "react";
import Logo from"../../../assets/Logo.svg";
import style from "./style.module.scss";
import { UserContext } from "../../../providers/UserContext";
import { useContext } from "react";


export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(loginFormSchema),
    });

    const [loading, setLoading] = useState(false);
    const {userLogin} = useContext(UserContext)

    const submit = (payload) => {
        userLogin(payload, setLoading);
    };

    return (
        <div className={style.loginPageBox}>
            <div><img src={Logo} alt="Logo kenzie Hub" /></div>
            <form onSubmit={handleSubmit(submit)}>
                <h2 className="title ">Login</h2>
            <Inputs
                label="E-mail:"
                type="email"
                id="email"
                error={errors.email}
                {...register("email")}
            />

            <Inputs
                label="Senha:"
                type="password"
                id="password"
                error={errors.password}
                {...register("password")}
            />
          
                <button className="btn" type="Submit" disabled={loading}>Login</button>
                <p>Ainda não possui uma conta?</p>
                <Link className="btn2" to="/register">Cadastre-se</Link>
        </form>
        </div>
        
    )
};