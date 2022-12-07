import styled from "styled-components";
import Movie from "./Movie";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MoviesContainer() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        promise.then(res => setMovies(res.data))
        console.log(movies)
    }, [])
   
    
    return(
        <MoviePage>
            {movies.map((filme) =>  <Movie filme={filme} />)}
        </MoviePage>
    )
}

const MoviePage = styled.div`
    display: flex;
    margin: auto;
    justify-content: flex-start;
    margin-left: 4em;
    gap: 38px;
    flex-wrap: wrap;
    padding: 25px;
`