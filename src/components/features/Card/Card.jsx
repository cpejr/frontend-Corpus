import {
  StyledCard,
  OrangeButton,
  Line,
  Image,
  Group,
  ButtonDiv,
  Loader,
  DescriptionLine,
  CodeLine,
} from "./Styles";
import PropTypes from "prop-types";
import { useGetArchives } from "../../../hooks/query/archives";

export default function Card({
  textButton,
  event,
  title,
  ShortDescription,
  code,
  archives,
  thumbnail,
}) {
  const { data: archiveData, isLoading } = useGetArchives({
    id: archives._id,
    name: title,
    thumbFile: thumbnail,
    onError: () => {},
  });

  return (
    <StyledCard>
      <Image>
        {isLoading ? (
          <Loader /> // Spinner enquanto carrega
        ) : (
          <img
            src={`data:image/webp;base64,${archiveData?.thumbFile}`}
            alt={title}
          />
        )}
      </Image>
      <Group>
        <Line>{title}</Line>
      </Group>
      <Group>
        <DescriptionLine>{ShortDescription}</DescriptionLine>
      </Group>
      <Group>
        <CodeLine>{code}</CodeLine>
      </Group>

      <ButtonDiv>
        <OrangeButton onClick={event}>{textButton}</OrangeButton>
      </ButtonDiv>
    </StyledCard>
  );
}

Card.propTypes = {
  textButton: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
  thumbnail: PropTypes.string.isRequired,
  ShortDescription: PropTypes.string.isRequired,
  archives: PropTypes.string,
};
