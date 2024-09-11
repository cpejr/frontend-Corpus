import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../styles/stylesVariables";
import { Select } from "antd";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;

  gap: 3rem;

  @media (max-width: 700px) {
    height: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
  }
`;

export const Line = styled.hr`
  display: flex;
  margin: 0;
  max-width: 25%;
  background-color: ${colors.background.primary};
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
  font-size: 60px;
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

export const ConteinerTS = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const ConteinerTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  align-self: center;
  @media (max-width: ${breakpoints.tablet}) {
    width: 60%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }
`;

export const TypeSelect = styled(Select)`
  width: 130px;
  .ant-select-selector {
    background-color: ${colors.background.primary} !important;
    color: ${colors.font.primary} !important;
    border-radius: 4px;
    border: 2px solid #fff;
    height: 4vh;
    text-align: center;
    justify-content: center;
  }
  .ant-select-selection-item {
    color: ${colors.font.primary} !important;
  }
  .ant-select-arrow {
    display: none;
  }
  .ant-select-dropdown {
    background-color: ${colors.background.secondary};
    color: ${colors.font.primary};
    align-items: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 65%;
  }
`;
