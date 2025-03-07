import PropTypes from "prop-types";
import { Container, StyledTimePicker } from "./Styles";

export default function TimePicker({ inputKey, placeholder, label, setValue }) {

    return (
        <Container>
            <StyledTimePicker
                name={inputKey}
                onChange={(time) => {setValue(label, time.format("HH:mm:ss"))}}
                format="HH:mm:ss"
                placeholder={placeholder}
            />
        </Container>
    );
}

TimePicker.propTypes = {
    label: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    inputKey: PropTypes.string.isRequired,
  };