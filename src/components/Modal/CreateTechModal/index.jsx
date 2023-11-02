import { useForm } from "react-hook-form";
import { Select } from "../SelectModal";
import { Input } from "../InputModal";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import style from "./style.module.scss";

export const CreateTechModal = () => {

    const { register, handleSubmit } = useForm();
    const { createTech, setVisibleModal } = useContext(TechContext)

    const submit = (payload) => {
        createTech(payload)
    }

    return (
        <div className={style.div_box} role="dialog">
            <form onSubmit={handleSubmit(submit)}>
                <div className={style.div_first}>
                    <h2 className="title">Cadastrar tecnoloogia</h2>
                    <button onClick={() => setVisibleModal(false)}>X</button>
                </div>

                <div className={style.formModal}>
                    <Input
                        label="Nome:"
                        type="text"
                        {...register("title")}
                    />
                    <Select label="Selecionar status:" {...register("status")} />
                    <button className={style.button_card} type="submit">Cadastrar Tecnologia</button>
                </div>
            </form>
        </div>
    )
};