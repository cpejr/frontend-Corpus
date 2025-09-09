import { useEffect, useState } from "react";
import { useGetLanguages } from "../../hooks/query/language";
import { useGetCountries } from "../../hooks/query/country";
import { FormSubmit, SearchBar } from "../../components";
import {
  Container,
  Title,
  Section,
  DivTitle,
  ContainerSearchBar,
  CardVideo,
  Modals,
  StyledDeleteOutlined,
  StyledEditOutlined,
  VideoTitle,
  ListLine,
  Buttons,
  SectionList,
} from "./Styles";
import { validationSchema } from "./utils";
import { TranslateText } from "./translations";
import { useGlobalLanguage } from "../../stores/globalLanguage";
import ModalEditVideos from "../../components/features/modals/ModalEditVideos/ModalEditVideos";
import ModalDeleteVideo from "../../components/features/modals/ModalDeleteVideos/ModalDeleteVideos";
import { useCreateVideos, useGetVideos } from "../../hooks/query/videos";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import translateText from "../../services/others/translateAPI";
import { TranslateToastError } from "./translations";

export default function ManageVideosPage() {
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });
  const translateLanguage = globalLanguage.toLowerCase();

  const [inputs, setInputs] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [countries, setCountries] = useState([]);

  const { data: languagesData } = useGetLanguages();
  const { data: countryData } = useGetCountries();

  useEffect(() => {
    if (languagesData) {
      setLanguages(languagesData);
    }
  }, [languagesData]);

  useEffect(() => {
    if (countryData) {
      setCountries(countryData);
    }
  }, [countryData]);

  useEffect(() => {
    setInputs([
      {
        type: "text",
        key: "title",
        placeholder: translation.placeholder1,
        label: "title",
        tooltipId: "title-tooltip",
        tooltipContent: translation.titletip,
      },
      {
        type: "text",
        key: "ShortDescription",
        placeholder: translation.placeholder2,
        label: "ShortDescription",
        tooltipId: "shortDescription-tooltip",
        tooltipContent: translation.shortDescriptiontip,
      },
      {
        type: "text",
        key: "code",
        placeholder: translation.placeholder4,
        label: "code",
        tooltipId: "code-tooltip",
        tooltipContent: translation.codetip,
      },
      {
        type: "text",
        key: "context",
        placeholder: translation.placeholder5,
        label: "context",
        tooltipId: "context-tooltip",
        tooltipContent: translation.contexttip,
      },
      {
        type: "text",
        key: "responsibles",
        placeholder: translation.placeholder6,
        label: "responsibles",
        tooltipId: "responsibles-tooltip",
        tooltipContent: translation.responsiblestip,
      },
      {
        type: "select",
        key: "totalParticipants",
        placeholder: translation.placeholder7,
        label: "totalParticipants",
        tooltipId: "totalParticipants-tooltip",
        tooltipContent: translation.totalParticipantstip,
        options: Array.from({ length: 100 }, (_, i) => ({
          value: i + 1,
          name: (i + 1).toString(),
        })),
      },
      {
        type: "select",
        key: "country",
        placeholder: translation.placeholder8,
        label: "country",
        tooltipId: "country-tooltip",
        tooltipContent: translation.countrytip,
        options: countries.map((country) => ({
          value: country._id,
          name: country.name,
        })),
      },
      {
        type: "select",
        key: "language",
        placeholder: translation.placeholder9,
        label: "language",
        tooltipId: "language-tooltip",
        tooltipContent: translation.languagetip,
        options: languages.map((lang) => ({
          value: lang._id,
          name: lang.name,
        })),
      },
      {
        type: "date",
        key: "birthday",
        placeholder: translation.placeholder11,
        dateFormat: "yy",
        label: "birthday",
        tooltipId: "birthday-tooltip",
        tooltipContent: translation.birthdaytip
      },
      {
        type: "time",
        key: "duration",
        placeholder: translation.placeholder10,
        label: "duration",
        tooltipId: "duration-tooltip",
        tooltipContent: translation.durationtip
      },
      {
        type: "file",
        key: "videoFile",
        placeholder: translation.placeholder3,
        label: "videoFile",
        tooltipId: "videoFile-tooltip",
        tooltipContent: translation.videoFiletip,
        errors: [translation.error1, translation.error2],
      },
    ]);
  }, [languages, countries, globalLanguage]);

  const handleSubmit = async (data) => {
    try {
      const countryDoc = countries.find(
        (country) => country.name === data.country
      );
      const languageDoc = languages.find((lang) => lang.name === data.language);

      if (!countryDoc || !languageDoc) {
        toast.error("País ou idioma não encontrado.");
        return;
      }

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("ShortDescription", data.ShortDescription);
      formData.append("code", data.code);
      formData.append("context", data.context);
      formData.append("responsibles", data.responsibles);
      formData.append("totalParticipants", data.totalParticipants);
      formData.append("country", countryDoc._id);
      formData.append("language", languageDoc._id);
      formData.append("birthday", data.birthday);
      formData.append("duration", data.duration);

      if (data.videoFile) {
        formData.append("videoFile", data.videoFile);
      }

      createVideo(formData);
    } catch (error) {

      toast.error("Erro ao enviar dados");
    }
  };

  // Código para traduzir os títulos
  async function translateTitles() {
    const translatedTitles = await Promise.all(
      videos.map(async (video) => {
        return {
          ...video,
          title: await translateText(video.title, translateLanguage),
        };
      })
    );

    setAllVideos(translatedTitles);
  }

  const navigate = useNavigate();
  const [editVideo, setEditVideo] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const queryClient = useQueryClient();

  const [videoId, setVideoId] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleDelete = (id) => {
    setVideoId(id);
    setShowDeleteModal(true);
  };

  function handleEdit(video) {
    setVideoId(video._id);
    setEditVideo(video);
    setShowEditModal(true);
  }

  const { data: videos } = useGetVideos({
    onError: () => {},
  });
  const { mutate: createVideo, isPending } = useCreateVideos({
    onSuccess: () => {
      toast.success(translation.successToast);
      queryClient.invalidateQueries({
        queryKey: ["videos"],
      });
    },
    onError: (err) => {
      toast.error(TranslateToastError(globalLanguage, err.response.status));
    },
  });

  useEffect(() => {
    if (videos) {
      translateTitles();
    }
  }, [videos, globalLanguage]);

  return (
    <Container>
      <DivTitle>
        <Title>{translation.title1}</Title>
      </DivTitle>
      

      <Section>
        <FormSubmit
          inputs={inputs}
          onSubmit={handleSubmit}
          schema={validationSchema()}
          loading={isPending}
          buttonText={translation.button1}
        />
      </Section>
 

      <DivTitle margin="20px">
        <Title>{translation.title2}</Title>
      </DivTitle>

      <ContainerSearchBar>
        <SearchBar
          aria-label="Barra de pesquisa"
          placeholder={translation.placeholderSearch}
          value={searchValue}
          search={handleSearch}
        />
      </ContainerSearchBar>

      <SectionList>
        {allVideos // trocar para allVideos
          .filter((obj) =>
            obj.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((video) => (
            <CardVideo key={video.id}>
              <VideoTitle
                onClick={() => {
                  navigate(`/videos/${video.title}`, { state: video });
                }}
              >
                {video.title}
              </VideoTitle>
              <ListLine />
              <Buttons>
                <StyledEditOutlined onClick={() => handleEdit(video)} />
                <StyledDeleteOutlined
                  onClick={() => handleDelete(video?._id)}
                />
              </Buttons>
            </CardVideo>
          ))}
      </SectionList>

      <Modals>
        <ModalDeleteVideo
          openModal={showDeleteModal}
          closeModal={() => setShowDeleteModal(false)}
          id={videoId}
        />
        <ModalEditVideos
          modal={showEditModal}
          close={() => setShowEditModal(false)}
          id={videoId}
          video={editVideo}
        />
      </Modals>
    </Container>
  );
}
