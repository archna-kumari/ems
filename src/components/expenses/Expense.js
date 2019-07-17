import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem';
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { Table } from 'reactstrap';
import Overview from './overview';

class Expense extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            todosPerPage: 5
        };
        this._renderExpenses = this._renderExpenses.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this._renderPageNumbers = this._renderPageNumbers.bind(this);
        
    }


    handleClick(event) {
        this.setState({
          currentPage: parseInt(event.target.id)
        });
      }

    _renderExpenses(expenses){
        
        return expenses.length > 0 ? (
            expenses.map(expense =>{
              return(
                  <ExpenseItem expense={expense} />
              )
        })
    ):null;
    }


  _renderPageNumbers(pageNumbers){
  return  pageNumbers.map(number => {
        return (
          <div
            key={number}
            id={number}
            onClick={this.handleClick}
            className="pagination-item"
          >
            {number}
          </div>
        );
      });
  } 



    render() {
        const { currentPage, todosPerPage } = this.state;
        const { expenses } = this.props;

        const indexOfLast = currentPage * todosPerPage;
        const indexOfFirst = indexOfLast - todosPerPage;
        const currentExpenses = expenses.slice(indexOfFirst, indexOfLast);


        // Logic for displaying page numbers
         const pageNumbers = [];
         for (let i = 1; i <= Math.ceil(expenses.length / todosPerPage); i++) {
                     pageNumbers.push(i);
         }


        console.log(this.props)
        return (
            <div className="expense-main-container">
                <Overview />
                <Link to="/add-expense">Add Expense</Link>
                <Table className="expense-table" dark>
                  <thead className="exp-thead">
                      <tr>
                       <th>Name</th>
                       <th>Category</th>
                       <th>Amount</th>
                       <th>Remove</th>
                     </tr>
                  </thead>
                  <tbody>
                  {this._renderExpenses(currentExpenses)}
                  </tbody>
                </Table>
                <div className="d-flex expense-page-no">
                {this._renderPageNumbers(pageNumbers)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    categories: state.setting.categories,
    expenses:state.expense.expenses
})

export default withRouter(connect(mapStateToProps,{})(Expense));
