import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: ${(props) => props?.width};
  height: auto;
  padding: 0.8rem 1.6rem;
  border-radius: 0%;
  color: black;
  background-color: white;
  cursor: ${(props) => props?.cursor};
  font-size: 20px;

  padding-right: 25px;

  background-size: 40px;
  background-position: 95%;
  outline: none;
  border: ${(props) =>
    props?.error ? "0.1rem red solid" : `0.1rem ${props?.color} solid`};
  &::placeholder {
    color: black;
  }
  @media (max-width: 700px) {
    font-size: 16px;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid green;
    -webkit-text-fill-color: green;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  &:hover {
    border-color: #f19709;
  }
  &:placeholdercolor {
    color: black;
  }
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
