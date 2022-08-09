import './App.css';
/* eslint-disable  react/prefer-stateless-function */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Nav from './components/Nav';

class App extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/Calculator" element={<Calculator />} />
          <Route path="/components/Quotes" element={<Quotes />} />
        </Routes>
      </>
    );
  }
}

export default App;
