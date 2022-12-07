import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import MovieSeats from "./MovieSeats"

export default function MovieSeatsPage() {

    const [seats, setSeats] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([])

    function selectSeat(film) { 
      
        if(!film.isAvailable) {
            return
        }

        if(selectedSeats.includes(film.id)) {
            return
        }
        const selectSeats = [...selectedSeats, film.id]
        console.log(selectSeats)
        setSelectedSeats(selectSeats)

    }
    

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/showtimes/1/seats")
        promise.then(resp => setSeats(resp.data.seats))
    }, [])



    return (
        <>
            <FilmSeats>
              <MovieSeats seats={seats} selectedSeats={selectedSeats} selectSeat={selectSeat} />
            </FilmSeats>
            <Inputs>
                <div>
                    <p>Nome do comprador:</p>
                    <input placeholder="Digite seu nome..." />
                </div>
                <div>
                    <p>Nome do comprador:</p>
                    <input placeholder="Digite seu nome..." />
                </div>
            </Inputs>
            <ReserveSeats>Reservar assento(s)</ReserveSeats>

        </>

    )
}


const FilmSeats = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
flex-wrap: wrap;
width: 375px;
margin: auto;
   

`







const Inputs = styled.div `
    width: 375px;
    margin: auto;
    margin-top:50px;
        div {
            margin-bottom: 20px;
            margin-left: 25px;
           
        }
        p {
            color:#293845;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            margin-bottom: 5px;

        }
        input {
            width: 327px;
            height: 51px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 3px;
            padding: 10px;
        }
        input::placeholder {
            font-size: 18px;
            font-family: 'Roboto';
            font-style: italic;
            color: #AFAFAF
        }
`

const ReserveSeats = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    border-style: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 50px;
    cursor: pointer;
`