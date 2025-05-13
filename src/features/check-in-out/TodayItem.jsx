import styled from "styled-components";
import Tag from "./../../ui/Tag";
import Button from "./../../ui/Button";
import { Flag } from "./../../ui/Flag";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: grid;
  gap: 1.2rem;
  align-items: center;
  grid-template-columns: 9rem 2rem 1fr;
  grid-template-rows: auto auto;
  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
  & > div:nth-child(4) {
    border: 2px red solid;
    grid-column: span 2;
  }
  @media screen and (min-width: 576px) {
    grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;
function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;
  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <Guest>{guests.fullName}</Guest>
      <div>{numNights} nights</div>
      {status === "unconfirmed" && (
        <Button
          size="small"
          $variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
