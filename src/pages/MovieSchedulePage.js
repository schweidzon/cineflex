import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"


export default function MovieSchedulePage({ SetSelectedTime, setFilme }) {
    const { idFilme } = useParams()
    const [schedule, setSchedule] = useState([])

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then(resp => {
                setSchedule(resp.data.days)
                setFilme(resp.data)
            })
            .catch((err) => console.log(err.response.data))
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    if (schedule.length === 0) {
        return (<div>Carregando...</div>)
    }
    function selectTime(time) {
        const times = { day: time.weekday, time: time.name }
        SetSelectedTime(times)
    }
    return (
        <>
            {(schedule).map((days) =>
                <MovieDays key={days.id} data-test="movie-day">
                    <h1>{days.weekday} - {days.date}</h1>
                    <MovieTimes>
                        {days.showtimes.map((time) =>
                            <Link key={time.name} to={`/assentos/${time.id}`}>
                                <button data-test="showtime" onClick={() => selectTime(time)}>{time.name}</button>
                            </Link>
                        )}
                    </MovieTimes>
                </MovieDays>
            )
            }



        </>

    )
}

const MovieDays = styled.div`
    margin-left: 24px;
    
    
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #293845;
        text-decoration: none;
    }
`

const MovieTimes = styled.div`
    display: flex;
    gap: 10px;
    margin: 15px 0 15px 0;
    button {
        width: 83px;
        height: 43px;
        background: #E8833A;
        border-radius: 3px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        border-style: none;
        color: #FFFFFF;
        text-decoration: none;
        cursor: pointer;
    

    }
`

