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
  UploadButton,
  DownloadLink,
} from "./Styles";
import { validationSchema } from "./utils";
import { useGetArchives } from "../../hooks/query/archives";
import { useGetTranscriptionUrl, useGetVTTUrl } from "../../hooks/query/videos";
import { ClipLoader } from "react-spinners";
import useAuthStore from "../../stores/auth";
import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";
import { FormSubmit } from "../../components";
import { useUpdateVideos } from "../../hooks/query/videos";
import { useGetManualTranscriptions } from "../../hooks/query/manualTranscription";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";


export default function VideoPage() {
  const queryClient = useQueryClient();
  const location = useLocation();
  const data = location.state;

  const isAdmin = useAuthStore((state) => state?.auth?.user?.type) === "admin";
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);

  const [displayDownloadButton, setDisplayDownloadButton] = useState(false);

  const archiveId = data?.archives;

  //  const manualTranscriptionID = data?.ManualTranscriptionArchive?._id;
  const [currentManualTranscriptionId, setManualTranscriptionId] = useState(
    data?.ManualTranscriptionArchive?._id
  );

  const { data: archiveData, isLoading } = useGetArchives({
    id: archiveId._id,
    name: data.title,
  });

  const vttURL = archiveData?.vttURL || "";
  //Linhas temporariamente comentadas até configurar CORS
  // const {data: vttUrlFromS3 } = useGetVTTUrl ({
  //   videoId: data._id,
  // })

  // const vttURL = vttUrlFromS3 || "";
  //


  const { data: manualTranscription } = useGetManualTranscriptions({
    id: currentManualTranscriptionId,
    onError: () => {},
  });



  useEffect(() => {
    setDisplayDownloadButton(!!manualTranscription);
  }, [manualTranscription]);

  const { data: transcriptionData } = useGetTranscriptionUrl({
    transcriptionId: data?.transcription,
  });
  const pdfUrl = transcriptionData?.url;

  const { mutate: updateVideos } = useUpdateVideos({
    onSuccess: (updatedVideo) => {
      setManualTranscriptionId(updatedVideo.ManualTranscriptionArchive);

      queryClient.invalidateQueries({ queryKey: ["videos"] });
      
      queryClient.invalidateQueries({
        queryKey: [
          "manualTranscriptions",
          updatedVideo.ManualTranscriptionArchive,
        ],
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


    updateVideos({
      _id: data._id,
      body: {
        ManualTranscriptionArchive: archive.ManualTranscriptionArchive,
      },
    });
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
                <source src={archiveData?.videoURL || ""} type="video/mp4" />
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
                  <UploadButton>
                  <FormSubmit
                    schema={validationSchema()}
                    inputs={inputs}
                    onSubmit={handleSubmit}
                    loading={false}
                    buttonText={translation.send}
                  /></UploadButton>
                )}

                {displayDownloadButton && manualTranscription && (
                  <DownloadLink
                    href={manualTranscription?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DownloadIcon />
                    {translation.download}
                  </DownloadLink>
                )}
              

              
                {pdfUrl && isAdmin && (
                  <DownloadButton onClick={handleDownload}>
                    {translation.buttonpdf}
                  </DownloadButton>
                )}
              
              </ButtonDiv>
            </>
          )}
        </VideoContainer>
      </WhiteContainer>
    </Container>
  );
}
