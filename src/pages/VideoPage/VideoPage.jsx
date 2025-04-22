import { useLocation } from "react-router-dom";
import {

    Line,
    VideoContainer,
    Group,
    WhiteContainer,
    Container,
    Video, // Mantendo Styled Components para estilização
} from "./Styles";
import { useGetArchives } from "../../hooks/query/archives";
import { ClipLoader } from "react-spinners";


export default function VideoPage() {
  const location = useLocation();
  const data = location.state;


  const { data: archiveData, isLoading } = useGetArchives({
    id: data.archives,
    name: data.title,
    onError: () => {},
  });
  console.log(archiveData)

  return (
    <Container>
      <WhiteContainer>
        <Group>

          <Line>{data.title}</Line>
        </Group>
        <VideoContainer>
          {isLoading && <ClipLoader color="#FFA500" size={50} />}
          {!isLoading && (
            <Video
              src={`data:video/mp4;base64,${archiveData?.videoFile}`} // Vídeo Base64
              title={data.title}
              controls
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}

        </VideoContainer>
      </WhiteContainer>
    </Container>
  );
}
