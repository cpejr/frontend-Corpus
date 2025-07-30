import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
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
  ButtonDiv2,
} from "./Styles";
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

useEffect(() => {
  setDisplayDownloadButton(!!manualTranscription);
}, [manualTranscription]);


useEffect(() => {
  console.log("data:", manualTranscription);
}, [manualTranscription]);


  const { data: pdfUrl } = useDownloadTranscript({
    title: data.title,
  });

  const { mutate: updateVideos } = useUpdateVideos({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      queryClient.invalidateQueries({ queryKey: ["transcription"] });
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
    console.log("Arquivo recebido no submit:", archive.ManualTranscriptionArchive);
    updateVideos({ _id: data._id, body: archive });
  };


console.log("manualTranscription (URL):", manualTranscription);
console.log("displayDownloadButton:", displayDownloadButton);


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
                <source src={archiveData.videoURL} type="video/mp4" />
                <track
                  label="Português"
                  kind="subtitles"
                  srcLang="pt"
                  src={vttURL}
                  default
                />
              </Video>

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
                {displayDownloadButton && manualTranscription && (
                  <a
                    href={manualTranscription}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Button width="15%" height="30%" marginLeft="1rem">
                      <DownloadIcon />
                      {translation.download}
                    </Button>
                  </a>
                )}
              </ButtonDiv>
              <ButtonDiv2>
                {
                  pdfUrl && isAdmin && <DownloadButton
                    onClick={handleDownload}
                  >
                    {translation.buttonpdf}
                  </DownloadButton>
                }
              </ButtonDiv2>
            </>
          )}
        </VideoContainer>
      </WhiteContainer>
    </Container>
  );
}
