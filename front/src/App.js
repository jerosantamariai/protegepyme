import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Footer from './components/footer';
// import Navbar from './components/navbar';
import injectContext from './store/appContext';
import Home from './views/home';
import NotFound from './views/notfound';
import FakeUno from './views/fakeviews/fake1';
import FakeDos from './views/fakeviews/fake2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar /> */}
        <Switch>
            <Route exact path="/version2" component={FakeUno} />
            <Route exact path="/version3" component={FakeDos} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
