import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import ReactDOM  from 'react-dom'
import React, { Component } from 'react';  

/**
 * 
 * 有状态组件
 * 使用redux
 * 通过provider和connect绑定
 * 
 * 
 * ***/


class Counter extends Component{  
	render() {  
		const {value,handleIncrement,handleDecrement} = this.props;  
		
	    return (
	        	<div><h1>{value}</h1>
	        		<button onClick={handleIncrement}>+</button>
	        		<button onClick={handleDecrement}>-</button>
	        	</div>
	    )
	}
    
}  

class Counter222 extends Component{  
	render() {  
		const {value,handleIncrement,handleDecrement} = this.props;  
		
	    return (
	        	<div><h1>{value}</h1>
	        		<button onClick={handleIncrement}>+</button>
	        		<button onClick={handleDecrement}>-</button>
	        	</div>
	    )
	}
    
}  

//action  
const handleIncrement = {  
    type:'INCREMENT'  
}  
const handleDecrement = {  
    type:'DECREMENT'  
}  

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

//映射Redux state到组件的属性  
function mapStateToProps(state) {  
    return { value: state.num }  
}  
  
//映射Redux actions到组件的属性  
function mapDispatchToProps(dispatch){  
    return{  
    	handleIncrement:()=>dispatch(handleIncrement),  
    	handleDecrement:()=>dispatch(handleDecrement)  
    }  
}  

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter)  
Counter222 = connect(mapStateToProps, mapDispatchToProps)(Counter222) 

ReactDOM.render(  
    <Provider store={store}>  
	    <div>
	        <Counter />  
	        <Counter222 />  
	    </div>
    </Provider>,  
    document.getElementById('root')  
)  
