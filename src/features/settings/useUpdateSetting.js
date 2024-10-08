import toast from "react-hot-toast";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export default function useUpdateSetting() {
    const queryClient = useQueryClient();

    const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
        mutationFn: updateSettingApi,
        onSuccess: () => {
            toast.success("Setting has been updated Successfully");
            queryClient.invalidateQueries({
                queryKey: ["settings"],
            });
        },

        onError: (err) => {
            toast.error(err.message);
        },
    });
    return { updateSetting, isUpdating }
}