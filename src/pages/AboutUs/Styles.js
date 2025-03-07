import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../styles/stylesVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
  align-items: center;
  text-align: center;

  p {
    font-size: 1.5rem !important;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1rem !important;
    }
  }
`;

export const BackgroundTitle = styled.div`
  height: 150px;
  padding-top: 4rem;
  width: 100%;
`;

export const Title = styled.div`
  color: #ccd5ae;
  font-size: 36px;
  margin-left: 3%;
  justify-self: left;
  text-align: left;
  text-decoration: underline ${colors.underline};
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 3px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 34px;
    align-self: center;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 28px;
  }
`;

export const Line = styled.div`
  color: #ccd5ae;
  display: flex;
  flex-direction: row;
  width: 70%;
  column-gap: 3rem;
  height: 10rem;
  flex-basis: 10%;
  align-items: center;
  @media (max-width: ${breakpoints.smallTablet}) {
    flex-direction: column;
    width: 120%;
  }
`;

export const ImageLine = styled.div`
  color: #ccd5ae;
  display: flex;
  flex-direction: row;
  width: 70%;
  flex-basis: 60%;
  column-gap: 3rem;
  align-items: center;
  @media (max-width: ${breakpoints.smallTablet}) {
    flex-direction: column-reverse;
    width: 120%;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 10%;

  > img {
    width: 80%;
    height: auto;
    border: 6px solid #ccd5ae;
    border-bottom-width: 12px;
    @media (max-width: ${breakpoints.smallTablet}) {
      border-color: ${colors.font.secondary};
      width: 60%;
      align-self: center;
    }
  }
  > p {
    color: ${colors.font.primary};
    text-align: justify;
    justify-self: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    font-size: 1.5rem;
    @media (max-width: ${breakpoints.smallTablet}) {
      flex-direction: row;
    }
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 85%;
  }
`;
export const PintaColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  > img {
    border: 6px solid #ccd5ae;
    border-bottom-width: 12px;
    @media (max-width: ${breakpoints.smallTablet}) {
      border-color: ${colors.font.secondary};
      max-width: 300px;
      height: 30vh;
      align-self: center;
    }
  }
`;

export const TextPintaColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-size: 1.5rem;
  justify-content: center;
  color: ${colors.font.primary};
  text-align: justify;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: row;
    width: 70%;
  }
`;

export const Banner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  > p {
    font-size: 28px;
    color: ${colors.font.primary};
    text-shadow: 1px 1px 1px black;
    width: 85%;
    text-align: center;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 22px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 20px;
    }
  }
`;
export const TextLine = styled.div`
  display: flex;
  flex-direction: row;
  text-align: justify;
  width: 70%;
  font-size: 1.5rem;
  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }
`;

export const SubTitle = styled.h2`
  width: 100%;
  font-size: 36px;
  color: ${colors.font.title};
  font-family: ${fonts.Cabin};
  text-decoration: underline ${colors.font.line};
  text-decoration-skip-ink: auto;
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 3px;
  text-align: left;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
    text-underline-offset: 0.5rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 26px;
    text-align: center;
  }
`;

export const BomDespachoIMG = styled.div`
  display: flex;
  height: 100%;
  width: 100px;
`;
