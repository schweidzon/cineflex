import { Link, useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"
import arrow from "../images/arrow.png"
export default function Header({ setSelectedSeats }) {
    const location = useLocation()
    console.log(location.pathname)
    const nav = useNavigate()

    return (
        <>
            <HeaderStyle>
                <img data-test="go-home-header-btn" onClick={() => nav(-1)} src={arrow}/>
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

        img {
            position: absolute;
            left: 20px;
            background-color: none;
            cursor: pointer;

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