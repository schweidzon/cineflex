import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header({page, setPage,setSelectedSeats}) {
    return (
        <>
            <HeaderStyle>
            <Link to="/">
                <h1 onClick={() => {
                    setPage("/")
                    setSelectedSeats([])
                    }}>CINEFLEX</h1>
            </Link>
            </HeaderStyle>
           
            <PageTitle>
            {page === "/sessoes" ? <h2>Selecione o horário</h2> : page==="/assentos" ? <h2>Selecione o(s) assento(s)</h2> : page==="/" ? <h2>Selecione o filme</h2>  : <h3>Pedido feito com sucesso!</h3>}
               
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