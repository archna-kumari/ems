import React, { Component } from 'react'
import {connect} from 'react-redux';
import {addExpense} from '../../actions/expenseAction'


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
        categories.length > 0 ? (
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
        }
    }

    render() {
        const {name, category, amount} = this.state;
        return (
            <div className="addExpense">
                <input name="name"
                        type="text"
                        value={name} 
                       onChange={this.onChange} 
                       placeholder="Enter expense name" 
                    />
                <input name="amount"
                       type="number" 
                       value={amount}
                        onChange={this.onChange} 
                        placeholder="Enter amount"
                />
                <select 
                 className="select-category-item"
                 value={category}
                 name="category"
                 onChange={this.onChange}
                  >
                    <option>Select a category</option>
                    {this._renderCategoreis()}
                </select>
                <button onClick={this.clickHandler}>Add Expense</button>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    categories: state.setting.categories,
    expenses:state.expense.expenses
})

export default connect(mapStateToProps,{addExpense})(AddExpense);
