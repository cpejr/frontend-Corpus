import { useLocation } from "react-router-dom";
import {
  Line,
  VideoContainer,
  Group,
  WhiteContainer,
  Container,
  Video,
  DownloadButton,
} from "./Styles";
import { useGetArchives } from "../../hooks/query/archives";
import { useDownloadTranscript } from "../../hooks/query/videos";
import { ClipLoader } from "react-spinners";
import useAuthStore from "../../stores/auth";

export default function VideoPage() {
  const location = useLocation();
  const data = location.state;
  const isAdmin = useAuthStore((state) => state?.auth?.user?.type) === "admin";

  if (!data) {
    return <p>Dados não encontrados.</p>;
  }

  const { data: archiveData, isLoading } = useGetArchives({
    id: data.archives._id,
    name: data.title,
  });

  const { data: pdfUrl } = useDownloadTranscript({
    title: data.title,
  });

  return (
    <Container>
      <WhiteContainer>
        <Group>
          <Line>{data.title}</Line>
        </Group>

        <VideoContainer>
          {isLoading && <ClipLoader color="#FFA500" size={50} />}
          {!isLoading && (
            <>
              <Video
                src={`data:video/mp4;base64,${archiveData?.videoFile}`}
                title={data.title}
                controls
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              {pdfUrl && isAdmin && (
                <DownloadButton
                  href={pdfUrl}
                  download={`${data.title}_transcript.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📄 Baixar Transcrição
                </DownloadButton>
              )}
            </>
          )}
        </VideoContainer>
      </WhiteContainer>
    </Container>
  );
}

