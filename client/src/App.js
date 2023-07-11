import './app.css'
import NavBar from "./components/NavBar";
import Landing from './components/Landing';
import About from './components/About';
import Blog from './components/Blog'
import Tour from './components/Tour';
import {Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/tour'>
          <Tour />
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
