import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Alert from './components/layout/Alert';
import store from './store';


import './App.css';


const App = () => {

    return (
        <Provider store={store}>
        <Router>
            <div>
            <Navbar />
            <Alert />
            <Route exact path="/" component={Dashboard} />
            <Footer />
            </div>
        </Router>
        </Provider>
    );
  }

export default App;