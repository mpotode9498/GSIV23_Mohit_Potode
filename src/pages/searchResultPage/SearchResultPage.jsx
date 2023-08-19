import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../../utils/fetchAPI";
import MovieListingCard from "../../components/movieListingCard/MovieListingCard";
import "./style.css";
import Wrapper from "../../components/wrapper/Wrapper";

const SearchResultPage = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const { query } = useParams();
  
  const getSearchMovieResults = async () => {
    setLoading(true);
    const searchMovieResults = await fetchAPI(
      `/search/multi?query=${query}&page=${pageNum}` 
    );
    setResponse(searchMovieResults);
    setPageNum((prev) => prev + 1);
    setLoading(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    getUpcomingMoviesForNextPage();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    query ? getSearchMovieResults() : getUpcomingMovies();
  }, [query]);

  const getUpcomingMovies = async () => {
    const upcomingMovies = await fetchAPI(
      "/movie/upcoming",
      "primary_release_date.asc"
    );
    setResponse(upcomingMovies);
    setPageNum((prev) => prev + 1);
    setLoading(false);
  };

  const getUpcomingMoviesForNextPage = async () => {
    // setLoading(true);
    const upcomingMovies = await fetchAPI(
      `/movie/upcoming?primary_release_date.asc&page=${pageNum}`
    );
    
    if (response?.results) {
      setResponse({
        ...response,
        results: [...response?.results, ...upcomingMovies?.results],
      });
     // setLoading(false);
    } else {
      setResponse(upcomingMovies);
      // setLoading(false);
    }
    setPageNum((prev) => prev + 1);
  };

  return (
    <>
      {loading && (
        <Wrapper>
          <div className="loadingtext">Loading ...</div>
        </Wrapper>
      )}
      {response?.results?.length > 0 && !loading && (
        <>
          <h2 style={{ textAlign: "center" }}>Latest Upcoming Movies</h2>
          <div className="searchResultsPage">
            <div className="srpcontent">
              {response?.results?.map((movie) => {
                return <MovieListingCard data={movie} />;
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SearchResultPage;
