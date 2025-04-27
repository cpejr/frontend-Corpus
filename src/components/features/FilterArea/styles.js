import styled from "styled-components";
import { colors, breakpoints } from "../../../styles/stylesVariables";
import ReactFlagsSelect from "react-flags-select";
import { Calendar as PrimeCalendar } from "primereact/calendar";
import Select from "react-select";

export const StyledSelect = styled(Select)`
  width: 100%;
  margin: auto;
  border-color: 1px solid #d4a373;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  color: #d4a373;

  background-color: ${colors.background.primary};
  .css-1jqq78o-placeholder {
    color: #d4a373;
    font-size: 1.1rem;
  }
  .css-13cymwt-control {
    background-color: ${colors.background.primary};
    border: 2px solid #d4a373;
    color: #d4a373;
  }
`;


export const StyledInput = styled.input`
  border: 2px solid #d4a373;
  border-radius: 5px;
  height: 2.3rem;
  width: calc(100% - 21px) !important;
  background-color: ${colors.background.primary};
  color: #d4a373;
  padding-left: 16px;
  font-size: 1.1rem;

  &::placeholder {
    color: #d4a373 !important;
  }
`;


export const FlagSelector = styled(ReactFlagsSelect)`
  color: #d4a373;
  width: 100%;
  align-items: center;
  font-size: 1.2rem !important;

  .ReactFlagsSelect-module_selectBtn__19wW7 {
    border: 2px solid #d4a373;
    color: #d4a373;
  }
`;


export const Section = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;


export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: #d4a373;
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.smallMobile}) {
    margin-top: 0px;
    width: 250px
  }
`;


export const FlagSelectorSection = styled.div`
  width: 100%;
`;


export const TotalParticipantsSelectSection = styled.div`
  width: 100%;
`;


export const PickTimeSection = styled.div`
  width: 100%;
`;


export const PickDateSection = styled.div`
  width: 100%;
`;


export const SelectLanguageSection = styled.div`
  width: 100%;
`;


export const Calendar = styled(PrimeCalendar)`
  width: ${(props) => (props.width ? props.width : "100%")};
  align-self: center;
  display: flex;
  justify-content: center;
  border-radius: 25px;
  @media (max-width: ${breakpoints.smallMobile}) {
    margin-top: 0px;
    width: 250px
  }

  .p-inputtext {
    width: 100%;
    height: 2.7rem;
    background-color: ${colors.background.primary};
    color: #d4a373;
    border: 2px solid #d4a373;
    border-radius: 5px;
    padding-left: 16px;
    font-size: 1.1rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #d4a373;
    }

    &:hover {
      border-color: #d4a373;
    }
  }

  .p-datepicker {
    border: 2px solid #d4a373;
  }
`;

export const ButtonFormFilter = styled.button`
  border: 2px solid #d4a373;
  border-radius: 5px;
  width: 40%;
  height: 2.5rem;
  background-color: ${colors.background.primary};
  transition: all 0.6s;
  cursor: pointer;
  color: #d4a373;
  font-size: 1.1rem;

  &:hover{
    background-color:rgb(245, 169, 93);
    color: #ffffff;
  }
`
