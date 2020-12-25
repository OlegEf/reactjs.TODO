import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPannel from './components/search-panel';
import TodoList from './components/todo-list';
import TodoListItem from './components/todo-list-item';

const App = () => {
	// const isLogin = false;
	// const isLogin = true;
	// const loginBox = <h1>loginBox</h1> ;
	// const wellcomeBox = <h1>wellcomeBox</h1> ;
	// const styleColorRed={color:'red'};
	return (
			// {isLogin?null:loginBox}
		<div>
			<AppHeader/>
			<SearchPannel/>
			<TodoList/>
			<TodoListItem/>

		</div>
	);
};

	
ReactDOM.render(<App/>,document.getElementById('root'));

