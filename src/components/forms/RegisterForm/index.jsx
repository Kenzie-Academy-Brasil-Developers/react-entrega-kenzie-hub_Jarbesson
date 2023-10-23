import { useForm } from "react-hook-form";
import { Inputs } from "../Input";
import { Select } from "../Select";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import { Link, } from "react-router-dom";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Logo from "../../../assets/Logo.svg";
import style from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors, } } = useForm({
        resolver: zodResolver(registerFormSchema)
    });

    const [loading, setLoading] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const { registerUser } = useContext(UserContext);

    const submit = (payload) => {
        registerUser(payload, setLoading);

    };

    return (
        <>
            <div className={style.registerBox}>
                <div className={style.Header}>
                    <img src={Logo} alt="Logo kenzie hub" />
                    <Link className="btn2" to="/">Voltar</Link>
                </div>

                <form onSubmit={handleSubmit(submit)}>
                    <h2 className="title">Crie sua conta</h2>
                    <p className="Headline HeadlineBold">Rapido e grátis, vamos nessa</p>
                    <Inputs
                        label="Nome:"
                        type="text"
                        error={errors.name}
                        {...register("name")}

                    />

                    <Inputs
                        label="E-mail:"
                        type="email"
                        error={errors.email}
                        {...register("email")}
                    />

                    <Inputs
                        label="Senha:"
                        type={isHidden ? "password" : "text"}
                        error={errors.password}
                        {...register("password")}>
                        <button className={style.buttonVisibility} onClick={() => setIsHidden(!isHidden)}>{isHidden ? <MdVisibilityOff size={30} /> : <MdVisibility size={30} />}</button>
                    </Inputs>

                    <Inputs
                        label="Confirmar Senha"
                        type="password"
                        error={errors.confirmPassword}
                        {...register("confirmPassword")}
                    />

                    <Inputs
                        label="Bio:"
                        type="text"
                        error={errors.bio}
                        {...register("bio")}
                    />

                    <Inputs
                        label="Contact:"
                        type="text"
                        error={errors.contact}
                        {...register("contact")}
                    />

                    <Select
                        label="Selecionar modulo:"
                        error={errors.course_module}
                        {...register("course_module")}>
                        <option >Primeiro módulo (Introdução ao Frontend)</option>
                        <option >Segundo módulo (Frontend Avançado)</option>
                        <option >Terceiro módulo (Introdução ao Backend)</option>
                        <option >Quarto módulo (Backend Avançado)</option>
                    </Select>

                    <button className="btn negative" type="submit" disabled={loading}>Cadastrar</button>
                </form>
            </div>
        </>

    )
};