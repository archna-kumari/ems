import  {ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE} from '../actions/types';


const initialState = {
    expenses:[],
    expenseLength:0
}


export default function(state = initialState, action){
    switch(action.type){
        case ADD_EXPENSE:
            return{
                ...state,
                expenses:[action.expense, ...state.expenses],
                expenseLength:state.expenseLength+1
            }
        case UPDATE_EXPENSE:
            const updated_expenses = state.expenses.map(expense =>{
                if(action.expense.id === expense.id){
                    return action.expense;
                }else{
                    return expense
                }
            })
            return {
                ...state,
                expenses:updated_expenses
            }

        case DELETE_EXPENSE:
            let updatedexpenses = state.expenses.filter(item => item.id !== action.id);
            return{
                ...state,
                expenses:updatedexpenses
            }
        default:
            return state
    }
}