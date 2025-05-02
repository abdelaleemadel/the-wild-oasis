import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "./../features/authentication/UserAvatar";
import { HiBars3 } from "react-icons/hi2";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  & > svg {
    font-size: 2.5rem;
    margin-inline-end: auto;
    cursor: pointer;
  }

  @media screen and (min-width: 1200px) {
    & > svg {
      display: none;
    }
  }
`;

function Header({ isClose, setIsClose }) {
  return (
    <StyledHeader>
      {isClose && <HiBars3 onClick={() => setIsClose(false)} />}
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
