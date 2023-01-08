import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home.jsx';
import fourzerofour from './components/404';
import Transcript from './components/transcripts/transcript';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/404" component={fourzerofour}></Route>
        <Route exact path="/t/:id" component={Transcript}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route component={fourzerofour}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
