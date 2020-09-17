import React from "react";
import "./ReminderCard.scss";
const ReminderCard = ({
	id,
	img,
	title,
	time,
	completed,
	reminder,
	setReminder,
}) => {
	const completeHandler = () => {
		setReminder(
			reminder.map((item) => {
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
		<div className={`reminder-card ${completed ? "completed" : ""}`}>
			<div className="reminder-card-div">
				<img src={img} className="reminder-card-div-img" alt="" />
			</div>
			<div className="reminder-card-main">
				<h1 className="reminder-title">{title}</h1>
				<p>
					<i class="far fa-clock mr-2"></i>
					{`${time}`}
				</p>
			</div>
			<div className="reminder-card-complete" onClick={completeHandler}>
				<i class="fas fa-check"></i>
			</div>
		</div>
	);
};
export default ReminderCard;
