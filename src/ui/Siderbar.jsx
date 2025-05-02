import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { HiXMark } from "react-icons/hi2";
const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  transition: all 0.3s ease-in-out;
  position: fixed;
  width: min(26rem, 100vw);
  top: 0;
  bottom: 0;
  z-index: 1;
  transform: translateX(-100%);
  &.open {
    transform: translateX(0);
  }

  & > svg {
    align-self: flex-end;
    font-size: 2.5rem;
    cursor: pointer;
  }
  @media screen and (min-width: 1200px) {
    position: static;
    transform: translateX(0) !important;
    transition: transform 0s;

    & > svg {
      display: none;
    }
  }
`;

function Siderbar({ isClose, setIsClose }) {
  return (
    <StyledSidebar className={`${!isClose && "open"}`}>
      <HiXMark onClick={() => setIsClose(true)} />
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Siderbar;
