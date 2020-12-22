import React from 'react';
import ReactDOM from 'react-dom';

const SearchPanel = () => {
	const searchText= 'Type text'  ;
	const styleColorRed={color:'red'};
	return (
		<input placeholder={searchText} style={styleColorRed}/>
		// <input placeholder="search"/>
	);
};

export defoult SearchPanel