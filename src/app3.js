import { Provider, connect } from 'react-redux';  
import { createStore } from 'redux'
import ReactDOM  from 'react-dom'
import React  from 'react'

/****
 * 
 * 有状态组件
 * 使用了redux
 * 通过构造函数绑定
 * 
 * ***/

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleIncrement = this.handleIncrement.bind(this); 
		this.handleDecrement = this.handleDecrement.bind(this);
	}
	
	handleIncrement(){
		store.dispatch({type: 'INCREMENT'})
	}
	
	handleDecrement(){
		store.dispatch({type: 'DECREMENT'})
	}
	
	render(){
		
		const {value} = this.props;  
	
        return (
	        	<div><h1>{value}</h1>
	        		<button onClick={this.handleIncrement}>+</button>
	        		<button onClick={this.handleDecrement}>-</button>
	        	</div>
        )
    }
}


class Counter222 extends React.Component {
	constructor(props) {
		super(props);
		this.handleIncrement = this.handleIncrement.bind(this); 
		this.handleDecrement = this.handleDecrement.bind(this);
	}
	
	handleIncrement(){
		store.dispatch({type: 'INCREMENT'})
	}
	
	handleDecrement(){
		store.dispatch({type: 'DECREMENT'})
	}
	
	render(){
		
		const {value} = this.props;  
	
        return (
	        	<div><h1>{value}</h1>
	        		<button onClick={this.handleIncrement}>+</button>
	        		<button onClick={this.handleDecrement}>-</button>
	        	</div>
        )
    }
}

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};

const store = createStore(reducer);


const render = () => {
	ReactDOM.render(
	  <div>
	  	  <Counter value={store.getState()}/>
	  	  <Counter222 value={store.getState()}/>
	  </div>,
	  document.getElementById('root')
	);
}

render();
store.subscribe(render);