import PropTypes from "prop-types";
//import Button from "../../../common/Button/Button";
//import { colors } from "../../../../styles/stylesVariables";
import FormSubmit from "../../FormSubmit/FormSubmit";
import {
  Container,
  Message,
  ModalStyle,
  FormDiv,

  //Calendar,
} from "./Styles";
import { useGetCountries } from "../../../../hooks/query/country";
import { useGetLanguages } from "../../../../hooks/query/language";
import { useState, useEffect } from "react";
import { useGlobalLanguage } from "../../../../stores/globalLanguage";
import { TranslateText } from "./translations";
import { useUpdateVideos } from "../../../../hooks/query/videos";
//import formatDate from "../../../../utils/formatDate";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function ModalEditVideos({ video, modal, close, id }) {
  const queryClient = useQueryClient();
  //const [date, setDate] = useState();
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);
  const { data: languagesData } = useGetLanguages();
  const { data: countryData } = useGetCountries();
  const [inputs, setInputs] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [countries, setCountries] = useState([]);

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
        value: video?.title,
      },
      {
        type: "text",
        key: "ShortDescription",
        placeholder: translation.placeholder2,
        label: "ShortDescription",
        value: video?.ShortDescription,
      },
      {
        type: "text",
        key: "context",
        placeholder: translation.placeholder3,
        label: "context",
        value: video?.context,
      },
      {
        type: "text",
        key: "responsibles",
        placeholder: translation.placeholder4,
        label: "responsibles",
        value: video?.responsibles,
      },
      {
        type: "select",
        key: "totalParticipants",
        placeholder: translation.placeholder5,
        label: "totalParticipants",
        value: video?.totalParticipants,
        options: Array.from({ length: 100 }, (_, i) => ({
          value: i + 1,
          name: (i + 1).toString(),
        })),
      },
      {
        type: "select",
        key: "country",
        placeholder: translation.placeholder6,
        label: "country",
        value: video?.country[0]?.name,
        options: countries.map((country) => ({
          value: country._id,
          name: country.name,
        })),
      },
      {
        type: "select",
        key: "language",
        placeholder: translation.placeholder7,
        label: "language",
        value: video?.language[0]?.name,
        options: languages.map((lang) => ({
          value: lang._id,
          name: lang.name,
        })),
      },
      {
        type: "date",
        key: "birthday",
        placeholder: translation.placeholder9,
        dateFormat: "yy",
        defaultValue: new Date(video?.birthday),
        label: "birthday",
      },
      {
        type: "time",
        key: "duration",
        placeholder: translation.placeholder8,
        label: "duration",
        value: video?.duration,
      },
    ]);
  }, [languages, countries, globalLanguage, video]);

  const { mutate: updateVideos } = useUpdateVideos({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["videos"],
      });
      queryClient.invalidateQueries({
        queryKey: ["transcription"],
      });
      toast.success(translation.successToast);
    },
  });

  const handleSubmit = (data) => {
  const selectedCountry = countries.find(
    (country) => country.name === data.country
  );
  const selectedLanguage = languages.find(
    (lang) => lang.name === data.language
  );

  const body = {
    ...data,
    country: selectedCountry ? [selectedCountry._id] : [],
    language: selectedLanguage ? [selectedLanguage._id] : [],
  };

  if (data.birthday && data.birthday !== "undefined" && data.birthday !== "null") {
    body.birthday = new Date(data.birthday);
  } else {
    delete body.birthday;
  }

  updateVideos({ _id: id, body });
  close();
};





  return (
    <Container>
      <ModalStyle
        open={modal}
        onCancel={close}
        centered
        destroyOnClose
        footer={null}
      >
        <Message>Editar Informações</Message>

        <FormDiv>
          <FormSubmit
            inputs={inputs}
            onSubmit={handleSubmit}
            loading={false}
            buttonText="Enviar"
          />
        </FormDiv>
      </ModalStyle>
    </Container>
  );
}

ModalEditVideos.propTypes = {
  id: PropTypes.string.isRequired,
  video: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  transformArrayItems: PropTypes.func.isRequired,
  updateVideos: PropTypes.func.isRequired,
};
