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
        <Route path="/charactersdetails" component={ CharactersDetails } />
        <Route path="*" component={ NotFound } />
        {/* <Route path="/album/:id" render={ (props) => <Album { ...props } /> } /> */}
      </Switch>
    );
  }
}

export default App;
