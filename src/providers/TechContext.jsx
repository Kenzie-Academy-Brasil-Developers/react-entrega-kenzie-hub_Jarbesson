
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({})

const token = localStorage.getItem("@TOKEN");

export const TechProvider = ({ children }) => {
    const [techList, setTechList] = useState([])
    const [editingPost, setEditingPost] = useState(null)
    const [visibleModal,setVisibleModal] =useState(false)

    useEffect(() => {
        const viewTechs = async () => {
            try {
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setTechList(data.techs);
            } catch (error) {
                toast.error(error);
            }
        };
        viewTechs();
    }, []);



    const createTech = async (payload) => {
        try {
            const { data } = await api.post('/users/techs', payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            setTechList([...techList, data]);
            toast.success("nota criada com sucesso!")
        } catch (error) {
            toast.error("algo deu errado tente novamente")
        }
    }

    const postUpdate = async (payload) => {
        try {
            const {data} = await api.put(`/users/techs/${editingPost.id}`,payload,{
                headers:{
                    Authorization: `Bearer ${token}`
                },
            });
            const newPostList = techList.map((tech) =>{
                if (tech.id === editingPost.id) {
                    return data
                }else{
                    return post;
                }
            });
            setTechList(newPostList)
            setEditingPost(null);
            toast.success("edição concluida!")
        } catch (error) {
            toast.error("algo deu errado tente novamente!")

        }
    }

    const techDelete = async (deletingId) =>{
        try {
            await api.delete(`/users/techs/${deletingId}`,{
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            })

            const newsTech = techList.filter((tech) => tech.id !== deletingId);
            setTechList(newsTech);
            toast.success("nota deletada com sucesso!")
        } catch (error) {
            toast.error("algo deu errado tente novamente!")
        }
    }
    return (
        <TechContext.Provider value={{postUpdate, createTech, setTechList, techList, editingPost, setEditingPost,visibleModal,setVisibleModal, techDelete}}>
            {children}
        </TechContext.Provider>
    )
}