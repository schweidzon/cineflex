import styled from "styled-components"

export default function Header() {
    return (
        <>
            <HeaderStyle>
                <h1>CINEFLEX</h1>
            </HeaderStyle>
            <PageTitle>
                <h2>Selecione o filme</h2>
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

`