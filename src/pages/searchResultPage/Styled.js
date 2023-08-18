import styled from 'styled-components';

export const SearchResultsPage = styled.div`{
    min-height: 700px;
    padding-top: 100px;
}`

export const ResultNotFound = styled.div`{
    font-size: 24px;
    color: var(--black-light);
}`

export const pageTitle = styled.div`{
    font-size: 24px;
    line-height: 34px;
    color: white;
    margin-bottom: 25px;
}`

export const content = styled.div`{
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
    margin-bottom: 50px;
}`

export const MovieCard = styled.div`{   
        margin-bottom: 20px;
}`

export const movieList = styled.div`{
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
    margin-bottom: 50px;
}`;