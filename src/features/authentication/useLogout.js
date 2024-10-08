import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient(0);
    const { mutate: logout, isLoading } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            navigate("/login");
            queryClient.removeQueries();
        }

    })

    return { logout, isLoading }
}