import React from "react";
import "./Modal.scss";
const Modal3 = ({ children, popup, changePopupHandler }) => {
	return (
		<div className={`Modal ${popup ? "d-block" : "d-none"}`}>
			<div className="Modal-main">
				{children}
				<button className="Modal-main-btn" onClick={changePopupHandler}>
					<i class="fas fa-times"></i>
				</button>
			</div>
		</div>
	);
};
export default Modal3;
