import styled from "styled-components";
import Movie from "../components/Movie";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MoviesContainer() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        .then(res => setMovies(res.data))
        .catch(err => console.log(err.response.data))

    }, [])
   // console.log(movies)

    if (movies.lenth === 0) {
        return (<div>Carregando...</div>)
    }

    if (movies) {
        return (
            <MoviePage>
                {movies.map((movie) => <Movie movie={movie} key={movie.id}/>)}
            </MoviePage>
        )
    }


}

const MoviePage = styled.div`
    display: flex;
    margin: auto;
    justify-content:center;
    flex-wrap: wrap;
    gap: 38px;
    margin-bottom: 20px;
    
   
`