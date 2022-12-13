import styled from "styled-components"


export default function MovieSeats({seats, selectedSeats, selectSeat}) {
   //console.log(seats)
   if(seats) {
    return ( 
        <>
          {seats.map((film, i) =>
                    <Seat key={film.id} data-test="seat" selectedSeats={selectedSeats.includes(film.name)} isAvailable={film.isAvailable} onClick={() => selectSeat(film, i)}>
                        {film.name}
                    </Seat>)}
                <SeatsStatus>
                    <SeatStatus color={"selecionado"}>
                        <div></div>
                        <p>Selecionado</p>
                    </SeatStatus>
                    <SeatStatus color={"disponivel"}>
                        <div></div>
                        <p>Disponível</p>
                    </SeatStatus>
                    <SeatStatus color={"indiposivel"}>
                        <div></div>
                        <p>Indisponível</p>
                    </SeatStatus>
                </SeatsStatus>
        </>
    )
   }
   
}


const Seat = styled.button`
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
        background-color: ${props => !props.isAvailable ? "#FBE192" : props.selectedSeats ? "#1AAE9E" : "#C3CFD9"};
        cursor: pointer;
`

const SeatsStatus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    text-align: center;
    width: 375px;
    margin: auto;
        div{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;

          
        }
    
        
`

const SeatStatus = styled.div`
    margin-top: 20px;
    div {
        width: 26px;
        height: 26px;
        border-radius: 20px;
        margin-bottom: 10px;
        background-color: ${props => {
        if (props.color === "disponivel") {
            return "#C3CFD9"
        } else if (props.color === "selecionado") {
            return "#1AAE9E"
        } else {
            return "#FBE192"
        }
    }};
        border: ${props => {
        if (props.color === "disponivel") {
            return "1px solid #7B8B99"
        } else if (props.color === "selecionado") {
            return "1px solid #0E7D71"
        } else {
            return "1px solid #F7C52B"
        }
    }};        
    }
`