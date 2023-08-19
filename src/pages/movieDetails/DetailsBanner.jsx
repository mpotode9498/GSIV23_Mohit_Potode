import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PosterFallback from "../../assets/no-poster.png";
import "./styleDetails.css";
import { fetchAPI } from "../../utils/fetchAPI";
import Wrapper from "../../components/wrapper/Wrapper";
import { toHoursAndMinutes } from "../../utils/Constants";

const DetailsBanner = ({ crew }) => {
  const [movieDetail, setMovieDetail] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getMovieDeails = async () => {
      setLoading(true);
      try {
        const response = await fetchAPI(`/movie/${id}`);
        setMovieDetail(response);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getMovieDeails();
  }, [id]);

  const { url } = useSelector((state) => state?.movies);
  const director = crew?.crew?.filter((f) => f.job === "Director");
  const cast = crew?.cast?.filter(
    (role) => role?.known_for_department === "Acting"
  );

  const formatRating = parseFloat(movieDetail?.vote_average).toFixed(1);

  const posterImage = movieDetail?.poster_path
    ? url?.backdrop + movieDetail?.poster_path
    : PosterFallback;

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!movieDetail && (
            <React.Fragment>
              <div className="content">
                <div className="left">
                  <img
                    className="posterImg"
                    src={posterImage}
                    alt="poster-img"
                  />
                </div>
                <div className="right">
                  <div className="title">
                    {`${movieDetail?.name || movieDetail?.title}`}
                    <span
                      style={{ color: "#FBBC04" }}
                    >{` (${formatRating})`}</span>
                  </div>
                  <div className="subtitle">{movieDetail?.tagline}</div>
                  <div className="info">
                    {movieDetail?.release_date && (
                      <div className="infoItem">
                        <span className="text bold">Release Date: {""}</span>
                        <span className="text">
                          {movieDetail?.release_date}
                        </span>
                      </div>
                    )}

                    {movieDetail?.runtime && (
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
                    <div className="heading">Description</div>
                    <div className="description">{movieDetail?.overview}</div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </>
      ) : (
        <Wrapper>
          <div className="loadingtext">
            <span>Loading ...</span>
          </div>
        </Wrapper>
      )}
    </div>
  );
};

export default DetailsBanner;
