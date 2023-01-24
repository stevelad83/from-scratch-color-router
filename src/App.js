import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main.js';

import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </>
  );
}

export default App;
