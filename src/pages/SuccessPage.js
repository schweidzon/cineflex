import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SuccessPage({selectedSeats, setSelectedSeats, film }) {
   
    return (
        <>
            <SuccesStyle>
                <div>
                    <h2>Filme e sessão</h2>
                    <p>{film.movie.title}</p>
                    <p>{`${film.day.date}  ${film.name}`}</p>
                </div>
                <div>
                    <h2>Ingressos</h2>
                    {selectedSeats.map((s) => <p>{`Assento ${s}`}</p>)}
                </div>
                <div>
                    <h2>Comprador</h2>
                    <p>Nome: Nome da pessoa</p>
                    <p>CPF: cpf da pessoa</p>
                </div>
            </SuccesStyle>
            <Link to="/">
                <HomeButton onClick={() => setSelectedSeats([])}>Voltar para home</HomeButton>
            </Link>
        </>

    )
}

const SuccesStyle = styled.div`
    width: 210px;
    display: flex;
    flex-direction: column;
    
    gap: 35px;
    margin: auto;
   
        h2 {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            color: #293845;
            margin-bottom: 10px;
        }
        p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            color: #293845;
            margin-bottom: 5px;
        }
    
    @media(max-width: 500px) {
        & {
            margin-left: 45px;
            margin-top:10px;
            width: 375px;
        }
    }
       
`

const HomeButton = styled.button`
     
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
            margin-top: 50px;
            cursor: pointer;
          
        
`