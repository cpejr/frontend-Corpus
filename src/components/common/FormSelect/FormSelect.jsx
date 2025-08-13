import PropTypes from "prop-types";
import { Container, IconContainer, StyledSelect } from "./Styles";
import { useEffect, useState } from "react";

export default function FormSelect({
  inputKey,
  placeholder,
  error,
  register,
  defaultValue,
  type,
  icon: Icon,
  isSubmitSuccessful,
  setSelectType,
  options,
  color,
  width,
  placeholdercolor,
  ...props
}) {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");
  console.log(defaultValue);
  useEffect(() => {
    if (isSubmitSuccessful) setSelectedValue("");
  }, [isSubmitSuccessful]);

  return (
    <Container>
      <IconContainer>
        {Icon && (
          <Icon style={{ width: "2rem", height: "3.5rem", color: color }} />
        )}
        <StyledSelect
          id={inputKey}
          inputKey={inputKey}
          type={type}
          autoComplete="off"
          {...(register && { ...register(inputKey) })}
          onChange={(e) => {
            setSelectedValue(e.target.value);
            setSelectType &&
              inputKey === "tipo" &&
              setSelectType(e.target.value);
          }}
          placeholder={placeholder}
          defaultValue={defaultValue}
          error={error}
          color={color}
          placeholdercolor={placeholdercolor}
          width={width}
          value={selectedValue}
          {...props}
        >
          {" "}
          <option value="" disabled defaultValue={""}>
            {placeholder}
          </option>
          {options?.map((option) => (
            <option key={option.name}>{option.name}</option>
          ))}
        </StyledSelect>
      </IconContainer>
    </Container>
  );
}
FormSelect.defaultProps = {
  width: "70%",
};
FormSelect.propTypes = {
  inputKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  defaultValue: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  options: PropTypes.array,
  icon: PropTypes.elementType,
  placeholdercolor: PropTypes.string,
  setSelectType: PropTypes.func,
  isSubmitSuccessful: PropTypes.bool,
};
