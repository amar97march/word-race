import './App.css';
import game_logo from './Assets/logo.png'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import InstructionPage from './Components/InstructionSection/InstructionPage';
import GameSection from './Components/GamePage/GameSection';


function App() {
  return (
    <Router>
    <div className="App">
      <div className = "home-header">
      <img  src={game_logo} alt="side bar"/>
      </div>
      <Switch>
      <Route path="/" exact component={InstructionPage}/>
      <Route path="/game" exact component={GameSection}/>
      </Switch>


    </div>
    </Router>
  );
}

export default App;
