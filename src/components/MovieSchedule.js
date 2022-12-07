import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Footer from "./Footer"

export default function MovieSchedule({selectedTime, SetSelectedTime, film}) {
    console.log(film)
    const [schedule, setSchedule] = useState([])
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies/3/showtimes")
        promise.then(resp => setSchedule(resp.data.days))
    }, [])
    //console.log(schedule)
    function selectTime(time) {
        const times = { day:time.weekday, time:time.date}
        //console.log(times)
        SetSelectedTime(times)
    }
    
    return (
        <>
            {schedule.map((days) =>
                <MovieDays>
                    <h1>{days.weekday} - {days.date}</h1>
                    <MovieTimes>
                        {(days.showtimes).map((time) =>
                            <button onClick={() => selectTime(days)}>{time.name}</button>
                        )}
                    </MovieTimes>
                </MovieDays>
            )}
          

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
        color: #293845
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

    }
`