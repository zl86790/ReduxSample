import ReactDOM  from 'react-dom'
import React  from 'react'
import Global from './Global.js';

/****
 * 
 * 使用了一个名为Global的公共组件
 * 不使用redux
 * 不能同步render但是可以共享数据
 * 
 * ******/

class Counter extends React.Component {
	
	componentDidMount = () => {
		Global.value = 0;
	}

	state = {
		value: Global.value
	};
	onIncrement = () => {
		Global.value++;
		this.setState({
	      value:Global.value,
	    });
	}

	onDecrement = () => {
		Global.value--;
		this.setState({
	      value:Global.value,
	    });
	}
	
	render() {
		return(
			<div>
			  <h1>{this.state.value}</h1>
			  <button onClick={this.onIncrement}>+</button>
			  <button onClick={this.onDecrement}>-</button>
			</div>
		)
	}
}

class Counter222 extends React.Component {
	state = {
		value: Global.value
	};
	onIncrement = () => {
		Global.value++;
		this.setState({
		    value:Global.value,
		});
	}

	onDecrement = () => {
		Global.value--;
		this.setState({
	      value:Global.value,
	    });
	}
	
	render() {
		return(
			<div>
			  <h1>{this.state.value}</h1>
			  <button onClick={this.onIncrement}>+</button>
			  <button onClick={this.onDecrement}>-</button>
			</div>
		)
	}
	
}


ReactDOM.render(
  <div>
  	  <Counter />
	  <Counter222 />
  </div>,
  document.getElementById('root')
);