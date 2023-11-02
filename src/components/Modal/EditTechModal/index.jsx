import { useForm } from "react-hook-form";
import { Input } from "../InputModal";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import { Select } from "../SelectModal";
import style from "./style.module.scss";

export const EditTech = () => {
    const { postUpdate, setEditingPost, editingPost } = useContext(TechContext)

    const { register, handleSubmit } = useForm({
        values: {
            status: editingPost.status
        }
    });

    const submit = (payload) => {
        postUpdate(payload)
    };

    return (
        <div className={style.div_box} role="dialog">
            <form onSubmit={handleSubmit(submit)}>
                <div className={style.div_first}>
                    <h2 className="title">Tecnologia Detalhes</h2>
                    <button type="button" onClick={() => setEditingPost(null)}>X</button>
                </div>
                <div className={style.formModal}>
                    <Input
                        label="Nome"
                        type="text"
                        placeholder={editingPost.title}
                    />
                    <Select label="Selecionar status" {...register("status")} />
                    <button className={style.button_card} type="submit">Salvar alterações</button>
                </div>
            </form>
        </div>

    )
};