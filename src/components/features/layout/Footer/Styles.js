import styled from "styled-components";
import { colors, breakpoints } from "../../../../styles/stylesVariables";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  background-color: ${colors.background.header};
  @media (max-width: ${breakpoints.mobile}) {
    height: 7rem;
  }
`;

export const LogoFooter = styled.img`
  width: 10%;
  display: flex;
  cursor: pointer;
  @media (max-width: ${breakpoints.mobile}) {
    width: 100px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  color: #f5eadf;
  gap: 10px;

  p {
    font-size: 2rem;
    margin: 0;
    @media (max-width: ${breakpoints.mobile}) {
      display: none;
      gap: 2px;
    }
  }
`;

export const SocialIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #f5eadf;
  justify-content: center;
  gap: 40px;
  @media (max-width: ${breakpoints.mobile}) {
    gap: 10px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Instagram = styled(FaInstagram)`
  font-size: 50px;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 30px;
  }
`;
export const Facebook = styled(FaFacebookSquare)`
  font-size: 50px;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 30px;
  }
`;
export const Whatsapp = styled(FaWhatsapp)`
  font-size: 50px;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 30px;
  }
`;
