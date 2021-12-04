import React from "react";
import { useHistory } from "react-router-dom";
import SimpleLayout from "../../components/layouts/SimpleLayout";
import TextCardComponent from "../../components/cards/TextCardComponent";
import LogoCompendia from "../../assets/Logo_compedia.png";

const WelcomePage = () => {
	const history = useHistory();

	return (
		<SimpleLayout>
			<div className={"h-full"}>
				<div className={"text-center text-4xl mx-5 my-2"}>
					<h1 className={"text-primary"}>¡Bienvenido(a) Doctor(a)!</h1>
				</div>
				<div className={"text-center text-lg mx-5 my-2"}>
					<p>
						Usted está a punto de navegar a través de un algoritmo que le ayudará en el diagnóstico y
						tratamiento de la urticaria con/sin angioedema.
						<br />
						Este material fue creado por expertos y es de uso exclusivo para profesionales de la salud.
					</p>
				</div>
				<div className={"grid grid-cols-1 sm:grid-cols-2 gap-4 items-start auto-cols-fr auto-rows-fr justify-center content-center"}>
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
					<div className={"col-span-1 sm:col-span-2 justify-self-center self-start"}>
						<div className={"max-w-md"}>
							<div>
								<figure>
									<img src={LogoCompendia}/>
								</figure>
							</div>
							<div className={"text-right text-xs"}>
								<p>
									COMPEDIA agradece el patrocinio de Novartis para la realización de la presente herramienta digital, sin tener injerencia en el contenido.
									Este desarrollo no promueve ninguna actividad que pueda inducir a la prescripción de marcas comerciales.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</SimpleLayout>
	);
};

export default React.memo(WelcomePage);
