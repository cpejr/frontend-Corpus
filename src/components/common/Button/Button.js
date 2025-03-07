import styled from "styled-components";
import { colors, fonts } from "../../../styles/stylesVariables";

const Button = styled.button`
  /*Posição */
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  justify-content: center;
  /*Medidas*/
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  padding-top: ${(props) => props.paddingTop ?? "0.7rem"};
  padding-left: ${(props) => props.paddingLeft ?? "3rem"};
  padding-right: ${(props) => props.paddingRight ?? "3rem"};
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
`;

export default Button;
