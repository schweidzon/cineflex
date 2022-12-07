import Header from "./components/Header";
import MoviesContainer from "./components/MoviesContainer";
import GlobalStyle from "./style/globalStyle";
import MoviesSchedule from "./components/MovieSchedule"
import MovieSeats from "./components/MovieSeats";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      {/* <MoviesContainer /> */}
      {/* <MoviesSchedule/> */}
      <MovieSeats></MovieSeats>
    </>

  );
}

export default App;
