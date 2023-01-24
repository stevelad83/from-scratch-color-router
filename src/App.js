import { NavLink } from 'react-router-dom';
import './App.css';

import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <NavLink to="/red">Red</NavLink>
        <NavLink to="/green">Green</NavLink>
        <NavLink to="/blue">Blue</NavLink>
      </div>
    </>
  );
}

export default App;
