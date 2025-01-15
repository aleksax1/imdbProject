import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { ApiProvider } from "./context/ApiContext";
import About from "./pages/About/About";
import AllMovies from "./pages/AllMovies/AllMovies";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

function App() {
  return (
    <>
      <ApiProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/all-movies" element={<AllMovies />} />
            <Route path="/movie-details" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </>
  );
}

export default App;
