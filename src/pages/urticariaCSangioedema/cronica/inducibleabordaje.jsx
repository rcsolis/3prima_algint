import React from "react";
import ComplexLayout from "../../../components/layouts/ComplexLayout";
import { useHistory } from "react-router-dom";
import TextBreadcumsComponent from "../../../components/navigation/TextBreadcumsComponent";


function UrticariaCronicaInducibleAbordajePage(){
    const history = useHistory();
    const pageSteps = [
        {title:"Urticaria: habones con/sin angioedema", active:true},
        {title:"Crónica", active:true},
        {title: "Inducible", active: true},
        {title: "Abordaje Terapéutico", active: false},
    ];

    const breadcums = [
        { title: "Inicio", to: "/welcome" }, { title: "Selección", to: "/home" },
        {title:"Urticaria: habones c/s angioedema", to:"/urticaria-cs-angioedema"},
        {title:"Temporalidad", to:"/urticaria-cs-angioedema/temporalidad"},
        {title:"Crónica", to:"/urticaria-cs-angioedema/cronica"},
        {title:"Inducible", to:"/urticaria-cs-angioedema/cronica/inducible"},
    ];
    return <ComplexLayout steps={pageSteps}>
        <div className={"w-full mb-4"}>
            <TextBreadcumsComponent links={breadcums}/>
            <div className={"text-center text-2xl sm:text-3xl m-5 text-secondary font-bold"}>
                <h1>Urticaria Crónica Inducible</h1>
            </div>
            <div className={"text-xl sm:text-2xl m-5 text-secondary font-bold"}>
                <h2>Abordaje Terapéutico</h2>
            </div>
            <div className={"text-justify p-4"}>
                <ul className={"list-decimal space-y-5 list-inside"}>
                    <li>
                        En caso correspondiente, evitar desencadenante/exacerbante.
                    </li>
                    <li>Manejo sintomático
                        <p>
                            - Antihistamínicos 2da/nueva generación dosis habitual<br/>
                            - Incrementar hasta dosis habitual x4
                        </p>
                    </li>
                    <li>En caso de exacerbación grave
                        <p>
                            - Ciclo corto de esteroide sistémico (prednisona/prednisolona 1 mg/kg/día)<br/>
                            - No utilizar esteroide de depósito
                        </p>
                    </li>
                </ul>
            </div>
            <div className={"text-xl sm:text-2xl m-5 text-secondary font-bold"}>
                <h2>Manejo por Especialista</h2>
            </div>
            <div className={"text-justify p-4"}>
                <ul className={"list-decimal space-y-5 list-inside"}>
                    <li>Manejo controlador ó mantenimiento
                        <p>
                            - Omalizumab 300 mg cada 4 semanas (Valorar respuesta 4 – 6 meses de utilización)<br/>
                            - ó Ciclosporina 2-3 mg/kg/día (Vigilar efectos adversos)<br/>
                            - ó valorar uso de otro inmunosupresor (Por especialista)
                        </p>
                    </li>
                </ul>
            </div>
            <div className={"text-lg sm:text-xl m-5 text-secondary font-bold"}>
                <h3>Criterios para Referir</h3>
            </div>
            <div className={"text-justify p-4"}>
                <p>Paciente con urticaria poco o mal controlada a pesar de manejo establecido<br/>
                    Paciente con urticaria refractaria a tratamiento</p>
            </div>
            <div className={"grid grid-cols-1 grid-rows-1 sm:grid-cols-2 gap-4"}>
                <div>
                    <button
                        className={"btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema/cronica/cuestionarios")}>
                        Cuestionarios de Apoyo
                    </button>
                </div>
                <div>
                    <button
                        className={"btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/welcome")}>
                        Inicio del Algoritmo
                    </button>
                </div>
                <div className={"col-span-1 sm:col-span-2 text-xs text-left italic"}>
                    <p>*IV (intravenoso).</p>
                </div>
            </div>
        </div>
    </ComplexLayout>;

}

export default React.memo(UrticariaCronicaInducibleAbordajePage);