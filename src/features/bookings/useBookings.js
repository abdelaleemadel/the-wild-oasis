import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export default function useCabins() {

    const [searchParams] = useSearchParams();
    const filterValue = searchParams.get("status");

    const filter = !filterValue || filterValue === 'all' ? null : {
        field: "status", value: filterValue
    }
    const { data: bookings, isLoading } = useQuery({
        queryKey: ["bookings", filter],
        queryFn: () => getBookings({ filter }),
    });

    return { bookings, isLoading }
}