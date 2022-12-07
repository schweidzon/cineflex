import styled from "styled-components";
import Movie from "./Movie";
import axios from "axios";
import { useEffect, useState } from "react";
export default function MoviesContainer() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        promise.then(res => setMovies(res.data))
    }, [])
    
    return(
        <MoviePage>
            {movies.map((flime) =>  <Movie movies={movies} />)}
            
        </MoviePage>
    )
}

const MoviePage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 38px;
    padding: 25px;
`