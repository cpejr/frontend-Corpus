import PropTypes from "prop-types";
//import { useGlobalLanguage } from "../../../../stores/globalLanguage";
//import { TranslateText } from "./translations";
import { Button, Container, ModalStyles } from "./Styles";

export default function ModalDeleteUser({
  close,
  handleDelete,
  id,
  modal,
  closeModal,
  modalCloseIcon,
}) {
  //const { globalLanguage } = useGlobalLanguage();
  //const translation = TranslateText(globalLanguage);

  return (
    <ModalStyles
      open={modal}
      onCancel={closeModal}
      closeIcon={modalCloseIcon}
      centered
      destroyOnClose
    >
      <Container>
        <Button
          onClick={() => {
            handleDelete(id);
            close();
          }}
        >
          Excluir
        </Button>
      </Container>
    </ModalStyles>
  );
}

ModalDeleteUser.propTypes = {
  close: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalCloseIcon: PropTypes.object.isRequired,
};
