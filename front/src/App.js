import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import NotFound from './views/notfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
