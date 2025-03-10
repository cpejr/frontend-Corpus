import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { Container, StyledCalendar } from "./Styles";

export default function CalendarFunction({
  inputKey,
  control,
  setValue,
  error,
  dateFormat,
  view,
  color,
  placeholder,
  isSubmitSuccessful,
  defaultValue,
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
        defaultValue={date}
        render={() => (
          <StyledCalendar
            error={error}
            selected={date}
            placeholder={placeholder}
            onChange={(e) => handleChange(e.value)}
            dateFormat={dateFormat}
            view={view}
            color={color}
            value={date}
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
  view: PropTypes.string,
  dateFormat: PropTypes.string,
  control: PropTypes.func,
  setValue: PropTypes.func,
  isSubmitSuccessful: PropTypes.bool,
  defaultValue: PropTypes.date,
  color: PropTypes.string,
};
