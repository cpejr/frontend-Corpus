import {
  StyledCard,
  OrangeButton,
  Line,
  Image,
  Group,
  ButtonDiv,
} from "./Styles";
import PropTypes from "prop-types";
import logo from "../../../assets/logoFooter.svg";
export default function Card({ data, textButton, event }) {
  return (
    <StyledCard>
      <Image>
        <img src={logo} />
      </Image>
      <Group>
        <Line>{data.name}</Line>
      </Group>

      <ButtonDiv>
        <OrangeButton onClick={event}>{textButton}</OrangeButton>
      </ButtonDiv>
    </StyledCard>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  textButton: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};
