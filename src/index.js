import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import "./styles/base_components.css";
import reportWebVitals from "./reportWebVitals";
import Splash from "./pages/splash";
import HomePage from "./pages/home";
import WelcomePage from "./pages/welcome";
import LinksPage from "./pages/links";
import PrivacyPage from "./pages/privacy";
import MaterialPage from "./pages/material";
import UrticariaCSangioedemaPage from "./pages/urticariaCSangioedema";
import TemporalidadPage from "./pages/urticariaCSangioedema/temporalidad";
import UrticariaAgudaPage from "./pages/urticariaCSangioedema/aguda";
import UrticariaAgudaModalPage from "./pages/modals/urticariaaguda";
import UrticariaCronicaPage from "./pages/urticariaCSangioedema/cronica";
import UrticariaConAnafilaxiaPage from "./pages/urticariaCSangioedema/aguda/conanafilaxia";
import UrticariaConInfeccionPage from "./pages/urticariaCSangioedema/aguda/coninfeccion";
import UrticariaConInfeccionAbordajePage from "./pages/urticariaCSangioedema/aguda/coninfeccionabordaje";
import UrticariaConInfeccionDiagnosticosPage from "./pages/urticariaCSangioedema/coninfecciondiagnosticos";
import UrticariaAgudaDiagnosticosContactoModalPage from "./pages/modals/diagnosticoscontacto";
import UrticariaAgudaDiagnosticosUrticarialModalPage from "./pages/modals/diagnosticosurticarial";
import UrticariaAgudaDiagnosticosPicaduraModalPage from "./pages/modals/diagnosticospicadura";
import UrticariaAgudaDiagnosticosEritemaModalPage from "./pages/modals/diagnosticoseritema,jsx";
import UrticariaAgudaDiagnosticosLesionesModalPage from "./pages/modals/diagnosticoslesiones";
import UrticariaConAlergiaPage from "./pages/urticariaCSangioedema/aguda/conalergia";
import UrticariaConAlergiaAlimentosPage from "./pages/urticariaCSangioedema/aguda/conalergiaalimentos";
import UrticariaConAlergiaAlimentosAbordajePage from "./pages/urticariaCSangioedema/aguda/conalergiaalimentosabordaje";
import UrticariaConAlergiaMedicamentosPage from "./pages/urticariaCSangioedema/aguda/conalergiamedicamentos";
import UrticariaConAlergiaMedicamentosAbordajePage
	from "./pages/urticariaCSangioedema/aguda/conalergiamedicamentosabordaje";

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
				<Route path={"/links"}>
					<LinksPage />
				</Route>
				<Route path={"/material"}>
					<MaterialPage />
				</Route>
				<Route path={"/privacy"}>
					<PrivacyPage />
				</Route>
				<Route exact path={"/urticaria-cs-angioedema"}>
					<UrticariaCSangioedemaPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/temporalidad"}>
					<TemporalidadPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/aguda"}>
					<UrticariaAgudaPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/aguda/modal"}>
					<UrticariaAgudaModalPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/aguda/anafilaxia"}>
					<UrticariaConAnafilaxiaPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/aguda/infeccion"}>
					<UrticariaConInfeccionPage />
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/aguda/infeccion/abordaje"}>
					<UrticariaConInfeccionAbordajePage />
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/aguda/infeccion/diagnosticos"}>
					<UrticariaConInfeccionDiagnosticosPage />
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/aguda/infeccion/diagnosticos/modal/contacto"}>
					<UrticariaAgudaDiagnosticosContactoModalPage />
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/aguda/infeccion/diagnosticos/modal/urticarial"}>
					<UrticariaAgudaDiagnosticosUrticarialModalPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/aguda/infeccion/diagnosticos/modal/picadura"}>
					<UrticariaAgudaDiagnosticosPicaduraModalPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/aguda/infeccion/diagnosticos/modal/eritema"}>
					<UrticariaAgudaDiagnosticosEritemaModalPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/aguda/infeccion/diagnosticos/modal/lesiones"}>
					<UrticariaAgudaDiagnosticosLesionesModalPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/aguda/alergia"}>
					<UrticariaConAlergiaPage />
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/aguda/alergia/alimentos"}>
					<UrticariaConAlergiaAlimentosPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/aguda/alergia/alimentos/abordaje"}>
					<UrticariaConAlergiaAlimentosAbordajePage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/aguda/alergia/medicamentos"}>
					<UrticariaConAlergiaMedicamentosPage />
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/aguda/alergia/medicamentos/abordaje"}>
					<UrticariaConAlergiaMedicamentosAbordajePage />
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/cronica"}>
					<UrticariaCronicaPage/>
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
