import React from 'react';
import Dashboard from './Components/Dashboard';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter as Router } from "react-router-dom"

class App extends React.Component {
  render() {

    return (
      <Router>
        <Header />
        <Dashboard />
        <Footer />
      </Router>
    )
  }
}
export default App;
