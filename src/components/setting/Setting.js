import React, { Component } from 'react';
import {addCategory, updateBudget} from '../../actions/settingAction';
import {connect} from 'react-redux';
import CategoryItem from './categoryItem';
import './setting.css';

class Setting extends Component {
    constructor(props){
        super(props);
        this.state = {
            budget:null,
            category:'',
            categories:[],
            categoryLength:0
        }
        this.updateBudget = this.updateBudget.bind(this)
        this.onChange = this.onChange.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this._renderCategoryItem = this._renderCategoryItem.bind(this);
    }

    componentDidMount(){
        console.log(this.props)
        const {budget,categories,categoryLength} = this.props;
        this.setState({budget,categories,categoryLength})
        console.log("------------------ budget ------------------",budget)
      
    }

    addCategory(){
        const {category} = this.state;
        if(category){
            let data ={}
            data.id = this.props.categoryLength + 1;
            data.name = category;
            this.props.addCategory(data)
            this.setState({category:''})
        }
    }

    updateBudget(){
      const {budget} = this.state;
      this.props.updateBudget(budget)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    _renderCategoryItem(){
        const {categories} = this.props;
        return categories.length > 0 ? (
            categories.map(category =>{
                return(
                    <CategoryItem keys={category.id} category={category} />
                )
            })
        ) : null ;
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
                    <div className="primary-btn common-pointer" onClick={this.updateBudget}>Update</div>
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
                   
                    <div className="primary-btn common-pointer" onClick={this.addCategory}>Add</div>
                </div>
                <div className="category-list-header">Categories</div>
                <div className="categories-block">
                    {this._renderCategoryItem()}
                </div>
            </div>
        )
    }
}



const mapStateToProps = state =>({
    budget:state.setting.budget,
    categories:state.setting.categories,
    categoryLength: state.setting.categoryLength
})


export default connect(mapStateToProps,{addCategory,updateBudget})(Setting)