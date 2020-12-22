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

const AppHeader = () => {
	return (
		<h1>my TodoList</h1>
	);
};

const SearchPanel = () => {
	return (
		<input placeholder="search"/>
	);
};


const el = (
	<div>
		<AppHeader/>
		<SearchPanel/>
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
