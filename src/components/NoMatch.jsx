import { Link } from "react-router-dom";
import logo from "../logo.svg";

const NoMatch = () => {
  return(
    <div style={{textAlign: 'center'}}>
      <h2>I think you on wrong way.</h2>
      <img src={logo} className="App-logo" alt="logo" height="300px" width="300px"/>
      <Link to="/">Back to home</Link>
    </div>
  )
}

export default NoMatch;