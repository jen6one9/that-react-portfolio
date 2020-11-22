import logo from './logo.svg';
import './App.css';
//link to the main control file
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';
import About from "./pages/About";
import Home from './pages/Home';
import Footer from './pages/Footer';
import NavTabs from './components/NavTabs'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavTabs></NavTabs>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/About" component={About}></Route>
          <Route exact path="/Portfolio" component={Portfolio}></Route>
          <Route exact path="/Contact" component={Contact}></Route>
          <Route exact path="/Footer" component={Footer}></Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
