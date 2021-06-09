import {BrowserRouter as Router} from "react-router-dom";

import './App.scss'
import RouterSlider from "./component/RouterSlider/RouterSlider";

const App = () => {
  return (
    <div className="App" >
      <Router>
        <RouterSlider />
      </Router>
    </div>
  )
}

export default App

