import React from "react";
import ComplexLayout from "../../../components/layouts/ComplexLayout";
import { useHistory } from "react-router-dom";
import TextBreadcumsComponent from "../../../components/navigation/TextBreadcumsComponent";


function UrticariaCronicaInduciblePage(){
        const history = useHistory();
        const pageSteps = [
            {title:"Urticaria: habones con/sin angioedema", active:true},
            {title:"Crónica", active:true},
            {title: "Inducible", active: false},
        ];

        const breadcums = [
            { title: "Inicio", to: "/welcome" }, { title: "Selección", to: "/home" },
            {title:"Urticaria: habones c/s angioedema", to:"/urticaria-cs-angioedema"},
            {title:"Temporalidad", to:"/urticaria-cs-angioedema/temporalidad"},
            {title:"Crónica", to:"/urticaria-cs-angioedema/cronica"},
        ];
        return <ComplexLayout steps={pageSteps}>
            <div className={"w-full mb-4"}>
                <TextBreadcumsComponent links={breadcums}/>
                <div className={"text-center text-2xl sm:text-3xl m-5 text-secondary font-bold"}>
                    <h1>Urticaria Crónica Inducible</h1>
                </div>
                <div className={"text-justify p-4 space-y-4"}>
                    <p>
                        Se caracteriza por la presencia casi inmediata (minutos) de habones y se
                        documentan desencadenantes/exacerbantes como:
                    </p>
                    <p>
                        <strong>Estímulos físicos:</strong> Radiación solar, fricción (dermografismo), temperatura (calor o
                        frío), vibración, presión*.
                    </p>
                    <p>
                        <strong>Estímulos químicos:</strong> Agua "acuagénica", sudor "colinérgica", contacto "urticariogénica".
                    </p>
                </div>
                <div className={"text-xl sm:text-2xl m-5 text-secondary font-bold"}>
                    <h2>Recomendación</h2>
                </div>
                <div className={"text-justify p-4"}>
                    <ul className={"list-decimal space-y-5 list-inside"}>
                        <li>
                            Referir al especialista para realizar prueba de provocación con
                            desencadenantes/exacerbantes y concretar diagnóstico.
                        </li>
                    </ul>
                </div>
                <div className={"grid grid-cols-1 grid-rows-1 sm:grid-cols-3 gap-4"}>
                    <div>
                        <button
                            className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/cronica/cuestionarios")}>
                            Cuestionarios de Apoyo
                        </button>
                    </div>
                    <div>
                        <button
                            className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/cronica/inducible/abordaje")}>
                            Abordaje Terapéutico
                        </button>
                    </div>
                    <div>
                        <button
                            className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/cronica/diagnosticos")}>
                            Diagnósticos Diferenciales
                        </button>
                    </div>
                    <div className={"col-span-1 sm:col-span-3"}>
                        <button
                            className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/cronica")}>
                            Volver
                        </button>
                    </div>
                    <div className={"col-span-1 sm:col-span-2 text-xs text-left italic"}>
                        <p>*Puede presentarse incluso después de horas al estimulo. </p>
                    </div>
                </div>
            </div>
        </ComplexLayout>;

}

export default React.memo(UrticariaCronicaInduciblePage);