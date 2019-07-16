import React, { Component } from 'react'
import { connect } from 'react-redux';
import {deleteCategory} from '../../actions/settingAction';


class CategoryItem extends Component {
    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);
    }

    remove(){
        const  {category} = this.props;
        this.props.deleteCategory(category.id);
    }


    render() {
        const {category} = this.props;
        return (
            <div className="d-flex align-items center justify-content-between category-item-container">
                <div className="category-name">{category.name}</div>
                <i className="material-icons  common-pointer" onClick={this.remove}>clear</i>
            </div>
        )
    }
}


export default connect(null,{deleteCategory})(CategoryItem);
