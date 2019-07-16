import {ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY,UPDATE_BUDGET} from './types';




export const addCategory = (category) => dispatch =>{
    dispatch({type:ADD_CATEGORY,category})
} 


export const updateCategory = (category) => dispatch =>{
    dispatch({type:UPDATE_CATEGORY,category})
} 


export const deleteCategory = (id) => dispatch =>{
    dispatch({type:DELETE_CATEGORY,id})
} 

export const updateBudget = (budget) => dispatch =>{
    dispatch({type:UPDATE_BUDGET,budget})
} 

