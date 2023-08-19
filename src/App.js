import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getConfiguration } from "./store/movieSlice";
import SearchResultPage from "./pages/searchResultPage/SearchResultPage";
import { fetchAPI } from "./utils/fetchAPI";
import Navbar from "./components/header/Navbar";
import MovieDetailsPage from "./pages/movieDetails/MovieDetailsPage";
import Wrapper from "./components/wrapper/Wrapper";
import Error from "./pages/errorPage/Error";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const res = await fetchAPI("/configuration");

      const url = {
        backdrop: res?.images?.secure_base_url + "original", // 'original', "w300",
      };
      dispatch(getConfiguration(url));
    }
    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<SearchResultPage />} />
          <Route path="/search/:query" element={<SearchResultPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
      </Wrapper>
    </div>
  );
};

export default App;
