import React, { Component } from 'react'
import {connect} from 'react-redux';
import {addExpense} from '../../actions/expenseAction'
import './Expense.css';

class AddExpense extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: null,
            name: '',
            amount: null
        };
        this.submit=this.submit.bind(this);
        this._renderCategoreis = this._renderCategoreis.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    _renderCategoreis(){
        const {categories} = this.props;
      return categories.length > 0 ? (
                categories.map(category =>{
                  return(
                      <option key={category.id} value={category.id}>{category.name}</option>
                  )
            })
        ):null;
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    
    submit() {
        const {category,name,amount} = this.state;
        let errors = {};
        if(!category)errors.category = "field is required";
        if(!name)errors.name = "field is required";
        if(!amount)errors.amount = "field is required";
        if(Object.keys(errors).length === 0){
            let data = {category,name,amount};
            data.created_at = new Date().toISOString();
            this.props.addExpense(data);
            this.props.history.push('/')
        }
    }

    render() {
        const {name, category, amount} = this.state;
        return (
            <div className="d-flex flex-column addExpense-container">
                <input name="name"
                        type="text"
                        className="add-expense-filed"
                        value={name} 
                       onChange={this.onChange} 
                       placeholder="Enter expense name" 
                    />
                <input name="amount"
                       type="number" 
                       className="add-expense-filed"
                       value={amount}
                        onChange={this.onChange} 
                        placeholder="Enter amount"
                />
                <select 
                 className="select-category-item"
                 value={category}
                 name="category"
                 className="add-expense-filed"
                 onChange={this.onChange}
                  >
                    <option>Select a category</option>
                    {this._renderCategoreis()}
                </select>
                <div className="primary-btn" onClick={this.submit}>Add Expense</div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    categories: state.setting.categories,
    expenses:state.expense.expenses
})

export default connect(mapStateToProps,{addExpense})(AddExpense);
