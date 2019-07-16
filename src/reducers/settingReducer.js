import {ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY,UPDATE_BUDGET} from '../actions/types';


const initialState = {
    categories:[],
    budget:null,
    categoryLength:0
}


export default function(state = initialState, action){

    switch(action.type){
        case ADD_CATEGORY:
            return{
                ...state,
                categories:[action.category, ...state.categories],
                categoryLength:state.categoryLength+1
            }
        case UPDATE_CATEGORY:
            const updated_categories = state.categories.map(category =>{
                if(action.category.id === category.id){
                    return action.category;
                }else{
                    return category
                }
            })
            return {
                ...state,
                categories:updated_categories
            }

        case DELETE_CATEGORY:
            let updatedCategories = state.categories.filter(item => item.id !== action.id);
            return{
                ...state,
                categories:updatedCategories
            }
        case UPDATE_BUDGET:
            console.log(action)
            return{
                ...state,
                budget:parseInt(action.budget)
            }
        default:
            return state
    }
}