import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../styles/stylesVariables";
import { image } from "../../assets/index";

import { Calendar as PrimeCalendar } from "primereact/calendar";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

export const DivTitle = styled.div`
  width: 450px;
  border-bottom: 4px solid #6B9080;
  @media (max-width: ${breakpoints.mobile}) {
    width: 350px;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 250px;
  }
  @media (max-width: ${breakpoints.miniDevice}) {
    width: 150px;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-size: 36px;
  text-transform: uppercase;
  font-family: ${fonts.Cabin};
  font-weight: bold;
  margin: 0% 0% 1% 10%;
  text-shadow: 2px 2px 4px black;
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 30px;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 24px;
  }
`;

export const DivLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ContainerSearchFilter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: ${breakpoints.smallMobile}) {
    flex-direction: column;
  }
`;

export const ContainerSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-left: 5%;
`;

export const DivSelect = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  width: 200px;
  margin-right: 5%;
`;

export const Calendar = styled(PrimeCalendar)`
  margin-top: 30px;
  width: ${(props) => (props.width ? props.width : "95%")};
  align-self: center;
  display: flex;
  justify-content: center;
  border-radius: 25px;

  @media (max-width: ${breakpoints.smallMobile}) {
    margin-top: 0px;
  }

  .p-inputtext {
    width: 100%;
    height: 3rem;
    background-color: ${colors.background.primary};
    color: ${colors.font.primary};
    border: solid 1px ${colors.font.title};
    padding-left: 10px;
    font-size: 1.2rem;
    margin-bottom: 2rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${colors.font.primary};
    }

    &:hover {
      border-color: #f19709;
    }

  }

  .p-datepicker {
    border: 2px solid black;
  }
`;

export const LoadingStyles = styled.div`
  display: "block";
  font-size: 24px;
  margin: 20px auto;
`;


export const MemorialNotFound = styled.div`
  background-image: url(${image});
  background-size: cover;
  width: 500px;
  height: 500px;
  font-size: 2rem;
  text-align: center;
  margin-top: 35px;
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 60%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 70%;
  }
  @media (max-width: 520px) {
    width: 300px;
    height: 300px;
  }
`;
