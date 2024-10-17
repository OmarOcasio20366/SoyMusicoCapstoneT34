import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: "Nombre debe ser de mínimo 2 caracteres."}),
    username: z.string().min(2, {
        message: "Usuario debe de ser de mínimo 2 caracteres.",
    }).max(50),
    email: z.string().email(),
    password: z.string().min(8, {message: "Contraseña debe de ser de mínimo 8 caracteres."})
});