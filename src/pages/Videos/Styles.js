import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../styles/stylesVariables";
import { image } from "../../assets/index";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

export const DivTitle = styled.div`
  width: 450px;
  border-bottom: 4px solid ${colors.background.secondary};
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
  color: #ccd5ae;
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
export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  flex-direction: column;
  width: 100%;
  align-items: center;
  color: #d4a373;
`;

export const ContainerSearchBar = styled.div`
  display: flex;
  color: #d4a373;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const DivSelect = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  width: 500px;
  color: #d4a373;
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
