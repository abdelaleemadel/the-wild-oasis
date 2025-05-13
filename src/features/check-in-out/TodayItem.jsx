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
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  grid-template-rows: auto auto;
  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);
  @media screen and (max-width: 600px) and (min-width: 500px) {
    grid-template-columns: 9rem 2rem 1fr 1fr;
    & > :nth-child(5) {
      grid-area: 2/3;
    }
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 9rem 2rem 1fr;
    & > :nth-child(5) {
      grid-area: 2/3;
    }
    & > :nth-child(4) {
      grid-area: 2/1/3/2;
      /* border: 2px solid red; */
      text-align: center;
    }
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
