import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import MovieSeats from "../components/MovieSeats"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function MovieSeatsPage({ selectedSeats, setSelectedSeats, film, setFilm, name, setName, cpf, setCpf }) {

    const { idSessao } = useParams()
    const navigate = useNavigate()
    const [seatsId, setSeatsId] = useState([])

    console.log(name)
    console.log(cpf)


    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then(resp => setFilm(resp.data))
            .catch((err) => console.log(err.response.data))
    }, [])



    function selectSeat(film) {
        console.log(film)
        if (!film.isAvailable) {
            alert("Esse assento não está disponível")
        }

        if (selectedSeats.includes(film.name)) {
            setSelectedSeats(selectedSeats.filter(f => f !== film.name))
            return

        }
        const selectSeats = [...selectedSeats, film.name]
        const seatsIds = [...seatsId, film.id]
        setSeatsId(seatsIds)
        console.log(selectSeats)
        const selectSeatsInOrder = selectSeats.sort(function (a, b) {
            return a - b
        })
        setSelectedSeats(selectSeatsInOrder)

    }

    function reserveSeats(e) {
        e.preventDefault()
        if (selectedSeats.length === 0) {
            alert('Selecione pelo menos uma cadeira')
            return
        }

        if (cpf.length !== 11) {
            alert('Seu cpf deve ter 11 dígitos')
            return
        }

        const obj = { ids: seatsId, name, cpf }
        axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", obj)
            .then(() => {
                navigate("/sucesso")
                console.log(obj)
            })

    }


    if (!film) {
        return (<div>Carregando...</div>)
    }




    console.log(film)

    if (film) {
        return (
            <>
                <FilmSeats>
                    <MovieSeats seats={film.seats} selectedSeats={selectedSeats} selectSeat={selectSeat} />
                </FilmSeats>
                <InputsContainer onSubmit={reserveSeats}>
                    <div>
                        <label htmlFor="name">Nome do comprador:</label>
                        <input onChange={(e) => setName(e.target.value)} id="name" data-test="client-name" placeholder="Digite seu nome..." />
                    </div>
                    <div>
                        <label htmlFor="cpf">Nome do comprador:</label>
                        <input onChange={(e) => setCpf(e.target.value)} id="cpf" data-test="client-cpf" placeholder="Digite seu nome..." />
                    </div>
                </InputsContainer>

                <ReserveSeats data-test="book-seat-btn" onClick={reserveSeats}>Reservar assento(s)</ReserveSeats>




            </>

        )

    }



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

const StyledLink = styled(Link)`
text-decoration:none;`







const InputsContainer = styled.form`
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

