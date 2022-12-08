import styled from "styled-components";
import Movie from "../components/Movie";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MoviesContainer() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        promise.then(res => setMovies(res.data))
        console.log(movies)
        
    }, [])
    console.log(movies)
   
    if(movies) {
        return(
            <MoviePage>
                {movies.map((movie) =>  <Movie movie={movie}/>)}
            </MoviePage>
        )
    }
    
   
}

const MoviePage = styled.div`
    display: flex;
    margin: auto;
    justify-content: flex-start;
    margin-left: 0.8em;
    gap: 30px;
    flex-wrap: wrap;
    padding: 25px;
`