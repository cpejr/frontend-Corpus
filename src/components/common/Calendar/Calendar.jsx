import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { Container, StyledCalendar } from "./Styles";

export default function CalendarFunction({
  inputKey,
  control,
  setValue,
  error,
  color,
  placeholder,
  isSubmitSuccessful,
  defaultValue,
  dateFormat,
}) {
  const [date, setDate] = useState(defaultValue || "");

  const handleChange = (dateChange) => {
    setValue("birthday", dateChange.toLocaleDateString("pt-BR"), {
      shouldDirty: true,
    });

    setDate(dateChange);
  };
  useEffect(() => {
    if (isSubmitSuccessful) setDate(null);
  }, [isSubmitSuccessful]);

  return (
    <Container>
      <Controller
        name={inputKey}
        control={control}
        render={({ field }) => (
          <StyledCalendar
            {...field}
            error={error}
            selected={date}
            placeholder={placeholder}
            onChange={(e) => {
              handleChange(e.value);
              field.onChange(e.value);
            }}
            color={color}
            value={date}
            dateFormat={dateFormat}
          />
        )}
      />
    </Container>
  );
}

CalendarFunction.propTypes = {
  inputKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.bool,
  icon: PropTypes.elementType,
  label: PropTypes.string,
  control: PropTypes.object,
  setValue: PropTypes.func,
  isSubmitSuccessful: PropTypes.bool,
  defaultValue: PropTypes.instanceOf(Date),
  color: PropTypes.string,
  dateFormat: PropTypes.string,
};
