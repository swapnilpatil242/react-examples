import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import UseEffectDemo from "./UseEffectDemo";
import UseReducerDemo from "./UseReducerDemo";

function Hooks() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const {path, url} = useRouteMatch();
  return(
    <div style={{textAlign: 'center'}}>
      <div>Hooks Examples</div>
      <ul style={{display: 'inline-grid'}}>
        <li>
          <Link to={`${url}/useEffect`}>hook useEffect</Link>
        </li>
        <li>
          <Link to={`${url}/useReducer`}>hook useReducer</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={`${path}/useEffect`}>
          <UseEffectDemo />
        </Route>
        <Route path={`${path}/useReducer`}>
          <UseReducerDemo />
        </Route>
      </Switch>
    </div>
  )
}

export default Hooks;