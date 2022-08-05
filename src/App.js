import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

<Router>
<Switch>
        <Route exact path="/">
      <Home></Home>
     </Route>
     </Switch>
     </Router>

    </div>
  );
}

export default App;
