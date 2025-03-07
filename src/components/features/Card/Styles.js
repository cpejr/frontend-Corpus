import { Card, Button } from "antd";
import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../../styles/stylesVariables";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 650px;
  height: auto;
  align-items: center;
  border-radius: 24px;
  gap: 3.33rem;
  background-color: #e9edc9;
  margin-bottom: 4rem;
  &:hover {
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 80%;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 90%;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  div.ant-card-body {
    height: 100%;
    justify-content: space-between;
  }
`;

export const Image = styled.div`
  display: flex;
  width: 250px;  
  height: auto;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > img {
    width: 90%;
    height: auto;
    border-radius: 0.5rem;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  font-size: 30px;
  color: ${colors.black};
  font-family: ${fonts.Cabin};
  font-weight: bold;
  cursor: pointer;
  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 24px;
  }
`;
export const DescriptionLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: auto;
  font-size: 20px;
  color: ${colors.black};
  font-family: ${fonts.Cabin};
  cursor: pointer;
  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 24px;
  }
`;
export const CodeLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  font-size: 10px;
  color: ${colors.black};
  font-family: ${fonts.Cabin};
  cursor: pointer;
  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 24px;
  }
`;

export const Group = styled.div`
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
`;

export const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: end;
`;
export const OrangeButton = styled(Button)`
  width: 10rem;
  height: 2.5rem;
  background-color: #d4a373;
  border: none;
  margin-top: 1rem;
  border-radius: 10px;
  margin-right: 3%;
  font-size: 18px;
  font-family: ${fonts.Cabin};

  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 15px;
    width: 7rem;
    height: 2rem;
  }

  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
  }
`;
