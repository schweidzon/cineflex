import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import MovieSeats from "../components/MovieSeats"
import { useNavigate, useParams } from "react-router-dom"

export default function MovieSeatsPage({ selectedSeats, setSelectedSeats, film, setFilm, compradores, setCompradores }) {

    const { idSessao } = useParams()
    const navigate = useNavigate()
    const [seatsId, setSeatsId] = useState([])
    





    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then(resp => setFilm(resp.data))
            .catch((err) => console.log(err.response.data))
    })



    function selectSeat(film, i) {
        console.log(compradores)
        console.log(selectedSeats)


        if (!film.isAvailable) {
            alert("Esse assento não está disponível")
            return
        }

        if (selectedSeats.includes(film.name)) {
            if (window.confirm("Tem certeza que gostaria de remove o assento?")) {
                setSelectedSeats(selectedSeats.filter(f => f !== film.name))
                setCompradores(compradores.filter(c => c.idAssentos !== film.id))
                return
            } else {
                return
            }

        }

        let newBuyer = { idAssento: film.id, nome: '', cpf: '' }
        setCompradores([...compradores, newBuyer])


        const selectSeats = [...selectedSeats, film.name]
        const seatsIds = [...seatsId, film.id]
        setSeatsId(seatsIds)
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



        const obj = { ids: seatsId, compradores: compradores }
        axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", obj)
            .then(() => {
                navigate("/sucesso")
                console.log(obj)
            })
    }


    if (!film) {
        return (<div>Carregando...</div>)
    }

    const handleInput = (e, i) => {
        const { name, value } = e.target
        let novosCompradores = [...compradores]
        novosCompradores[i][name] = value
        setCompradores(novosCompradores)

    }






    if (film) {
        return (
            <>
                <FilmSeats>
                    <MovieSeats seats={film.seats} selectedSeats={selectedSeats} selectSeat={selectSeat} />
                </FilmSeats>
                <InputsContainer onSubmit={reserveSeats}>
                    {compradores.map((item, i) =>
                        <>
                            <div key={item}>
                                <label htmlFor="name">Nome do comprador:</label>
                                <input required value={item.nome} onChange={(e) => handleInput(e, i)} name={`nome`}
                                    type="text" data-test="client-name" placeholder="Digite seu nome..." />
                            </div>
                            <div>
                                <label htmlFor="cpf">CPF do comprador:</label>
                                <input required value={item.cpf} type="number" onChange={(e) => handleInput(e, i)} name={`cpf`} data-test="client-cpf" placeholder="Digite seu nome..." />
                            </div>
                        </>
                    )}
                    <ReserveSeats type="submit" data-test="book-seat-btn" >Reservar assento(s)</ReserveSeats>
                </InputsContainer>





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
            margin-top: 10px;
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
    margin-top: 60px;
    margin-bottom: 40px;
    cursor: pointer;
`

