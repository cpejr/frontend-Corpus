import styled from "styled-components";
import { Button } from "antd";
import { colors, fonts, breakpoints } from "../../../styles/stylesVariables";

export const AddButton = styled(Button)`
  display: flex;
  align-items: center;
  //margin-bottom: 1%;
  justify-content: center;
  color: #ccd5ae;
  background-color: white;
  border-radius: 10px;
  background-color: ${colors.background.secondary};
  color: ${colors.font.primary};
  border: 0.15rem solid transparent;
  font-family: ${fonts.Exo2};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.black};
    color: #f6fff8 !important;
  }

  &:focus {
    outline: none;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
    //padding: 0.5rem 0.8rem;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 0.8rem;
    //padding: 0.4rem 0.6rem;
  }
`;
