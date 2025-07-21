//import { useEffect, useState } from "react";
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
}) {
  //const [thumb, setThumb] = useState(null);

  const { data: archiveData, isLoading } = useGetArchives({
    id: archives._id,
    name: title,

    onError: () => {},
  });
  console.log("useGetArchives", archiveData);

  // useEffect(() => {
  //   const cacheKey = `thumb_${archives._id}`;
  //   const cachedThumb = localStorage.getItem(cacheKey);

  //   if (cachedThumb) {
  //     setThumb(cachedThumb);
  //   } else if (archiveData?.thumbFile) {
  //     localStorage.setItem(cacheKey, archiveData.thumbFile);
  //     setThumb(archiveData.thumbFile);
  //   }
  // }, [archiveData, archives._id]);

  return (
    <StyledCard>
      <Image>
        {isLoading ? (
          <Loader />
        ) : archiveData.thumbURL ? (
          <img src={archiveData.thumbURL} alt={title} />
        ) : null}
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

  ShortDescription: PropTypes.string.isRequired,
  archives: PropTypes.object.isRequired,
};
