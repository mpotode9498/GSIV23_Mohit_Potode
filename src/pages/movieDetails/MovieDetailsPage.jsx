import React, { useEffect, useState } from 'react';
import "./styleDetails.css";
import { useParams } from 'react-router-dom';
import DetailsBanner from './DetailsBanner';
import { fetchAPI } from '../../utils/fetchAPI';
// import Cast from './cast/Cast';
// import VideosSection from './videosSection/VideosSection';
// import Similar from './carousels/Similar';
// import Recommendation from './carousels/Recommendations';

const MovieDetailsPage = () => {

   const { id } = useParams();
   const [creditData, setCreaditData] = useState();
  
   //const {data: credits, loading: creditsLoading} = fetchAPI(`/movie/${id}/credits`);

   useEffect(() => {
    async function credits () {
     const res =  await fetchAPI(`/movie/${id}/credits`)
     setCreaditData(res);
     console.log(res)
    }
    credits();
   }, [id]);

   //console.log(credits, 'useparam')
  return (
    <div>
      <DetailsBanner crew={creditData} />
      {/* <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/> */}
    </div>
  )
}

export default MovieDetailsPage;
