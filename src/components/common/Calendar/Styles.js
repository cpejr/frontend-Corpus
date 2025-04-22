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
    color: black;
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
  .p-yearpicker-year {
    color: black !important;
    background-color: black !important;
  }
`;
