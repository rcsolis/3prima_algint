import React from "react";
import ComplexLayout from "../../../components/layouts/ComplexLayout";
import { useHistory } from "react-router-dom";
import TextBreadcumsComponent from "../../../components/navigation/TextBreadcumsComponent";
import Dialog from "../../../components/dialog";


function UrticariaCronicaInducibleAbordajePage(){
    const history = useHistory();
    const [openModal, setOpenModal] = React.useState(false);

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
        <Dialog show={openModal} setShow={setOpenModal}/>
        <div className={"w-full mb-4"}>
            <TextBreadcumsComponent links={breadcums}/>
            <div className={"text-center text-2xl sm:text-3xl mx-5 my-2 text-secondary font-bold"}>
                <h1>Urticaria Crónica Inducible</h1>
            </div>
            <div className={"text-xl sm:text-2xl mx-5 my-2 text-secondary font-bold"}>
                <h2>Abordaje Terapéutico</h2>
            </div>
            <div className={"text-justify px-5 py-2"}>
                <ul className={"list-decimal space-y-2 list-inside"}>
                    <li>
                        En caso correspondiente, evitar desencadenante/exacerbante.
                    </li>
                    <li>Manejo sintomático
                        <p>
                            - Antihistamínicos 2da/nueva generación dosis habitual<br/>
                            - Incrementar dosis habitual x2, x3 o máximo x4
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
            <div className={"text-xl sm:text-2xl mx-5 my-2 text-secondary font-bold"}>
                <h2>Manejo por Especialista</h2>
            </div>
            <div className={"text-justify px-5 py-2"}>
                <ol className={"list-decimal space-y-2 list-inside"} start={3}>
                    <li>Manejo controlador/mantenimiento (se agrega al manejo sintomático):
                        <p>
                            - Omalizumab 300 mg cada 4 semanas (Valorar respuesta 4 – 6 meses de utilización)<br/>
                            - ó Ciclosporina 2-3 mg/kg/día (Vigilar efectos adversos)<br/>
                            - ó valorar uso de otro inmunosupresor (Por especialista)
                        </p>
                    </li>
                </ol>
            </div>
            <div className={"text-lg sm:text-xl mx-5 my-2 text-secondary font-bold"}>
                <h3>Criterios para Referir</h3>
            </div>
            <div className={"text-justify px-5 py-2"}>
                <p>Paciente con urticaria poco o mal controlada a pesar de manejo establecido<br/>
                    Paciente con urticaria refractaria a tratamiento</p>
            </div>
            <div className={"grid grid-cols-1 grid-rows-1 sm:grid-cols-2 gap-4"}>
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
                        onClick={() => setOpenModal(true)}>
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