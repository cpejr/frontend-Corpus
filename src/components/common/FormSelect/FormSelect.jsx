import PropTypes from "prop-types";
import { Container, IconContainer, StyledSelect } from "./Styles";
import { useEffect, useState } from "react";
import Select from "react-select";

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
  isMulti,
  ...props
}) {
  const [selectedValue, setSelectedValue] = useState(defaultValue || (isMulti ? [] : ""));
  
  useEffect(() => {
    if (isSubmitSuccessful) setSelectedValue(isMulti ? [] : "");
  }, [isSubmitSuccessful, isMulti]);

  if (isMulti) {
    return (
      <Container>
        <IconContainer>
          {Icon && (
            <Icon style={{ width: "2rem", height: "3.5rem", color: color }} />
          )}
          <Select
            isMulti
            isSearchable={true}
            placeholder={placeholder}
            options={options?.map(option => ({ value: option.value, label: option.name }))}
            onChange={(selected) => {
              setSelectedValue(selected);
              // Properly trigger react-hook-form onChange
              const event = {
                target: {
                  name: inputKey,
                  value: selected
                }
              };
              register(inputKey).onChange(event);
            }}
            value={selectedValue}
            name={inputKey}
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: 'white',
                border: error ? '0.1rem red solid' : '0.1rem black solid',
                borderRadius: '0%',
                color: 'black',
                minHeight: 'auto',
                height: 'auto',
                fontSize: '20px',
                padding: '0.8rem 1.6rem',
                '&:hover': {
                  borderColor: '#f19709'
                }
              }),
              valueContainer: (base) => ({
                ...base,
                padding: '0',
                minHeight: 'auto'
              }),
              indicatorsContainer: (base) => ({
                ...base,
                height: 'auto'
              }),
              placeholder: (base) => ({
                ...base,
                color: 'black',
                fontSize: '20px',
                margin: '0'
              }),
              input: (base) => ({
                ...base,
                color: 'black',
                fontSize: '20px',
                margin: '0',
                padding: '0'
              }),
              singleValue: (base) => ({
                ...base,
                color: 'black',
                margin: '0'
              })
            }}
          />
        </IconContainer>
      </Container>
    );
  }

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
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  width: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  options: PropTypes.array,
  icon: PropTypes.elementType,
  placeholdercolor: PropTypes.string,
  setSelectType: PropTypes.func,
  isSubmitSuccessful: PropTypes.bool,
  isMulti: PropTypes.bool,
};
