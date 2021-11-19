import React from "react";
import SimpleLayout from "../../../components/layouts/SimpleLayout";
import TextBreadcumsComponent from "../../../components/navigation/TextBreadcumsComponent";
import { useHistory } from "react-router-dom";
import TextCardComponent from "../../../components/cards/TextCardComponent";


function UrticariaCronicaDiagnosticosPage(){
    const history = useHistory();
    const breadcums = [
        {title: "Inicio", to: "/welcome"}, {title: "Selección", to: "/home"},
        {title: "Urticaria: habones c/s angioedema", to: "/urticaria-cs-angioedema"},
        {title: "Temporalidad", to: "/urticaria-cs-angioedema/temporalidad"},
        {title: "Crónica", to: "/urticaria-cs-angioedema/cronica"},
    ];
    return <SimpleLayout>
        <div className={"w-full"}>
            <TextBreadcumsComponent links={breadcums} />
            <div className={"text-center text-2xl sm:text-3xl m-5 text-secondary font-bold"}>
                <h1>Diagnósticos Diferenciales</h1>
            </div>
            <div className={"text-justify p-4 mb-4"}>
                <p>Existen ciertas enfermedades que pueden parecerse y confundirse con el
                    diagnóstico de Urticaria Crónica, sin embargo, no se trata de la misma condición.</p>
            </div>
            <div className={"grid grid-cols-1 grid-rows-1 md:grid-cols-5 gap-4 mb-4"}>
                <div>
                    <TextCardComponent title={"Síndromes autoinflamatorios"}
                                       titleClass={"text-center"}>
                        <button
                            className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/cronica/diagnosticos/modal/autoinflamatorios")}>
                            Ver
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"Urticaria vasculítica"}
                                       titleClass={"text-center"}>
                        <button
                            className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/cronica/diagnosticos/modal/vasculitica")}>
                            Ver
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"Mastocitosis"}
                                       titleClass={"text-center"}>
                        <button
                            className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/cronica/diagnosticos/modal/sistemica")}>
                            Ver
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"Síndrome de activación de la célula cebada"}
                                       titleClass={"text-center"}>
                        <button
                            className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/cronica/diagnosticos/modal/cebada")}>
                            Ver
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"Síndrome de Schnitzler"}
                                       titleClass={"text-center"}>
                        <button
                            className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/cronica/diagnosticos/modal/schnitzler")}>
                            Ver
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"Síndrome de Gleich"}
                                       titleClass={"text-center"}>
                        <button
                            className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/cronica/diagnosticos/modal/gleich")}>
                            Ver
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"Síndrome de Well"}
                                       titleClass={"text-center"}>
                        <button
                            className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/cronica/diagnosticos/modal/well")}>
                            Ver
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"Pénfigo buloso"}
                                       titleClass={"text-center"}>
                        <button
                            className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/cronica/diagnosticos/modal/buloso")}>
                            Ver
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"Enfermedad de Still"}
                                       titleClass={"text-center"}>
                        <button
                            className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/cronica/diagnosticos/modal/still")}>
                            Ver
                        </button>
                    </TextCardComponent>
                </div>
            </div>
            <div className={"mt-8"}>
                <button
                    className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                    onClick={() => history.push("/welcome")}>
                    Inicio del algoritmo
                </button>
            </div>
        </div>
    </SimpleLayout>
}

export default React.memo(UrticariaCronicaDiagnosticosPage);

