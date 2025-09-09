import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../styles/stylesVariables";
import { MdFileDownload } from "react-icons/md";

export const DownloadButton = styled.button`
 
  padding: 0.6rem 1rem;
  background-color: #ffa500;
  color: white;
  border: none;
  border-radius: 0.3em;
  width: 80%;
  max-width: 300px;
  cursor: pointer;
  font-size: 1 rem;
  transition: background-color 0.3s;
  align-items: center;
  &:hover {
    background-color: #e69500;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
    //max-width: 100%;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  }
`;
export const DownloadIcon = styled(MdFileDownload)`
  width: auto;
`;
export const TranscriptionContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  max-height: 300px;
  overflow-y: auto;
  align-items: center;

  h3 {
    margin-bottom: 1rem;
    color: #333;
  }
`;

export const TimeBadge = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  color: #666;
  font-size: 0.8rem;
  min-width: 40px;
`;
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
    height: 85vw;
  }
  @media (max-width: ${breakpoints.tablet}) {
    height: 70vw;
  }
  @media (max-width: ${breakpoints.mobile}) {
    height: 95vw;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 100%;
    height: 100vw;
  }
  @media (max-width: ${breakpoints.mediumMobile}) {
    height: 120vw;
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
  height: 70%;
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

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  justify-content: center;
  align-items: center;
  width: 70%;
  align-self: center;
`;

export const UploadButton = styled.div`
display: flex;

  justify-content: center;
  align-items: center !important;
  width: 100%;
  margin-left: 50%;
  {
  flex-direction: column;
  }
`;

export const DownloadLink = styled.a`
  margin-top: 1%;
  margin-bottom: 5%;
  padding: 0.6rem 1rem;
  background-color: #ffa500;
  color: white;
  border: none;
  border-radius: 0.3em;
  width: 80%;
  max-width: 300px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;

  &:hover {
    background-color: #e69500;
  }
`;
