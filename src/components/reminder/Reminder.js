import React, { useState } from "react";
import "./Reminder.scss";
import demoImg from "../../assets/icons/star.svg";

import Timekeeper from "react-timekeeper";
import Modal3 from "../modal/Modal";
import ReminderCard from "../reminderCard/ReminderCard";

const Reminder = ({ setPopup3, popUp3, reminder, setReminder }) => {
	const changePopupHandler = (e) => {
		setPopup3(!popUp3);
	};
	const [time, setTime] = useState("12:00pm");
	const [showTime, setShowTime] = useState(false);
	const addReminder = (e) => {
		e.preventDefault();
		let i = 4;
		setReminder([
			...reminder,
			{
				id: i + 1,
				remTitle: e.target.title.value,
				time: time,
				img: demoImg,
				completed: false,
			},
		]);
		changePopupHandler();
		e.target.title.value = "";
	};
	return (
		<div className="reminder">
			<h2>Reminder</h2>
			<div className="reminder-grid">
				{reminder.map((rem) => (
					<ReminderCard
						title={rem.remTitle}
						time={rem.time}
						img={rem.img}
						completed={rem.completed}
						key={rem.id}
						setReminder={setReminder}
						reminder={reminder}
						id={rem.id}
					/>
				))}
			</div>
			<button className="reminder-btn" onClick={changePopupHandler}>
				<i class="fas fa-bell"></i>
			</button>
			<Modal3 popup={popUp3} changePopupHandler={changePopupHandler}>
				<h1>Add Reminder</h1>
				<form action="" className="reminder-form" onSubmit={addReminder}>
					<input
						type="text"
						name="title"
						className="reminder-form-title"
						placeholder="Reminder Title"
						id=""
					/>
				</form>
				{showTime && (
					<Timekeeper
						time={time}
						onChange={(newTime) => setTime(newTime.formatted12)}
						onDoneClick={() => setShowTime(false)}
						switchToMinuteOnHourSelect
					/>
				)}
				{showTime && <h5 className="reminder-selected-time">Time is {time}</h5>}
				{!showTime && (
					<button
						className="reminder-select-btn"
						onClick={() => setShowTime(true)}
					>
						<i class="fas fa-plus"></i>
					</button>
				)}
			</Modal3>
		</div>
	);
};
export default Reminder;
