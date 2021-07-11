import React from 'react'
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import Covnerter from './components/Covnerter';
import Instructions from './components/Instructions';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <Header />  
        <Main />
        <Instructions />
        <Covnerter />
        <Footer />
    </>
  )
}

export default App;
