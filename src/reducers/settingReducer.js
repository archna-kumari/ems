import {ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY} from '../actions/types';


const initialState = {
    categories:[],
    budget:null,
    categoryLength:0
}


export default function(state = initialState, action){
    switch(action.type){
        case ADD_CATEGORY:
            return{
                categories:[action.category, ...state.categories],
                categoryLength:state.categoryLength+1,
                ...state
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
                categories:updated_categories,
                ...state
            }

        case DELETE_CATEGORY:
             updated_categories = state.categories.filter(item => item.id !== action.category.id);
            return{
                categories:updated_categories,
                ...state
            }
        default:
            return state
    }
}