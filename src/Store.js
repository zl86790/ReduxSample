import {createStore, combineReducers} from 'redux';

//reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

const countCombineReducer = combineReducers({
	num:counterReducer
})

//store
const store = createStore(countCombineReducer);

export default store;