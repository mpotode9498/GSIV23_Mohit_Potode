import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './style.css';
// import Img from "../lazyLoadImage/img";
// import CircleRating from "../circleRating/CircleRating";
// import Genres from "../genres/Genres";
// import PosterFallback from "../../assets/no-poster.png";

const MovieListingCard = ({ data }) => {
//    console.log(data, '....')
    const { url } = useSelector((state) => state.home);
    
    const navigate = useNavigate();
    // const posterUrl = data.poster_path ? url.poster + data.poster_path : PosterFallback;
    const posterUrl = url?.backdrop + data?.poster_path;

    return (
        <div className="movieCard" onClick={() => navigate(`/movie/${data?.id}`)}>
            <div className="posterBlock">
                <img className="posterImg" src={posterUrl} alt='poster_image'/>
            </div>
            <div className="textBlock">
                <span style={{marginInline: '20px'}} >{data?.title}</span>
                <span className="rating">
                    {data?.vote_average}
                </span>
            </div>
        </div>

        
    );
};

export default MovieListingCard;
