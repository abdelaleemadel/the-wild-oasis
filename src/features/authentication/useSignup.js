import { useMutation } from "@tanstack/react-query"
import { signup as signupApi } from "./../../services/apiAuth"
import toast from "react-hot-toast";

export default function useSignup() {

    const { mutate: signup, isLoading } = useMutation({
        mutationFn: ({ email, password, fullName }) => signupApi({ email, password, fullName }),
        onSuccess: (user) => {

            console.log(user);
            toast.success("Account successfully created! Please verify the new account from the user's email address")

        },


    })
    return { signup, isLoading }
}