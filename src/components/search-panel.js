import React from 'react';

const SearchPannel = () => {
	const searchText= 'Type text';
	const styleColorRed={color:'red'};
	return (
		<div>
			<input placeholder={searchText} style={styleColorRed}/>
			<input placeholder="search"/>

		</div>
	);
};

export default SearchPannel