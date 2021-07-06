import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import MovieList from "../routes/MovieList";


function App() {
  return (
    <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/detail/:id" component={Detail}/>
        <Route path="/genre/:genreId" component={MovieList}/>
    </Router>
  );
}

export default App;
