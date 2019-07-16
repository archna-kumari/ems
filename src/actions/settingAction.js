import {ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY} from './types';




export const addCategory = (category) => dispatch =>{
    dispatch({type:ADD_CATEGORY,category})
} 


export const updateCategory = (category) => dispatch =>{
    dispatch({type:UPDATE_CATEGORY,category})
} 


export const deleteCategory = (category) => dispatch =>{
    dispatch({type:DELETE_CATEGORY,category})
} 