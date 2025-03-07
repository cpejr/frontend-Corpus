import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../styles/stylesVariables";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

export const DivTitle = styled.div`
  width: 450px;
  border-bottom: 4px solid ${colors.background.secondary};
  margin-bottom: ${(props) => (props.margin ? props.margin : "50px")};
  @media (max-width: ${breakpoints.mobile}) {
    width: 350px;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 250px;
  }
  @media (max-width: ${breakpoints.miniDevice}) {
    width: 150px;
  }
`;

export const Title = styled.h1`
  color: #ccd5ae;
  font-size: 36px;
  text-transform: uppercase;
  font-family: ${fonts.Cabin};
  font-weight: bold;
  margin: 0% 0% 1% 10%;
  text-shadow: 2px 2px 4px black;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 30px;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 24px;
  }
`;


export const ContainerSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  gap: 2rem;
  margin-bottom: 30px;
  ::placeholder {
    color: black;
    font-weight: 400;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }
`;

export const SectionList = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  gap: 2rem;
  margin-bottom: 30px;
  ::placeholder {
    color: black;
    font-weight: 400;
  }
`;

export const CardVideo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 93%;
`;

export const VideoTitle = styled.div`
  cursor: pointer;
  font-size: 25px;

  @media (max-width: ${breakpoints.smallMobile}) {
    font-size: 18px;
  }
`;

export const ListLine = styled.div`
  border-bottom: 2px solid white;
  flex-grow: 1;
  height: 17px;
  margin-left: 15px;
  margin-right: 15px;

  @media (max-width: ${breakpoints.smallMobile}) {
    height: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Buttons = styled.div`
`;

export const StyledEditOutlined = styled(EditOutlined)`
  color: #d4a373;
  width: 50px;
  font-size: 24px;
`;

export const StyledDeleteOutlined = styled(DeleteOutlined)`
  color: #d4a373;
  width: 50px;
  font-size: 24px;
`;
export const Modals = styled.div`
  width: 100%;
`;