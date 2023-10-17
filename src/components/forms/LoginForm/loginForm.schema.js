import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().email("O e-mail é obrigatorio."),
    password: z.string().min(1,"A senha é obrigatória.").min(1,"Senha invalida")
});