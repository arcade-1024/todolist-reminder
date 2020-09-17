import React from "react";
import "./AddRecent.scss";
import demoimg from "../../assets/icons/star.svg";

import Modal from "../modal/Modal";
const AddRecent = ({ recentcard, setReacentCard, popup, setPopUp }) => {
	const changePopupHandler = (e) => {
		setPopUp(!popup);
	};
	const submitHandler = (e) => {
		let i = 4;
		e.preventDefault();
		setReacentCard([
			...recentcard,
			{ id: i + 1, title: e.target.categoryName.value, img: demoimg, sub: 0 },
		]);
		changePopupHandler();
		e.target.categoryName.value = "";
	};

	return (
		<div className="add-recent">
			<div className="add-recent-img" onClick={changePopupHandler}>
				<i class="fas fa-plus"></i>
			</div>
			<h4 className="add-recent-title">Add Category</h4>
			<Modal changePopupHandler={changePopupHandler} popup={popup} key='add-recent'>
				<h1>Add Category</h1>
				<form className="add-recent-form" action="" onSubmit={submitHandler}>
					<input
						className="add-recent-form-input"
						type="text"
						name="categoryName"
					/>
				</form>
			</Modal>
		</div>
	);
};
export default AddRecent;
