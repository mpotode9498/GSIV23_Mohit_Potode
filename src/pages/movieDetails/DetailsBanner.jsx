import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./styleDetails.css";
import { fetchAPI } from "../../utils/fetchAPI";

// import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
// import useFetch from "../../../hooks/useFetch";
// import Genres from "../../../components/genres/Genres";
// import CircleRating from "../../../components/circleRating/CircleRating";
// import Img from "../../../components/lazyLoadImage/img";
// import PosterFallback from "../../../assets/no-poster.png";
// import { PlayIcon } from "../Playbtn";
// import VideoPopup from "../../../components/videoPopup/VideoPopup";

const DetailsBanner = ({ crew }) => {
  //states create fro video popup
  const [movieDetail, setMovieDetail] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getMovieDeails = async () => {
      const response = await fetchAPI(`/movie/${id}`);
      setMovieDetail(response);
    };

    getMovieDeails();
  }, [id]);

  // const {data, loading} = getMovieDeails();

  const { url } = useSelector((state) => state.home);
  console.log(crew, "------------", url?.backdrop + movieDetail?.backdrop);
  //  const _genres = data?.genres?.map((g)=>g.id);

    const director = crew?.crew?.filter((f)=> f.job === "Director");
    const cast = crew?.cast?.filter((role) => role?.known_for_department === 'Acting');

  //  const writer = creditData?.crew?.filter((f)=>f.job === "Screenplay" || f.job === "Story" || f.job === "Writer");

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner">
      {/* {!loading ? ( */}
      <>
        {!!movieDetail && (
          <React.Fragment>
            <div className="content">
              <div className="left">
                <img
                  className="posterImg"
                  src={url?.backdrop + movieDetail?.poster_path}
                  alt=""
                />
              </div>
              <div className="right">
                <div className="title">
                  {`${movieDetail.name || movieDetail.title} (${
                    movieDetail?.vote_average
                  })`}
                </div>
                <div className="subtitle">{movieDetail?.tagline}</div>x
                <div className="info">
                  {movieDetail.release_date && (
                    <div className="infoItem">
                      <span className="text bold">Release Date: {""}</span>
                      <span className="text">{movieDetail?.release_date}</span>
                    </div>
                  )}

                  {movieDetail.runtime && (
                    <div className="infoItem">
                      <span className="text bold">Runtime: {""}</span>
                      <span className="text">
                        {toHoursAndMinutes(movieDetail?.runtime)}
                      </span>
                    </div>
                  )}

                  {director?.length > 0 && (
                    <div className="infoItem">
                      <span className="text bold">Director: </span>
                      <span className="text">
                        {director?.map((d, i) => (
                          <span key={i}>
                            {d.name}
                            {director.length - 1 !== i && ", "}
                          </span>
                        ))}
                      </span>
                    </div>
                  )}
                </div>
                <div className="info">
                 {cast?.length > 0 && (
                    <div className="infoItem">
                      <span className="text bold">Cast: </span>
                      <span className="text">
                        {cast?.map((actor, index) => (
                          <span key={index}>
                            {actor.name}
                            {cast.length - 1 !== index && ", "}
                          </span>
                        ))}
                      </span>
                    </div>
                  )}
                </div>

                <div className="overview">
                  <div className="heading">Overview</div>
                  <div className="description">{movieDetail?.overview}</div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </>
      {/* // ) : (
            //     <div className="detailsBannerSkeleton">
            //         {/* <ContentWrapper> */}
      {/* <div className="left skeleton"></div>
                         <div className="right">
                             <div className="row skeleton"></div>
                             <div className="row skeleton"></div>
                             <div className="row skeleton"></div>
                             <div className="row skeleton"></div>
                             <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div> */}
      {/* </ContentWrapper> */}
      {/* </div>
            // )} */}
    </div>
  );
};

export default DetailsBanner;
