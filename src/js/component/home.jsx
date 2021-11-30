import React, { useState } from "react";

//create your first component
const Home = () => {
	const [listItems, updateListItems] = React.useState([]);
	const inputReference = React.useRef(null);
	const addTodoToList = event => {
		event.preventDefault();
		console.log(inputReference.current.value);
		const value = inputReference.current.value;
		const newArray = listItems.concat([value]);
		updateListItems(newArray);
	};
	//Create or generate a list of todo elements
	const generateToDoItems = () =>
		listItems.map((item, index) => (
			<li key={index}>
				{" "}
				{item}
				<button
					type="button"
					onClick={() =>
						updateListItems(listItems.filter(word => word !== item))
					}>
					X
				</button>
			</li>
		));

	const deleteItem = () => listItems.map;

	return (
		<>
			<div>todos</div>
			<form onSubmit={addTodoToList} className="box">
				<div>
					<input ref={inputReference} />
					<button></button>
				</div>
				{generateToDoItems()}
				<div>{listItems.length} items left</div>
			</form>
		</>
	);
};

export default Home;

// const generateToDoItems2 = () => {
// 	return listItems.map((item, index) => <li key={index}> {item}</li>);
// };
// const generateToDoItems3 = () =>
// 	listItems.map((item, index) => <li key={index}> {item}</li>);
