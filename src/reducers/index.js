import {combineReducers} from 'redux';
import settingReducer from './settingReducer';
import expenseReducer from './expenseReducer';

export default combineReducers({
    setting:settingReducer,
    expense:expenseReducer
});