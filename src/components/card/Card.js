import React from "react";
import "./Card.scss";

const Card = ({ title,img,sub }) => {
	return (
		<div className="Card">
			<img src={img} className="Card-img" alt="" />
			<h4 className="Card-title">{title}</h4>
			<p className="Card-sub">{sub} tasks</p>
		</div>
	);
};
export default Card;
