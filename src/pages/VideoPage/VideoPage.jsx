import { useLocation } from "react-router-dom";
import {
  Line,
  VideoContainer,
  Group,
  WhiteContainer,
  Container,
  Video,
  DownloadButton,
  ButtonDiv,
} from "./Styles";
import { useState } from "react";
import { validationSchema } from "./utils";
import { useGetArchives } from "../../hooks/query/archives";
import { useDownloadTranscript } from "../../hooks/query/videos";
import { ClipLoader } from "react-spinners";
import useAuthStore from "../../stores/auth";
import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";
import { FormSubmit } from "../../components";
import { useUpdateVideos } from "../../hooks/query/videos";

export default function VideoPage() {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const isAdmin = useAuthStore((state) => state?.auth?.user?.type) === "admin";

  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);
  const archiveId = data?.archives;

  const { data: archiveData, isLoading } = useGetArchives({
    id: archiveId,
    name: data.title,
  });
  const vttURL = archiveData?.vttURL || "";

  const { data: pdfUrl } = useDownloadTranscript({
    title: data.title,
  });
  const { mutate: updateVideos } = useUpdateVideos({});

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
  const [inputs] = useState([
    {
      type: "file",
      key: "ManualTranscriptionArchive",
      placeholder: translation.upload,
      label: "ManualTranscriptionArchive",
      errors: ["ola", "ola"],
    },
  ]);
  const handleSubmit = (archive) => {
    updateVideos({ _id: data._id, body: archive });
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
              <Video controls title={data.title}>
                <source
                  src={`data:video/mp4;base64,${archiveData?.videoFile}`}
                  type="video/mp4"
                />
                <track
                  label="Português"
                  kind="subtitles"
                  srcLang="pt"
                  src={vttURL}
                  default
                />
              </Video>
              {pdfUrl && isAdmin && (
                <DownloadButton onClick={handleDownload}>
                  {translation.buttonpdf}
                </DownloadButton>
              )}
            </>
          )}
        </VideoContainer>
        <ButtonDiv>
          {isAdmin && (
            <FormSubmit
              schema={validationSchema()}
              inputs={inputs}
              onSubmit={handleSubmit}
              loading={false}
              buttonText={translation.send}
            />
          )}
          {data?.ManualTranscriptionArchive && (
            <button>{translation.download}</button>
          )}
        </ButtonDiv>
      </WhiteContainer>
    </Container>
  );
}
