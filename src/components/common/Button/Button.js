import styled from "styled-components";
import { colors, fonts, breakpoints } from "../../../styles/stylesVariables";

const Button = styled.button`
  /*Posição */
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: center;
  /*Medidas*/
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  padding-top: ${(props) => props.paddingTop ?? "0.7rem"};
  padding-left: ${(props) => props.paddingLeft ?? "1rem"};
  padding-right: ${(props) => props.paddingRight ?? "1rem"};
  padding-bottom: ${(props) => props.paddingBottom ?? "0.7rem"};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  /*cor e estilo do botão*/
  color: #f6fff8;
  background-color: #dfc89e;
  border-width: ${(props) => props.borderWidth ?? "0.15rem"};
  border-color: ${(props) => props.borderColor ?? "transparent"};
  border-style: solid;
  border-radius: ${(props) => props.borderRadius ?? "10px"};
  box-shadow: ${(props) => props.boxShadow ?? "none"};
  cursor: pointer;
  /*características do texto*/
  font-family: ${(props) => props.fontFamily ?? fonts.Exo2};
  font-size: ${((props) => props.fontSize, "1rem")};
  text-decoration: ${(props) => props.textDecoration ?? "none"};
  text-align: center;
  font-weight: ${(props) => props.fontWeight};
  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor ?? colors.black};
    border-color: ${(props) => props.hoverBorderColor};
    color: ${(props) => props.hoverColor ?? "white"};
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 30%;
    //padding: 0.5rem 0.8rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
    width: 40%;
    //padding: 0.5rem 0.8rem;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 0.8rem;
    width: 40%;
    //padding: 0.4rem 0.6rem;
  }
`;

export default Button;
