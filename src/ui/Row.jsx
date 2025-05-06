import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.6rem;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      @media screen and (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
