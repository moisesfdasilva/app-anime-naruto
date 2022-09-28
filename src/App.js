import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CharactersDetails from './pages/CharactersDetails';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/charactersdetails/:id" render={ (props) => <CharactersDetails { ...props } /> } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
