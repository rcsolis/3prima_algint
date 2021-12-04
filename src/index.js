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
import UrticariaCronicaInduciblePage from "./pages/urticariaCSangioedema/cronica/inducible";
import UrticariaCronicaDiagnosticosPage from "./pages/urticariaCSangioedema/cronica/diagnosticos";
import UrticariaCronicaDiagnosticosAutoinflamatoriosPage from "./pages/modals/cronica/autoinflamatorios";
import UrticariaCronicaDiagnosticosVasculiticaPage from "./pages/modals/cronica/vasculitica";
import UrticariaCronicaDiagnosticosSistemicaPage from "./pages/modals/cronica/sistemica";
import UrticariaCronicaDiagnosticosCebadaPage from "./pages/modals/cronica/cebada";
import UrticariaCronicaDiagnosticosSchnitzlerPage from "./pages/modals/cronica/schnitzler";
import UrticariaCronicaDiagnosticosGleichPage from "./pages/modals/cronica/gleich";
import UrticariaCronicaDiagnosticosWellPage from "./pages/modals/cronica/well";
import UrticariaCronicaDiagnosticosStillPage from "./pages/modals/cronica/still";
import UrticariaCronicaDiagnosticosBulosoPage from "./pages/modals/cronica/buloso";
import UrticariaCronicaInducibleAbordajePage from "./pages/urticariaCSangioedema/cronica/inducibleabordaje";
import UrticariaCronicaCuestionariosPage from "./pages/urticariaCSangioedema/cronica/cuestionarios";
import UrticariaCronicaEspontaneaPage from "./pages/urticariaCSangioedema/cronica/espontanea";
import UrticariaCronicaEspontaneaAbordajePage from "./pages/urticariaCSangioedema/cronica/espontaneaabordaje";
import UrticariaCronicaEspontaneaTratamientoPage from "./pages/urticariaCSangioedema/cronica/espontaneatratamiento";
import UrticariaAngioedemaPage from "./pages/urticariaangioedema";
import UrticariaAngioedemaAbordajePage from "./pages/urticariaangioedema/abordaje";
import UrticariaAngioedemaAbordajeAntihistaminicosPage from "./pages/urticariaangioedema/abordaje/antihistaminicos";
import UrticariaAngioedemaAbordajeSistemicoPage from "./pages/urticariaangioedema/abordaje/sistemico";
import UrticariaAngioedemaDiagnosticoPage from "./pages/urticariaangioedema/diagnostico";
import UrticariaAngioedemaTratamientoPage from "./pages/urticariaangioedema/tratamiento";
import UrticariaAngioedemaCuestionariosPage from "./pages/urticariaangioedema/cuestionarios";
import "@material-tailwind/react/tailwind.css";


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
				<Route exact path={"/urticaria-cs-angioedema/cronica/diagnosticos"}>
					<UrticariaCronicaDiagnosticosPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/cronica/diagnosticos/modal/autoinflamatorios"}>
					<UrticariaCronicaDiagnosticosAutoinflamatoriosPage />
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/cronica/diagnosticos/modal/vasculitica"}>
					<UrticariaCronicaDiagnosticosVasculiticaPage />
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/cronica/diagnosticos/modal/sistemica"}>
					<UrticariaCronicaDiagnosticosSistemicaPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/cronica/diagnosticos/modal/cebada"}>
					<UrticariaCronicaDiagnosticosCebadaPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/cronica/diagnosticos/modal/schnitzler"}>
					<UrticariaCronicaDiagnosticosSchnitzlerPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/cronica/diagnosticos/modal/gleich"}>
					<UrticariaCronicaDiagnosticosGleichPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/cronica/diagnosticos/modal/well"}>
					<UrticariaCronicaDiagnosticosWellPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/cronica/diagnosticos/modal/buloso"}>
					<UrticariaCronicaDiagnosticosBulosoPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/cronica/diagnosticos/modal/still"}>
					<UrticariaCronicaDiagnosticosStillPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/cronica/inducible"}>
					<UrticariaCronicaInduciblePage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/cronica/inducible/abordaje"}>
					<UrticariaCronicaInducibleAbordajePage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/cronica/cuestionarios"}>
					<UrticariaCronicaCuestionariosPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/cronica/espontanea"}>
					<UrticariaCronicaEspontaneaPage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/cronica/espontanea/abordaje"}>
					<UrticariaCronicaEspontaneaAbordajePage/>
				</Route>
				<Route exact path={"/urticaria-cs-angioedema/cronica/espontanea/abordaje/tratamiento"}>
					<UrticariaCronicaEspontaneaTratamientoPage/>
				</Route>
				<Route exact path={"/urticaria-angioedema"}>
					<UrticariaAngioedemaPage />
				</Route>
				<Route exact path={"/urticaria-angioedema/abordaje"}>
					<UrticariaAngioedemaAbordajePage />
				</Route>
				<Route exact path={"/urticaria-angioedema/abordaje/antihistaminicos"}>
					<UrticariaAngioedemaAbordajeAntihistaminicosPage />
				</Route>
				<Route exact path={"/urticaria-angioedema/abordaje/sistemico"}>
					<UrticariaAngioedemaAbordajeSistemicoPage/>
				</Route>
				<Route exact path={"/urticaria-angioedema/diagnostico"}>
					<UrticariaAngioedemaDiagnosticoPage/>
				</Route>
				<Route exact path={"/urticaria-angioedema/tratamiento"}>
					<UrticariaAngioedemaTratamientoPage/>
				</Route>
				<Route exact path={"/urticaria-angioedema/cuestionarios"}>
					<UrticariaAngioedemaCuestionariosPage/>
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
