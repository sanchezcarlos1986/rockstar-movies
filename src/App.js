import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {MoviesList} from './modules/movies/components/MoviesList';
import {MovieDetail} from './modules/movies/components/MovieDetail';
import {Header} from './modules/movies/components/Header';
import {MoviesContextProvider} from './modules/movies/contexts/movies.context';

const App = () => {
  return (
    <div className="App">
      <MoviesContextProvider>
        <Router>
          <Header />
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
