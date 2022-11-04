import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Logo from './components/Logo';
import Footer from './components/Footer';
import Contact from './components/Contact'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {
        <div>
          <Header />
          <Buttons />
          <Logo />
          <Footer />
        </div>   
      } />
      <Route path='/Contact' element = {<Contact />} />
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
