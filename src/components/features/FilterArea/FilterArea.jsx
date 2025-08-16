import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { useGlobalLanguage } from "../../../stores/globalLanguage";
import {
  getLanguages,
  getCountries,
  getVideosByParameters,
} from "../../../services/endpoints";

import {
  StyledForm,
  FlagSelectorSection,
  PickDateSection,
  PickTimeSection,
  SelectLanguageSection,
  TotalParticipantsSelectSection,
  Calendar,
  StyledSelect,
  StyledInput,
  ButtonFormFilter,
} from "./styles";
import { TranslateText } from "./translations";
import { localeMap } from "../../common/Calendar/locales";

export default function FilterArea({ onSubmit }) {
  const { handleSubmit, reset, control } = useForm();

  const { globalLanguage } = useGlobalLanguage();
  const locale = localeMap[globalLanguage] || "en-US";

  //const [selectTotalParticipants, setSelectTotalParticipants] = useState(null);
  //const [country, setCountry] = useState([]);
  //const [language, setLanguage] = useState([]);
  //const [duration, setDuration] = useState("");
  //const [dates, setDates] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [countries, setCountries] = useState([]);

  const translateText = TranslateText({ globalLanguage });

  /*  const options = [
    { value: { min: 1, max: 5 }, label: "1 a 5" },
    { value: { min: 6, max: 10 }, label: "6 a 10" },
    { value: { min: 10, max: null }, label: "10+" },
  ]; */
  const options = [
    { value: "1-5", label: "1 a 5" },
    { value: "6-10", label: "6 a 10" },
    { value: "10-mais", label: "10+" },
  ];
  useEffect(() => {
    async function fetchOptions() {
      try {
        const countries = await getCountries();
        const languages = await getLanguages();

        setCountries(countries);
        setLanguages(languages);
      } catch (error) {
        console.error("Erro ao buscar países ou idiomas:", error);
      }
    }

    fetchOptions();
  }, []);

  async function submitHandler(data) {
    const toFilter = {
      totalParticipants: data.totalParticipants.value,
      country: data.country.map((c) => c.value),
      language: data.language.map((l) => l.value),
      duration: data.duration,
      dates: data.dates,
    };

    try {
      console.log("Filtros usados:", toFilter);

      const videos = await getVideosByParameters(toFilter);
      onSubmit(toFilter);
      reset();
      //setCountry([]);
      //setLanguage([]);
      //setDuration("");
      //setSelectTotalParticipants(null);
    } catch (error) {
      console.error("Erro ao buscar vídeos filtrados:", error);
    }
  }

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
              //defaultValue={selectTotalParticipants}
              /* onChange={(e) => {
                setSelectTotalParticipants(e.value);
                field.onChange(e);
              }} */
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
          defaultValue={[]}
          render={({ field }) => (
            <StyledSelect
              {...field}
              isMulti
              // value={country}
              /*    onChange={(selected) => {
                setCountry(selected);
                field.onChange(selected);
              }} */
              isSearchable={true}
              placeholder={translateText.countryPlaceholder}
              options={countries.map((country) => ({
                value: country._id,
                label: country.name,
              }))}
            />
          )}
        />
      </FlagSelectorSection>

      <SelectLanguageSection>
        <Controller
          name="language"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <StyledSelect
              {...field}
              isMulti
              //value={language}
              /*onChange={(selected) => {
                setLanguage(selected);
                field.onChange(selected);
              }}*/
              isSearchable={true}
              placeholder={translateText.languagePlaceholder}
              options={languages.map((l) => ({
                value: l._id,
                label: l.name,
              }))}
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
              /* {...register("duration")}
              onChange={(e) => {
                setDuration(e.target.value);
                field.onChange(e.target.value);
              }}
              value={duration} */
              type="number"
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
              /*onChange={(dates) => {
                setDates(dates.value);
                field.onChange(dates.value);
              }} */
              appendTo="self"
              placeholder={translateText.calendarPlaceholder}
              readOnlyInput
              hideOnRangeSelection
              showButtonBar
              dateFormat="yy"
              locale={locale}
            />
          )}
        />
      </PickDateSection>

      <ButtonFormFilter type="submit">Aplicar Filtros</ButtonFormFilter>
    </StyledForm>
  );
}

FilterArea.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
