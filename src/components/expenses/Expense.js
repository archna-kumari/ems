import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem';

class Expense extends Component {
    render() {
        return (
            <div>
                Expense parent
                <ExpenseItem />
            </div>
        )
    }
}

export default Expense
