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
    width: 79%;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 80%;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 84%;
  }
  @media (max-width: ${breakpoints.mediumMobile}) {
    width: 85%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 89%;
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
    props?.error ? `0.1rem ${colors.error.secondary} solid` : `0.1rem ${colors.black} solid`};

  &:hover {
    border-color: ${colors.accent.hover};
  }

  ::placeholder {
    font-size: 20px;
    color: ${colors.font.primary};
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 16px;
    }
  }

  .p-inputtext {
    background-color: ${colors.background.white};
    color: ${colors.font.primary} !important;
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
    background-color: ${colors.background.white} !important;
    border: 0.15rem solid ${colors.font.primary} !important;
  }

  .p-datepicker-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colors.font.primary} !important;
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