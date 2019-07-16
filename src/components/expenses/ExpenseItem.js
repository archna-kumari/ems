import React, { Component } from 'react'

class ExpenseItem extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Item Name</th>
                        <th>Amount</th>
                        <th>Expense Date</th>
                    </tr>
                </thead>
            </table>
        )
    }
}

export default ExpenseItem
