import Header from "./components/Header";
import MoviesPage from "./pages/MoviesPage";
import GlobalStyle from "./style/globalStyle";
import MoviesSchedulePage from "./pages/MovieSchedulePage"
import MovieSeatsPage from "./pages/MovieSeatsPage";
import { useState } from "react";
import SuccessPage from "./pages/SuccessPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  const [selectedTime, SetSelectedTime] = useState([])
  const [selectedSeats, setSelectedSeats] = useState([])
  const [buyerInfo, setBuyerInfo] = useState([])
  const [page, setPage] = useState('/')
  const [film, setFilm] = useState(undefined)





  return (

    <BrowserRouter>
      <GlobalStyle />
      <Header page={page} setPage={setPage} setSelectedSeats={setSelectedSeats}/>
      <Routes>
        <Route path="/" element={<MoviesPage setPage={setPage} />} />
        <Route path="/sessoes/:idFilme" element={<MoviesSchedulePage
          selectedTime={selectedTime}
          SetSelectedTime={SetSelectedTime}
          setPage={setPage}

        />} />
        <Route path="/assentos/:idSessao" element={<MovieSeatsPage
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          selectedTime={selectedTime}
          page={page}
          setPage={setPage}
          film={film}
          setFilm={setFilm}



        />} />
        <Route path="/sucesso" element={<SuccessPage
          setSelectedSeats={setSelectedSeats}
          setPage={setPage}
          selectedSeats={selectedSeats}
          film={film} />} />
      </Routes>


    </BrowserRouter>


  );
}

export default App;
