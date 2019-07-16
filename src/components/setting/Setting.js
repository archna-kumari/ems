import React, { Component } from 'react'
import './setting.css';

class Setting extends Component {
    constructor(props){
        super(props);
        this.state = {
            budget:null,
            category:''
        }
        this.updateBudget = this.updateBudget.bind(this)
        this.onChange = this.onChange.bind(this);
    }

    updateBudget(e){
        console.log(this.state.budget);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }


    render() {
        return (
            <div className="d-flex flex-column align-items-center setting-container">
                <div className="d-flex align-items-center justify-content-between setting-item-block">
                <div  className="d-flex align-items-center justify-content-between  setting-input-block">
                    <div>Total Budget</div>
                    <input type="number" 
                           className="budget-input"
                            name="budget" 
                            value={this.state.budget} 
                            onChange={this.onChange} />
                </div>
                    <div className="primary-btn" onClick={this.updateBudget}>Update</div>
                </div>
                <div className="d-flex align-items-center justify-content-between setting-item-block">
                    <div  className="d-flex align-items-center justify-content-between setting-input-block">
                    <div>Categories</div>
                    <input type="text" 
                           className="budget-input" 
                           name="category" 
                           value={this.state.category}
                           onChange={this.onChange} 
                           placeholder="Category name here"/>
                    </div>
                   
                    <div className="primary-btn" onClick={this.updateBudget}>Add</div>
                </div>
            </div>
        )
    }
}



export default Setting