import React from "react";
import { useHistory } from "react-router-dom";
import SimpleLayout from "../../components/layouts/SimpleLayout";
import ImageCardComponent from "../../components/cards/ImageCardComponent";
import Image1 from "../../assets/images/home1.png";
import Image1s2x from "../../assets/images/home1@2x.png";
import Image2 from "../../assets/images/home2.png";
import Image2s2x from "../../assets/images/home2@2x.png";
import TextBreadcumsComponent from "../../components/navigation/TextBreadcumsComponent";

const HomePage = () => {
	const history = useHistory();

	return (
		<SimpleLayout>
			<div>
				<TextBreadcumsComponent links={[{ title: "Inicio", to: "/welcome" }]} />
				<div className={"text-center text-xl m-5"}>
					<p>Seleccione el diagnóstico clínico de su paciente</p>
				</div>
				<div className={"grid grid-cols-1 sm:grid-cols-2 gap-4 items-start justify-around content-center"}>
					<ImageCardComponent imageName={Image1} imageName2={Image1s2x} hasbutton={true}>
						<button
							className={"btn btn-block btn-primary btn-primary-gradient"}
							onClick={() => history.push("/urticaria-cs-angioedema")}>
							Urticaria: habones con/sin angioedema
						</button>
					</ImageCardComponent>
					<ImageCardComponent imageName={Image2} imageName2={Image2s2x} hasbutton={true}>
						<button
							className={"btn btn-block btn-primary btn-primary-gradient"}
							onClick={() => history.push("/urticaria-angioedema")}>
							Urticaria: únicamente angioedema
						</button>
					</ImageCardComponent>
				</div>
			</div>
		</SimpleLayout>
	);
};

export default React.memo(HomePage);
