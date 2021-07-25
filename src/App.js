// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import Hooks from './components/hooks-examples/Index';
import NoMatch from './components/NoMatch';
import { ListMove } from './components/examples/ListMove';
import RouterExamples from './components/RouterExamples';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="router-examples">Router examples</Link>
            </li>
            <li>
              <Link to="/list-move">List move</Link>
            </li>
            <li>
              <Link to="/hooks-examples">Hooks</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/router-examples">
            <RouterExamples />
          </Route>
          <Route path="/list-move">
            <ListMove />
          </Route>
          <Route path="/hooks-examples">
            <Hooks />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
