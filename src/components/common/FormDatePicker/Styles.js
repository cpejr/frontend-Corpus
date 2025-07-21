import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/stylesVariables";
import DatePicker from "react-datepicker";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  width: 100%;
  height: auto;
`;

export const Label = styled.label`
  color: ${colors.background.primary};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  padding: 0.5rem;
  width: 100%;
  border-bottom: ${(props) =>
    props?.error ? "1px solid #ff0000" : "1px solid #570b87"} !important;
  color: black;
  background-color: white;
  border-radius: 4px;
  font-size: 1em;
  z-index: 10;

  :focus,
  :active,
  :enabled {
    outline: none;
    border-bottom: 2px solid
      ${(props) => (props?.error ? "#ff0000" : "#570b87")};
  }

  ::placeholder {
    color: black;
    font-style: italic;
  }

  &:hover {
    background-color: white;
  }

  .react-datepicker__day--selected {
    background-color: #570b87;
    color: black;
  }

  .react-datepicker {
    width: 100%;
    max-width: 350px;
    z-index: 1000;
    margin-top: 5px;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    color: black;
  }
`;
export const ErrorMessage = styled.p`
  font-size: 1.3rem;
  color: ${colors.error.primary};
  font-weight: 400;
`;
