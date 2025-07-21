import PropTypes from "prop-types";
import { Container, IconContainer, StyledInput } from "./Styles";

export default function FormInput({
  inputKey,
  placeholder,
  error,
  register,
  defaultValue,
  type,
  icon: Icon,
  color,
  width,
  placeholdercolor,
  ...props
}) {
  
  return (
    <Container>
      <IconContainer>
        {Icon && (
          <Icon style={{ width: "2rem", height: "3.5rem", color: color }} />
        )}
        <StyledInput
          id={inputKey}
          inputKey={inputKey}
          type={type}
          autoComplete="off"
          {...(register && { ...register(inputKey) })}
          placeholder={placeholder}
          defaultValue={defaultValue}
          error={error}
          color={color}
          placeholdercolor={placeholdercolor}
          width={width}
          {...props}
        />
      </IconContainer>
    </Container>
  );
}
FormInput.defaultProps = {
  width: "70%",
};
FormInput.propTypes = {
  inputKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  defaultValue: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.elementType,
  placeholdercolor: PropTypes.string,
};
