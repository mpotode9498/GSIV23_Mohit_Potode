import React ,{useState, useEffect} from 'react';
import { SearchResultsPage } from './Styled';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchAPI } from '../../utils/fetchAPI';
import MovieListingCard from '../../components/movieListingCard/MovieListingCard';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from '../../store/homeSlice';
import './style.css';


// const styl = `@media screen and (max-width: 768px) {
//   width: 300
// }`

const SearchResultPage = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const { url } = useSelector((state)=>state.home);

  // console.log(url, '-----------------+++++++++++++++++++++++++=')

  const { query } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    }
    getUpcomingMoviesForNextPage();
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    getUpcomingMovies();
  },[query])
  
  const getUpcomingMovies = async () =>{
    const upcomingMovies =  await fetchAPI('/movie/upcoming', 'primary_release_date.asc');
    setResponse(upcomingMovies);
    setPageNum((prev)=>prev+1)
    setLoading(false)
    
    console.log(upcomingMovies, '-----')
  }

  const getUpcomingMoviesForNextPage = async () => {
    // setLoading(true);
    const upcomingMovies =  await fetchAPI(`/movie/upcoming?primary_release_date.asc&page=${pageNum}`)
        if(response?.results){
          setResponse({
            ...response, results:[...response?.results, ...upcomingMovies.results]
          })
        }else{
          setResponse(upcomingMovies)
        }
        setPageNum((prev)=>prev+1);
        // console.log(upcomingMovies, '--+++++++++++---')
  }

  return (
    <div className='searchResultsPage'>
      <h1>SRP PAGE CONTENT</h1>
        <div className='srpcontent'>
        {response?.results?.map((movie) => { 
        return <MovieListingCard data={movie}/>} )}
        </div>
    </div>
  )
}

export default SearchResultPage
