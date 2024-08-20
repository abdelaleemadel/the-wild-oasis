import { useMutation } from "@tanstack/react-query"
import { login as loginApi } from "./../../services/apiAuth"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";

export default function useLogin() {

    const navigate = useNavigate();
    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            console.log(user);
            navigate('/');
        },

        onError: (err) => {
            console.log("ERORR", err);
            toast.error('Provided email or password are incorrect')

        }
    })
    return { login, isLoading }
}