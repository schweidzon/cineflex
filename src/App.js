import Header from "./components/Header";
import MoviesPage from "./pages/MoviesPage";
import GlobalStyle from "./style/globalStyle";
import MoviesSchedulePage from "./pages/MovieSchedulePage"
import MovieSeatsPage from "./pages/MovieSeatsPage";
import { useState } from "react";
import SuccessPage from "./pages/SuccessPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";
function App() {

  const [selectedTime, SetSelectedTime] = useState([])
  const [selectedSeats, setSelectedSeats] = useState([])
  const [filme, setFilme] = useState([])
  const [film, setFilm] = useState(undefined)
  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")

  return (

    <BrowserRouter>
      <GlobalStyle />
      <Header setSelectedSeats={setSelectedSeats} />
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/sessoes/:idFilme" element={<MoviesSchedulePage
          selectedTime={selectedTime}
          SetSelectedTime={SetSelectedTime}
          filme={filme}
          setFilme={setFilme}


        />} />
        <Route path="/assentos/:idSessao" element={<MovieSeatsPage
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          selectedTime={selectedTime}
          film={film}
          setFilm={setFilm}
          name={name}
          setName={setName}
          cpf={cpf}
          setCpf={setCpf}
        />} />

        <Route path="/sucesso" element={<SuccessPage
          setSelectedSeats={setSelectedSeats}
          selectedSeats={selectedSeats}
          film={film}
          name={name}
          cpf={cpf} />} />
      </Routes>

      <Footer film={film} filme={filme} selectedTime={selectedTime} />
    </BrowserRouter>


  );
}

export default App;
