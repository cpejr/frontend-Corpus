import styled from "styled-components";
import { colors, breakpoints } from "../../../styles/stylesVariables";
import ReactFlagsSelect from "react-flags-select";
import { Calendar as PrimeCalendar } from "primereact/calendar";
import Select from "react-select";

export const StyledSelect = styled(Select)`
  width: 100%;
  border-color: 1px solid ${colors.accent.primary};
  justify-content: space-between;
  align-items: center;
  color: ${colors.accent.primary};

  background-color: ${colors.background.primary};
  .css-1jqq78o-placeholder {
    color: ${colors.accent.primary};
    font-size: 1.1rem;
  }
  .css-13cymwt-control {
    background-color: ${colors.background.primary};
    border: 2px solid ${colors.accent.primary};
    color: ${colors.accent.primary};
  }
`;


export const StyledInput = styled.input`
  border: 2px solid ${colors.accent.primary};
  border-radius: 5px;
  height: 2.3rem;
  width: calc(100% - 21px) !important;
  background-color: ${colors.background.primary};
  color: ${colors.accent.primary};
  padding-left: 16px;
  font-size: 1.1rem;

  &:focus{
    border: 2px solid ${colors.accent.primary} !important;
  }

  &::placeholder {
    color: ${colors.accent.primary} !important;
  }
`;


export const FlagSelector = styled(ReactFlagsSelect)`
  color: ${colors.accent.primary};
  width: 100%;
  align-items: center;
  font-size: 1.2rem !important;

  .ReactFlagsSelect-module_selectBtn__19wW7 {
    border: 2px solid ${colors.accent.primary};
    color: ${colors.accent.primary};
  }
`;


export const Section = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;


export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: ${colors.accent.primary};
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
    background-color: ${colors.background.primary};
    color: ${colors.accent.primary};
    border: 2px solid ${colors.accent.primary};
    border-radius: 5px;
    width: 100%;
    height: 2.7rem;
    font-size: 1.1rem;
    padding-left: 16px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${colors.accent.primary};
    }

    &:hover {
      border-color: ${colors.accent.primary};
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 16px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
    @media (max-width: ${breakpoints.smallTablet}) {
      width: 225px;
    }
  }


  .p-datepicker {
    background-color: ${colors.background.white} !important;
    border: 2px solid ${colors.accent.primary};
  }


  .p-datepicker-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colors.accent.primary} !important;
    padding: 0.5rem 0.5rem;
  }


  .p-datepicker-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }


  .p-datepicker-month,
  .p-datepicker-year {
    color: ${colors.font.primary} !important;
    background-color: ${colors.background.white} !important;
    font-size: 1.3rem;
  }


  .p-datepicker-decade {
    color: ${colors.font.primary} !important;
    font-size: 1.3rem;
  }


  .p-datepicker-next,
  .p-datepicker-prev {
    color: ${colors.font.primary} !important;
    border-radius: 0.5rem !important;
    border: none !important;
    padding: 0.2rem 0.4rem !important;
    background-color: ${colors.accent.primary} !important;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${colors.accent.hover} !important;
    }
  }


  .p-yearpicker .p-yearpicker-year {
    color: ${colors.font.primary} !important;
    background-color: ${colors.background.white} !important;
    padding: 0.25rem 0 0.25rem 0;
    transition: all 0.5s ease;
    border-radius: 10px;

    &:hover{
      background-color: ${colors.accent.primary} !important;
    }
  }

  .p-monthpicker .p-monthpicker-month {
    color: ${colors.font.primary} !important;
    background-color: ${colors.background.white} !important;
    padding: 0.25rem 0 0.25rem 0;
    transition: all 0.5s ease;
    border-radius: 10px;

    &:hover{
      background-color: ${colors.accent.primary} !important;
    }
  }

  .p-datepicker-calendar thead{
    padding-bottom: 0.5rem;
  }

  .p-datepicker-calendar tbody tr td{
    padding: 0.2rem 0 0.2rem 0;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
      background-color: ${colors.accent.primary} !important;
    }
  }

  .p-datepicker-calendar th {
    color: ${colors.font.primary} !important;
  }

  .p-datepicker-buttonbar {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;
    align-items: center;
    color: ${colors.font.primary} !important;
    background-color: ${colors.background.white} !important;
  }

  .p-button-secondary {
    background-color: ${colors.accent.primary} !important;
    border-radius: 0.5rem !important;
    border: none !important;
    padding: 0.4rem 0.8rem !important;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${colors.accent.hover} !important;
    }
  }
`;

export const ButtonFormFilter = styled.button`
  border: 2px solid ${colors.accent.primary};
  border-radius: 5px;
  width: 40%;
  height: 2.5rem;
  background-color: ${colors.accent.primary};
  transition: all 0.6s;
  cursor: pointer;
  color: ${colors.font.secondary};
  font-size: 1.1rem;

  &:hover{
    background-color: ${colors.accent.hover};
    color: ${colors.font.secondary};
  }
`
