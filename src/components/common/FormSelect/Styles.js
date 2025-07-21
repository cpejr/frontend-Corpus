import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;

  width: 100%;
`;
export const IconContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    right: 17%;
    display: flex;
  }
`;
export const StyledSelect = styled.select`
  appearance: none;
  height: 3rem;
  padding: 0.8rem 1.6rem;
  cursor: ${(props) => props?.cursor};
  border: 0;
  width: ${(props) => props?.width};
  border-bottom: ${(props) =>
    props?.error ? "1px solid #ff0000" : "1px solid #570b87"} !important;
  border-radius: 0.4rem;
  color: black;
  background-color: white;
  font-size: 20px;
  font-family: "Roboto Condensed";
  padding-right: 25px;

  outline: none;

  :focus,
  :active,
  :enabled {
    outline: none;
  }
  &::placeholder {
    color: black;
  }
  @media (max-width: 700px) {
    font-size: 16px;
  }

  &:hover {
    border-color: #f19709;
  }
`;
