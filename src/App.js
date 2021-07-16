import './App.css';
import Home from './pages/Home/index.js'
import SearchResults from './pages/SearchResults/index.js'
import Detail from './pages/Detail/index.js'
//import ListOfGifs from './components/ListOfGifs.js';
import { Link, Route } from "wouter";


export default function App() {
  
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <img className="App-logo" alt='Giffy logo' src='/logo.png'></img>
        </Link>
        <p>
          Giffy
        </p>
        <Route component={Home} path="/" /> 
        <Route 
          component={SearchResults} 
          path="/search/:keyword" 
        />
        <Route component={Detail} path="/gif/:id" />   
        
      </section>
    </div>
  );
}

