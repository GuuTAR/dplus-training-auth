import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from "react-router-dom";

import './App.scss'

import Login from "./page/Login/Login";
import Register from "./page/Register/Register";

const App = () => {

  const history = useHistory()

  return (
    <div className="App" >
      <Router history={history}>
        <Switch>
          <Route exact key="login" path="/" component={Login} />
          <Route exact key="register" path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

