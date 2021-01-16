import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';


import './App.css';


const App = () => {

    return (
        <Router>
            <div>
            <Navbar />
            <Route exact path="/" component={Dashboard} />
            <Footer />
            </div>
        </Router>
    );
  }

export default App;