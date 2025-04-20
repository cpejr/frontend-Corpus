import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/stylesVariables";
import { Calendar } from "primereact/calendar";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  width: 79%;
  height: auto;

  @media (max-width: ${breakpoints.mobile}) {
    width: 81%;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 83%;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 86%;
  }
  @media (max-width: ${breakpoints.mediumMobile}) {
    width: 90%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 92%;
  }
  @media (max-width: ${breakpoints.miniDevice}) {
    width: 95%;
  }
`;

export const StyledCalendar = styled(Calendar)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  border: ${(props) =>
    props?.error ? "0.1rem red solid" : `0.1rem ${colors.black} solid`};

  &:hover {
    border-color: ${colors.accent.hover};
  }

  ::placeholder {
    font-size: 20px;
    color: black;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 16px;
    }
  }

  .p-inputtext {
    background-color: white;
    color: black !important;
    align-self: center;
    border: solid 1px ${colors.font.primary};
    width: 100%;
    height: 100%;
    font-size: 20px;
    padding: 0.8rem 1.6rem;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 16px;
    }

    &:hover {
      border-color: ${colors.accent.hover};
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
    @media (max-width: ${breakpoints.smallTablet}) {
      width: 225px;
    }
  }


  .p-datepicker {
    background-color: white !important;
    border: 0.15rem solid ${colors.font.primary} !important;
  }


  .p-datepicker-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black !important;
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
    color: black !important;
    background-color: white !important;
    font-size: 1.3rem;
  }


  .p-datepicker-decade {
    color: black !important;
  }


  .p-datepicker-next,
  .p-datepicker-prev {
    color: black !important;
    border-radius: 0.5rem !important;
    border: none !important;
    padding: 0.2rem 0.4rem !important;
    background-color: #dfc89e !important;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${colors.accent.hover} !important;
    }
  }

  .p-yearpicker .p-yearpicker-year {
    color: black !important;
    background-color: white !important;
  }

  .p-monthpicker .p-monthpicker-month {
    color: black !important;
    background-color: white !important;
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
      background-color: #dfc89e !important;
    }
  }

  .p-datepicker-calendar th {
    color: black !important;
  }

  .p-datepicker-buttonbar {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;
    align-items: center;
    color: black !important;
    background-color: white !important;
  }

  .p-button-secondary {
    background-color: #dfc89e !important;
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
