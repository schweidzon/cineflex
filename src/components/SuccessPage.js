import styled from "styled-components"

export default function SuccessPage() {
    return (
        <>
         <SuccesStyle>
            <div>
                <h2>Filme e sessão</h2>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </div>
            <div>
                <h2>Ingressos</h2>
                <p>Assento 15</p>
                <p>Assento 10</p>
            </div>
            <div>
                <h2>Comprador</h2>
                <p>Nome: Nome da pessoa</p>
                <p>CPF: cpf da pessoa</p>
            </div>
        </SuccesStyle>
            <HomeButton>Voltar para home</HomeButton></>
       
    )
}

const SuccesStyle = styled.div `
    width: 375px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin: auto;
    margin-left: 45px;
    margin-top:10px;
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