import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Body/Home'

import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
