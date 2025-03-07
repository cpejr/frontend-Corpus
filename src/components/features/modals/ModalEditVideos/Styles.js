import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles/stylesVariables";
import { Modal } from "antd";
import { Calendar as PrimeCalendar } from "primereact/calendar";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.modals.background};
  width: 100%;
  height: 100%;
`;

export const Message = styled.h1`
  font-size: 2.1rem;
  text-align: center;
  margin: 1.4rem;
  color: ${colors.font.secondary};
  @media (max-width: 375px) {
    font-size: 1.5rem;
    margin: 1rem;
  }
`;

export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: #fefae0;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    color: red;
    padding: 6;
    margin: 0;
    border-radius: none;
  }
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  height: 100%;

  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 0%;
  }

  @media (min-width: 1440px) {
    max-width: 144rem;
  }
`;
export const Calendar = styled(PrimeCalendar)`
  display: flex;
  justify-content: center;
  width: 260px;
  color: #000;
  background-color: "white";
  .p-inputtext {
    border: solid 1px ${colors.font.secondary};
    cursor: pointer;
    color: ${colors.font.secondary};

    &:hover {
      border-color: #f19709;
      color: ${colors.font.secondary};
    }
  }
  ::placeholder {
    color: ${colors.font.secondary};
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    width: 33%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 50%;
  }
`;