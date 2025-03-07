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
  }
  .css-13cymwt-control {
    background-color: ${colors.background.primary};
    border: 2px solid #d4a373;
    color: #d4a373;
  }
`;
export const StyledInput = styled.input`
  width: 250px;
  border-color: #d4a373;
  background-color: ${colors.background.primary};
  height: 30px;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  color: #d4a373;
  &::placeholder {
    color: #d4a373 !important;
  }
`;
export const FlagSelector = styled(ReactFlagsSelect)`
  color: #d4a373;
  width: 50%;
  align-items: center;

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
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: #d4a373;
  gap: 50px;
  @media (max-width: ${breakpoints.smallMobile}) {
    margin-top: 0px;
    width: 250px
  }
`;
export const FlagSelectorSection = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const TotalParticipantsSelectSection = styled.div`
  color: #d4a373;
  border-color: ${colors.background.primary};
  width: 50%;
  align-items: center;
  gap: 50px;
`;
export const PickTimeSection = styled.div`
  width: 100%;
  justify-content: space-between;
  color: #d4a373;
  border-color: #d4a373;
  align-items: center;
  gap: 50px;
`;
export const PickDateSection = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const SelectLanguageSection = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const Calendar = styled(PrimeCalendar)`
  width: ${(props) => (props.width ? props.width : "95%")};
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
    height: 3rem;
    background-color: ${colors.background.primary};
    color: #d4a373;
    border: solid 1px #d4a373;
    padding-left: 10px;
    font-size: 1.2rem;
    margin-bottom: 2rem;

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
