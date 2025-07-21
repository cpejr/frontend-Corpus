import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles/stylesVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  height: 100%;

  @media (max-width: ${breakpoints.smallMobile}) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.h1`
  color: #dfc89e;
  text-align: center;
`;

export const Text = styled.h3`
  color: #dfc89e;
  text-align: center;
`;
