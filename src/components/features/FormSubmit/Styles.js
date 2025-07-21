import styled from "styled-components";
import { breakpoints } from "../../../styles/stylesVariables";

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 600px !important;
  gap: 2rem !important;
  box-shadow: none;
  z-index: 0;
  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
    width: 90%;
    gap: 0%;
  }

  @media (min-width: 1440px) {
    max-width: 144rem;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 0.9rem;
  margin: 0px;
  color: #ff0000;
  font-weight: 400;
  text-align: center;
  margin-top: 10px;
`;
export const InputKeep = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: black;
`;
export const Selects = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  gap: 10rem;
  justify-content: space-around;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

export const CheckSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UploadSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 15px;
    height: 15px;
  }
`;

export const CheckText = styled.p`
  font-size: 20px;
  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 15px;
  }
`;
