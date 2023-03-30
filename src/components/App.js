// J'importe de la bibliothèque React les Hooks useEffect et useState
import React, { useEffect, useState } from 'react'

import './styles/App.css';
import Search from '../components/SearchBar';
import Card from '../components/Card';
import Mode from "../components/Mode";


function App() {
return (
    <div className="App">
      <Mode/>
      <Search/>
    </div>
  );
}

export default App;
