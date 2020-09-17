import React from "react";
import "./ListCard.scss";

const ListCard = ({ todos, id, completed, setTodos, todoText, todoTitle }) => {
	const deleteHandler = () => {
		setTodos(todos.filter((element) => element.id !== id));
	};

	const completeHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};
	return (
		<div className={`ListCard ${completed ? "completed" : ""}`}>
			<div className="ListCard-circle-element"></div>
			<h3 className="ListCard-heading">{todoTitle}</h3>
			<p className="text-muted ListCard-todo-main">{todoText}</p>
			<div className="ListCard-button">
				<div className="ListCard-button-complete" onClick={completeHandler}>
					<i class="fas fa-check"></i>
				</div>
				<div className="ListCard-button-delete" onClick={deleteHandler}>
					<i class="fas fa-times"></i>
				</div>
			</div>
		</div>
	);
};

export default ListCard;
