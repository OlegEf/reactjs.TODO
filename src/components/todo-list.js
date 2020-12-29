import React from 'react';

// import...

// const TodoListItem = ( { label } ) => {
	// return <span>{ label }</span>;
// };
const TodoList = () => {
const TodoListItem = ( { label } ) => {
	return <span>{ label }</span>;
};
	return (
		<ul className="list-group-item">
			<li><TodoListItem label="Drink Coffee"/></li>
			<li><TodoListItem label="Build React App"/></li>
		</ul>
	);
};

export default TodoList
