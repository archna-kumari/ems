import React from 'react';
import {Provider} from 'react-redux';
import store from './store'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import SideBar from './components/common/SideBar' 
import NavBar from './components/common/NavBar';
import Expense from './components/expenses/Expense';
import Setting from './components/setting/Setting';
import AddExpense from './components/expenses/AddExpense';

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
      <div className="App">
        <Router>
          <NavBar />
          <div className="d-flex">
            <div className="sidebar-main-container">
              <SideBar />
            </div>
            <div className="d-flex justify-content-center align-items-center right-main-container">
             <Route exact path="/" component={Expense} />
             <Route exact path="/add-expense" component={AddExpense} />
             <Route exact path="/settings" component={Setting} />
            </div>
          </div>
        </Router>
      </div>
      </Provider>
    )
  }  
}

export default App;
