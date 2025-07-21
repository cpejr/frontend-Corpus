import { TimePicker } from "antd";
import styled from "styled-components";
import { colors, fonts } from "../../../styles/stylesVariables";

export const Container = styled.div``;

export const StyledTimePicker = styled(TimePicker)`
  width: 100%;
  border-radius: 10px;
  padding: 0.7rem 3rem;
  background-color: ${colors.background.secondary};
  color: ${colors.white};
  border: 0.15rem solid transparent;
  font-family: ${fonts.Exo2};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
  }

  .ant-picker-input > input {
    font-size: 16px;
    color: ${colors.white} !important;
  }

  .ant-picker-suffix {
    color: ${colors.white} !important;
  }

  .ant-picker-input > input::placeholder {
    color: #f6fff8 !important;
    opacity: 1;
  }
`;