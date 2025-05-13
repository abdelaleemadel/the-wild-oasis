import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
import styled from "styled-components";

const StyledStatsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-between;
`;
function Stats({ bookings, confirmedStays, numOfDays, cabinsCount }) {
  //1.
  const numBookings = bookings.length;

  //2.
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);
  //3.
  const checkins = confirmedStays.length;

  //4.
  const occupancy =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numOfDays * cabinsCount);
  return (
    <StyledStatsList>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupancy * 100) + "%"}
      />
    </StyledStatsList>
  );
}

export default Stats;
