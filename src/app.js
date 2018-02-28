import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM  from 'react-dom'
import React  from 'react'


const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
  <h1>{value}</h1>
  <button onClick={onIncrement}>+</button>
  <button onClick={onDecrement}>-</button>
  </div>
);

const Counter222 = ({ value, onIncrement, onDecrement }) => (
  <div>
  <h1>{value}</h1>
  <button onClick={onIncrement}>+</button>
  <button onClick={onDecrement}>-</button>
  </div>
);

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
	    <Counter
	      value={store.getState()}
	      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
	      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
	    />
	    <Counter222
	      value={store.getState()}
	      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
	      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
	    />
	</div>,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);