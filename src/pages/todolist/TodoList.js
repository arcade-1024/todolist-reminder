import React, { useState } from "react";
import uiImg from "../../assets/icons/ribbon-design.svg";
import noteImg from "../../assets/icons/notepad.svg";
import otherImg from "../../assets/icons/puzzle.svg";
import sketchImg from "../../assets/icons/pencil.svg";
import home from "../../assets/icons/home-run.svg";

import pill from "../../assets/icons/pills.svg";
import grocery from "../../assets/icons/groceries.svg";
import assignment from "../../assets/icons/document.svg";
// components import
import UserInfoBar from "../../components/userInfo/UserInfoBar";
import RecentActivity from "../../components/recentActivity/RecentActivity";
import OnGoing from "../../components/onGoing/OnGoing";

const TodoList = ({ name, email }) => {
	const [recentcard, setReacentCard] = useState([
		{ id: 0, title: "All", sub: "50", img: home },
		{ id: 1, title: "UI/UX", sub: "24", img: uiImg },
		{ id: 2, title: "Notes", sub: "5", img: noteImg },
		{ id: 3, title: "Sketch", sub: "10", img: sketchImg },
		{ id: 4, title: "Other", sub: "2", img: otherImg },
	]);

	const [todos, setTodos] = useState([
		{
			id: 0,
			todoTitle: "Software Development",
			todoText:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempore.",
			completed: false,
			category: "UI/UX",
		},
		{
			id: 1,
			todoTitle: "Design New Item",
			todoText:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quis! Laborum, quis! Lorem, ipsum dolor sit",
			completed: false,
			category: "Sketch",
		},
		{
			id: 2,
			todoTitle: "Play COD",
			todoText:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quis!  ",
			completed: false,
			category: "Others",
		},
	]);
	const [reminder, setReminder] = useState([
		{
			id: 1,
			remTitle: "Medicine",
			time: "09:00 am",
			img: pill,
			completed: false,
		},
		{
			id: 2,
			remTitle: "Bring Groceries",
			time: "01:00 am",
			img: grocery,
			completed: false,
		},
		{
			id: 3,
			remTitle: "Assignment",
			time: "12:00 pm",
			img: assignment,
			completed: false,
		},
	]);
	const [popup, setPopUp] = useState(false);
	const [popUp, setPopup] = useState(false);
	const [popUp3, setPopup3] = useState(false);
	return (
		<div className="TodoList">
			<UserInfoBar name={name} />
			<RecentActivity
				recentcard={recentcard}
				setReacentCard={setReacentCard}
				popup={popup}
				setPopUp={setPopUp}
			/>
			<OnGoing
				todos={todos}
				setTodos={setTodos}
				popup={popUp}
				setPopUp={setPopup}
				popUp3={popUp3}
				setPopup3={setPopup3}
				reminder={reminder}
				setReminder={setReminder}
			/>
		</div>
	);
};
export default TodoList;
