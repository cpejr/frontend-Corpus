import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../styles/stylesVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
  align-items: center;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
  }
  @media (max-width: ${breakpoints.mobile}) {
    gap: 0px;
  }

  p {
    font-size: 1.5rem !important;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1rem !important;
    }
  }
`;

export const Line = styled.hr`
  display: flex;
  margin: 0;
  max-width: 25%;
  background-color: #ccd5ae;
  box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.6);
  border: none;
  height: 4px;
  @media (max-width: ${breakpoints.tablet}) {
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin: 0 auto;
    max-width: 40%;
  }
`;

export const BackgroundTitle = styled.div`
  height: 150px;
  padding-top: 4rem;
  width: 100%;
  @media (max-width: ${breakpoints.tablet}) {
    padding-top: 2rem;
    height: 100px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    //padding-top: 2rem;
    height: 80px;
  }
`;

export const Title = styled.div`
  max-width: 25%;
  font-family: ${fonts.Exo2};
  font-weight: 600;
  color: ${colors.font.title};
  font-size: 32px;
  margin-left: 3%;
  justify-self: left;
  text-align: left;
  text-transform: uppercase;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.7);
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 40%;
    font-size: 3vw;
  }
  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;
    max-width: 60%;
    font-size: 4vw;
    margin: 0 auto;
  }
`;

export const TextLine = styled.div`
  font-family: ${fonts.Exo2};
  display: flex;
  flex-direction: row;
  text-align: justify;
  width: 70%;

  p {
    font-size: 10rem;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1rem;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }
`;
