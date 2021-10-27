import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Splash = () => {
	const history = useHistory();

	useEffect(() => {
		const timeId = setTimeout(() => {
			history.push("/welcome");
		}, 500000);
		return () => {
			clearTimeout(timeId);
		};
	}, []);
	return (
		<div>
			<div className={"p-20"}>
				<img src={logo} alt={"Algoritmo Interactivo"} />
			</div>
			<div className={"mx-auto p-5"}>
				<Link to={"/welcome"} className={"btn btn-block btn-primary btn-primary-gradient"}>
					Iniciar
				</Link>
			</div>
		</div>
	);
};

export default React.memo(Splash);
