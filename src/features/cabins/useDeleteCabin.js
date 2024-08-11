import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useDeleteCabin() {
    const queryClient = useQueryClient();

    const {
        mutate: deleteCabin,
        isLoading: isDeleting,
    } = useMutation({
        mutationFn: deleteCabinApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
            toast.success("You have deleted the Cabin Successfully");
        },

        onError: (err) => {
            console.log(err);

            toast.error(err.message);
        },
    });

    return { deleteCabin, isDeleting }
}