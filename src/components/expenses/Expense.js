import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem';
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


class Expense extends Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Link to="/add-expense">Add Expense</Link>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    categories: state.setting.categories,
    expenses:state.expense.expenses
})

export default withRouter(connect(mapStateToProps,{})(Expense));
