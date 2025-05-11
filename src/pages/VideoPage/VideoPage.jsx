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
import { useGlobalLanguage } from "../../stores/globalLanguage";
import {TranslateText} from "./translations"



export default function VideoPage() {
  const location = useLocation();
  const data = location.state;
  const isAdmin = useAuthStore((state) => state?.auth?.user?.type) === "admin";

  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);


  const { data: archiveData, isLoading } = useGetArchives({
    id: data.archives._id,
    name: data.title,
  });


  const { data: pdfUrl } = useDownloadTranscript({
    title: data.title,
  });

  const handleDownload = () => {
    if (!pdfUrl) return;

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${data.title}_transcript.pdf`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


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
                <DownloadButton  onClick={handleDownload}>
              {translation.buttonpdf}
                </DownloadButton>
              )}
            </>
          )}

        </VideoContainer>
      </WhiteContainer>
    </Container>
  );
}

