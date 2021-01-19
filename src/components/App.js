import { BrowserRouter, Route } from 'react-router-dom'
import PlayMode from "./PlayMode"
import PickSide from "./PickSide"
import Play from "./Play"
import './App.css'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Route path="/" exact component={PlayMode}/>
        <Route path="/pickside" component={PickSide}/>
        <Route path="/play" exact component={Play}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
