import React, { Component } from 'react'
import './setting.css';

class Setting extends Component {
    constructor(props){
        super(props);
        this.state = {
            budget:''
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
            <div className="setting-container">
                <div className="d-flex align-items-center add-budget">
                    <div>Total Budget</div>
                    <input type="text" className="budget-input" name="budget" value={this.state.budget} onChange={this.onChange} />
                    <div className="primary-btn" onClick={this.updateBudget}>Update</div>
                </div>
            </div>
        )
    }
}



export default Setting