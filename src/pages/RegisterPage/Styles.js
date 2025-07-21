import styled from "styled-components";
import { breakpoints } from "../../styles/stylesVariables";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const DivContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  padding: 2rem;
  @media (max-width: ${breakpoints.smallMobile}){
    font-size: 22px;
  }
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 14px;
`;

export const TextClick = styled.b`
  margin-top: 10px;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
`;