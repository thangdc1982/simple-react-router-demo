import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Item from './Item';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />          
        <Switch>                    
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop" exact>
            <Shop />
          </Route>
          <Route path="/shop/:id" component={Item}>            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
