import styled from "styled-components";
import { AutoComplete } from "primereact/autocomplete";
import { colors } from "../../../styles/stylesVariables";

export const Input = styled(AutoComplete)`
  margin-top: 30px;
  margin-left: 3%;
  margin-right: 3%;
  width: ${(props) => (props.width ? props.width : "95%")};
  align-self: center;
  .p-autocomplete-input {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
    background-color: ${colors.background.primary};

    border-radius: 25px;
    border: solid #d4a373 1px;
    padding-left: 10px;
    font-size: 1.2rem;
    margin-bottom: 2rem;

    &:focus {
      outline: none;
    }
    color: ${colors.font.primary};

    &::placeholder {
      color: #d4a373;
    }
    &:hover {
      border-color: #f19709;
    }
  }
`;
