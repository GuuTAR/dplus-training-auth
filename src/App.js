import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from "react-router-dom";

import Login from "./page/Login/Login";

const App = () => {

  const history = useHistory()

  return (
    <Router history={history}>
      <Switch>
        <Route exact key="login" path="/" component={Login} />
      </Switch>
    </Router>
  )
}

export default App

