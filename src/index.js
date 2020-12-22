import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const TodoList = () => {
	return (
		<ul>
			<li>Lorem ipsum</li>
			<li>Lorem ipsum dolor</li>
		</ul>
	);
};


const el = (
	<div>
		<h1>my TodoList</h1>
		<input placeholder="search"/>
		<TodoList/>
	</div>
);


ReactDOM.render(el,document.getElementById('root'));

// const el=React.createElement('h1',null,'react element');
// ReactDOM.render(<App/>,document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
