import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main.js';
import Nav from './components/Nav/Nav.js';
import NotFound from './components/NotFound.js';

import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Redirect to="/102/255/178" />
          </Route>
          <Route exact path="/:r/:g/:b" component={Main} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
