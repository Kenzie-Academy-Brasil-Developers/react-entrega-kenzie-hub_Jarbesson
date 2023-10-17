import { z } from "zod";

export const registerFormSchema = z.object({
    name:
        z.string()
            .min(1, "O Nome é obrigatorio"),
    email:
        z.string()
            .email("Forneça um e-mail válido")
            .min(1, "O e-mail é obrigatorio."),
    password:
        z.string()
            .min(1, "A senha e obrigatoria")
            .min(8, "A senha precisa conter no minimo 8 caracteres")
            .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula.")
            .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula.")
            .regex(/[0-9]+/, "É necessário conter pelo menos um número."),
    confirmPassword: z.string().min(1, "Este campo é obrigatorio"),
    bio:
        z.string().min(1, "Este campo é obrigatorio."),
    contact:
        z.string()
            .min(1, "Este campo é obrigatorio"),
    course_module:
        z.string()
            .min(1, "Este campo é obrigatorio"),
})
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: "As senhas não correspondem.",
        path: ["confirmPassword"],
    });