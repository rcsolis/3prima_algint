import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import "./styles/base_components.css";
import reportWebVitals from "./reportWebVitals";
import Splash from "./pages/splash";
import HomePage from "./pages/home";
import WelcomePage from "./pages/welcome";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route path={"/welcome"}>
					<WelcomePage />
				</Route>
				<Route path={"/home"}>
					<HomePage />
				</Route>
				<Route exact path={"/"}>
					<Splash />
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
