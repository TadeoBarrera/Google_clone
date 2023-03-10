import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import SearchPage from './Pages/SearchPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
