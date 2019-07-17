import React, { Component } from 'react'
import { connect } from 'react-redux';
import {deleteExpense} from '../../actions/expenseAction';


class ExpenseItem extends Component {
    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);
    }

    remove(){
        const  {expense} = this.props;
        this.props.deleteExpense(expense.id);
    }


    render() {
        const {expense} = this.props;
        return (
            <tr>
            <td className="expense-name">{expense.name}</td>
            <td className="expense-name">{expense.category.name}</td>
            <td>{expense.amount}</td>
            <td><i className="material-icons  common-pointer" onClick={this.remove}>clear</i></td>
          </tr>
        )
    }
}


export default connect(null,{deleteExpense})(ExpenseItem);

