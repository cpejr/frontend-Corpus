import { Container, Text, Title } from "./Styles";
import { CloseOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useGlobalLanguage } from "../../../../stores/globalLanguage";
import { TranslateText, TranslateToastError } from "./translations";
import Button from "../../../common/Button/Button";
import { Modal } from "antd";
import { useDeleteVideos } from "../../../../hooks/query/videos";
import { useQueryClient } from "@tanstack/react-query";

export default function ModalDeleteVideo({ openModal, closeModal, id }) {
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);
  const { mutate: deleteVideo } = useDeleteVideos({
    onSuccess: () => {
      toast.success(translation.successToast);
      closeModal();
    },
    onError: (err) => {
      toast.error(TranslateToastError(globalLanguage, err.response.status));
      closeModal();
    },
  });

  const onConfirm = () => {
    deleteVideo(id, {
      onSuccess: () => {
        //toast.success("Vídeo deletado com sucesso");
        closeModal();
        queryClient.invalidateQueries({ queryKey: ["videos"] });
      },
      onError: (err) => {
        toast.error(err);
        closeModal();
      },
    });
  };

  const queryClient = useQueryClient();

  return (
    <Modal
      open={openModal}
      onCancel={closeModal}
      footer={null}
      closeIcon={<CloseOutlined />}
      destroyOnClose
      centered
    >
      <Container>
        <Title>{translation.title}</Title>
        <Text>{translation.text}</Text>
        <Button
          color="white"
          border-color="white"
          fontSize="1.2em"
          width="40% !important"
          onClick={onConfirm}
        >
          {translation.button}
        </Button>
      </Container>
    </Modal>
  );
}

ModalDeleteVideo.propTypes = {
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
