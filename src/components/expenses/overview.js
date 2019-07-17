import React, { Component } from 'react'
import { connect } from 'react-redux';

class Overview extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {expenses, budget} = this.props;
        let expenseSum = 0;
        expenses.forEach(expense => {
            expenseSum += expense.amount;
        });
        return (
            <div className="overview-container">
                <div className="d-flex overview-item">
                    <div>Total Budget - </div>
                    <div>Rs, {budget}</div>
                </div>
                <div className="d-flex overview-item">
                    <div>Total Expenses - </div>
                    <div>Rs, {expenseSum}</div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) =>({
    expenses:state.expense.expenses,
    budget:state.setting.budget
})

export default  connect(mapStateToProps,{})(Overview);