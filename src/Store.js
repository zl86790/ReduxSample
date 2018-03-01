import {createStore, combineReducers} from 'redux';
import {reducer as CounterReducer} from './CounterReducer.js';


const allCombineReducer = combineReducers({
	num:CounterReducer
})

//store
const store = createStore(allCombineReducer);

export default store;