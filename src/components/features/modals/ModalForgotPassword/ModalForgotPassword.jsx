import FormSubmit from "../../FormSubmit/FormSubmit";
import { Container, Text, Title } from "./Styles";
import { Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import PropTypes from "prop-types";
import { useState } from "react";
import { validationSchema } from "./utils";
import { useForgotPassword } from "../../../../hooks/query/user";
import { toast } from "react-toastify";
import { TailSpin } from 'react-loader-spinner';
import { useGlobalLanguage } from "../../../../stores/globalLanguage";
import { TranslateText, TranslateToastError } from "./translations";

export default function ModalForgotPassword({ openModal, closeModal }) {
  
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);
  
  const [inputs] = useState([
    {
      type: "text",
      key: "email",
      placeholder: "Email",
      label: "email",
    },
  ]);

  const { mutate: forgotPassword, isPending } = useForgotPassword({
    onSuccess: () => {
      toast.success(translation.successToast);
      closeModal();
    },
    onError: (err) => {
      toast.error(TranslateToastError(globalLanguage, err.response.status));
      closeModal();
    },
  });

  const onSubmit = (data) => {
    forgotPassword(data);
  };

  return (
    <Modal
            open={openModal}
            onCancel={closeModal}
            footer={null}
            width={700}
            closeIcon={<CloseOutlined />}
            destroyOnClose
            centered
          >
      <Container>
        <Title>{translation.title}</Title>
        <Text>{translation.text}</Text>
        <FormSubmit onSubmit={onSubmit} inputs={inputs} schema={validationSchema()} loading={isPending} buttonText={translation.button}/>
        {isPending && 
          (<>
            <TailSpin></TailSpin>
          </>)}
      </Container>
    </Modal>
  );
}

ModalForgotPassword.propTypes = {
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};