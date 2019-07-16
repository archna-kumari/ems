import React, { Component } from 'react'

class AddExpense extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            category: '',
            intemName: '',
            amount: '',
            expenseDate: ''
        };
        this.clickHandler=this.clickHandler.bind(this);
    }
    
    render() {
        return (
            <div className="addExpense">
                <button onClick={this.clickHandler}>Add Expense</button>
            </div>
        )
    }
}

export default AddExpense
