import "./App.css";
import React, { useState } from "react";
import MoviesDisplay from "../src/pages/MoviesDisplay/MoviesDisplay";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Error from "./components/ErrorComponent/Error";
import Header from "../src/components/Header/Header";
import About from "./pages/About/About";
import Footer from "../src/components/Footer/Footer";


const initialState = {
  movieTitle: "",
  movieGenre: "",
  movieCast: "",
  movieIMDBRating: "",
};
function App() {
  const [open, setOpen] = React.useState(false);
  const [allMovies, setAllMovies] = useState(initialState);

  const [errors, setErrors] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleResetForm = () => {
    console.log("In handle Reset form!");
    setAllMovies({ ...initialState });
    setErrors({});
  };
  return (
<BrowserRouter>
    <div className="App">
      <Header openHandleClick={handleClickOpen} />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <MoviesDisplay
              allMovies={allMovies}
              setAllMovies={setAllMovies}
              open={open}
              setOpen={setOpen}
              openHandleClick={handleClickOpen}
              resetForm={handleResetForm}
              errors={errors}
              setErrors={setErrors}
            />
          )}
        />
        <Route path="/about" exact component={About} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
