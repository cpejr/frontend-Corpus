import { useMemo, useState, useEffect } from "react";
import { useGetVideosByParameters } from "../../hooks/query/videos";
import {
  Container,
  Title,
  DivSelect,
  DivLine,
  ContainerSearchFilter,
  DivTitle,
  ContainerSearchBar,
  ButtonDiv,
} from "./Styles";
import { SearchBar } from "../../components";
import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";
import Card from "../../components/features/Card/Card";
import { useNavigate } from "react-router-dom";

import Pagination from "../../components/features/Pagination/Pagination";
import FilterArea from "../../components/features/FilterArea/FilterArea";

export default function Videos() {
  const [searchValue, setSearchValue] = useState("");
  const [filters, setFilters] = useState({
    totalParticipants: null,
    country: null,
    language: null,
    duration: null,
    date: null,
  });
  const { data: videos = [] } = useGetVideosByParameters({
    filters,
  });

  const handleFilterSubmit = (data) => {
    setFilters(data);
  };

  const SearchBarFilter = useMemo(() => {
    return videos.filter((video) => {
      const title = video.title?.toLowerCase() || "";
      const shortDescription = video.ShortDescription?.toLowerCase() || "";
      const code = video.code?.toLowerCase() || "";
      const context = video.context?.toLowerCase() || "";
      const responsibles = video.responsibles?.toLowerCase() || "";
      const search = searchValue.toLocaleLowerCase();

      return (
        title.includes(search) ||
        shortDescription.includes(search) ||
        code.includes(search) ||
        context.includes(search) ||
        responsibles.includes(search)
      );
    });
  }, [videos, searchValue]);

  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(videos.length / itemsPerPage)
  );

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(0);
  };

  const navigate = useNavigate();
  const paginatedVideos = SearchBarFilter.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  useEffect(() => {
    setTotalPages(Math.ceil(SearchBarFilter.length / itemsPerPage));
  }, [SearchBarFilter.length]);
  return (
    <Container>
      <DivTitle>
        <Title>{translation.title}</Title>
      </DivTitle>

      <ContainerSearchFilter>
        <ContainerSearchBar>
          <SearchBar
            aria-label="Barra de pesquisa"
            placeholder={translation.placeholder}
            value={searchValue}
            search={handleSearch}
            color="#d4a373"
          />
        </ContainerSearchBar>{" "}
        <DivSelect>
          <FilterArea onSubmit={handleFilterSubmit} />
        </DivSelect>
      </ContainerSearchFilter>

      {paginatedVideos.map((video) => (
        <DivLine key={video._id}>
          <Card
          archives={video.archives}
            context={video.context}
            responsibles={video.responsibles}
            code={video.code}
            country={video.country}
            language={video.language}
            duration={video.duration}
            date={video.date}
            totalParticipants={video.totalParticipants}
            ShortDescription={video.ShortDescription}
            textButton={translation.buttonCard}
            event={() => {
              navigate(`/videos/${video.title}`, { state: video });
            }}
            title={video.title}
          />
        </DivLine>
      ))}
      <ButtonDiv>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          setCurrentPage={setCurrentPage}
        />
      </ButtonDiv>
    </Container>
  );
}
