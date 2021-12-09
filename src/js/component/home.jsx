import React, { useState } from "react";
import ShowButtonHover from "./hoverOver";

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
		inputReference.current.value = "";
	};
	//Create or generate a list of todo elements
	const generateToDoItems = () =>
		listItems.map((item, index) => (
			<div id="listItem" key={index}>
				<hr></hr> {item}
				<button
					type="button"
					onClick={() =>
						updateListItems(listItems.filter(word => word !== item))
					}>
					<i className="fas fa-times"></i>
				</button>
				<hr></hr>
			</div>
		));

	return (
		<>
			<h1 id="title">todos</h1>
			<form onSubmit={addTodoToList} className="box">
				<div>
					<input
						ref={inputReference}
						placeholder="What needs to be done?"
					/>
				</div>
				{generateToDoItems()}
				<div id="itemsLeft">{listItems.length} items left</div>
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
