import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Body/Home'
import Products from './components/Body/Products'
import Details from './components/Body/Details'

import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <main className="main-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/laptop/:id" component={Details} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
