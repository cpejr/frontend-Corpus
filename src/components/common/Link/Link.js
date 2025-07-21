import styled from "styled-components";
import { colors, fonts, breakpoints } from "../../../styles/stylesVariables";
import { Link as RouterLink } from "react-router-dom";

const Link = styled(RouterLink)`
  /*Medidas*/
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  padding-top: ${(props) => props.paddingTop};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  padding-bottom: ${(props) => props.paddingBottom};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  /*cor e estilo do botão*/
  color: ${(props) => props.color ?? colors.black};
  background-color: ${(props) => props.backgroundColor};
  border-width: ${(props) => props.borderWidth};
  border-color: ${(props) => props.borderColor};
  border-style: ${(props) => props.borderStyle};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShadow};
  cursor: pointer;
  /*características do texto*/
  font-family: ${(props) => props.fontFamily ?? fonts.Exo2};
  font-size: ${((props) => props.fontSize, "1rem")};
  text-decoration: ${(props) => props.textDecoration ?? "none"};
  text-align: center;
  font-weight: ${(props) => props.fontWeight};
  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    border-color: ${(props) => props.hoverBorderColor};
    color: ${(props) => props.hoverColor ?? colors.black};
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    display: none;
  }
`;

export default Link;
