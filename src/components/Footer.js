import styled from "styled-components"

export default function Footer({ poster, selectedTime }) {
    //console.log(selectedTime)
    if (poster) {
        return (

            <Poster>
                <div>
                    <img src={poster.posterURL} />
                </div>
                <div>
                    <h1>{poster.title}</h1>
                    <h2>{`${selectedTime.day} - ${selectedTime.time}`}</h2>
                </div>
            </Poster>

        )
    } 

}


const Poster = styled.div`
    width: 100%;
    height: 117px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: #DFE6ED;
    border-top: 1px solid #9EADBA;
    gap: 10px;
 
        div:first-of-type {
            width: 64px;
            height: 89px;
            background: #FFFFFF;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 5px;
        }
        img {
            width: 48px;
            height: 72px;
        }
        h1, h2{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 26px;
          
        }
        h1 {
            margin-bottom: 5px;
        }

`

