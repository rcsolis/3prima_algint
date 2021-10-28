import React from "react";
import ComplexLayout from "../../../components/layouts/ComplexLayout";
import { useHistory } from "react-router-dom";
import TextBreadcumsComponent from "../../../components/navigation/TextBreadcumsComponent";


function UrticariaCronicaEspontaneaAbordajePage(){
    const history = useHistory();
    const pageSteps = [
        {title:"Urticaria: habones con/sin angioedema", active:true},
        {title:"Crónica", active:true},
        {title: "Espontánea", active: true},
        {title: "Abordaje diagnóstico", active: false}
    ];

    const breadcums = [
        { title: "Inicio", to: "/welcome" }, { title: "Selección", to: "/home" },
        {title:"Urticaria: habones c/s angioedema", to:"/urticaria-cs-angioedema"},
        {title:"Temporalidad", to:"/urticaria-cs-angioedema/temporalidad"},
        {title:"Crónica", to:"/urticaria-cs-angioedema/cronica"},
        {title:"Espontánea", to:"/urticaria-cs-angioedema/cronica/espontanea"},
    ];
    return <ComplexLayout steps={pageSteps}>
        <div className={"w-full mb-4"}>
            <TextBreadcumsComponent links={breadcums}/>
            <div className={"text-center text-2xl sm:text-3xl m-5 text-secondary font-bold"}>
                <h1>Urticaria Crónica Espontánea</h1>
            </div>
            <div className={"text-center text-xl sm:text-2xl m-5 text-secondary font-bold"}>
                <h2>Abordaje Diagnóstico*</h2>
            </div>
            <div className={"text-justify p-4"}>
                <ul className={"list-decimal space-y-5 list-inside"}>
                    <li>
                        Biometría hemática.
                    </li>
                    <li>
                        Velocidad de sedimentación globular o Proteína C reactiva.
                    </li>
                    <li>
                        Niveles séricos de IgE total.
                    </li>
                </ul>
            </div>
            <div className={"text-center text-xl sm:text-2xl m-5 text-secondary font-bold"}>
                <h2>Realizar por especialista</h2>
            </div>
            <div className={"text-justify p-4"}>
                <ul className={"space-y-5 list-inside"}>
                    <li>- Prueba del suero autólogo</li>
                    <li>- Biopsia de piel</li>
                    <li>- T4 libre y TSH</li>
                    <li>- IgG antiperoxidasa tiroides* e IgG antitiroglobulina*</li>
                </ul>
            </div>
            <div className={"grid grid-cols-1 grid-rows-1 sm:grid-cols-2 gap-4"}>
                <div>
                    <button
                        className={"btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema/cronica/espontanea/abordaje/tratamiento")}>
                        Abordaje Terapéutico
                    </button>
                </div>
                <div>
                    <button
                        className={"btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema/cronica/diagnosticos")}>
                        Diagnósticos Diferenciales
                    </button>
                </div>
                <div className={"col-span-1 sm:col-span-2 text-xs text-left italic"}>
                    <p>*Auxiliares diagnósticos comercialmente disponibles para endotipificar</p>
                </div>
            </div>
        </div>
    </ComplexLayout>;

}

export default React.memo(UrticariaCronicaEspontaneaAbordajePage);