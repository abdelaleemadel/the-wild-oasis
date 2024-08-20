import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export default function useDeleteBooking() {
    const queryClient = useQueryClient();

    const {
        mutate: deleteBooking,
        isLoading: isDeleting,
    } = useMutation({
        mutationFn: deleteBookingApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                active: true
            });
            toast.success("You have deleted the booking Successfully");
        },

        onError: (err) => {
            console.log(err);

            toast.error(err.message);
        },
    });

    return { deleteBooking, isDeleting }
}