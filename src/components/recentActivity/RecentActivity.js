import React from "react";
import "./RecentActivity.scss";

//components
import Card from "../card/Card";
import AddRecent from "../addRecent/AddRecent";
const RecentActivity = ({ recentcard, setReacentCard, popup, setPopUp }) => {
	return (
		<div className="Recent">
			<div className="Recent-heading">
				<h2>Task Category</h2>
			</div>

			<div className="Recent-task-container">
				{recentcard.map((recent) => (
					<Card
						key={recent.id}
						title={recent.title}
						img={recent.img}
						sub={recent.sub}
					/>
				))}
				<AddRecent
					recentcard={recentcard}
					setReacentCard={setReacentCard}
					setPopUp={setPopUp}
					popup={popup}
				/>
			</div>
		</div>
	);
};

export default RecentActivity;
