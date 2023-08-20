import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PosterFallback from "../../assets/no-poster.png";
import "./style.css";

const MovieListingCard = ({ data }) => {
  const { url } = useSelector((state) => state?.movies);

  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url?.backdrop + data?.poster_path
    : PosterFallback;

  return (
    <div className="movieCard" onClick={() => navigate(`/movie/${data?.id}`)} data-testid='moviecard'>
      <div className="posterBlock">
        <img className="posterImgList" src={posterUrl} alt="poster_image" />
      </div>
      <div className="textBlock">
        <span>{data?.title}</span>
        <span className="rating">({data?.vote_average}/10)</span>
      </div>
      <div className="movieDesc">
        <span>{data?.overview}</span>
      </div>
    </div>
  );
};

export default MovieListingCard;
