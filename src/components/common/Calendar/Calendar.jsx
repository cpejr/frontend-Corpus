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
}) {
  const [date, setDate] = useState(defaultValue || "");

  const handleChange = (dateChange) => {
    setValue("Birthday", dateChange.toLocaleDateString("pt-BR"), {
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
        defaultValue={date}
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
            dateFormat="dd/mm/yy"
            color={color}
            value={field.value}
          />
        )}
      />
    </Container>
  );
}
CalendarFunction.defaultProps = {
  width: "70%",
};
CalendarFunction.propTypes = {
  inputKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.bool,
  icon: PropTypes.elementType,
  label: PropTypes.string,
  control: PropTypes.func,
  setValue: PropTypes.func,
  isSubmitSuccessful: PropTypes.bool,
  defaultValue: PropTypes.instanceOf(Date),
  color: PropTypes.string,
};
