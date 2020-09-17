import React, { useState, useEffect } from "react";
import "./UserInfoBar.scss";
import MaleProfile from "../../assets/icons/Male-avatar.svg";
const UserInfoBar = ({ name }) => {
	let [date, setDate] = useState(new Date());
	useEffect(() => {
		var timer = setInterval(() => setDate(new Date()), 1000);
		return function cleanup() {
			clearInterval(timer);
		};
	});
	
	return (
		<div className="User">
			<div className="User-name">
				<h1>Hey {name}</h1>
				<p className="text-muted">{date.toDateString()}</p>
			</div>
			<div className="User-profile">
				<img src={MaleProfile} class="User-profile-img" alt="" />
			</div>
		</div>
	);
};

export default UserInfoBar;
