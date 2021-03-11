import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import TeamDetail from './Component/TeamDetail/TeamDetail';



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/team/:idTeam">
            <TeamDetail></TeamDetail>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
