import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom"

import {
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { SignupValidation } from "@/lib/validation";
import { Loader } from "lucide-react";
import { createUserAccount } from "@/lib/appwrite/api";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Usuario debe ser mínimo de 2 caracteres.",
    }).max(50),
});

const isLoading = false;

const SignupForm = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof SignupValidation>>({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
            name: "",
            username: "",
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof SignupValidation>) {
        
        const newUser = await createUserAccount(values);
        console.log(newUser)
    }

    return (

        <Form {...form}>

            <div className="sm: w-420 flex-center flex-col">
                {/* Add Dog Logo as svg*/}
                {/* <img src="/assets/icons/logo.svg" alt="logo" /> */}

                <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create a new account</h2>
                <p className="text-light-3 small-medium md:base-regular">Para acceder a SoyMusico, ingrese sus detalles</p>



                <form onSubmit={form.handleSubmit(onSubmit)} className="flex-col gap-5 w-full mt-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormDescription>
                                    
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Usuario</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormDescription>
                                    
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Correo electrónico</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormDescription>
                                    
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    <Input type="password" className="shad-input" {...field} />
                                </FormControl>
                                <FormDescription>
                                    
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="shad-button_primary">
                        {isLoading ? (
                            <div className="flex-center gap-2">
                                <Loader/> Cargando . . .
                            </div>
                        ) : "Sign Up"}
                    </Button>
                    <p className="text-small-regular text-light-2 text-center mt-2">
                        ¿Ya tienes una cuenta?
                        <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1">Log In</Link>
                    </p>
                </form>
            </div>
        </Form>

    );
}


export default SignupForm;
