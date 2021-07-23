import './App.css';
import Home from './pages/Home/index'
import SearchResults from './pages/SearchResults/index'
import Detail from './pages/Detail/index'
import { Link, Route } from "wouter";
import StaticContext from './context/StaticContext';
import {GifsContextProvider} from './context/GifsContext' 

export default function App() {
  
  return (
    <StaticContext.Provider value={{name:'KSTF',sub:true}}>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <img className="App-logo" alt='Giffy logo' src='/logo.png'/>
          </Link>
          <p>
            Giffy
          </p>
          <GifsContextProvider>
          <Route component={Home} path="/" /> 
          <Route 
            component={SearchResults} 
            path="/search/:keyword" 
          />
          <Route component={Detail} path="/gif/:id" />   
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

