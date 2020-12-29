
import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPannel from './components/search-panel';
import TodoList from './components/todo-list';
import TodoListItem from './components/todo-list-item';

const App = () => {

	const todoData=[
		{label: 'Drink Coffee', important: false},
		{label: 'Make Awesome App', important: true},
		{label: 'have a lunch' , important: false}
	];

	return (
		<div>
			<AppHeader/>
			<SearchPannel/>
			<TodoList todos={todoData}/>
			<TodoListItem/>
		</div>
	);
};

	
ReactDOM.render(<App/>,document.getElementById('root'));

