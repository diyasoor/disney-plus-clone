import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Anything inside the router will always be visible */}
      {/* Anything inside the switch will always change */}
      <Router>
          <Header />
          <Routes>
              <Route path='/detail' element={<Detail />} />
              <Route path='/' element={<Home />} />
          </Routes>
          
      </Router>
      
    </div>
  );
}

export default App;
