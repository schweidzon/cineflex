import Header from "./components/Header";
import MoviesContainer from "./components/MoviesContainer";
import GlobalStyle from "./style/globalStyle";
import MoviesSchedule from "./components/MovieSchedule"
import MovieSeatsPage from "./components/MovieSeatsPage";
import { useState } from "react";
import Footer from "./components/Footer";
import SuccessPage from "./components/SuccessPage";

function App() {

  const [selectedTime, SetSelectedTime] = useState([])
  const [film, setFilm] = useState([])
  const [selectedSeats, setSelectedSeats] = useState([])
  const [buyerInfo, setBuyerInfo] = useState([])
  
  
  
  return (
    <>
      <GlobalStyle/>
      <Header />
      {/* <MoviesContainer/> */}
      {/* <MoviesSchedule 
      selectedTime={selectedTime}
       SetSelectedTime={SetSelectedTime}
        film={film}
        /> */}
      {/* <MovieSeatsPage 
      selectedSeats={selectedSeats}
       setSelectedSeats={setSelectedSeats} 
       selectedTime={selectedTime} 
       film={film} setFilm={setFilm} 
       /> */}
      <SuccessPage/>
      <Footer poster={film.movie} selectedTime={selectedTime} />
    </>

  );
}

export default App;
