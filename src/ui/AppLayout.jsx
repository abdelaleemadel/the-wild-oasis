import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Siderbar from "./Siderbar";
import { useState } from "react";

const StyledAppLayout = styled.div`
  min-height: 100vh;
  position: relative;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: auto;
`;
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function AppLayout() {
  const [isClose, setIsClose] = useState(true);

  return (
    <StyledAppLayout>
      <Header isClose={isClose} setIsClose={setIsClose} />
      <Siderbar isClose={isClose} setIsClose={setIsClose} />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
