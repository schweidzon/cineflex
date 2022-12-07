import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default function MovieSeats() {

    const [seats, setSeats] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/showtimes/1/seats")
        promise.then(resp => setSeats(resp.data.seats))
    }, [])

    function selectSeat(seat) {
        const selectSeats = [...selectedSeats, seat]
        console.log(selectSeats)
        setSelectedSeats(selectSeats)

    }
   
    return (
        <FilmSeats>
            {seats.map((film) =>
                <Seat selectedSeats={selectedSeats.includes(film.id)} isAvailable={film.isAvailable} onClick={() => selectSeat(film.id)}>
                    {film.id}
                </Seat>)}
        </FilmSeats>
    )
}


const FilmSeats = styled.div `
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
flex-wrap: wrap;
width: 375px;
margin: auto;
   

`

const Seat = styled.button `
        border: 1px solid #808F9D;
        border-radius: 12px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        min-width: 26px;
        min-height: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 25px;
        background-color: ${props => !props.isAvailable ?  "#FBE192" : props.selectedSeats ? "#1AAE9E" : "#C3CFD9"};
        cursor: pointer;
`