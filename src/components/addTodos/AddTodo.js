import React from "react";
import "./AddTodo.scss";
import Modal2 from "../modal/Modal2";
const AddTodo = ({ popup, setPopUp, todos, setTodos }) => {
	const changePopupHandler = (e) => {
		setPopUp(!popup);
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		let i = 4;

		setTodos([
			...todos,
			{
				id: i + 1,
				todoTitle: e.target.todoTitle.value,
				todoText: e.target.todotext.value,
				completed: false,
				category: e.target.todocategory.value,
			},
		]);
		changePopupHandler();
		e.target.todoTitle.value = "";
		e.target.todotext.value = "";
		e.target.todocategory.value = "";
	};
	return (
		<div className="add-todo">
			<button className="add-todo-btn" onClick={changePopupHandler}>
				<i class="fas fa-plus"></i>
			</button>
			<Modal2 changePopupHandler={changePopupHandler} popup={popup}>
				<h1>Add Todo</h1>
				<div className="add-todo-container">
					<form className="add-todo-form" onSubmit={onSubmitHandler}>
						<input
							className="add-todo-form-input add-todo-form-input-title"
							type="text"
							name="todoTitle"
							placeholder="Todo Title"
						/>
						<input
							className="add-todo-form-input add-todo-form-input-title"
							type="text"
							name="todocategory"
							placeholder="Todo Category"
						/>
						<textarea
							rows="3"
							className="add-todo-form-input dd-todo-form-input-text-area"
							type="text"
							name="todotext"
							placeholder="Text here"
						/>
						<button type="submit" className="add-todo-form-btn">
							Add
						</button>
					</form>
				</div>
			</Modal2>
		</div>
	);
};

export default AddTodo;
