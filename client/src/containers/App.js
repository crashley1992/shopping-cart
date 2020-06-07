import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />

    </Router>
  );
}

export default App;
