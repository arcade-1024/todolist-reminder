import React /*, { useState } */ from "react";
import { Link/* , Redirect */ } from "react-router-dom";

import "./LoginPage.scss";
const LoginPage = ({ setEmail, setName, name, email }) => {
	// const [redirect, setRedirect] = useState(false);
	const formSubmitHandler = (e) => {
		e.preventDefault();
		setName(e.target.username.value);
		// changeRedirect();
	};
	// const changeRedirect = () => {
	// 	setRedirect(true);
	// };
	// const renderRedirect = () => {
	// 	if (redirect) {
	// 		return <Redirect to="/target" />;
	// 	}
	// };

	return (
		<div className="LoginPage">
			<h1 className="LoginPage-greet">Hello</h1>
			<p>Sign in to Continue</p>
			<form className="LoginPage-form" onSubmit={formSubmitHandler}>
				<div className="LoginPage-icons">
					<i class="fas fa-user"></i>
					<input
						type="text"
						name="username"
						placeholder="Name"
						className="LoginPage-icons-input"
					/>
				</div>
				<div className="LoginPage-icons">
					<i class="fas fa-at"></i>
					<input
						type="text"
						name="email"
						placeholder="Email Address"
						className="LoginPage-icons-input"
					/>
				</div>
				<button className="LoginPage-btn">
					<Link to="/todolist">
						<i class="fas fa-arrow-right"></i>
					</Link>
				</button>
			</form>
			{/* {renderRedirect} */}
		</div>
	);
};
export default LoginPage;
