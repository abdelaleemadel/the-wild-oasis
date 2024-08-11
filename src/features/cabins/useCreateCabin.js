import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from './../../services/apiCabins';

export default function useCreateCabin() {

    const queryClient = useQueryClient();

    /* Create Cabin using react-query*/
    const { mutate: createCabin, isLoading: isCreating } = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
            toast.success("Cabin has been created Successfully");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
        },

        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { createCabin, isCreating }
}