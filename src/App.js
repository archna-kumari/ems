import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import SideBar from './components/common/SideBar' 
import NavBar from './components/common/NavBar';
import Expense from './components/expenses/Expense';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Router>
          <NavBar />
          <div className="d-flex">
            <div className="sidebar-main-container">
              <SideBar />
            </div>
            <div className="right-main-container">
             <Route exact path="/" component={Expense} />
            </div>
          </div>
        </Router>
      </div>
    )
  }  
}

export default App;
