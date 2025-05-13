import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import useRecentStays from "./useRecentStays";
import Spinner from "./../../ui/Spinner";
import Stats from "./Stats";
import useCabins from "./../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto; */
  grid-template-areas: "stats stats" "activity duration" "sales sales";
  gap: 2.4rem;
  justify-content: center;
  @media screen and (max-width: 1400px) {
    grid-template-areas: "stats stats" "activity activity" "sales sales" "duration duration";
  }
`;

function DashboardLayout() {
  const {
    isLoading: isLoadingBookings,
    bookings,
    numOfDays,
  } = useRecentBookings();
  const { isLoading: isLoadingStays, confirmedStays } = useRecentStays();

  const { cabins, isLoading: isLoadingCabins } = useCabins();
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
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numOfDays={numOfDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
