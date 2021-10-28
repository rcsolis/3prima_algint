import React from "react";
import SimpleLayout from "../../components/layouts/SimpleLayout";
import TextBreadcumsComponent from "../../components/navigation/TextBreadcumsComponent";
import { useHistory } from "react-router-dom";
import TextCardComponent from "../../components/cards/TextCardComponent";


function UrticariaConInfeccionDiagnosticosPage(){
    const history = useHistory();
    const breadcums = [
        {title: "Inicio", to: "/welcome"}, {title: "Selección", to: "/home"},
        {title: "Urticaria: habones c/s angioedema", to: "/urticaria-cs-angioedema"},
        {title: "Temporalidad", to: "/urticaria-cs-angioedema/temporalidad"},
        {title: "Aguda", to: "/urticaria-cs-angioedema/aguda"},
        {title: "Con Infección", to: "/urticaria-cs-angioedema/aguda/infeccion"},
    ];
    return <SimpleLayout>
        <div className={"w-full"}>
            <TextBreadcumsComponent links={breadcums} />
            <div className={"text-center text-2xl sm:text-3xl m-5 text-secondary font-bold"}>
                <h1>Diagnósticos Diferenciales</h1>
            </div>
            <div className={"text-justify p-4 mb-4"}>
                <p>Existen ciertas enfermedades que pueden parecerse y confundirse con el
                    diagnóstico de Urticaria Aguda, sin embargo, no se trata de la misma condición.</p>
            </div>
            <div className={"grid grid-cols-1 grid-rows-1 md:grid-cols-5 gap-4 mb-4"}>
                <div>
                    <TextCardComponent title={"Dermatitis por contacto"}
                    titleClass={"text-center"}>
                        <button
                            className={"btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/aguda/infeccion/diagnosticos/modal/contacto")}>
                            Ver
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"Dermatitis urticarial"}
                                       titleClass={"text-center"}>
                        <button
                            className={"btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/aguda/infeccion/diagnosticos/modal/urticarial")}>
                            Ver
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"Picadura / mordedura de artrópodos"}
                                       titleClass={"text-center"}>
                        <button
                            className={"btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/aguda/infeccion/diagnosticos/modal/picadura")}>
                            Ver
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"Eritema fijo pigmentario"}
                                       titleClass={"text-center"}>
                        <button
                            className={"btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/aguda/infeccion/diagnosticos/modal/eritema")}>
                            Ver
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"Asociación con otras lesiones"}
                                       titleClass={"text-center"}>
                        <button
                            className={"btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/aguda/infeccion/diagnosticos/modal/lesiones")}>
                            Ver
                        </button>
                    </TextCardComponent>
                </div>
            </div>
            <div>
                <button
                    className={"btn btn-block btn-primary btn-primary-gradient"}
                    onClick={() => history.push("/welcome")}>
                    Inicio del algoritmo
                </button>
            </div>
        </div>
    </SimpleLayout>
}

export default React.memo(UrticariaConInfeccionDiagnosticosPage);

