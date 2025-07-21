import { useEffect, useState } from "react";
import FormSubmit from "../../components/features/FormSubmit/FormSubmit";
import { Container, DivContainer, Text, Title } from "./Styles";
import { validationSchema } from "./utils";
import { useNavigate, useParams } from 'react-router-dom';
import { useRedefinePassword } from "../../hooks/query/user";
import { toast } from "react-toastify";
import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText, TranslateToastError } from "./translations";

export default function RedefinePassword() {

    const { token } = useParams();
    const navigate = useNavigate();

    // Translations
    const { globalLanguage } = useGlobalLanguage();
    const translation = TranslateText(globalLanguage);

    const [inputs, setInputs] = useState([]);

    useEffect(() => {
      setInputs([
        {
          type: "password",
          key: "newPassword",
          placeholder: translation.newPassword,
          label: "newPassword",
        },
        {
          type: "password",
          key: "confirmation",
          placeholder: translation.confirmationPassword,
          label: "confirmation",
        },
      ]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [globalLanguage]);

    const { mutate: redefinePassword, isPending } = useRedefinePassword({
      onSuccess: () => {
        toast.success(translation.successToast);
        navigate('/register');
      },
      onError: (err) => {
        toast.error(TranslateToastError(globalLanguage, err.response.status));
      },
    });
  
    const onSubmit = (data) => {
      delete data.confirmation;
      const newData = { ...data, token: token };

      redefinePassword(newData);
    };

    return (
        <Container>
            <DivContainer>
                <Title>{translation.title}</Title>
                <Text>{translation.text}</Text>
                <FormSubmit onSubmit={onSubmit} loading={isPending} schema={validationSchema()} inputs={inputs} buttonText={translation.button}></FormSubmit>
            </DivContainer>
        </Container>
    );
}