import styled from "styled-components";
import GlobalStyles from "./styles/styles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("Check In")}>Check In</Button>
        <Button onClick={() => alert("Check Out")}>Check Out</Button>
        <Input placeholder="Number of guests" />
        <Input placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
