import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const TodoList = () => {
	const items = ['Learn React', 'Build Awesome App']; 
	return (
		<ul>
			<li>{items[0]}</li>
			<li>{items[1]}</li>
		</ul>
	);
};

			// <li>Lorem ipsum dolor</li>
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

const App = () => {
	const isLogin = false;
	// const isLogin = true;
	const loginBox = <h1>loginBox</h1> ;
	return (
		<div>
			{isLogin?null:loginBox}
			{loginBox}
			<li>{(new Date()).toString()}</li>
			<AppHeader/>
			<SearchPanel/>
			<TodoList/>
		</div>
	);
};


const el = <App/>;


ReactDOM.render(<App/>,document.getElementById('root'));

// const el=React.createElement('h1',null,'react element');
// ReactDOM.render(<App/>,document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
