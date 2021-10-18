import logo from './logo.svg';
import React, { useEffect, useState} from "react"
import './App.css';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import Nav from './components/Nav';

function App() {  
  return (
    <Nav />
  );
}

export default App;
