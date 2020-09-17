import React from "react";
import "./OnGoing.scss";
//component import
import ListCard from "../listCard/ListCard";
import AddTodo from "../addTodos/AddTodo";
import Reminder from "../reminder/Reminder";
const OnGoing = ({ todos, setTodos, popup, setPopUp, popUp3, setPopup3,setReminder,reminder }) => {
	
	return (
		<div className="on-going">
			<div className="on-going-heading">
				<h2>OnGoing Tasks</h2>
			</div>
			<div className="on-going-list">
				{todos.map((todo) => (
					<ListCard
						id={todo.id}
						completed={todo.completed}
						todos={todos}
						todoText={todo.todoText}
						todoTitle={todo.todoTitle}
						setTodos={setTodos}
						key={todo.id}
					/>
				))}
			</div>
			<AddTodo
				popup={popup}
				setPopUp={setPopUp}
				setTodos={setTodos}
				todos={todos}
			/>
			
			<Reminder reminder={reminder} setReminder={setReminder} popUp3={popUp3} setPopup3={setPopup3} />
		</div>
	);
};
export default OnGoing;
