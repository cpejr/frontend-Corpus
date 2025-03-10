import { useEffect, useState } from "react";
import FormSubmit from "../../components/features/FormSubmit/FormSubmit";
import { Container, Title, DivContainer, TextClick, Text } from "./Styles";
import { validationSchemaLogin, validationSchemaRegister } from "./utils";
import { useCreateUsers } from "../../hooks/query/user";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalForgotPassword from "../../components/features/modals/ModalForgotPassword/ModalForgotPassword";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/query/session";
import { useGlobalLanguage } from "../../stores/globalLanguage";
import {
  TranslateLoginToastError,
  TranslateRegisterToastError,
  TranslateText,
} from "./translations";

export default function RegisterPage() {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);

  const [inputsRegister, setInputsRegister] = useState([]);
  const [inputsLogin, setInputsLogin] = useState([]);

  useEffect(() => {
    setInputsRegister([
      {
        type: "text",
        key: "name",
        placeholder: translation.name,
        label: "name",
      },
      {
        type: "date",
        key: "birthday",
        placeholder: translation.birthday,
        label: "birthday",
      },
      {
        type: "text",
        key: "phone",
        placeholder: translation.phone,
        label: "phone",
      },
      {
        type: "text",
        key: "email",
        placeholder: "Email",
        label: "email",
      },
      {
        type: "password",
        key: "password",
        placeholder: translation.password,
        label: "password",
      },
      {
        type: "checkbox",
        key: "acceptTerms",
        placeholder: translation.acceptTerms,
        label: "acceptTerms",
      },
    ]);

    setInputsLogin([
      {
        type: "text",
        key: "email",
        placeholder: "Email",
        label: "email",
      },
      {
        type: "password",
        key: "password",
        placeholder: translation.password,
        label: "password",
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalLanguage]);

  const { mutate: createUser, isPending: registerLoading } = useCreateUsers({
    onSuccess: () => {
      toast.success(translation.toastCreate);
    },
    onError: (err) => {
      toast.error(
        TranslateRegisterToastError(globalLanguage, err.response.status),
      );
    },
  });

  const registerSubmit = (data) => {
    
    createUser(data);
  };

  const { mutate: login, isPending: loginLoading } = useLogin({
    onSuccess: () => {
      toast.success(translation.toastLogin);

      navigate("/");
    },
    onError: (err) => {
      toast.error(
        TranslateLoginToastError(globalLanguage, err.response.status),
      );
    },
  });

  const loginSubmit = (data) => {
    login(data);
  };

  return (
    <Container>
      <DivContainer>
        <Title>{translation.titleLogin}</Title>
        <FormSubmit
          onSubmit={loginSubmit}
          schema={validationSchemaLogin()}
          loading={loginLoading}
          inputs={inputsLogin}
          buttonText={translation.buttonLogin}
        ></FormSubmit>
        <Text>
          {translation.forgotPassword}{" "}
          <TextClick onClick={() => setShowModal(true)}>
            {translation.here}
          </TextClick>
        </Text>
        <Title>{translation.titleRegister}</Title>
        <FormSubmit
          onSubmit={registerSubmit}
          schema={validationSchemaRegister()}
          loading={registerLoading}
          inputs={inputsRegister}
          buttonText={translation.buttonRegister}
        ></FormSubmit>
      </DivContainer>
      <ModalForgotPassword
        openModal={showModal}
        closeModal={() => setShowModal(false)}
      />
    </Container>
  );
}
