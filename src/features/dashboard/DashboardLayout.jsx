import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import useRecentStays from "./useRecentStays";
import Spinner from "./../../ui/Spinner";
import Stats from "./Stats";
import useCabins from "./../cabins/useCabins";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const {
    isLoading: isLoadingBookings,
    bookings,
    numOfDays,
  } = useRecentBookings();
  const { isLoading: isLoadingStays, confirmedStays } = useRecentStays();

  const { cabins, isLoadingCabins } = useCabins();
  if (isLoadingBookings || isLoadingStays || isLoadingCabins)
    return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats
        cabinsCount={cabins.length}
        confirmedStays={confirmedStays}
        bookings={bookings}
        numOfDays={numOfDays}
      />
      <div>Statistics</div>
      <div>Today&apos;s activity</div>
      <div>Chart Stay durations</div>
      <div>Chart Sales</div>
      <SalesChart bookings={bookings} numOfDays={numOfDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
