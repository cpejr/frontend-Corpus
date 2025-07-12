import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  Line,
  VideoContainer,
  Group,
  WhiteContainer,
  Container,
  Video,
  DownloadButton,
  ButtonDiv,
  DownloadIcon,
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
import { useGetManualTranscriptions } from "../../hooks/query/manualTranscription";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import Button from "../../components/common/Button/Button";

export default function VideoPage() {
  const queryClient = useQueryClient();
  const location = useLocation();
  const data = location.state;
  const isAdmin = useAuthStore((state) => state?.auth?.user?.type) === "admin";
  const [displayDownloadButton, setDisplayDownloadButton] = useState(false);
  const [displayUploadButton, setDisplayUploadButton] = useState(true);

  useEffect(() => {
    setDisplayDownloadButton(data?.ManualTranscriptionArchive);
    setDisplayUploadButton(!data?.ManualTranscriptionArchive);
  }, [data?.ManualTranscriptionArchive]);
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);

  const archiveId = data?.archives;
  const manualTranscriptionID = data?.ManualTranscriptionArchive?._id;

  const { data: archiveData, isLoading } = useGetArchives({
    id: archiveId,
    name: data.title,
  });
  const vttURL = archiveData?.vttURL || "";

  const { data: manualTranscription } = useGetManualTranscriptions({
    id: manualTranscriptionID,
    onError: () => {},
  });
  const { data: pdfUrl } = useDownloadTranscript({
    title: data.title,
  });
  const { mutate: updateVideos } = useUpdateVideos({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["videos"],
      });
      queryClient.invalidateQueries({
        queryKey: ["transcription"],
      });
      toast.success(translation.transcriptionUpload);
    },
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
  function downloadBase64Auto(base64Data, videoTitle) {
    const matches = base64Data.match(/^data:([^;]+);base64,/);
    if (!matches) {
      toast.success(translation.transcriptionWaiting);
      return;
    }

    const mimeType = matches[1];
    const extension = mimeType.split("/")[1];
    const filename = `${videoTitle}.${extension}`;
    const link = document.createElement("a");
    link.href = base64Data;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const [inputs] = useState([
    {
      type: "file",
      key: "ManualTranscriptionArchive",
      placeholder: translation.upload,
      label: "ManualTranscriptionArchive",
      errors: ["ERROR", "BAD FUNCTIONING"],
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
          {isAdmin && displayUploadButton && (
            <FormSubmit
              schema={validationSchema()}
              inputs={inputs}
              onSubmit={handleSubmit}
              loading={false}
              buttonText={translation.send}
            />
          )}
          {displayDownloadButton && (
            <Button
              width="240px"
              onClick={() =>
                downloadBase64Auto(manualTranscription, data?.title)
              }
            >
              <DownloadIcon />
              {translation.download}
            </Button>
          )}
        </ButtonDiv>
      </WhiteContainer>
    </Container>
  );
}
