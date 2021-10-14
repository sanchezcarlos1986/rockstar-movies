import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {MoviesList} from './modules/movies/components/MoviesList';
import {MovieDetail} from './modules/movies/components/MovieDetail';
import {Header} from './modules/movies/components/Header';
import {MoviesContextProvider} from './modules/movies/contexts/movies.context';
import Rating from './modules/movies/components/Rating/Rating';

const App = () => {
  return (
    <div className="App">
      <MoviesContextProvider>
        <Router>
          <Header />
          <Rating />
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route path="/movie/:id" component={MovieDetail} />
          </Switch>
        </Router>
      </MoviesContextProvider>
    </div>
  );
};

export default App;
