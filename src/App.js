import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import TodoList from "./pages/todolist/TodoList";
import LoginPage from "./pages/loginPage/LoginPage";
function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	console.log(name);
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route
						exact={true}
						path="/"
						component={() => (
							<LoginPage setEmail={setEmail} setName={setName} name={name} email={email} />
						)}
					/>

					<Route
						path="/todolist"
						component={() => <TodoList name={name} email={email} />}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
