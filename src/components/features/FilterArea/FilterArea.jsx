import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { useGlobalLanguage } from "../../../stores/globalLanguage";
import { getLanguages, getCountries, getVideosByParameters } from "../../../services/endpoints";  

import {
  FlagSelector,
  StyledForm,
  FlagSelectorSection,
  PickDateSection,
  PickTimeSection,
  SelectLanguageSection,
  TotalParticipantsSelectSection,
  Calendar,
  StyledSelect,
  StyledInput,
} from "./styles";
import { TranslateText } from "./translations";

export default function FilterArea({ onSubmit }) {
  const { handleSubmit, reset, register, control } = useForm();

  const [selectTotalParticipants, setSelectTotalParticipants] = useState(null);
  const [country, setCountry] = useState(null);
  const [language, setLanguage] = useState(null);
  const [duration, setDuration] = useState("");
  const [dates, setDates] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [countries, setCountries] = useState([]); 

  async function submitHandler(data) {
    const toFilter = {
      ...data,
      totalParticipants: selectTotalParticipants,
      country,
      language,
      duration,
      dates,
    };

    // Fazendo a requisição com GET ao invés de POST
    try {
      const videos = await getVideosByParameters(toFilter); 
      onSubmit(videos);  
      reset();  
      setCountry(null);
      setLanguage(null);
      setDuration("");
      setSelectTotalParticipants(null);
    } catch (error) {
      console.error("Erro ao buscar vídeos filtrados:", error);
    }
  }

  // Carregar as linguas do backend
  useEffect(() => {
    getLanguages()
      .then((languages) => {
        setLanguages(languages); 
      })
      .catch((error) => {
        console.error("Erro ao buscar idiomas:", error);
      });
  }, []);

  // Carregar os países do backend
  useEffect(() => {
    getCountries()
      .then((countries) => {
        setCountries(countries); 
      })
      .catch((error) => {
        console.error("Erro ao buscar países:", error);
      });
  }, []);

  
  const options = [
    { value: { min: 1, max: 5 }, label: "1 a 5" },
    { value: { min: 6, max: 10 }, label: "6 a 10" },
    { value: { min: 10, max: null }, label: "10+" },
  ];

  const { globalLanguage } = useGlobalLanguage();
  const translateText = TranslateText({ globalLanguage });

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)}>
      <TotalParticipantsSelectSection>
        <Controller
          name="totalParticipants"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <StyledSelect
              {...field}
              defaultValue={selectTotalParticipants}
              onChange={(e) => {
                setSelectTotalParticipants(e.value);
                field.onChange(e);
              }}
              isSearchable={false}
              placeholder={translateText.totalParticipantsPlaceholder}
              options={options}
            />
          )}
        />
      </TotalParticipantsSelectSection>

      <FlagSelectorSection>
        <Controller
          name="country"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FlagSelector
              {...field}
              selected={country}
              onSelect={(e) => {
               
                const selectedCountry = countries.find((c) => c.name === e);
                setCountry(selectedCountry ? selectedCountry._id : null); // Armazenar o ID
                field.onChange(e);
              }}
              countries={countries && countries.map((country) => country.name)} 
              customLabels={countries && countries.reduce((acc, country) => {
                acc[country.name] = country.name;
                return acc;
              }, {})}
              placeholder={translateText.countryPlaceholder}
            />
          )}
        />
      </FlagSelectorSection>

      <SelectLanguageSection>
        <Controller
          name="language"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <StyledSelect
              {...field}
              selected={language}
              onChange={(e) => {
                setLanguage(e);
                field.onChange(e);
              }}
              isSearchable={false}
              placeholder={translateText.languagePlaceholder}
              options={languages && languages.length > 0 ? languages.map((lang) => ({
                value: lang.name,  
                label: lang.name,  
              })) : []}  
            />
          )}
        />
      </SelectLanguageSection>

      <PickTimeSection>
        <Controller
          name="duration"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <StyledInput
              {...field}
              placeholder={translateText.durationPlaceholder}
              {...register("duration")}
              onChange={(e) => {
                setDuration(e.target.value);
                field.onChange(e.value);
              }}
              value={duration}
            />
          )}
        />
      </PickTimeSection>

      <PickDateSection>
        <Controller
          name="dates"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Calendar
              {...field}
              onChange={(dates) => {
                setDates(dates.value);
                field.onChange(dates.value);
              }}
              placeholder={translateText.calendarPlaceholder}
              readOnlyInput
              hideOnRangeSelection
              showButtonBar
              dateFormat="dd/mm/yy"
            />
          )}
        />
      </PickDateSection>

      <button type="submit">Aplicar Filtros</button>
    </StyledForm>
  );
}

FilterArea.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
