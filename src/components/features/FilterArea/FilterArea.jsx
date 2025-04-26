import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { useGlobalLanguage } from "../../../stores/globalLanguage";
import { getLanguages, getCountries } from "../../../services/endpoints";
import {
  StyledForm,
  TotalParticipantsSelectSection,
  FlagSelectorSection,
  SelectLanguageSection,
  PickTimeSection,
  PickDateSection,
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

  const [countryOptions, setCountryOptions] = useState([]);
  const [languageOptions, setLanguageOptions] = useState([]);

  const { globalLanguage } = useGlobalLanguage();
  const translateText = TranslateText({ globalLanguage });

  useEffect(() => {
    async function fetchOptions() {
      try {
        const countries = await getCountries();
        const languages = await getLanguages();

        setCountryOptions(
          countries.map((country) => ({
            value: country.name, // envia o nome
            label: country.name, // mostra o nome
          }))
        );

        setLanguageOptions(
          languages.map((language) => ({
            value: language.name, // envia o nome
            label: language.name, // mostra o nome
          }))
        );
      } catch (error) {
        console.error("Erro ao buscar países ou idiomas:", error);
      }
    }

    fetchOptions();
  }, []);

  const submitHandler = (data) => {
    const toFilter = {
      ...data,
      totalParticipants: selectTotalParticipants,
      country,
      language,
      duration,
      dates,
    };

    reset();
    setCountry(null);
    setLanguage(null);
    setDuration("");
    setSelectTotalParticipants(null);
    setDates(null);
    onSubmit(toFilter);
  };

  const participantOptions = [
    { value: { min: 1, max: 5 }, label: "1 a 5" },
    { value: { min: 6, max: 10 }, label: "6 a 10" },
    { value: { min: 10, max: null }, label: "10+" },
  ];

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)}>
      {/* Total de Participantes */}
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
              options={participantOptions}
              placeholder={translateText.totalParticipantsPlaceholder}
              isSearchable={false}
            />
          )}
        />
      </TotalParticipantsSelectSection>

      {/* País */}
      <FlagSelectorSection>
        <Controller
          name="country"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <StyledSelect
              {...field}
              defaultValue={country}
              onChange={(e) => {
                setCountry(e.value);
                field.onChange(e);
              }}
              options={countryOptions}
              placeholder={translateText.countryPlaceholder}
              isSearchable
            />
          )}
        />
      </FlagSelectorSection>

      {/* Língua */}
      <SelectLanguageSection>
        <Controller
          name="language"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <StyledSelect
              {...field}
              defaultValue={language}
              onChange={(e) => {
                setLanguage(e.value);
                field.onChange(e);
              }}
              options={languageOptions}
              placeholder={translateText.languagePlaceholder}
              isSearchable
            />
          )}
        />
      </SelectLanguageSection>

      {/* Duração */}
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
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value);
                field.onChange(e.target.value);
              }}
            />
          )}
        />
      </PickTimeSection>

      {/* Datas */}
      <PickDateSection>
        <Controller
          name="dates"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Calendar
              {...field}
              value={dates}
              onChange={(e) => {
                setDates(e.value);
                field.onChange(e.value);
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
