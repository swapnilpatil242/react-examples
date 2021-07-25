import { Link, Switch, Route, useRouteMatch, useLocation, useParams } from "react-router-dom";
import './styles/common.css';

const RouterExamples = () => {  
  const { path, url} = useRouteMatch();

  return(
    <div className='content-center'>
      <h3>React router examples <a target="_blank" rel="noreferrer" href="https://reactrouter.com/web/example/query-parameters">Refs url</a></h3>
      <ul>
        <li>
          <Link to={`${url}/getQueryParam`}>getQueryParam example</Link>
        </li>
        <li>
          <Link to={`${url}/useParams`}>useParams() example</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/getQueryParam`}>
          <GetQueryExample />
        </Route>
        <Route path={`${path}/useParams`}>
          <UseParamsExample />
        </Route>
      </Switch>
    </div>
  )
}

export default RouterExamples;

function GetQueryExample() {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h4>useQuery example</h4>
      <ul>
        <li>
          <Link to={`${url}/account?name=github`}>Github</Link>
        </li>
        <li>
          <Link to={`${url}/account?name=aws-services`}>AWS services</Link>
        </li>
        <li>
          <Link to={`${url}/account?name=stackoverflow&id=12`}>StackOverflow</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/account`}>
          <QueryChildComponent />
        </Route>
      </Switch>
    </div>
  )
}

function QueryChildComponent() {
  // React Router does not have any opinions about how you should parse URL query strings.
  // If you use simple key=value query strings and you do not need to support IE 11, you can use the browser's built-in URLSearchParams API
  let query = new URLSearchParams(useLocation().search);
  return (
    <div>
      <h5>QueryChildComponent</h5>
      <div>Query param name: {query.get("name")}</div>
      <div>Query param id: {query.get("id")}</div>
    </div>
  )
}

function UseParamsExample() {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h4>useQuery example</h4>
      <ul>
        <li>
          <Link to={`${url}/user/1`}>Mr. A</Link>
        </li>
        <li>
          <Link to={`${url}/user/testUser`}>AWS services</Link>
        </li>
        <li>
          <Link to={`${url}/user/2/demoUser`}>StackOverflow</Link>
        </li>
      </ul>

      <Switch>
        {/* ? means optional */}
        <Route path={`${path}/user/:id/:name?`}>
          <UseParamsChildComponent />
        </Route>
      </Switch>
    </div>
  )
}

function UseParamsChildComponent() {
  let { id, name } = useParams();
  return (
    <div>
      <h5>useParams() example</h5>
      <div>Param id : {id}</div>
      <div>Param name : {name}</div>
    </div>
  )
}