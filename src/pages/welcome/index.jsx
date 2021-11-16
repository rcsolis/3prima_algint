import React from "react";
import { useHistory } from "react-router-dom";
import SimpleLayout from "../../components/layouts/SimpleLayout";
import TextCardComponent from "../../components/cards/TextCardComponent";

const WelcomePage = () => {
	const history = useHistory();

	return (
		<SimpleLayout>
			<div>
				<div className={"text-center text-4xl m-5"}>
					<h1 className={"text-primary"}>¡Bienvenido(a) Doctor(a)!</h1>
				</div>
				<div className={"text-center text-lg m-5"}>
					<p>
						Usted está a punto de navegar a través de un algoritmo que le ayudará en el diagnóstico y
						tratamiento de la urticaria con/sin angioedema.
						<br />
						<br />
						Este material fue creado por expertos y es de uso exclusivo para profesionales de la salud.
					</p>
				</div>
				<div className={"grid grid-cols-1 sm:grid-cols-2 gap-4 items-start justify-around content-center"}>
					<TextCardComponent
						title={""}
						textClass={"text-center"}
						text={"Soy profesional de la salud con cédula médica y quiero acceder al recurso."}>
						<button
							className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
							onClick={() => history.push("/home")}>
							Seleccionar
						</button>
					</TextCardComponent>
					<TextCardComponent title={""} textClass={"text-center"} text={"No soy profesional de la salud."}>
						<button
							className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
							onClick={() => history.push("/")}>
							Seleccionar
						</button>
					</TextCardComponent>
				</div>
			</div>
		</SimpleLayout>
	);
};

export default React.memo(WelcomePage);
