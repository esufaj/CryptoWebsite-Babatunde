import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import WhitePaperPage from './pages/whitepaper';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/whitepaper" component={WhitePaperPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
