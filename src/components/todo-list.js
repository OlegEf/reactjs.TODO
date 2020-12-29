import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = () => {
	return (
		<ul className="list-group-item">
			<li><TodoListItem label="Drink Coffee"/></li>
			<li><TodoListItem label="Build React App"/></li>
		</ul>
	);
};

export default TodoList
