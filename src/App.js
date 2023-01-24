import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main.js';
import Nav from './components/Nav/Nav.js';

import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Redirect to="255/51/51" />
          </Route>
          <Route path="/:r/:g/:b" component={Main} />
        </Switch>
      </div>
    </>
  );
}

export default App;
