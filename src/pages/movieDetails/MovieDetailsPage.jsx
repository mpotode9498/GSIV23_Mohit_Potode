import React, { useEffect, useState } from "react";
import "./styleDetails.css";
import { useParams } from "react-router-dom";
import DetailsBanner from "./DetailsBanner";
import { fetchAPI } from "../../utils/fetchAPI";;

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [creditData, setCreaditData] = useState();

  useEffect(() => {
    async function credits() {
      const res = await fetchAPI(`/movie/${id}/credits`);
      setCreaditData(res);
      console.log(res);
    }
    credits();
  }, [id]);

  return <DetailsBanner crew={creditData} />;
};

export default MovieDetailsPage;
