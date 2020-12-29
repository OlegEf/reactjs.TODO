
import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPannel from './components/search-panel';
import TodoList from './components/todo-list';
import TodoListItem from './components/todo-list-item';

const App = () => {

	return (
		<div>
			<AppHeader/>
			<SearchPannel/>
			<TodoList/>
			<TodoListItem/>
		</div>
	);
};

	
ReactDOM.render(<App/>,document.getElementById('root'));

