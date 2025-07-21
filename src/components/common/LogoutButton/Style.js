import styled from "styled-components";
import { colors } from "../../../styles/stylesVariables";
import { FiLogOut } from "react-icons/fi";

export const Button = styled.button`
  background-color: transparent;
  border-radius: 10px;
  border-style: none;
  border: 3px solid;
  border-color: ${colors.background.white};
  color: ${colors.font.secondary};
  font-weight: 500;
  font-size: 1rem;
  padding: 7px 15px;
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${colors.background.white};
    color: ${colors.background.header};
    cursor: pointer;
  }
`;
export const Icon = styled(FiLogOut)`
  padding: 2px;
  width: 20px;
  height: 20px;
`;
