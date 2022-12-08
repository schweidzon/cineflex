import { Link, useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Header({ setSelectedSeats }) {
    const location = useLocation()
    console.log(location.pathname)
    const nav = useNavigate()

    return (
        <>
            <HeaderStyle>
                <button onClick={() => nav(-1)}>Voltar</button>
                <Link to="/">
                    <h1 onClick={() => setSelectedSeats([])}>CINEFLEX</h1>
                </Link>
            </HeaderStyle>

            <PageTitle>
                {(location.pathname).includes("/sessoes") ? <h2>Selecione o horário</h2> : (location.pathname).includes("/assentos") ? <h2>Selecione o(s) assento(s)</h2> : (location.pathname) === "/" ? <h2>Selecione o filme</h2> : location.pathname === "/sucesso" && <h3>Pedido feito com sucesso!</h3>}

            </PageTitle>
        </>

    )
}

const HeaderStyle = styled.div`
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    
        h1{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 34px;
            line-height: 40px;
            color:#E8833A;
        }   
        button {
            background-color: #dfe3e7;
            border-radius: 8px;
            border-style: none;
            box-sizing: border-box;
            color: #000000;
            cursor: pointer;
            display: inline-block;
            font-family: 'Roboto';
            font-size: 14px;
            font-weight: 500;
            height: 40px;
            line-height: 20px;
            list-style: none;
            margin: 0;
            outline: none;
            padding: 10px 16px;
            position: relative;
            text-align: center;
            text-decoration: none;
            transition: color 100ms;
            vertical-align: baseline;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation; 
            position: absolute;
            left: 20px;
             &:hover , &:focus {
                background-color:#c0c9d1;
             }
         }
        
        
        
`




const backButton = styled.button`
    position: absolute;
    top: 20px;
`

const PageTitle = styled.div`
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
    }
    h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #247A6B;
        width: 180px;
        letter-spacing: 0.04em;
    }

`