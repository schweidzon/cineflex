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

  
  const [selectedSeats, setSelectedSeats] = useState([])
  const [selectedFilm, setSelectedFilm] = useState([])
  const [film, setFilm] = useState(undefined)
  const [buyers, setBuyers] = useState([])



  return (

    <BrowserRouter>
      <GlobalStyle />
      <Header setSelectedSeats={setSelectedSeats} setBuyers={setBuyers} />
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/sessoes/:idFilme" element={<MoviesSchedulePage
      
          selectedFilm={selectedFilm}
          setSelectedFilm={setSelectedFilm}


        />} />
        <Route path="/assentos/:idSessao" element={<MovieSeatsPage
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          
          film={film}
          setFilm={setFilm}
          buyers={buyers}
          setBuyers={setBuyers}

        />} />

        <Route path="/sucesso" element={<SuccessPage
          setSelectedSeats={setSelectedSeats}
          selectedSeats={selectedSeats}
          film={film}
          buyers={buyers}
          setBuyers={setBuyers}
        />} />
      </Routes>

      <Footer film={film} selectedFilm={selectedFilm} />
    </BrowserRouter>


  );
}

export default App;
