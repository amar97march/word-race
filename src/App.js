import './App.css';
import axios from 'axios';
import game_logo from './assets/logo.png'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import InstructionPage from './Components/InstructionSection/InstructionPage';
import GameSection from './Components/GamePage/GameSection';
import Leaderboard from './Components/LeaderBoard/LeaderboardPage.jsx';


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function App() {
  return (
    <Router>
    <div className="App">
      <div className = "home-header">
      <img  src={game_logo} alt="side bar"/>
      </div>
      <Switch>
      <Route path="/game" exact component={GameSection}/>
      <Route path="/leaderboard" exact component={Leaderboard}/>
      <Route path="/" exact component={InstructionPage}/>
      </Switch>


    </div>
    </Router>
  );
}

export default App;
