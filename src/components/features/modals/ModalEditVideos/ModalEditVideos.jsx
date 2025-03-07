import PropTypes from "prop-types";
//import Button from "../../../common/Button/Button";
//import { colors } from "../../../../styles/stylesVariables";
import FormSubmit from "../../FormSubmit/FormSubmit";
import {
  Container,
  Message,
  ModalStyle,
  Form,

  //Calendar,
} from "./Styles";
import { useState } from "react";
//import formatDate from "../../../../utils/formatDate";

export default function ModalEditVideos({
  videos,
  modal,
  close,
  _id,
  updateVideos,
}) {
  //const [date, setDate] = useState();
  const [inputs] = useState([
    {
      type: "select",
      key: "code",
      placeholder: "Selecione sua formação",
      label: "code",
      options: Array.from({ length: 100 }, (_, i) => ({
        value: i + 1,
        name: (i + 1).toString(),
      })),
    },
    {
      type: "file",
      key: "videoFile",
      placeholder: "Escolha um arquivo de mídia",
      label: "videoFile",
    },
    {
      type: "time",
      key: "duration",
      placeholder: "Tempo de duração",
      label: "Duração",
    },
  ]);
  const handleSubmit = (data) => {
    const updatedData = {
      ...data,
      ...videos,
    };
    updateVideos(_id, updatedData);
    close();
  };

  return (
    <Container>
      <ModalStyle
        open={modal}
        onCancel={close}
        centered
        destroyOnClose
        footer={null}
      >
        <Message>Editar Informações</Message>

        <Form>
          <FormSubmit
            inputs={inputs}
            onSubmit={handleSubmit}
            loading={false}
            buttonText="Enviar"
          />
        </Form>
        {/* <Button
          type="submit"
          onClick={handleSubmit}
          backgroundcolor="transparent"
          color={colors.font.primary}
          border="1px solid"
          borderRadius="0.5rem"
          marginTop="1.5rem"
          fontSize="1.8rem"
          fontWeight="500"
          lineHeight="2.2rem"
          hoverBackgroundColor={colors.modals.modalButton}
          hoverColor={colors.font.secondary}
          borderColor={colors.modals.modalButton}
        >
          Editar
        </Button> */}
      </ModalStyle>
    </Container>
  );
}

ModalEditVideos.propTypes = {
  _id: PropTypes.string.isRequired,
  videos: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  transformArrayItems: PropTypes.func.isRequired,
  updateVideos: PropTypes.func.isRequired,
};