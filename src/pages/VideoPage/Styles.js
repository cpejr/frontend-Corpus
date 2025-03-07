import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../styles/stylesVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 40px;
`;

export const WhiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  width: 85%;
  height: 50vw;
  align-items: center;
  border-radius: 24px;
  gap: 2rem;
  background-color: white;
  margin-bottom: 4rem;
  padding: 40px 0px 40px 0px;
  @media (max-width: ${breakpoints.smallTablet}) {
    height: 60vw;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 70vw;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 90%;
    height: 75vw;
  }
  @media (max-width: ${breakpoints.mediumMobile}) {
    height: 85vw;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > img {
    width: 90%;
    height: auto;
    border-radius: 0.5rem;
  }
`;

export const Video = styled.video`
  width: 80%;
  height: 90%;
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

export const Group = styled.div`
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
`;