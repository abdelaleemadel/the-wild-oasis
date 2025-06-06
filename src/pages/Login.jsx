import styled from "styled-components";

import Logo from "./../ui/Logo";
import Heading from "./../ui/Heading";
import LoginForm from "./../features/authentication/LoginForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(auto, 48rem);
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  padding: 3.2rem;
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in into your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
