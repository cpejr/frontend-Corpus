import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form as FormContainer, ErrorMessage, InputKeep } from "./Styles";
import { LoadingOutlined } from "@ant-design/icons";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import FormSelect from "../FormSelect/FormSelect";
import FormDatePicker from "../FormDatePicker/FormDatePicker";

export default function FormSubmit({
  inputs,
  onSubmit,
  schema,
  color,
  loading,
  requestError,
  ...props
}) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    control,
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });
  function submitHandler(data) {
    onSubmit(data);
    reset();
  }

  return (
    <FormContainer onSubmit={handleSubmit(submitHandler)}>
      {inputs.map((input) => {
        if (input.type === "text" || input.type === "password") {
          return (
            <InputKeep key={input.key}>
              <FormInput
                inputKey={input.key}
                type={input.type}
                label={input.label}
                placeholder={input.placeholder}
                placeholdercolor="black"
                icon={input.icon}
                error={errors[input.key] ? true : false || requestError}
                defaultValue={input.value}
                register={register}
                color={color}
              />
              {errors[input.key]?.message && (
                <ErrorMessage>{errors[input.key]?.message}</ErrorMessage>
              )}
              {requestError && <ErrorMessage>Campos inválidos</ErrorMessage>}
            </InputKeep>
          );
        } else if (input.type === "select") {
          return (
            <InputKeep key={input.key}>
              <FormSelect
                inputKey={input.key}
                type={input.type}
                label={input.label}
                error={errors[input.key] ? true : false || requestError}
                register={register}
                options={input.options}
                icon={input.icon}
                defaultValue={input?.value}
                isSubmitSuccessful={isSubmitSuccessful}
                placeholder={input?.placeholder}
                setSelectType={props?.setSelectType}
              />
              {errors[input.key]?.message && (
                <ErrorMessage>{errors[input.key]?.message}</ErrorMessage>
              )}
              {requestError && <ErrorMessage>Campos inválidos</ErrorMessage>}
            </InputKeep>
          );
        } else if (input.type === "date") {
          return (
            <InputKeep key={input.key}>
              <FormDatePicker
                inputKey={input.key}
                label={input.label}
                placeholder={input.placeholder}
                icon={input.icon}
                error={errors[input.key] ? true : false || requestError}
                control={control}
                setValue={setValue}
                defaultValue={input?.defaultValue}
                isSubmitSuccessful={isSubmitSuccessful}
                color={color}
              />
              {errors[input.key]?.message && (
                <ErrorMessage>{errors[input.key]?.message}</ErrorMessage>
              )}
              {requestError && <ErrorMessage>Campos inválidos</ErrorMessage>}
            </InputKeep>
          );
        }
        return null;
      })}
      <Button type="submit" fontSize="1.2em" width="150px !important">
        {loading ? <LoadingOutlined /> : "Enviar"}
      </Button>
    </FormContainer>
  );
}

FormSubmit.propTypes = {
  inputs: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  schema: PropTypes.object.isRequired,
  color: PropTypes.string,
  loading: PropTypes.bool,
  selectedOptionsInitial: PropTypes.object,
  requestError: PropTypes.bool,
  setSelectType: PropTypes.string,
};
