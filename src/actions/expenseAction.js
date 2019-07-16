import {ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE} from './types';



export const addExpense = (expense) => dispatch =>{
    dispatch({type:ADD_EXPENSE,expense})
} 


export const updateCategory = (expense) => dispatch =>{
    dispatch({type:UPDATE_EXPENSE,expense})
} 


export const deleteCategory = (id) => dispatch =>{
    dispatch({type:DELETE_EXPENSE,id})
} 