import logo from './logo.svg';
import './App.css';
//link to the main control file
import {BrowserRouter, Switch, Router, Route} from'react-router-dom';
import About from'./pages/About';
import Home from'./pages/Home';
import Footer from './pages/Footer';
import NavTabs from './components/NavTabs'
  
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavTabs></NavTabs>
      <Switch>
        <Route exact path="/" component= {Home}></Route>
               <Route exact path="/about" component= {About}></Route>
      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
