import styled from "styled-components";
import { Button } from "antd";
import { colors, fonts } from "../../../styles/stylesVariables";

export const AddButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue.accent};
  background-color: ${colors.background.white};
  border-radius: 10px;
  background-color: ${colors.background.secondary};
  color: ${colors.font.primary};
  border: 0.15rem solid transparent;
  font-family: ${fonts.Exo2};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.black};
    color: ${colors.font.secondary} !important;
  }

  &:focus {
    outline: none;
  }
`;