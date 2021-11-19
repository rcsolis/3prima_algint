import React from "react";
import ComplexLayout from "../../../components/layouts/ComplexLayout";
import { useHistory } from "react-router-dom";
import TextBreadcumsComponent from "../../../components/navigation/TextBreadcumsComponent";


function UrticariaCronicaEspontaneaPage(){
    const history = useHistory();
    const pageSteps = [
        {title:"Urticaria: habones con/sin angioedema", active:true},
        {title:"Crónica", active:true},
        {title: "Espontánea", active: false},
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
                <h1>Urticaria Crónica Espontánea</h1>
            </div>
            <div className={"text-justify p-4 space-y-4"}>
                <p>
                    No existe un desencadenante/exacerbante externo identificado.<br/>
                    Se caracteriza por una activación de las células cebadas en piel y mucosas con
                    la consecuente liberación de sustancias vasoactivas (como la histamina) que
                    generan la formación del habón con/sin angioedema.
                </p>
                <p>
                    Puede ser mediado por:<br/>
                    IgE - Autoinmunidad tipo I ó Autoalergia<br/>
                    IgG - Autoinmunidad IIb
                </p>
            </div>
            <div className={"text-xl sm:text-2xl m-5 text-secondary font-bold"}>
                <h2>Recomendación</h2>
            </div>
            <div className={"text-justify p-4"}>
                <ul className={"list-decimal space-y-5 list-inside"}>
                    <li>
                        Interrogar acerca del consumo de medicamentos como AINEs o IECAs*.
                    </li>
                </ul>
            </div>
            <div className={"grid grid-cols-1 grid-rows-1 sm:grid-cols-2 gap-4"}>
                <div>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema/cronica/espontanea/abordaje")}>
                        Abordaje Diagnóstico
                    </button>
                </div>
                <div>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema/cronica/diagnosticos")}>
                        Diagnósticos Diferenciales
                    </button>
                </div>
                <div className={"col-span-1 sm:col-span-2 text-xs text-left italic"}>
                    <p>*AINEs (antiinflamatorios no esteroideos. IECAs (Inhibidores de la enzima convertidora de angiotensina) </p>
                </div>
            </div>
        </div>
    </ComplexLayout>;

}

export default React.memo(UrticariaCronicaEspontaneaPage);