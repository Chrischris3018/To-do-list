import React, { useState } from "react";
import "../../styles/index.scss";

const TodoListItem = ({ title, description, id }) => {
	const [isHovering, setIsHovering] = useState(false);

	const hoverIn = () => setIsHovering(true);
	const hoverOut = () => setIsHovering(false);
	const button = isHovering ? <button></button> : null;
	return (
		<li onMouseOver={isHovering} onMouseOut={hoverOut} data-id={id}>
			{title}
			<p>{description}</p>
			{button}
			{isHovering && <button> X </button>}
		</li>
	);
};

<TodoListItem title={} description={} id={} />;

export default TodoListItem;
