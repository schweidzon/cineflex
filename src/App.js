import Header from "./components/Header";
import MoviesContainer from "./components/MoviesContainer";
import GlobalStyle from "./style/globalStyle";
import MoviesSchedule from "./components/MovieSchedule"
import MovieSeatsPage from "./components/MovieSeatsPage";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      {/* <MoviesContainer /> */}
      {/* <MoviesSchedule/> */}
      <MovieSeatsPage></MovieSeatsPage>
    </>

  );
}

export default App;
