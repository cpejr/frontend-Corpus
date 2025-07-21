import styled from "styled-components";

export const PageButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 1rem;
  border-radius: 100px;
  border: 1px solid "#F4EFF9";
  border-radius: 4px;
  background-color: ${({ isActive }) => (isActive ? "black" : "transparent")};
  color: white;
  cursor: ${({ isActive }) => (isActive ? "default" : "pointer")};
`;

export const ArrowButton = styled.button`
  display: flex;
  align-self: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
`;
