

//import { useState } from 'react';
import './App.css';

import ListOfGifs from './components/ListOfGifs.js';

import { Link, Route } from "wouter";


function App() {
  

  return (
    <div className="App">
      <section className="App-content">
        <p>
          Gifs
        </p>
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/kimetsu-no-yaiba'>Gifs de Kimetsu no Yaiba</Link>
        <Link to='/gif/anime'>Gifs de Anime</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />  
        
      </section>
    </div>
  );
}

export default App;
